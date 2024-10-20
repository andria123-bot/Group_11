document.getElementById('toggleContent').addEventListener('click', function() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      if (box.style.display === 'none') {
          box.style.display = 'block';
      } else {
          box.style.display = 'none';
      }
  });
});
