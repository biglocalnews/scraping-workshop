# Create a dictionary to store the results of our extraction.
ellis_data = {}

# Iterate over the file names to open the files
for name in urls.keys():
    print(f"Parsing {name} ...")
    reader = PdfFileReader(os.path.join('raw', name))
    # Extract the text layer from the PDF
    text = reader.getPage(0).extract_text()
    # Run the regex pattern to extract the Ellis numbers
    m = ellis_pattern.search(text)
    # Store the results in a dictionary
    ellis_data[name.strip('.pdf')] = m.groups()
    
print(ellis_data)
