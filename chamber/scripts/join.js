
// Timestamp

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}
// Membership Modals

const buttons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close-modal");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);

        if (modal) {
            modal.showModal();
        }
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});

// Close dialog when clicking outside it

document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();

        const clickedInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickedInside) {
            dialog.close();
        }
    });
});