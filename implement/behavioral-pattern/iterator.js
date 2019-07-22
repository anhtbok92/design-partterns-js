// Tạo Iterator để duyệt qua các item trong một menu.

class Item {
	constructor(title, url) {
		this.title = title;
		this.url = url;
	}

	toMenuString() {
		return `Item [title=${this.title}, url=${this.url}]`;
	}
}

class ItemIterator {
	constructor() { }
	hasNext() { }
	next() { }
}

class Menu {
	constructor(menuItems = []) {
		this.menuItems = menuItems;
	}
	addItem(item) {
		this.menuItems.push(item)
	}
	iterator() {
		return new MenuItemIterator(this.menuItems);
	}
}

class MenuItemIterator extends ItemIterator {
	constructor(menuItems, currentIndex = 0) {
		super();
		this.currentIndex = currentIndex;
		this.menuItems = menuItems;
	}
	hasNext() {
		return this.currentIndex < this.menuItems.length;
	}
	next() {
		return this.menuItems[this.currentIndex++];
	}
}

function Client() {
	var menu = new Menu();
	menu.addItem(new Item("Home", "/home"));
	menu.addItem(new Item("Java", "/java"));
	menu.addItem(new Item("Spring Boot", "/spring-boot"));

	var iterator = menu.iterator();
	while (iterator.hasNext()) {
		var item = iterator.next();
		console.log(item.toMenuString());
	}
}

Client();
// Item [title=Home, url=/home]
// Item [title=Java, url=/java]
// Item [title=Spring Boot, url=/spring-boot]