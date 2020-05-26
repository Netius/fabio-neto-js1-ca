const form = document.querySelector("#contactForm")
form.addEventListener("submit", formValidation);


const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");





function formValidation() {
    event.preventDefault();

    if (lengthValidation(name.value, 1) === true) {

    }


}



function lengthValidation(input, validLength) {


}