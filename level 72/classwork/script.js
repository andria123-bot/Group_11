const image = document.getElementById('image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
    image.src = 'car2.jpg';
});

button2.addEventListener('click', () => {
    image.src = 'car3.jpg';
});
