To view Project 1 locally:
1. Double-click Start Portfolio.command in the project-publish folder.
2. Open http://127.0.0.1:8000/1/CrimeThree.html in your browser.
3. Keep the terminal window open while viewing. Control-C stops the server.

If macOS does not open the launcher, run this in Terminal:
cd "/Users/shubhankarksharma/Documents/Codex/2026-11-04/in-x20/outputs/project-publish"
python3 -m http.server 8000 --bind 127.0.0.1

Internet is required for the map libraries and OpenStreetMap tiles.
GitHub Pages supplies HTTP hosting, so this launcher is for local viewing only.
