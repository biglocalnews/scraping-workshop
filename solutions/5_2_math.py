# How many total Ellis petitions?
total_petitions = sum(d['petitions'] for d in data)
print("Total Ellis petitions:", total_petitions)

# How many total units have been Ellised?
total_units = sum(d['units'] for d in data)
print("Total Ellised units:", total_units)

# Average units per petition?
print("Average units per petition", total_units / total_petitions)

# How many petitions were filed each year?
petitions_by_year = {}
for d in data:
    if d['year'] not in petitions_by_year:
        petitions_by_year[d['year']] = 0
    petitions_by_year[d['year']] += d['petitions']
    
print("Petitions by year:")
ordered_years = sorted(petitions_by_year.keys())
for year in ordered_years:
    print(f"  {year}: {petitions_by_year[year]}")
