/* ===========================================
   Priyansh ❤️ Vanshika Wedding Invitation
=========================================== */

// ----------------------------
// Invitation Opening
// ----------------------------

document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById("invitationOverlay");
    const openBtn = document.getElementById("openInvitation");

    if (overlay && openBtn) {

        document.body.style.overflow = "hidden";

        openBtn.addEventListener("click", function () {

            overlay.classList.add("hide");

            document.body.style.overflow = "auto";

            setTimeout(function () {

                overlay.remove();

            }, 800);

        });

    }

});

// ----------------------------
// Countdown
// ----------------------------

const weddingDate = new Date("2026-08-23T20:00:00").getTime();

function countdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.querySelector(".countdown-grid").innerHTML =
            "<h2>🎉 We Are Married 🎉</h2>";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

countdown();

setInterval(countdown, 1000);


// ----------------------------
// RSVP
// ----------------------------

const form = document.getElementById("rsvpForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

alert("❤️ Thank you for your RSVP!");

form.reset();

});

}


// ----------------------------
// Smooth Fade
// ----------------------------

const cards = document.querySelectorAll(".event-card,.box,.gallery-placeholder");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});
