from datetime import datetime
from utils import convert_to_iso

def ask():  
  date = input("Date: ").strip()
  title = input("Title: ").strip()
  url = input("URL: ").strip()
  hn = input("HN: ").strip()

  if not date or not title or not url:
    return

  res = f'- `{convert_to_iso(date)}` [{title}]({url})'

  if hn:
    res += f' - [HN discussion]({hn})'

  print()
  print(res)

ask()