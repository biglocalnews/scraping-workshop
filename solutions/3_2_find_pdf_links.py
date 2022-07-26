table = soup.find('table')
pdf_links = [a for a in table.select('a') if '(pdf)' in a.text]
