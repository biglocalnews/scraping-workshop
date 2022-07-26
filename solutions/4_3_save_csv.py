import csv

# Our data is currently a Dict that looks like {date: [petitions, units]}.
# To write a CSV, we need a List of rows.
#
# Each row should contain the following columns:
cols = ['year', 'month', 'petitions', 'units']

# Note that we are changing `date` to two columns `(year, month)`. This will
# make the file a bit more flexible, since we could aggregate it by year,
# or look at year-over-year trends.
rows = []
for date, data in ellis_data.items():
    month, year = date.split()
    # Note that all of the values are strings when we create the row.
    # Remember that CSV doesn't store any type information, so a number is
    # stored exactly the same as a string. The only point of trying to convert
    # here would be to help validate the data.
    #
    # If we were using a different file type, we should convert the year,
    # petitions, and units columns to integer types.
    rows.append({
        'year': year,
        'month': month,
        'petitions': data[0],
        'units': data[1],
    })

# Now create a CSV file and write the data.
with open(os.path.join('data', 'ellis.csv'), 'w') as fh:
    writer = csv.DictWriter(fh, cols)
    # First write a "header" row so anyone using the file knows what the
    # columns mean.
    writer.writeheader()
    # Now write each row
    for row in rows:
        writer.writerow(row)

print("Done!")
