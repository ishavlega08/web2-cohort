class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  print() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(3, 4, "red");
const area = rect.area();
console.log(area);
rect.print();
