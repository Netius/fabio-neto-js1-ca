//Remove loading animation and Display error msg if an error while fetching
function errorMessage() {
    const errorMsg = document.querySelector(".loader");
    errorMsg.classList.remove("loader");
    errorMsg.classList.add("error");
}