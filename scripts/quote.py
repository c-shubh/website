import json
from utils import convert_to_iso

def ask():
  res = {}
  
  text = input("Text: ").strip()
  name = input("Name: ").strip()
  url = input("URL: ").strip()
  date = input("Date: ").strip()

  if text:
    res["text"] = text

  if name and url:
    res["attribution"] = f'[{name}]({url})'
  elif name:
    res["attribution"] = name
  elif url:
    res["attribution"] = url

  if date:
    res["dateAdded"] = convert_to_iso(date)

  print()
  print(f'{json.dumps(res)},')

ask()