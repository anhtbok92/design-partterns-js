'use strict';

class Subject {
	constructor() { }

	request() { }
}

class RealSubject extends Subject {
	constructor() {
		super()
		console.log('RealSubject created')
	}

	request() {
		console.log('RealSubject handles request')
	}
}

class Proxy extends Subject {
	constructor() {
		super()
		console.log('Proxy created')
	}

	request() {
		this.realSubject = new RealSubject();
		this.realSubject.request();
	}
}

function initProxy() {
	var proxy = new Proxy()
	proxy.request()
}

initProxy()