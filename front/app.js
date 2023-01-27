import FetchWrapper from "./fetch-wrapper.js";

console.log("Hello from front/app.js");
const API = new FetchWrapper("http://192.168.64.4:8001/")



const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const element = document.querySelector("#list");
console.log("log modification serveur apache");

const fetchUsers = () => {
fetch("http://192.168.64.4:8001/users").then(
    (response) => response.json()
).then((data) => {
    console.log(data);
    const list = [data];
    list.forEach((user) => {
        for(let i = 1; i < user.length; i++){
        element.innerHTML += `<li>${user[i]}</li>`;
        }
    }
    );
});
}




form.addEventListener("submit", (e)  => {
    
    console.log(password.value, username.value, form)
    e.preventDefault();
    API.post("register", {
        pseudo: username.value,
        password: password.value,
    }).then((data) => {
        console.log(data);
        fetchUsers();
    }).catch((err) => {console.error(err)});
    }
);

