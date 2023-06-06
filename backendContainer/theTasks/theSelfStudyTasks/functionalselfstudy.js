// Parent

class Shapes {
	draw() {
		console.log('Im a Shape!');
	}
}
// Child
class Circle extends Shapes {
	draw() {
		console.log('Im a circle!');
	}
}
// Child

class Square extends Shapes {
	draw() {
		console.log('Im a Square!');
	}
}
// Child

class Triangle extends Shapes {
	draw() {
		console.log('Im a Triangle!');
	}
}

class FactoryShapes {
	square = new Square();
	circle = new Circle();
	triangle = new Triangle();
	getShape(type) {
		switch (type) {
			case 'square':
				return this.square;
			case 'circle':
				return this.circle;
			case 'triangle':
				return this.triangle;
		}
	}
}
const factory = new FactoryShapes();
const circleshape = factory.getShape('circle');
console.log(circleshape);
