const passwordInput = document.getElementById('password');
const warningMessage = document.getElementById('password-warning');

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length < 8) {
        warningMessage.style.visibility = 'visible';
    } else {
        warningMessage.style.visibility = 'hidden';
    }
});
