/* ===========================================
   Priyansh ❤️ Vanshika Wedding Website
=========================================== */

// Wedding Date
const weddingDate = new Date("August 23, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.querySelector(".timer").innerHTML =
            "<h2>🎉 We Are Married! 🎉</h2>";

        clearInterval(countdownInterval);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);


/* ===========================================
   Smooth Scroll
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================================
   RSVP Form
=========================================== */

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const guestName = form.querySelector("input").value;

    alert(
        "💖 Thank you " +
        guestName +
        "!\\n\\nYour RSVP has been received."
    );

    form.reset();

});


/* ===========================================
   Fade In On Scroll
=========================================== */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold: 0.15

}

);

document.querySelectorAll(".card,.gallery-placeholder,.rsvp,.venue,.thanks")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ===========================================
   Floating Button Effect
=========================================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px) scale(1)";

    });

});


/* ===========================================
   Console Greeting
=========================================== */

console.log(
`
=======================================

💍 Priyansh ❤️ Vanshika

Wedding Invitation Website

Made with ❤️

=======================================
`
);
