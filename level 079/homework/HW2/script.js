const clearButton = document.getElementById('clear-button');
const form = document.getElementById('contact-form');

clearButton.addEventListener('click', function() {
    form.reset();
});