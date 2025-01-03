class ListBinding {
  constructor(element) {
    this.element = element;
    this.textList = [];
  }

  // makes an <li>text</li> element/tag
  static createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }

  update() {
    // Remove all existing <li> elements/tags
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    // Fill <ul>/<ol> tag with <li>
    for (const text of this.textList) {
      this.element.appendChild(ListBinding.createListItem(text));
    }
  }
  add(text){
    this.textList.push(text);
    this.update();
  }
  remove(index){
    this.textList.splice(index, 1);
    this.update();
  }
}
