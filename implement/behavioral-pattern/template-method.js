/* Ví dụ Template Method Pattern với thiết kế template của website
Cấu trúc của một website thông thường gồm các phần header, footer, navigation (menu), body.
Riêng phần body thường xuyên thay đổi, sẽ hiển thị riêng theo từng trang. Những phần khác ít khi thay đổi, trừ khi có yêu cầu đặt biệt.
Thay vì phải viết tất cả các phần ở mỗi trang, chúng ta có thể gom chúng lại và đặt trong một template để tái sử dụng mà không duplicate code ở nhiều nơi. */

class PageTemplate {
	constructor() { }

	showHeader() { console.log("<header />"); }
	showNavigation() { console.log("<nav />"); }
	showFooter() { console.log("<footer />"); }
	showBody() { }

	showPage() {
		this.showHeader();
		this.showNavigation();
		this.showBody();
		this.showFooter();
	}
}

class HomePage extends PageTemplate {
	constructor() { super() }
	showBody() {
		console.log("Content of home page page");
	}
}

class DetailPage extends PageTemplate {
	constructor() { super() }
	showBody() {
		console.log("Content of detail");
	}
}

class ContactPage extends PageTemplate {
	constructor() { super() }
	showNavigation() {
		// Just do nothing
		// Because we don't want to show navigation bar on contact page
	}
	showBody() {
		console.log("Content of contact page");
	}
}

function TemplateMethodPatternExample() {
	var homePage = new HomePage();
	homePage.showPage();

	console.log("-----------")
	var detailPage = new DetailPage();
	detailPage.showPage();

	console.log("-----------")
	var contactPage = new ContactPage();
	contactPage.showPage();
}

TemplateMethodPatternExample();
