/*
	Ví dụ Interpreter Pattern trong ứng dụng calculator theo ngôn ngữ tự nhiên
	Trong ví dụ bên dưới chúng ta sẽ xây dựng ứng dụng calculator theo ngôn ngữ tự nhiên. Ví dụ: 20 cộng 8 = 28 hay 10 trừ 4 = 6
*/

class InterpreterEngineContext {
	constructor() { }
	add(input) {
		var tokens = this.interpret(input);
		var num1 = parseInt(tokens[0]);
		var num2 = parseInt(tokens[1]);
		return num1 + num2;
	}
	subtract(input) {
		var tokens = this.interpret(input);
		var num1 = parseInt(tokens[0]);
		var num2 = parseInt(tokens[1]);
		return num1 - num2;
	}
	interpret(input) {
		var str = input.replace(/[^0-9]/gi, " ");
		str = str.replace(/( )+/g, " ").trim();
		return str.split(" ");
	}
}

class Expression {
	constructor() { }
	interpret(context) { }
}

class AddExpression extends Expression {
	constructor(expression) {
		super();
		this.expression = expression;
	}
	interpret(context) {
		return context.add(this.expression);
	}
}

class SubtractExpression extends Expression {
	constructor(expression) {
		super();
		this.expression = expression;
	}
	interpret(context) {
		return context.subtract(this.expression);
	}
}

function interpret(input) {
	var exp = null;
	if (input.includes("cộng")) {
		exp = new AddExpression(input);
	} else if (input.includes("trừ")) {
		exp = new SubtractExpression(input);
	} else {
		throw new Error("Unsupported Operation Exception");
	}

	return exp.interpret(new InterpreterEngineContext());
}

function Client() {
	console.log(`20 cộng 8 = ${interpret("20 cộng 8")}`);
	console.log(`10 trừ 4 = ${interpret("10 trừ 4")}`);
}

Client();