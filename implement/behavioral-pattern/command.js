/*
Ví dụ Command Pattern trong ứng dụng mở tài khoản ngân hàng
Một hệ thống ngân hàng cung cấp ứng dụng cho khách hàng (client) có thể mở (open) hoặc đóng (close) tài khoản trực tuyến.
Hệ thống này được thiết kế theo dạng module, mỗi module sẽ thực hiện một nhiệm vụ riêng của nó, chẳng hạn mở tài khoản (OpenAccount), đóng tài khoản (CloseAccount).
Do hệ thống không biết mỗi module sẽ làm gì, nên khi có yêu cầu client (chẳng hạn clickOpenAccount, clickCloseAccount), nó sẽ đóng gói yêu cầu này và gọi module xử lý.

Ứng dụng của chúng ta bao gồm các lớp xử lý sau:
	Account : là một request class.
	Command : là một interface của Command Pattern, cung cấp phương thức execute().
	OpenAccount, CloseAccount : là các ConcreteCommand, cài đặt các phương thức của Command, sẽ thực hiện các xử lý thực tế.
	BankApp : là một class, hoạt động như Invoker, gọi execute() của ConcreteCommand để thực thi request.
	Client : tiếp nhận request từ phía người dùng, đóng gói request thành ConcreteCommand thích hợp và gọi thực thi các Command.
*/

class Account {
	constructor(name) {
		this.name = name;
	}

	open() {
		console.log(`Account [" ${this.name} "] Opened`);
	}

	close() {
		console.log(`Account [" ${this.name} "] Closed`);
	}
}

class Command {
	constructor() { }
	execute() { }
}

class OpenAccount extends Command {
	constructor(account) {
		super();
		this.account = account;
	}

	execute() {
		this.account.open()
	}
}

class CloseAccount extends Command {
	constructor(account) {
		super();
		this.account = account;
	}

	execute() {
		this.account.close()
	}
}

class BankApp {
	constructor(openAccount, closeAccount) {
		this.openAccount = openAccount;
		this.closeAccount = closeAccount;
	}
	clickOpenAccount() {
		console.log('User click open an account');
		this.openAccount.execute();
	}
	clickCloseAccount() {
		console.log('User click close an account');
		this.closeAccount.execute();
	}
}

function Client() {
	var account = new Account("Nguyen Van A");
	var open = new OpenAccount(account);
	var close = new CloseAccount(account);
	var bankApp = new BankApp(open, close);
	bankApp.clickOpenAccount();
	bankApp.clickCloseAccount();
}

Client();