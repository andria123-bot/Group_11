const form = document.querySelector('form');
const ul = document.getElementById('items');
const clearAllBtn = document.getElementById('clear-all');

let index = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = form.item.value;
    ul.innerHTML += `<li id=${index}>${item}</li>`;
    index++;

    form.item.value = '';
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

// Clear all items handler
clearAllBtn.addEventListener('click', () => {
    ul.innerHTML = ''; 
    index = 0;
});
