import csv

data = []
with open(os.path.join('data', 'ellis.csv'), 'r') as fh:
    csv_reader = csv.DictReader(fh)
    for line in csv_reader:
        # Convert the numeric columns to integers.
        # This would fail if we were missing data, or the columns were invalid,
        # So be careful about that!
        line['year'] = int(line['year'])
        line['petitions'] = int(line['petitions'])
        line['units'] = int(line['units'])
        data.append(line)

print("Loaded data!")
