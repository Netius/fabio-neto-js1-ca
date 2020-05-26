function changeWords() {
    const paragraph = document.querySelectorAll(".about p:not(:last-child)"); //Selects all P tags but not the last one (its a link)

    paragraph.forEach((phrase) => {
        phrase.innerText = phrase.innerText.replace(/the /g, "banana ")
            .replace(/The /g, "Banana ")
    });

}

setTimeout(changeWords, 3000);