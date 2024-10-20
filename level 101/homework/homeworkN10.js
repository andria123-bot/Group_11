class Book {
  constructor(title) {
    this.title = title;
  }
}

const books = [
  new Book('Jirafi Joze'),
  new Book('Jirafi Jozes istoria'),
  new Book('Jirafi Jozes biografia')
];

books.forEach(book => console.log(book.title));
