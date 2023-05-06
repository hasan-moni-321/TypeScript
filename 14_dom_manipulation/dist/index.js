"use strict";
// selecting query 
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
// listener
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value
    };
    console.log(data);
});
