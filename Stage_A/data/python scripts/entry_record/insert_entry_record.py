import pandas as pd
from sqlalchemy import create_engine, text
import pandas

DATABASE_URL = "postgresql://maoz3242:324291608@localhost:5432/mydatabase"

engine = create_engine(DATABASE_URL)

#insert to the databse
df_entry_record = pd.read_csv("entryRecord.csv")
df_entry_record.to_sql(name='entryrecord', con=engine, index=False, if_exists='append')
