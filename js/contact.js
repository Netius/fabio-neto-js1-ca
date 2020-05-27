const form = document.querySelector("#contactForm")


const name = document.querySelector("#name");
name.setAttribute("required", true);
let hasNameError = false;


const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
let hasAnswerError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmail = document.querySelector("#invalidEmailError");
let hasEmailError = false;
let hasInvalidEmailError = false;

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
let hasAddressError = false;

const submit = document.querySelector("#submit");
let sucessMsg = document.createElement("div");
sucessMsg.style.display = "none";
sucessMsg.style.color = "green";
sucessMsg.style.marginTop = "15px";
form.appendChild(sucessMsg);

form.addEventListener("submit", formValidation);


function formValidation() {
    event.preventDefault();


    //TODO name required true


    if (lengthValidation(answer.value, 10) === false) {
        answerError.style.display = "block";
        hasAnswerError = false;

    } else {
        answerError.style.display = "none";
        hasAnswerError = true;
    }

    if (lengthValidation(email.value, 6) === false) {
        emailError.style.display = "block";
        hasEmailError = false;
    } else {
        emailError.style.display = "none";
        hasEmailError = true;
    }

    // Email Validation
    const regExpression = /\S+@\S+\.\S+/;
    if (!regExpression.test(email.value)) {
        invalidEmail.style.display = "block";
        hasInvalidEmailError = false;
    } else {
        invalidEmail.style.display = "none";
        hasInvalidEmailError = true;
    }

    if (lengthValidation(address.value, 15) === false) {
        addressError.style.display = "block";
        hasAddressError = false;
    } else {
        addressError.style.display = "none";
        hasAddressError = true;
    }

    // TODO need to fix success after submited
    if (hasAnswerError && hasEmailError && hasInvalidEmailError && hasAddressError) {
        sucessMsg.innerHTML = "Thank you! Your message has been successfully sent."
        sucessMsg.style.display = "block";
        setInterval(function () {
            name.value = "";
            answer.value = "";
            email.value = "";
            address.value = "";
        }, 1000);
    } else {
        sucessMsg.style.display = "none";
    }
}


// Helper function to check the length of input
function lengthValidation(input, validLength) {

    let trimmedInput = input.trim();

    if (trimmedInput.length >= validLength) {
        return true;
    } else {
        return false;
    }


}