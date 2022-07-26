import time
import os

# Iterate over every URL we have.
for name, url in urls.items():
    # Get the output path for the data. This will use the `raw/` directory, so that
    # we don't clutter the root directory.
    file_name = os.path.join('raw', name)
    # Skip downloading files we already have (in case of running this multiple times!)
    if os.path.exists(file_name):
        print(f"Already have {name}!")
        continue
        
    print(f"Downloading {name} ...")
    # Create a local file with the name we generated.
    #
    # Note that we open the file for *writing* in *binary* mode, since PDFs
    # are binary (not textual) data.
    with open(file_name, 'wb') as fh:
        # Request the URL from the server
        result = requests.get(url)
        # Save the raw response in the local file
        fh.write(result.content)
        # Clean up the response object
        result.close()

    # Sleep for a little bit to space out the requests.
    time.sleep(0.25)
    
print("Done!")
