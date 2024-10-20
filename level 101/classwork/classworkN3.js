class Shape{
  constructor(name, slides){
    this.name = name;
    this.slides = slides;
  }
}

class Triangle extends Shape{
  constructor(base, height){
    super("Triangle", 3);
    this.base = base;
    this.height = height;
  }
  calculateArea(){
    return 0.5 * this.base * this.height;
  }
}