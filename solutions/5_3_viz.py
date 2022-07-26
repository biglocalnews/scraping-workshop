# To make an actual time series, we'll need to convert (year, month) to a date type.
from datetime import datetime

time_series = []
petitions_series = []
units_series = []
for d in data:
    # `strptime` parses dates in the given format.
    # %B means the full month name, like "January"
    # %Y means the 4-digit year, like "2002."
    date = datetime.strptime(f"{d['month']} {d['year']}", "%B %Y")
    # Store all the values in separate series, for the plotting library
    time_series.append(date)
    petitions_series.append(d['petitions'])
    units_series.append(d['units'])
