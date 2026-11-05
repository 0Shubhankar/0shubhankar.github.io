#!/bin/bash
cd -- "$(dirname -- "$0")" || exit 1
if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required to start the local website."
  read -r -p "Press Return to close. "
  exit 1
fi
printf 'Open http://127.0.0.1:8000/1/CrimeThree.html in your browser.\nKeep this window open. Press Control-C to stop.\n'
python3 -m http.server 8000 --bind 127.0.0.1
