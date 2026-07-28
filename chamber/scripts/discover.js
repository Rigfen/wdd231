import { places } from "../data/places.mjs";

const discoverGrid = document.querySelector("#discover-grid");
const visitMessage = document.querySelector("#visit-message");

function displayPlaces() {
    places.forEach((place, index) => {
        const card = document.createElement("article");
        card.classList.add("discover-card", `place-${index + 1}`);

        const title = document.createElement("h2");
        title.textContent = place.name;

        const figure = document.createElement("figure");

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.alt;
        image.width = 300;
        image.height = 200;
        image.loading = "lazy";

        figure.appendChild(image);

        const address = document.createElement("address");
        address.textContent = place.address;

        const description = document.createElement("p");
        description.textContent = place.description;

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Learn More";

        card.append(title, figure, address, description, button);
        discoverGrid.appendChild(card);
    });
}

function displayVisitMessage() {
    const lastVisit = Number(localStorage.getItem("lastVisit"));
    const currentVisit = Date.now();
    let message;

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysBetweenVisits = Math.floor(
            (currentVisit - lastVisit) / millisecondsPerDay
        );

        if (daysBetweenVisits < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysBetweenVisits} days ago.`;
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem("lastVisit", currentVisit);
}

displayPlaces();
displayVisitMessage();