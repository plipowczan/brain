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


if __name__ == "__main__":
    unittest.main()
