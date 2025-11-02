function handleClick(): void {
  const firstNumber = Number((document.getElementById('firstNumber') as HTMLInputElement).value);
  const secondNumber = Number((document.getElementById('secondNumber') as HTMLInputElement).value);

  const result = add(firstNumber, secondNumber);

  const resultElement = document.getElementById('result') as HTMLParagraphElement;
  resultElement.textContent = `გახსოვდეს: ${result}`;
}

const addButton = document.getElementById('addButton') as HTMLButtonElement;
addButton.addEventListener('click', handleClick);

function add(a: number, b: number): number {
  return a + b;
}
