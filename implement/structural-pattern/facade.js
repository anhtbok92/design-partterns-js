/* Ví dụ
	Một công ty bán hàng online, chẳng hạn Tiki cung cấp nhiều lựa chọn cho khách hàng khi mua sản phẩm.Khi một sản phẩm được mua, nó sẽ qua các bước xử lý: lấy thông tin về tài khoản mua hàng, thanh toán, vận chuyển, gửi Email / SMS thông báo.
	Ứng dụng của chúng ta được thiết kế với Facade Pattern, bao gồm các class như sau:
		- Thông tin về tài khoản(AccountService) : lấy thông tin cơ bản của khách hàng thông qua email được cung cấp.
		- Dịch vụ thanh toán(PaymentService) : có thể thanh toán thông qua Paypal, thẻ tín dụng(Credit Card), tài khoản ngân hàng trực tuyến(E - banking), Tiền mặt(cash).
		- Dịch vụ vận chuyển(ShippingService) : có thể chọn Free Shipping, Standard Shipping, Express Shipping.
		- Dịch vụ email(EmailService) : có thể gửi mail cho khách hàng về tình hình đặt hàng, thanh toán, vận chuyển, nhận hàng.
		- Dịch vụ tin nhắn(SMS) : có thể gửi thông báo SMS cho khách hàng khi thanh toán online.
		- ShopFacade : là một Facade Pattern, class này bao gồm các dịch vụ có bên trong hệ thống.Nó cung cấp một vài phương thức để Client có thể dễ dàng mua hàng.Tùy vào nghiệp vụ mà nó sẽ sử dụng những dịch tương ứng, chẳng hạn dịch vụ SMS chỉ được sử dụng nếu khách hàng đăng ký mua hàng thông qua hình thức thanh toán online(Paypal, E - banking, …).
		- Client : là người dùng cuối sử dụng ShopFacade để mua hàng.
*/

class AccountService {
	getAccount(email) {
		console.log("Getting the account of " + email);
	}
}

class PaymentService {
	paypalPayment() {
		console.log("Payment by Paypal");
	}

	creditCardPayment() {
		console.log("Payment by Credit Card");
	}

	eBankingPayment() {
		console.log("Payment by E-banking account");
	}

	cashPayment() {
		console.log("Payment by cash");
	}
}

class ShippingService {
	freeShipping() {
		console.log("Free Shipping");
	}

	standardShipping() {
		console.log("Standard Shipping");
	}

	expressShipping() {
		console.log("Express Shipping");
	}
}

class EmailService {
	sendMail(mailTo) {
		console.log("Sending an email to " + mailTo);
	}
}

class SmsService {
	sendSMS(mobilePhone) {
		console.log("Sending an mesage to " + mobilePhone);
	}
}

class ShopFacade {

	constructor() {
		this.accountService = new AccountService;
		this.paymentService = new PaymentService();
		this.shippingService = new ShippingService();
		this.emailService = new EmailService();
		this.smsService = new SmsService();
	}

	buyProductByCashWithFreeShipping(email) {
		this.accountService.getAccount(email);
		this.paymentService.cashPayment();
		this.shippingService.freeShipping();
		this.emailService.sendMail(email);
		console.log("Done\n");
	}

	buyProductByPaypalWithStandardShipping(email, mobilePhone) {
		this.accountService.getAccount(email);
		this.paymentService.paypalPayment();
		this.shippingService.standardShipping();
		this.emailService.sendMail(email);
		this.smsService.sendSMS(mobilePhone);
		console.log("Done\n");
	}
}

// Client
var instance = new ShopFacade();
instance.buyProductByCashWithFreeShipping("abc@example.com");
instance.buyProductByPaypalWithStandardShipping("example@abc.com", "0988.999.999");

// Như bạn thấy phía Client chỉ sử dụng một phương thức duy nhất là có thể mua được sản phẩm mặc dù bên dưới hệ thống có rất nhiều dịch vụ xử lý khác nhau.
// Nếu không có Facade, phía Client sẽ không biết sử dụng những dịch vụ nào để có thể mua được sản phẩm. Khi phát sinh thêm một dịch vụ sẽ rất khó khăn khi sửa đổi và code phía Client cũng sẽ bị ảnh hưởng.

