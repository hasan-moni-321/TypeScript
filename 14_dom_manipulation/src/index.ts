// selecting query 
const userForm = document.querySelector(".user-form") as HTMLFormElement; 
const userName = document.querySelector("#name") as HTMLInputElement; 
const userEmail = document.querySelector("#email") as HTMLInputElement; 
const userCountry = document.querySelector("#country") as HTMLSelectElement; 
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

// listener
userForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); 

    const data = {
        username: userName.value,
        useremail: userEmail.value,  
        usercountry: userCountry.value, 
        userfeedback: userFeedback.value
    };

    console.log(data); 
})

