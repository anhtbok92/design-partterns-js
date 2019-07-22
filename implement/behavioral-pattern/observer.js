/*
Ví dụ Observer Pattern với ứng dụng Tracking thao tác một Account
Giả sử hệ thống của chúng ta cần theo dõi về tài khoản của người dùng.
Mọi thao tác của người dùng đều cần được ghi log lại, sẽ thực hiện gửi mail thông báo khi tài khoản hết hạn, thực hiện chặn người dùng nếu truy cập không hợp lệ, …
*/

'use strict';

class Subject {
	constructor() { }
	attach(observer) { }
	detach(observer) { }
	notifyAllObserver() { }
}

const LoginStatus = { 'SUCCESS': 'SUCCESS', 'FAILURE': 'FAILURE', 'INVALID': 'INVALID', 'EXPIRED': 'EXPIRED' };

class User {
	constructor(email, ip, status) {
		this.email = email;
		this.ip = ip;
		this.status = status;
	}

	getStatus() {
		return this.status;
	}

	setStatus(status) {
		this.status = status;
	}

	getEmail() {
		return this.email;
	}

	setEmail(email) {
		this.email = email;
	}

	getIp() {
		return this.ip;
	}
	setIp(ip) {
		this.ip = ip;
	}
}

class AccountService extends Subject {
	constructor(email, ip) {
		super();
		this.user = new User();
		this.user.setEmail(email);
		this.user.setIp(ip);
		this.observers = [];
	}

	attach(observer) {
		if (!this.observers.includes(observer))
			this.observers.push(observer);
	}

	detach(observer) {
		let index = this.observers.indexOf(observer);
		if (index > -1) {
			this.observers.slice(index, 1);
		}
	}

	notifyAllObserver() {
		for (let observer of this.observers) {
			observer.update(this.user);
		}
	}

	changeStatus(status) {
		this.user.setStatus(status);
		console.log("Status is changed");
		this.notifyAllObserver();
	}

	login() {
		if (!this.isValidIP()) {
			this.user.setStatus(LoginStatus.INVALID);
		} else if (this.isValidEmail()) {
			this.user.setStatus(LoginStatus.SUCCESS);
		} else {
			this.user.setStatus(LoginStatus.FAILURE);
		}

		console.log("Login is handled");
		this.notifyAllObserver();
	}

	isValidIP() {
		return "127.0.0.1" == this.user.getIp();
	}

	isValidEmail() {
		return "contact@gpcoder.com" == this.user.getEmail();
	}
}

class Observer {
	constructor() { }
	update(user) { }
}

class Logger extends Observer {
	constructor() {
		super()
	}
	update(user) {
		console.log("Logger: " + JSON.stringify(user));
	}
}

class Mailer extends Observer {
	constructor() {
		super()
	}
	update(user) {
		if (user.getStatus() == LoginStatus.EXPIRED) {
			console.log("Mailer: User " + user.getEmail() + " is expired. An email was sent!");
		}
	}
}

class Protector extends Observer {
	constructor() {
		super()
	}
	update(user) {
		if (user.getStatus() == LoginStatus.INVALID) {
			console.log("Protector: User " + user.getEmail() + " is invalid. " + "IP " + user.getIp() + " is blocked");
		}
	}
}

function createAccount(email, ip) {
	var account = new AccountService(email, ip);
	account.attach(new Logger());
	account.attach(new Mailer());
	account.attach(new Protector());
	return account;
}

function ObserverPatternExample() {
	var account1 = createAccount("contact@gpcoder.com", "127.0.0.1");
	account1.login();
	account1.changeStatus(LoginStatus.EXPIRED);

	console.log("---");
	var account2 = createAccount("contact@gpcoder.com", "116.108.77.231");
	account2.login();
}

ObserverPatternExample();