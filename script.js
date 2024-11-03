function bookTour(tourName) {
    alert(`You have chosen to book the ${tourName}. We will contact you soon!`);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent. Thank you!');
});
