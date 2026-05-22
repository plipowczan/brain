import unittest
from yt_fetch import normalize_url, YTUrlError


class TestNormalizeUrl(unittest.TestCase):
    def test_watch_url(self):
        self.assertEqual(normalize_url("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_short_url(self):
        self.assertEqual(normalize_url("https://youtu.be/dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_short_url_with_timestamp(self):
        self.assertEqual(normalize_url("https://youtu.be/dQw4w9WgXcQ?t=42"), "dQw4w9WgXcQ")

    def test_mobile_url(self):
        self.assertEqual(normalize_url("https://m.youtube.com/watch?v=dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_watch_url_with_extra_params(self):
        self.assertEqual(
            normalize_url("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=ABC&t=5s"),
            "dQw4w9WgXcQ",
        )

    def test_non_youtube_raises(self):
        with self.assertRaises(YTUrlError):
            normalize_url("https://vimeo.com/12345")

    def test_garbage_raises(self):
        with self.assertRaises(YTUrlError):
            normalize_url("not a url")

    def test_short_url_with_trailing_slash(self):
        self.assertEqual(normalize_url("https://youtu.be/dQw4w9WgXcQ/"), "dQw4w9WgXcQ")


from yt_fetch import parse_vtt, VttCue


class TestParseVtt(unittest.TestCase):
    SAMPLE = """WEBVTT
Kind: captions
Language: en

00:00:00.000 --> 00:00:03.500
Hello and welcome to the show.

00:00:03.500 --> 00:00:07.000
Today we're talking about Python.

00:00:07.000 --> 00:00:10.000
<c.colorE5E5E5>Let's dive in.</c>
"""

    def test_returns_cues_with_seconds(self):
        cues = parse_vtt(self.SAMPLE)
        self.assertEqual(len(cues), 3)
        self.assertEqual(cues[0], VttCue(start=0.0, text="Hello and welcome to the show."))
        self.assertEqual(cues[1].start, 3.5)
        self.assertEqual(cues[2].text, "Let's dive in.")  # tags stripped

    def test_empty_vtt_returns_empty(self):
        self.assertEqual(parse_vtt("WEBVTT\n\n"), [])

    def test_format_seconds_to_mmss(self):
        from yt_fetch import format_timestamp
        self.assertEqual(format_timestamp(0), "0:00")
        self.assertEqual(format_timestamp(65), "1:05")
        self.assertEqual(format_timestamp(3725), "1:02:05")


from yt_fetch import slugify, archive_filename


class TestSlugAndPath(unittest.TestCase):
    def test_slugify_basic(self):
        self.assertEqual(slugify("Hello, World!"), "hello-world")

    def test_slugify_unicode(self):
        self.assertEqual(slugify("Café Łódź"), "cafe-lodz")

    def test_slugify_truncates_at_60(self):
        long = "word " * 30
        self.assertLessEqual(len(slugify(long)), 60)

    def test_slugify_strips_edge_dashes(self):
        self.assertEqual(slugify("--- weird ---"), "weird")

    def test_archive_filename(self):
        self.assertEqual(
            archive_filename("2026-05-22", "dQw4w9WgXcQ", "Some Title!"),
            "2026-05-22_yt-dQw4w9WgXcQ_some-title.md",
        )


from yt_fetch import assemble_source_markdown


class TestAssembleSource(unittest.TestCase):
    def test_minimal(self):
        meta = {
            "video_id": "abc12345678",
            "title": "Test",
            "channel": "Chan",
            "uploader_id": "@chan",
            "duration": 65,
            "upload_date": "20260415",
            "language": "en",
            "tags": ["t1", "t2"],
            "categories": ["Education"],
            "chapters": [],
            "webpage_url": "https://www.youtube.com/watch?v=abc12345678",
        }
        cues = [VttCue(0.0, "Line one."), VttCue(3.5, "Line two.")]
        out = assemble_source_markdown(
            meta=meta,
            cues=cues,
            transcription="captions",
            fetched_iso="2026-05-22T14:30:00Z",
        )
        self.assertIn("video_id: abc12345678", out)
        self.assertIn('source_url: https://www.youtube.com/watch?v=abc12345678', out)
        self.assertIn("duration: 65", out)
        self.assertIn('duration_human: "1:05"', out)
        self.assertIn("published: 2026-04-15", out)
        self.assertIn("transcription: captions", out)
        self.assertIn("# Test", out)
        self.assertIn("[0:00] Line one.", out)
        self.assertIn("[0:03] Line two.", out)

    def test_with_chapters(self):
        meta = {
            "video_id": "abc12345678", "title": "T", "channel": "C", "uploader_id": "@c",
            "duration": 200, "upload_date": "20260101", "language": "en",
            "tags": [], "categories": [], "webpage_url": "https://youtu.be/abc12345678",
            "chapters": [
                {"start_time": 0, "title": "Intro"},
                {"start_time": 120, "title": "Main"},
            ],
        }
        out = assemble_source_markdown(meta=meta, cues=[], transcription="captions", fetched_iso="2026-05-22T00:00:00Z")
        self.assertIn("- { start: 0, title: \"Intro\" }", out)
        self.assertIn("- { start: 120, title: \"Main\" }", out)


if __name__ == "__main__":
    unittest.main()
