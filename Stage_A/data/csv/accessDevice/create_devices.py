import csv
import random

device_types = [
    "Turnstile", "Fingerprint Scanner", "Card Reader", "QR Code Scanner",
    "Facial Recognition", "Keypad Access", "Gate Access", "NFC Reader",
    "Barcode Scanner", "Mobile App Scanner"
]

device_id_counter = 1

with open('insert_to_tables\excel\zone.csv', 'r', encoding='utf-8') as zone_file:
    reader = csv.reader(zone_file)
    next(reader)

    with open('accessDevice.csv', 'w', newline='', encoding='utf-8') as device_file:
        writer = csv.writer(device_file)
        writer.writerow(["deviceID", "zoneID", "gymID", "deviceType"])

        for row in reader:
            zone_id = row[0]
            gym_id = row[1]
            num_devices = random.choice([2, 3])

            for _ in range(num_devices):
                current_device_id = device_id_counter
                device_id_counter += 1

                dev_type = random.choice(device_types)
                writer.writerow([current_device_id, zone_id, gym_id, dev_type])

print("accessDevice.csv generated successfully.")
