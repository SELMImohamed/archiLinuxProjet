import FetchWrapper from "./fetch-wrapper.js";

console.log("Hello from front/app.js");
const API = new FetchWrapper("http://192.168.64.4:8000/")


const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const list = document.querySelector("#list");
console.log(list);

API.get("users").then((data) => {
    console.log(data.pseudo);
    const data2 = JSON.parse(data);
    console.log(data2);
    data2.forEach(user=>{
         console.log(user.pseudo)
        list.insertAdjacentHTML("beforeend", `<li>${user.pseudo}</li>`)
        })
     
});



form.addEventListener("submit", (e)  => {
    
    console.log(password.value, username.value, form)
    e.preventDefault();
    API.post("register", {
        pseudo: username.value,
        password: password.value,
    }).then((data) => {
        console.log(data);
    }).catch((err) => {console.error(err)});
    }
);

