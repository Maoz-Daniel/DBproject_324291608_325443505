import csv
import random
from datetime import datetime, timedelta
import os


def read_zones(zone_csv_path):
    valid_zones = set()
    with open(zone_csv_path, 'r', encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            zone_id = row['zoneid']
            gym_id = row['gymid']
            valid_zones.add((zone_id, gym_id))
    return valid_zones


def read_access_devices(access_device_csv_path):
    zone_gym_to_devices = {}
    with open(access_device_csv_path, 'r', encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            zone_id = row['zoneID']
            gym_id = row['gymID']
            device_id = row['deviceID']

            key = (zone_id, gym_id)
            if key not in zone_gym_to_devices:
                zone_gym_to_devices[key] = []
            zone_gym_to_devices[key].append(device_id)
    return zone_gym_to_devices


def generate_random_exit_time(entry_time_str):  
    fmt = "%Y-%m-%d %H:%M:%S"
    entry_dt = datetime.strptime(entry_time_str, fmt)

    min_offset_minutes = 1
    max_offset_minutes = 5 * 60  

    offset = random.randint(min_offset_minutes, max_offset_minutes)
    exit_dt = entry_dt + timedelta(minutes=offset)

    if exit_dt.date() != entry_dt.date():
        exit_dt = exit_dt.replace(hour=23, minute=59, second=0)

    return exit_dt.strftime(fmt)


def create_exit_csv(
        entry_csv_path,
        zone_csv_path,
        access_device_csv_path,
        exit_csv_path
):
    valid_zones = read_zones(zone_csv_path)

    zone_gym_to_devices = read_access_devices(access_device_csv_path)

    with open(entry_csv_path, 'r', encoding='utf-8', newline='') as entry_file, \
            open(exit_csv_path, 'w', encoding='utf-8', newline='') as exit_file:

        reader = csv.DictReader(entry_file)
        fieldnames = ['personid', 'deviceid', 'zoneid', 'gymid', 'exittime']
        writer = csv.DictWriter(exit_file, fieldnames=fieldnames)
        writer.writeheader()

        for row in reader:
            person_id = row['personid']
            zone_id = row['zoneid']
            gym_id = row['gymid']
            entry_time = row['entrytime']

            if (zone_id, gym_id) not in valid_zones:
                continue

            key = (zone_id, gym_id)
            if key not in zone_gym_to_devices or len(zone_gym_to_devices[key]) == 0:
                continue

            possible_devices = zone_gym_to_devices[key]
            chosen_device_id = random.choice(possible_devices)
            exit_time = generate_random_exit_time(entry_time)

            exit_row = {
                'personid': person_id,
                'deviceid': chosen_device_id,
                'zoneid': zone_id,
                'gymid': gym_id,
                'exittime': exit_time
            }
            writer.writerow(exit_row)


if __name__ == "__main__":

    base_dir = os.path.dirname(os.path.dirname(__file__))  # insert_to_tables
    excel_dir = os.path.join(base_dir, 'excel')
    entry_dir = os.path.join(base_dir, 'entry_record')
    exit_dir = os.path.join(base_dir, 'exit_record')

    zone_csv_path = r"../../excel/zone.csv"
    access_device_csv_path = r"../../excel/accessDevice.csv"
    entry_csv_path = r"../entry_record/entryRecord.csv"
    exit_csv_path = r"exitRecord.csv"  

    create_exit_csv(entry_csv_path, zone_csv_path, access_device_csv_path, exit_csv_path)
    print("exitRecord.csv נוצר בהצלחה!")
