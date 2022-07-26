import re

base_url = 'https://sfrb.org'


def fix_url(href):
    """Make sure all links are full URLs, not relative paths."""
    if href.startswith('/'):
        return base_url + href
    return href


def fix_name(text):
    """Derive a sensible name for the PDF from the link caption."""
    # Split the text after the four digit year, since the end is just junk.
    parts = re.split(r'(\d{4})', text)
    # Recombine the month and the year parts from the split result.
    return parts[0] + parts[1] + '.pdf'


urls = {fix_name(a.text): fix_url(a['href']) for a in pdf_links}


print(f"Found {len(urls)} PDFs to download!")
