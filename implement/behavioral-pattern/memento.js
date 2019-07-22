/* Ví dụ Memento Pattern với ứng dụng quản lý tọa độ các điểm ảnh
Trong ví dụ bên dưới chúng ta sẽ tách biệt các thành phần của Memento Pattern ra từng class riêng lẻ để tiện quản lý.
Chương trình cho phép chúng ta có thể khôi phục lại dữ liệu tại một thời điểm đã lưu trữ trước đó. */

class Originator {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getX() { return this.x; }
	getY() { return this.y; }
	setX(x) { this.x = x; }
	setY(y) { this.y = y; }

	save() {
		return new Memento(this.x, this.y);
	}

	undo(mem) {
		this.x = mem.getX();
		this.y = mem.getY();
	}

	toString() {
		return "X: " + this.x + ", Y: " + this.y;
	}
}

class Memento {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getX() { return this.x; }
	getY() { return this.y; }
}

class CareTaker {
	constructor() {
		this.savepointStorage = {};
	}
	saveMemento(memento, savedPointName) {
		console.log("Saving state..." + savedPointName);
		this.savepointStorage[savedPointName] = memento;
	}

	getMemento(savedPointName) {
		console.log("Undo at ..." + savedPointName);
		return this.savepointStorage[savedPointName];
	}

	clearSavepoints() {
		console.log("Clearing all save points...");
		this.savepointStorage = {};
	}

}

function MementoPatternExample() {
	var careTaker = new CareTaker();
	var originator = new Originator(5, 10);
	originator.setX(originator.getY() * 51);
	console.log("State initial: " + originator);

	careTaker.saveMemento(originator.save(), "SAVE #1");

	originator.setY(originator.getX() / 22);
	console.log("State changed: " + originator);

	originator.undo(careTaker.getMemento("SAVE #1"));
	console.log("State after undo: " + originator);

	originator.setX(Math.pow(originator.getX(), 3));
	careTaker.saveMemento(originator.save(), "SAVE #2");
	console.log("State changed: " + originator);

	originator.setY(originator.getX() - 30);
	careTaker.saveMemento(originator.save(), "SAVE #3");
	console.log("State saved #3: " + originator);

	originator.setY(originator.getX() / 22);
	careTaker.saveMemento(originator.save(), "SAVE #4");
	console.log("State saved #4: " + originator);

	originator.undo(careTaker.getMemento("SAVE #2"));
	console.log("Retrieving at saved #2: " + originator);
}

MementoPatternExample();

// State initial: X: 510, Y: 10
// Saving state...SAVE #1
// State changed: X: 510, Y: 23.181818181818183
// Undo at ...SAVE #1
// State after undo: X: 510, Y: 10
// Saving state...SAVE #2
// State changed: X: 132651000, Y: 10
// Saving state...SAVE #3
// State saved #3: X: 132651000, Y: 132650970
// Saving state...SAVE #4
// State saved #4: X: 132651000, Y: 6029590.909090909
// Undo at ...SAVE #2
// Retrieving at saved #2: X: 132651000, Y: 10