const books = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

const bookDescriptions = books.map(book => `${book.title} by ${book.author}`);
