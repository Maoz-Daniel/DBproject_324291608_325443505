DELETE FROM repair
WHERE repairDate < CURRENT_DATE - INTERVAL '1 year'
  AND serviceType ILIKE '%replacement%';
