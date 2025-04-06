import csv
import random

# zoneType
zone_types = [
    "main entry", "weightlifting area", "cardio area", "stretching area", 
    "yoga area", "boxing area", "swimming area", "basketball court", 
    "volleyball court", "soccer field", "track", "indoor cycling area", 
    "climbing wall", "sauna", "jacuzzi", "locker room", "rest area", 
    "group fitness studio", "personal training area", "physical therapy area", 
    "childcare area"
]

# (zoneID=1..10, gymID=1..400)
all_pairs = []
for g in range(1, 401):     # gymID 1..400
    for z in range(1, 11):  # zoneID 1..10
        all_pairs.append((z, g))

selected_pairs = random.sample(all_pairs, 600)

#zone.csv
with open('zone.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(["zoneID", "gymID", "zoneType", "onlyForMembers", "isAccessible"])
    
    for (z_id, g_id) in selected_pairs:
        z_type = random.choice(zone_types)
        
        only_for_members = "TRUE" if random.random() < 0.5 else "FALSE"
        is_accessible    = "TRUE" if random.random() < 0.8 else "FALSE"
        
        writer.writerow([z_id, g_id, z_type, only_for_members, is_accessible])

print("File 'zone.csv' created with 600 unique rows.")
