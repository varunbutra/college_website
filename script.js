// Add any interactive functionality here
// For example, you could animate the hands or add event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    // Example: Animate the hands
    // const robotHand = document.querySelector('.robot-hand');
    // const humanHand = document.querySelector('.human-hand');
    // // Animation logic here
});
document.addEventListener("DOMContentLoaded", function () {
    const seeAllEventsButton = document.querySelector(".see-all-events");
    const moreEvents = document.querySelectorAll(".more-events");

    seeAllEventsButton.addEventListener("click", function () {
        moreEvents.forEach((event) => {
            event.style.display = event.style.display === "block" ? "none" : "block";
        });

        if (seeAllEventsButton.textContent === "SEE ALL EVENTS") {
            seeAllEventsButton.textContent = "SEE LESS EVENTS";
        } else {
            seeAllEventsButton.textContent = "SEE ALL EVENTS";
        }
    });
});