#!/bin/bash
cd -- "$(dirname -- "$0")" || exit 1
python3 tools/dependencies.py sync && python3 tools/dependencies.py check
result=$?
echo "Dependency maintenance finished with exit code $result."
read -r -p "Press Return to close. "
exit "$result"
