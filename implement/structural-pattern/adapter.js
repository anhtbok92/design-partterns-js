// Một người Việt muốn trao đổi với một người Nhật.
// Tuy nhiên, 2 người này không biết ngôn ngữ của nhau nên cần phải có một người để chuyển đổi từ ngôn ngữ tiếng Việt sang ngôn ngữ tiếng Nhật.
// Chúng ta sẽ mô hình hóa trường hợp này với Adapter Pattern

class VietnameseTarget {
	constructor() { }
	send(words) { }
}

class JapaneseAdaptee {
	constructor() { }
	receive(words) {
		console.log('Retrieving words from Adapter ... ', words)
	}
}

class TranslatorAdapter extends VietnameseTarget {

	constructor(adaptee) {
		super()
		this.adaptee = adaptee;
	}

	send(words) {
		console.log('Reading Words ... ', words);
		let vietnameseWords = this.translate(words);
		console.log("Sending Words ...", words);
		this.adaptee.receive(vietnameseWords);
	}

	translate(vietnameseWords) {
		console.log("Translated!");
		return "こんにちは";
	}
}

function VietnameseClient() {
	var vietnameseClient = new TranslatorAdapter(new JapaneseAdaptee());
	vietnameseClient.send("Xin chào");
}

VietnameseClient()