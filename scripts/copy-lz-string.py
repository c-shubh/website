import shutil
from pathlib import Path

# Paths
lz_string_src = Path("node_modules/lz-string/libs/lz-string.min.js")
static_dest = Path("build/tools/random-url-redirector/lz-string.min.js")

# Copy the file
try:
    shutil.copy(lz_string_src, static_dest)
    print(f"Copied {lz_string_src} to {static_dest}")
except FileNotFoundError:
    print(f"Source file not found: {lz_string_src}")
except Exception as e:
    print(f"An error occurred: {e}")
