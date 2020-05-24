const queryString = location.search;
const params = new URLSearchParams(queryString);
const cardId = params.get("id");

const corsUrl = "https://noroffcors.herokuapp.com/";
const apiUrl = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/"

async function fetchSingleCard() {
    try {
        const response = await fetch(`${corsUrl}${apiUrl}${cardId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "afb59737femshf5310530e104bffp1abfe3jsnd367d9674f77"
            }
        });
        const singleHearthCard = await response.json();
        createSingleHearthCard(singleHearthCard);

    } catch (error) {
        console.dir(error);
        errorMessage();
    }
}
fetchSingleCard();

//Display error message if any catch error
function errorMessage() {
    const errorMessage = document.createElement("div");
    detailsContainer.appendChild(errorMessage);
    errorMessage.classList.add("error");
}

const detailsContainer = document.querySelector(".detail-container");

function createSingleHearthCard(singleHearthCard) {
    console.log(singleHearthCard)

    //Checks if there is an image
    if (!singleHearthCard[0].img) {
        singleHearthCard[0].img = "https://via.placeholder.com/250?text=NO+IMAGE"
    }
    //Checks if there is a cards description
    if (!singleHearthCard[0].text) {
        singleHearthCard[0].text = "No description provided."
    }

    let detailsHtml = `<img class="details-image" src="${singleHearthCard[0].img}" alt="Title/Name" />
    <div class="detail-details">
        <h1>${singleHearthCard[0].name}</h1>
        <p><b>Card ID: </b><span class="value">${singleHearthCard[0].cardId}</span></p>
        <p><b>Location: </b><span class="value">${singleHearthCard[0].locale}</span></p>
        <p><b>Description: </b><span class="value">${singleHearthCard[0].text}</span></p>`;

    detailsContainer.innerHTML = detailsHtml;

}



