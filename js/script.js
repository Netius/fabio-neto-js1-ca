const corsUrl = "https://noroffcors.herokuapp.com/";
const apiUrl = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Blackrock%2520Mountain"; //Only Blackrock Mountain card set

async function fetchHearthStonesCards() {
    try {
        const response = await fetch(`${corsUrl}${apiUrl}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "afb59737femshf5310530e104bffp1abfe3jsnd367d9674f77"
            }
        });

        const hearthStoneCards = await response.json();
        createHearthStoneCards(hearthStoneCards);
    } catch (error) {
        console.dir(error);
        errorMessage(); //Using function from error.js for both index.html and details.html
    }
}
fetchHearthStonesCards();


//Remove loading animation and Display error msg if an error while fetching
function errorMessage() {
    const errorMsg = document.querySelector(".loader");
    errorMsg.classList.remove("loader");
    errorMsg.classList.add("error");
}


function createHearthStoneCards(hearthStoneCards) {
    console.log(hearthStoneCards);

    const cardsSets = document.querySelector(".results");
    let cardsSetsHtml = "";

    for (let i = 0; i < 40; i++) {

        // Checks if it has an image to display
        let cardsImage = hearthStoneCards[i].img;
        if (!cardsImage) {
            cardsImage = "https://via.placeholder.com/253x383?text=NO+IMAGE"
        }


        //Build up the Hearthstone Cards html
        cardsSetsHtml += `<div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img class="image" src="${cardsImage}" alt="Title/Name" />
            <div class="details">
                <h4 class="name">${hearthStoneCards[i].name}</h4>
                <p><b>Card Set: </b>${hearthStoneCards[i].cardSet} </p>
                <p><b>Class: </b>${hearthStoneCards[i].playerClass}</p>
                <p><b>Type: </b>${hearthStoneCards[i].type}</p>
                <a class="btn btn-primary" href="details.html?id=${hearthStoneCards[i].cardId}">Details</a>
            </div>
        </div>
    </div>
`

    }
    cardsSets.innerHTML = cardsSetsHtml;


}