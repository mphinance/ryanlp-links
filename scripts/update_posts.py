#!/usr/bin/env python3
"""Refresh posts.json from the Substack RSS feed. On any failure, keep the last good file."""
import email.utils
import html
import json
import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

FEED = "https://ryanlepiane.substack.com/feed"
OUT = pathlib.Path(__file__).resolve().parent.parent / "posts.json"
KEEP = 8


def main():
    req = urllib.request.Request(FEED, headers={"User-Agent": "Mozilla/5.0 (link hub post refresher)"})
    try:
        root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
    except Exception as err:
        print(f"feed unavailable, keeping last posts.json: {err}", file=sys.stderr)
        return
    posts = []
    for item in root.findall("./channel/item")[:KEEP]:
        sub = html.unescape(item.findtext("description") or "").strip()
        sub = re.sub(r"^(Weekly Recap )?[Ff]or the week ending", "Week ending", sub)
        posts.append({
            "title": html.unescape(item.findtext("title") or "").strip(),
            "sub": sub,
            "url": item.findtext("link"),
            "date": email.utils.parsedate_to_datetime(item.findtext("pubDate")).date().isoformat(),
        })
    if posts:
        OUT.write_text(json.dumps(posts, indent=1, ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
