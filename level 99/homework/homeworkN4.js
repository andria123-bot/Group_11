class Rectangle {
  #width; // This is a Private property and il not be harrased Bitch - jesse pinkman
  #height; // This is a Private property and il not be harrased Bitch - jesse pinkman

  constructor(width, height) {
      this.setWidth(width);
      this.setHeight(height);
  }

  get area() {
      return this.#width * this.#height;
  }

  setWidth(width) {
      if (width > 0) {
          this.#width = width;
      } else {
          console.error("Width must be a positive number.");
      }
  }

  setHeight(height) {
      if (height > 0) {
          this.#height = height;
      } else {
          console.error("Height must be a positive number.");
      }
  }
}
