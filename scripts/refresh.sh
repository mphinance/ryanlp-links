#!/bin/bash
# Daily post refresh. Runs from a machine Substack allows; it returns 403 to GitHub Actions.
set -euo pipefail
cd "$(dirname "$0")/.."
git pull -q --rebase
python3 scripts/update_posts.py
git diff --quiet posts.json && exit 0
git add posts.json
git -c user.name="Michael H" -c user.email="mphinance@gmail.com" commit -q -m "Refresh latest posts"
git push -q
