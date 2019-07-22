/* Một hệ thống ngân hàng cung cấp các loại tài khoản khác nhau cho khách hàng, chẳng hạn: Checking account và Saving account. Chúng ta có sơ đồ như sau:
													  <<Abstract class>>
															Bank
															  |
														  implements
											                  |
											------------------------------------
											|									|
										TPBank					             VietcomBank
										   |                                    |
							 ----------- create------------           --------create----------------
							|							   |         |                              |
						Checking account	   Saving account    Checking account           Saving account

Với cách thiết kế như vậy, khi hệ thống cần cung cấp thêm một loại tài khoản khác, chúng ta phải tạo class mới cho tất cả các ngân hàng, số lượng class tăng lên rất nhiều.
Bây giờ, chúng ta sẽ sử dụng Bridge Pattern để tái cấu trúc lại hệ thống trên như sau:
                                    <<Abstract class>>                             <<Interface>>
										   Bank                                        Account
										   |                                              |
									   implements                                     implements
										   |                                              |
								 ----------------------                          ----------------------
								|                     |                         |                     |
							TPBank                 VietcomBank             Checking account       Saving account


Với cấu trúc mới như vậy, khi có thêm một loại tài khoản mới, chúng ta đơn chỉ việc thêm vào một implement mới cho Account, các thành phần khác của Bank không bị ảnh hưởng.
Hoặc cần thêm một ngân hàng mới, chẳng hạn VietinBank chúng ta chỉ cần thêm implement mới cho Bank, các thành phần khác cũng không bị ảnh hưởng và số lượng class chỉ tăng lên 1.
Code cho chương trên như sau: */

class Account {
	constructor() { }
	createAccount() { }
}

class CheckingAccount extends Account {
	constructor() { super() }
	createAccount() {
		return "Create Checking Account";
	}
}

class SavingAccount extends Account {
	constructor() { super() }
	createAccount() {
		return "Create Saving Account";
	}
}

class Bank {
	constructor(account) {
		this.account = account;
	}
	createAccount() { }
}

class TPBank extends Bank {
	constructor(account) { super(account) }
	createAccount() {
		console.log('Open your account at TPBank is a ', this.account.createAccount())
	}
}

class VietcomBank extends Bank {
	constructor(account) { super(account) }
	createAccount() {
		console.log('Open your account at VietcomBank is a ', this.account.createAccount())
	}
}

// Client
var vietcomBank = new VietcomBank(new CheckingAccount());
vietcomBank.createAccount();

var tpBank = new TPBank(new SavingAccount());
tpBank.createAccount();

