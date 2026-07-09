const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading member data:", error);
    }
}

function displayMembers(members) {

    members.forEach((member) => {

        const card = document.createElement("section");

        const name = document.createElement("h3");

        const image = document.createElement("img");

        const address = document.createElement("p");

        const phone = document.createElement("p");

        const website = document.createElement("a");

        const membership = document.createElement("p");

        const description = document.createElement("p");

        name.textContent = member.name;

        image.setAttribute("src", `images/${member.images}`);
        image.setAttribute("alt", `${member.name} Logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");

        address.textContent = member.address;

        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.href = member.website;
        website.target = "_blank";

        let level = "";

        switch (member.membership) {
            case 1:
                level = "Member";
                break;

            case 2:
                level = "Silver Member";
                break;

            case 3:
                level = "Gold Member";
                break;
        }

        membership.textContent = level;

        description.textContent = member.description;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        membersContainer.appendChild(card);

    });

}

getMembers();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});