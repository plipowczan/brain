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


if __name__ == "__main__":
    unittest.main()
