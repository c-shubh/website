from datetime import datetime

def from_iso_string(date_str: str):
    return datetime.strptime(date_str, "%Y-%m-%d")

def from_mon_dd(date_str: str):
    # Get the current year
    current_year = datetime.now().year
    # Append the current year to the date string
    full_date_str = f"{date_str} {current_year}"
    # Parse the full date string
    return datetime.strptime(full_date_str, "%b %d %Y")



def convert_to_iso(date_str: str) -> str:
    # try iso date string decode
    try:
        for fn in (from_iso_string, from_mon_dd):
            date_obj = fn(date_str)
            break
    except ValueError:
        raise

    # Format the date object to ISO format
    iso_date = date_obj.strftime("%Y-%m-%d")
    return iso_date
