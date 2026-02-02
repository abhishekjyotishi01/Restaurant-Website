function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message");

    message.style.color = "green";
    message.textContent = `Thank you ${name}, your table has been booked successfully!`;

    this.reset();
});
