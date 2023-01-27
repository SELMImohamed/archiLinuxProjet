from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from config import db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=[
        "GET",
        "POST"
    ],
    allow_headers=["*"],
)


# ----------- CLASSES ------------

class Basic_user(BaseModel):
    pseudo: str
    password: str


# --------------------------------
# ------------- API --------------

# ---------- GET

@app.get("/users")
def userlist():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    test = cursor.fetchall()

    return {test}


# ---------- POST

@app.post("/login")
def login(login: Basic_user):
    cursor = db.cursor()
    data = cursor.execute("SELECT * FROM users WHERE userName=%s AND password=%s", (login.pseudo, login.password))
    return print("Authenticated !")


@app.post("/register")
def register(register: Basic_user):
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (userName, password) VALUES (%s, %s)", (register.pseudo, register.password))
    db.commit()
    cursor.close()
    return {"pseudo": register.pseudo, "password": register.pseudo,}
