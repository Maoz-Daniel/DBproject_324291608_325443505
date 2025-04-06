import csv
import random
import datetime

NUM_RECORDS = 700 

def random_datetime_in_past_year():
    now = datetime.datetime.now()
    
    days_ago = random.randint(0, 365)
    seconds_ago = random.randint(0, 24*3600)
    return now - datetime.timedelta(days=days_ago, seconds=seconds_ago)

def choose_person_id():
    if random.random() < 0.7:
        return random.randint(1, 400)
    else:
        return random.randint(401, 800)

def main():
    access_devices = []
    with open("insert_to_tables\\excel\\accessDevice.csv", "r", encoding="utf-8") as f_in:
        reader = csv.reader(f_in)
        header = next(reader)  
        for row in reader:
            device_id = row[0]
            zone_id = row[1]
            gym_id = row[2]
            access_devices.append((device_id, zone_id, gym_id))

    with open("entryRecord.csv", "w", newline='', encoding="utf-8") as f_out:
        writer = csv.writer(f_out)
        writer.writerow(["personid", "deviceid", "zoneid", "gymid", "entrytime"])

        seen_pk = set()  
        count = 0

        while count < NUM_RECORDS:
            person_id = choose_person_id()

            device_id, zone_id, gym_id = random.choice(access_devices)

            dt_obj = random_datetime_in_past_year()
            entry_time_str = dt_obj.strftime("%Y-%m-%d %H:%M:%S")

            pk_tuple = (person_id, device_id, zone_id, gym_id, entry_time_str)
            if pk_tuple in seen_pk:
                continue

            seen_pk.add(pk_tuple)

            writer.writerow([person_id, device_id, zone_id, gym_id, entry_time_str])
            count += 1

    print(f"Generated {NUM_RECORDS} records in 'entryRecord.csv'.")

if __name__ == "__main__":
    main()
