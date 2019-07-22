/* Ví dụ State Pattern
Giả sử chúng ta cần xây dựng một ứng dụng quản lý Document.
Một Document có thể bao gồm các trạng thái: tạo mới (New), trình phê duyệt (Submitted), phê duyệt (Approved) và từ chối (Rejected).
Với yêu cầu trên, chương trình của chúng ta như sau:
const DocumentState = { NEW: 'NEW', SUBMITTED: 'SUBMITTED', APPROVED: 'APPROVED', REJECTED: 'REJECTED' };
class DocumentService {
	constructor(state) {
		this.state = state;
	}
	setState(state) {
		this.state = state;
	}
	handleRequest() {
		switch (this.state) {
			case 'NEW':
				console.log("Create a new document");
				break;
			case 'SUBMITTED':
				console.log("Submitted");
				break;
			case 'APPROVED':
				console.log("Approved");
				break;
			case 'REJECTED':
				console.log("Rejected");
				break;

			default:
				break;
		}
	}
}

function main() {
	var service = new DocumentService();

	service.setState(DocumentState.NEW);
	service.handleRequest();

	service.setState(DocumentState.SUBMITTED);
	service.handleRequest();

	service.setState(DocumentState.APPROVED);
	service.handleRequest();
}

main();
// Create a new document
// Submitted
// Approved
Như bạn thấy chương trình trên chạy ok, không vấn đề gì.
Nhưng bây giờ chúng ta muốn thêm một trạng thái mới như lưu nháp (Save Draft).
Đơn giản chúng ta chỉ cần thêm vào DocumentState một giá trị mới và thêm điều kiện xử lý trong switch-case.
Tuy nhiên, nếu làm như vậy thì chúng ta đã vi phạm nguyên tắc Open/ Close. Mỗi khi có thêm một trạng thái mới chúng ta phải sửa nhiều nơi,
code trong phương thức handleRequest() ngày càng nhiều và cần phải test lại toàn bộ app.
Bây giờ chúng ta hãy áp dụng State Pattern cho chương trình trên:
	1. Đầu tiên chúng ta sẽ tạo 1 base inteface để nhận yêu cầu xử lý. Lớp này gọi là State.
	2. Tiếp theo, ứng với mỗi giá trị trong enum, chúng ta sẽ tạo một class mới và implement các phương thức của State.
	3. Cuối cùng, chúng ta tạo một class Context. Class này chứa thông tin State hiện tại và nhận yêu cầu xử lý trực tiếp từ Client.
*/

class State {
	constructor() { }
	handleRequest() { }
}

class NewState extends State {
	constructor() { super(); }
	handleRequest() {
		console.log("Create a new document");
	}
}

class SubmittedState extends State {
	constructor() { super(); }
	handleRequest() {
		console.log("Submitted document");
	}
}

class ApprovedState extends State {
	constructor() { super(); }
	handleRequest() {
		console.log("Approved document");
	}
}

class RejectedState extends State {
	constructor() { super(); }
	handleRequest() {
		console.log("Rejected document");
	}
}

class OtherState extends State {
	constructor() { super(); }
	handleRequest() {
		console.log("Other state of a document");
	}
}

class DocumentContext {
	constructor(state) { this.state = state; }
	setState(state) {
		this.state = state;
	}
	applyState() {
		this.state.handleRequest();
	}
}

function mainExample() {
	var context = new DocumentContext();

	context.setState(new NewState());
	context.applyState();

	context.setState(new SubmittedState());
	context.applyState();

	context.setState(new ApprovedState());
	context.applyState();

	context.setState(new OtherState());
	context.applyState();
}

mainExample();
// Create a new document
// Submitted
// Approved
// Other state of a document

// Như bạn thấy, kết quả cũng không đổi.
// Tuy nhiên, chúng ta rất dễ dàng mở rộng. Nếu muốn thêm một trạng thái mới như lưu tạm (Save Draft), đơn giản tạo một class mới implements từ State mà không làm ảnh hưởng đến các State khác và Context.
