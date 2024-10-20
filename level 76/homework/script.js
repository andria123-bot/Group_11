document.addEventListener('DOMContentLoaded', function() {
  const uniqueParagraph = document.getElementById('unique-paragraph');
  
  if (uniqueParagraph) {
      uniqueParagraph.textContent = 'This paragraph has been modified!';
      uniqueParagraph.style.color = 'blue';
      uniqueParagraph.style.backgroundColor = 'lightyellow';
      uniqueParagraph.style.padding = '15px';
  } else {
      console.error('Element with id "unique-paragraph" not found.');
  }
});