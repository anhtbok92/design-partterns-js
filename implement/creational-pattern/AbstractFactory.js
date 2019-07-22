// 'use strict';

// class AbstractFactory {
// 	constructor() {
// 	}

// 	createProductA(product) {
// 	}

// 	createProductB(product) {
// 	}
// }

// class ConcreteFactory1 extends AbstractFactory {
// 	constructor() {
// 		super()
// 		console.log("ConcreteFactory1 class created");
// 	}

// 	createProductA(product) {
// 		console.log('ConcreteFactory1 createProductA')
// 		return new ProductA1()
// 	}

// 	createProductB(product) {
// 		console.log('ConcreteFactory1 createProductB')
// 		return new ProductB1()
// 	}
// }

// class ConcreteFactory2 extends AbstractFactory {
// 	constructor() {
// 		super()
// 		console.log("ConcreteFactory2 class created");
// 	}

// 	createProductA(product) {
// 		console.log('ConcreteFactory2 createProductA')
// 		return new ProductA2()
// 	}

// 	createProductB(product) {
// 		console.log('ConcreteFactory2 createProductB')
// 		return new ProductB2()
// 	}
// }

// class AbstractProductA {
// 	constructor() {
// 	}
// }

// class AbstractProductB {
// 	constructor() {
// 	}
// }


// class ProductA1 extends AbstractProductA {
// 	constructor() {
// 		super()
// 		console.log('ProductA1 created')
// 	}
// }

// class ProductA2 extends AbstractProductA {
// 	constructor() {
// 		super()
// 		console.log('ProductA2 created')
// 	}
// }

// class ProductB1 extends AbstractProductB {
// 	constructor() {
// 		super()
// 		console.log('ProductB1 created')
// 	}
// }

// class ProductB2 extends AbstractProductB {
// 	constructor() {
// 		super()
// 		console.log('ProductB2 created')
// 	}
// }

// function init_AbstractFactory() {
// 	var factory1 = new ConcreteFactory1()
// 	var productB1 = factory1.createProductB()

// 	var factory2 = new ConcreteFactory2()
// 	var productA2 = factory2.createProductA()
// }

/* Ví dụ: Một công ty đồ nội thất chuyên sản xuất ghế (Chair): ghế nhựa (PlasticChair) và ghế gỗ (WoodChair).
Với tình hình kinh doanh ngày càng thuận thợi nên công ty quyết định mở rộng thêm sản xuất bàn (Table).
Với lợi thế là đã có kinh nghiệm từ sản xuất ghế nên công ty vẫn giữ chất liệu là nhựa (PlasticTable) và gỗ (WoodTable) cho sản xuất bàn.
Tuy nhiên, quy trình sản xuất ghế/ bàn theo từng chất liệu (MaterialType) là khác nhau.
Nên công ty tách ra là nhà máy (Factory): 1 cho sản xuất vật liệu bằng nhựa (PlasticFactory), 1 cho sản xuất vật liệu bằng gỗ (WoodFactory), nhưng cả 2 đều có thể sản xuất ghế và bàn (FunitureAbstractFactory).
Khi khách hàng cần mua một món đồ nào, khách hàng (Client) chỉ cần đến cửa hàng để mua (FurnitureFactory).
Khi đó ứng với từng hàng hóa và vật liệu sẽ được chuyển về phân xưởng tương ứng để sản xuất (createXXX) ra bàn (Table) và ghế (Chair).*/

// Super Factory Class
class FurnitureFactory {
	constructor() { }
	getFactory(materialType) {
		console.log(materialType)
		switch (materialType) {
			case 'FLASTIC':
				return new FlasticFactory();
			case 'WOOD':
				return new WoodFactory();
			default:
				throw new Error("This furniture is unsupported");
		}
	}
}

// AbstractFactory
class FurnitureAbstractFactory {
	constructor() { }
	createChair() { };
	createTable() { };
}

// ConcreteFactory
// FlasticFactory
class FlasticFactory extends FurnitureAbstractFactory {
	constructor() { super() }

	createChair() {
		return new PlasticChair();
	}

	createTable() {
		return new PlasticTable();
	}
}

// WoodFactory
class WoodFactory extends FurnitureAbstractFactory {
	constructor() { super() }

	createChair() {
		return new WoodChair();
	}

	createTable() {
		return new WoodTable();
	}
}

// AbstractProduct và Product
// Chair
class Chair {
	constructor() { }
	create() { };
}

class PlasticChair extends Chair {
	constructor() { super() }
	create() {
		console.log("Create plastic chair")
	}
}

class WoodChair extends Chair {
	constructor() { super() }
	create() {
		console.log("Create wood chair")
	}
}

// Table
class Table {
	constructor() { }
	create() { };
}

class PlasticTable extends Table {
	constructor() { super() }
	create() {
		console.log("Create plastic table")
	}
}

class WoodTable extends Table {
	constructor() { super() }
	create() {
		console.log("Create wood table")
	}
}

var materialType = { FLASTIC: 'FLASTIC', WOOD: 'WOOD' }

// Client
var factory = new FurnitureFactory().getFactory(materialType.FLASTIC);


var chair = factory.createChair();

chair.create(); // Create plastic chair

var table = factory.createTable();
table.create(); // Create plastic table

