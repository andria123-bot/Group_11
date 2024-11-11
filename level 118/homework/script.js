class LibraryItem {
  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.isAvailable = true;
  }

  borrowItem() {
    if (this.isAvailable === false) {
      console.log(`${this.title} is already borrowed.`);
    } else {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    }
  }

  returnItem() {
    if (this.isAvailable === true) {
      console.log(`${this.title} is already available.`);
    } else {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    }
  }
}

class Book extends LibraryItem {
  constructor(title, year, author, genre) {
    super(title, year);
    this.author = author;
    this.genre = genre;
  }

  getSummary() {
    return `${this.title} by ${this.author}, ${this.year}. Genre: ${this.genre}`;
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issueNumber, publisher) {
    super(title, year);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  getSummary() {
    return `${this.title} issue ${this.issueNumber}, ${this.year}. Published by: ${this.publisher}`;
  }
}