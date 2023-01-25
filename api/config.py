from mysql.connector import connect

db = connect(
    host="localhost",
    port="8889",
    user="root",
    password="root",
    database="linux_archi",
)
