const textarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
const maxLength = textarea.getAttribute('maxlength');

textarea.addEventListener('input', function() {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength}/${maxLength} characters`;
});
