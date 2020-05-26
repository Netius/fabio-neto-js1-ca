function changeWords() {
    const paragraph = document.querySelectorAll(".about p:not(:last-child)");
    for (let i = 0; i < paragraph.length; i++) {
        let changedParagraph = "";
        changedParagraph = paragraph[i].innerText.replace(/the /g, "banana ").replace(/The /g, "Banana ");
        paragraph[i].innerHTML = changedParagraph;
    }
}

setTimeout(changeWords, 3000);