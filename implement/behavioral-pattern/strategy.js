/*
Ví dụ Strategy Pattern với ứng dụng sắp xếp
Chương trình của chúng ta cung cấp nhiều giải thuật sắp xếp khác nhau: quick sort, merge sort, selection sort, heap sort, tim sort...
Tùy theo loại dữ liệu, số lượng phần tử... mà người dùng có thể chọn một giải thuật sắp xếp phù hợp.
*/

class SortStrategy {
	constructor() { }
	sort(items) { }
}

class QuickSort extends SortStrategy {
	constructor() { super() }
	sort(items) { console.log("Quick sort"); }
}

class MergeSort extends SortStrategy {
	constructor() { super() }
	sort(items) { console.log("Merge sort"); }
}

class SelectionSort extends SortStrategy {
	constructor() { super() }
	sort(items) { console.log("Selection sort"); }
}

class SortedList {
	constructor(strategy) {
		this.strategy = strategy;
		this.items = [];
	}

	setSortStrategy(strategy) {
		this.strategy = strategy;
	}

	add(name) {
		this.items.push(name);
	}

	sort() {
		this.strategy.sort(this.items);
	}
}

function StrategyPatternExample() {
	var sortedList = new SortedList();
	sortedList.add("Java Core");
	sortedList.add("Java Design Pattern");
	sortedList.add("Java Library");
	sortedList.add("Java Framework");

	sortedList.setSortStrategy(new QuickSort());
	sortedList.sort();

	sortedList.setSortStrategy(new MergeSort());
	sortedList.sort();
}

StrategyPatternExample();
// Quick sort
// Merge sort