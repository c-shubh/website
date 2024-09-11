from datetime import datetime

def convert_to_iso(date_str: str) -> str:
    # Get the current year
    current_year = datetime.now().year
    
    # Append the current year to the date string
    full_date_str = f"{date_str} {current_year}"
    
    # Parse the full date string
    date_obj = datetime.strptime(full_date_str, "%b %d %Y")
    
    # Format the date object to ISO format
    iso_date = date_obj.strftime("%Y-%m-%d")
    return iso_date
