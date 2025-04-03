// Countdown Timer for Annual Day
function updateCountdown() {
    const eventDate = new Date("April 20, 2025 10:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("countdown").innerText = `Annual Day in ${days} days, ${hours} hours`;
    } else {
        document.getElementById("countdown").innerText = "The event is happening now!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Registration Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (name.length < 3) {
        message.innerText = "Name must be at least 3 characters.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.innerText = "Enter a valid email.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.innerText = "Registration successful!";
    message.style.color = "green";
});
