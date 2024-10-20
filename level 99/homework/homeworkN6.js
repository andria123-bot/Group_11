class Book {
  #pages; // This is a Private property and il not be harrased Bitch - jesse pinkman
  constructor(title, pages) {
    this.title = title;
    this.#pages = pages;
  }

  getPages() {
    return this.#pages;
  }

  setPages(newPages) {
    if (newPages < 0) {
      console.error("Number of pages cannot be negative.");
    } else {
      this.#pages = newPages;
    }
  }
}
