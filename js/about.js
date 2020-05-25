const paragraph = document.querySelectorAll(".about p");

var wordsObj = {
    the: "banana",
    The: "Banana"
};

for (let i = 0; i < paragraph.length; i++) {
    // console.log(paragraph[i].innerText);

    let varA = paragraph[i].innerText.replace(/the |The /g, " banana ", "Banan+");


    console.log(varA);

}




