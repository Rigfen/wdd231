// ------------------------------
// Read URL Parameters
// ------------------------------

const params = new URLSearchParams(window.location.search);

// ------------------------------
// Display Form Information
// ------------------------------

document.querySelector("#firstname").textContent =
    params.get("firstname") || "Not Provided";

document.querySelector("#lastname").textContent =
    params.get("lastname") || "Not Provided";

document.querySelector("#email").textContent =
    params.get("email") || "Not Provided";

document.querySelector("#phone").textContent =
    params.get("phone") || "Not Provided";

document.querySelector("#organization").textContent =
    params.get("organization") || "Not Provided";

// ------------------------------
// Format Timestamp
// ------------------------------

const timestamp = params.get("timestamp");

if (timestamp) {

    const date = new Date(timestamp);

    document.querySelector("#timestamp").textContent =
        date.toLocaleString();

} else {

    document.querySelector("#timestamp").textContent =
        "Not Available";

}