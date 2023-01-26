from mysql.connector import connect

db = connect(
    host="192.168.64.2",
    port="3306",
    user="root",
    password="root",
    database="linux_archi",
)
