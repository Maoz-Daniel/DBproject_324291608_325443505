import csv
import random
import datetime
import os

print("Current working directory:", os.getcwd())
print("List of files in current directory:", os.listdir('.'))

script_dir = os.path.dirname(os.path.abspath(__file__))  
csv_path = os.path.join(script_dir, "accessDevice.csv")
NUM_REPAIR_RECORDS = 550

PERSON_ID_MIN = 401
PERSON_ID_MAX = 800

SERVICE_TYPES = [
    "Urgent Repair",
    "Maintenance",
    "Upgrade",
    "Inspection",
    "Replacement"
]

SPECIAL_NOTES = [
    "Replaced faulty part",
    "Performed routine checkup",
    "Adjusted alignment",
    "Lubricated moving parts",
    "Found worn cable",
    "Cleared dust accumulation",
    "Upgraded firmware",
    "Ordered replacement parts",
    "Minor fix only",
    "Detailed inspection completed"
]

def random_datetime_in_past_year():
    now = datetime.datetime.now()
    days_ago = random.randint(0, 365)
    delta = datetime.timedelta(days=days_ago, seconds=random.randint(0, 24*3600))
    return now - delta

def main():
    access_devices = []
    with open("accessDevice.csv", "r", encoding="utf-8") as f_in:
        reader = csv.reader(f_in)
        header = next(reader)  
        for row in reader:
            dev_id = row[0]
            z_id   = row[1]
            g_id   = row[2]
            access_devices.append((dev_id, z_id, g_id))

    with open("repair.csv", "w", newline='', encoding="utf-8") as f_out:
        writer = csv.writer(f_out)
        writer.writerow(["personID", "date", "deviceID", "zoneID", "gymID",
                         "specialNotes", "serviceType"])

        #(personID, date, deviceID, zoneID, gymID)
        generated_set = set()
        
        count = 0
        while count < NUM_REPAIR_RECORDS:
            person_id = random.randint(PERSON_ID_MIN, PERSON_ID_MAX)

            dev_id, z_id, g_id = random.choice(access_devices)

            dt_obj = random_datetime_in_past_year()
            dt_str = dt_obj.strftime("%Y-%m-%d %H:%M:%S")

            notes = random.choice(SPECIAL_NOTES)
            service = random.choice(SERVICE_TYPES)

            pk_tuple = (person_id, dt_str, dev_id, z_id, g_id)
            if pk_tuple in generated_set:
                continue  

            generated_set.add(pk_tuple)

            writer.writerow([person_id, dt_str, dev_id, z_id, g_id, notes, service])
            count += 1

    print(f"Generated {NUM_REPAIR_RECORDS} repair records in repair.csv.")

if __name__ == "__main__":
    main()
