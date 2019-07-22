/*
Ví dụ Mediator Pattern trong hệ thống chat
Trong một ứng dụng chat, một user sẽ có thể send và recieve message. Khi một user muốn send message đến group thì user đó phải tìm xem tất cả những người đang online hoặc trong trạng thái có thể message để send. Nếu bình thường user gửi tin phải tự làm hết mọi thứ, phải tự kiểm tra từng member và thực hiện việc gửi tin nhắn.
Khi sử dụng Mediator: user không cần tự kiểm tra, không quan tâm ai có thể nhận message, user chỉ việc gửi thông tin đến Mediator của group. Mediator sẽ tự điều phối message này đến người nhận.
*/

class User {
	constructor(mediator, name) {
		this.mediator = mediator;
		this.name = name;
	}

	get getName() {
		return this.name;
	}

	send(msg) { }
	receive(msg) { }
}

class UserImpl extends User {
	constructor(mediator, name) {
		super(mediator, name);
	}
	send(msg) {
		console.log("---");
		console.log(`${this.name} is sending the message: ${msg}`);
		this.mediator.sendMessage(msg, this);
	}

	receive(msg) {
		console.log(`${this.name} received the message: ${msg}`);
	}
}

class ChatMediator {
	constructor() { }
	sendMessage(msg, user) { }
	addUser(user) { }
}

class ChatMediatorImpl extends ChatMediator {
	constructor(groupName, users = []) {
		super();
		this.users = users;
		this.groupName = groupName;
		console.log(`"${groupName}" group already created`);
	}

	addUser(user) {
		console.log(`"${user.getName}" joined this group`);
		this.users.push(user);
	}

	sendMessage(msg, user) {
		for (let u of this.users) {
			if (u.getName !== user.getName) {
				u.receive(msg);
			}
		}
	}

}

function ChatClient() {
	var mediator = new ChatMediatorImpl("Design pattern");

	var admin = new UserImpl(mediator, "Admin");
	var user1 = new UserImpl(mediator, "User 1");
	var user2 = new UserImpl(mediator, "User 2");
	var user3 = new UserImpl(mediator, "User 3");

	mediator.addUser(admin);
	mediator.addUser(user1);
	mediator.addUser(user2);
	mediator.addUser(user3);

	admin.send("Hi All");
	user1.send("Hi Admin");
}

ChatClient();

// "Design pattern" group already created
// "Admin" joined this group
// "User 1" joined this group
// "User 2" joined this group
// "User 3" joined this group
// ---
// Admin is sending the message: Hi All
// User 1 received the message: Hi All
// User 2 received the message: Hi All
// User 3 received the message: Hi All
// ---
// User 1 is sending the message: Hi Admin
// Admin received the message: Hi Admin
// User 2 received the message: Hi Admin
// User 3 received the message: Hi Admin