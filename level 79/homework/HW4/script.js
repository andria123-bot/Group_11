const colorSelect = document.getElementById('color-select');
const selectedColorDiv = document.getElementById('selected-color');

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    selectedColorDiv.textContent = `Selected color: ${selectedColor}`;
    selectedColorDiv.style.color = selectedColor;
});
