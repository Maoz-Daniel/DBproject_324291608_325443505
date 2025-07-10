from gym_backend.database.connection import get_connection


def run_query_and_fetch_results(query: str):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(query)
        results = cursor.fetchall()

        print(f"✅ Query executed successfully. Results:")
        for row in results:
            print(row)

        return results

    except Exception as e:
        print(f"❌ Error executing query: {e}")
        return []

    finally:
        cursor.close()
        conn.close()


def run_gym_entry_zone_summary():
    return run_query_and_fetch_results("""
        SELECT 
            g.gymID,
            g.name AS gymName,
            g.gymLocation AS city,
            COUNT(*) AS numberOfEntries,
            (
                SELECT COUNT(*) 
                FROM zone z2 
                WHERE z2.gymID = g.gymID
            ) AS numberOfZones
        FROM 
            entryRecord e
        JOIN 
            gym g ON e.gymID = g.gymID
        GROUP BY 
            g.gymID, g.name, g.gymLocation
        HAVING 
            (
                SELECT COUNT(*) 
                FROM zone z2 
                WHERE z2.gymID = g.gymID
            ) > 3
        ORDER BY 
            numberOfEntries DESC
    """)


def run_active_members_no_entry_since():
    return run_query_and_fetch_results("""
        SELECT p.firstName, p.lastName, p.dateOfBirth, m.membershipType
        FROM 
            member m
        JOIN 
            person p ON m.personID = p.personID
        WHERE 
            m.isActive = TRUE
            AND NOT EXISTS (
                SELECT 1
                FROM entryRecord e
                WHERE e.personID = m.personID
                  AND e.entryTime >= '2025-01-03 00:00:00'
            )
    """)


def run_monthly_entry_summary():
    return run_query_and_fetch_results("""
        SELECT g.gymID,
            g.name AS gymName,
            g.gymLocation AS city,
            EXTRACT(YEAR FROM e.entryTime) AS entryYear,
            EXTRACT(MONTH FROM e.entryTime) AS entryMonth,
            COUNT(*) AS numberOfEntries
        FROM 
            entryRecord e
        JOIN 
            gym g ON e.gymID = g.gymID
        WHERE 
            EXTRACT(YEAR FROM e.entryTime) = 2025
        GROUP BY 
            g.gymID, g.name, g.gymLocation, entryYear, entryMonth
        ORDER BY 
            g.gymID, entryYear, entryMonth
    """)


def run_avg_stay_per_zone_in_gym_184():
    return run_query_and_fetch_results("""
        SELECT 
            z.zoneID,
            z.zoneType,
            ROUND(AVG(EXTRACT(EPOCH FROM (xr.exitTime - er.entryTime)) / 60), 2) AS avgStayMinutes
        FROM 
            entryRecord er
        NATURAL JOIN 
            exitRecord xr 
        NATURAL JOIN
            zone z 
        WHERE 
            er.gymID = 184
            AND xr.exitTime IS NOT NULL
        GROUP BY 
            z.zoneID, z.zoneType
        ORDER BY 
            avgStayMinutes DESC
    """)


def run_gyms_with_more_than_5_repairs():
    return run_query_and_fetch_results("""
        SELECT 
            g.name AS gymName,
            g.gymLocation AS city,
            COUNT(*) AS numberOfRepairs
        FROM 
            repair r
        NATURAL JOIN 
            gym g 
        GROUP BY 
            g.gymID, g.name, g.gymLocation
        HAVING 
            COUNT(*) > 5
        ORDER BY 
            numberOfRepairs DESC
    """)


def run_gyms_with_inaccessible_zones_and_entries():
    return run_query_and_fetch_results("""
        (
            SELECT 
                g.gymID,
                g.name,
                g.gymLocation
            FROM 
                zone z
            NATURAL JOIN gym g
            WHERE 
                z.isAccessible = FALSE
            GROUP BY 
                g.gymID, g.name, g.gymLocation
            HAVING 
                COUNT(*) >= 2
        )
        INTERSECT
        (
            SELECT 
                g.gymID,
                g.name,
                g.gymLocation
            FROM 
                entryRecord e
            NATURAL JOIN gym g
            GROUP BY 
                g.gymID, g.name, g.gymLocation
            HAVING 
                COUNT(*) > 2
        )
        ORDER BY 
            name
    """)


def run_entry_exit_in_busy_zones():
    return run_query_and_fetch_results("""
        SELECT 
            g.name AS gymName,
            g.gymLocation AS city,
            z.zoneType AS zoneName,
            p.firstName,
            p.lastName,
            er.entryTime,
            xr.exitTime
        FROM 
            entryRecord er
        NATURAL JOIN exitRecord xr
        NATURAL JOIN zone z
        NATURAL JOIN gym g
        NATURAL JOIN person p
        WHERE 
            er.zoneID IN (
                SELECT zoneID
                FROM entryRecord
                GROUP BY zoneID
                HAVING COUNT(*) > 80
            )
        ORDER BY 
            g.name, p.lastName, p.firstName, er.entryTime
    """)


def run_devices_with_below_avg_exits():
    return run_query_and_fetch_results("""
        SELECT 
            d.deviceType,
            COUNT(*) AS numberOfExits
        FROM 
            exitRecord xr
        JOIN 
            accessDevice d ON xr.deviceID = d.deviceID
        GROUP BY 
            d.deviceType
        HAVING 
            COUNT(*) < (
                SELECT AVG(device_exit_counts.exitCount)
                FROM (
                    SELECT COUNT(*) AS exitCount
                    FROM exitRecord xr2
                    JOIN accessDevice d2 ON xr2.deviceID = d2.deviceID
                    GROUP BY d2.deviceType
                ) AS device_exit_counts
            )
        ORDER BY 
            numberOfExits ASC
    """)
