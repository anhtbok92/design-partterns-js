// 'use strict';

// class Product {
// 	constructor() { }
// }

// class ConcreteProduct extends Product {
// 	constructor() {
// 		super()
// 		console.log('ConcreteProduct created')
// 	}
// }

// class Creator {
// 	constructor() { }

// 	factoryMethod() { }

// 	anOperation() {
// 		console.log("AnOperation()")
// 		this.product = this.factoryMethod()
// 		console.log(this.product instanceof ConcreteProduct)
// 	}
// }

// class ConcreteCreator extends Creator {

// 	constructor() {
// 		super()
// 		console.log('ConcreteCreator created')
// 	}

// 	factoryMethod() {
// 		return new ConcreteProduct();
// 	}
// }

// (() => {
// 	var factory = new ConcreteCreator()
// 	factory.anOperation()
// })();

// Ví dụ: Tất cả hệ thống ngân hàng có cung cấp API để truy cập đến hệ thống của họ.
// Team được giao nhiệm vụ thiết kế một API để client có thể sử dụng dịch vụ của một ngân hàng bất kỳ.
//  Hiện tại, phía client chỉ cần sử dụng dịch vụ của 2 ngân hàng là VietcomBank và TPBank.
// Tuy nhiên để dễ mở rộng sau này, và phía client mong muốn không cần phải thay đổi code của họ khi cần sử dụng thêm dịch vụ của ngân hàng khác.
//  Với yêu cầu như vậy, chúng ta có thể sử dụng một Pattern phù hợp là Factory Method Pattern.

class Bank {
	constructor() { }
	getBankName() { }
}

class TPBank extends Bank {

	constructor() { super() }

	getBankName() {
		return "TPBank";
	}
}

class VietcomBank extends Bank {
	constructor() { super() }

	getBankName() {
		return "VietcomBank";
	}
}

class BankFactory {
	constructor() { }

	getBank(bankType) {
		switch (bankType) {
			case 'TPBANK':
				return new TPBank();
			case 'VIETCOMBANK':
				return new VietcomBank();
			default:
				return new Error("This bank type is unsupported");
		}
	}
}

var bank = new BankFactory().getBank('VIETCOMBANK');
console.log(bank.getBankName());
