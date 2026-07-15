const spotlightContainer = document.querySelector("#spotlight-cards");
const url = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        displaySpotlights(members);

    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {

    // Only Gold (3) and Silver (2)
    const qualified = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    // Shuffle the array
    qualified.sort(() => Math.random() - 0.5);

    // Randomly choose either 2 or 3 members
    const numberToDisplay = Math.random() < 0.5 ? 2 : 3;

    const selected = qualified.slice(0, numberToDisplay);

    selected.forEach(member => {

        const card = document.createElement("section");

        let level = "";

        if (member.membership === 3) {
            level = "Gold Member";
        } else {
            level = "Silver Member";
        }

        card.innerHTML = `
            <img src="images/${member.images}"
                 alt="${member.name} Logo"
                 width="150"
                 height="150"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${level}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);

    });

}

getSpotlights();