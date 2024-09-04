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
// console.log(area);
// rect.print();

// Date 
const date = new Date();
// console.log(date.toISOString());

// Map 
const map = new Map();
map.set("name", "Ishav");
map.set("age", 21);
console.log(map.get("name"));
console.log(map.get("age"));
