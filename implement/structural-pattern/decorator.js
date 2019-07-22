/*
	Ví dụ về một hệ thống quản lý dự án, nơi nhân viên đang làm việc với các vai trò khác nhau, chẳng hạn như thành viên nhóm (team member), trưởng nhóm (team lead) và người quản lý (manager).
	Một thành viên trong nhóm chịu trách nhiệm thực hiện các nhiệm vụ được giao và phối hợp với các thành viên khác để hoàn thành nhiệm vụ nhóm.
	Mặt khác, một trưởng nhóm phải quản lý và cộng tác với các thành viên trong nhóm của mình và lập kế hoạch nhiệm vụ của họ.
	Tương tự như vậy, một người quản lý có thêm một số trách nhiệm đối với một trưởng nhóm như quản lý yêu cầu dự án, tiến độ, phân công công việc.

	Sau đây là các thành phần tham gia vào hệ thống và hành vi của chúng:
		- Employee: thực hiện công việc (doTask), tham gia vào dự án (join), rời khỏi dự án (terminate).
		- Team member: báo cáo task được giao (report task), cộng tác với các thành viên khác (coordinate with others).
		- Team lead: lên kế hoạch (planning), hỗ trợ các thành viên phát triển (motivate), theo dõi chất lượng công việc và thời gian (monitor).
		- Manager: tạo các yêu cầu dự án (create requirement), giao nhiệm vụ cho thành viên (assign task), quản lý tiến độ dự án (progress management).

	Với cách làm thông thường, chúng ta có sơ đồ như sau:
															Employee
															- doTask()
															- join()
															- terminate()
																|
														    e x t e n d s
																|
						TeamMember ------------------------ TeamLeader ------------------------ Manager
						- reportTask()               		- planing()                  		- createRequirement()
						- coordinateWithOthers()        	- motivate()				    	- assignTask
							                                - monitor()                     	- progressManagement()

	Bất cứ khi nào một thành viên trong nhóm trở thành một Team Lead, chúng ta phải tạo một đối tượng mới của Team Lead và đối tượng trước đó tham chiếu vào nhân viên đó (Team Member trong nhóm) có thể bị hủy hoặc lưu trữ.
	Đó không phải là cách tiếp cận được khuyến nghị khi nhân viên vẫn là một phần của tổ chức của bạn.
	Tương tự như trường hợp với Manager, khi một nhân viên trở thành người quản lý từ một Team Lead / Team Member.

	Một trường hợp khác là khi một nhân viên có thể thực hiện trách nhiệm của một Team Member trong nhóm cũng như trách nhiệm của Team Lead hoặc một Manager.
	Trong trường hợp đó, bạn cần tạo hai đối tượng cho cùng một nhân viên là hoàn toàn sai.

	Trong các kịch bản này, một Team Member/ Team Lead có thể có thêm trách nhiệm trong lúc thực hiện (run-time). Và trách nhiệm của họ có thể được chỉ định / thu hồi trong lúc run-time.

	Áp dụng Decorator Pattern như thế nào trong trường hợp này.

	Client ---------------use--------------->     <<Interface>>
												EmployeeComponent
												- doTask()
												- join()
												- terminate()
													|
												implements
													|               <<Abstract class>>
	EmployeeConcreteComponet-------------------------------------- EmployeeDecorator
	- doTask()													  - protected Employeecompoent employee
	- join()													  - doTask()
	- terminate()												  - join()
																  - terminate()
																           |
																		extends
																		   |
								  TeamMember ------------------------ TeamLeader ------------------------ Manager
								  - reportTask()               		  - planing()                  		  - createRequirement()
								  - coordinateWithOthers()        	  - motivate()				    	  - assignTask()
																	  - monitor()                         - progressManagement()



	Như bạn thấy, với Decorator hệ thống của chúng ta linh hoạt hơn rất nhiều. Chúng ta có thể dễ dàng gán một nhân viên sang vai trò TeamMember, TeamLeader, Manager.

*/

class EmployeeComponent {
	constructor() { }
	getName() { }
	doTask() { }
	join(date) { }
	terminate(date) { }
	showInformation() {
		console.log(`The basic information of ${this.getName()} is: `)
		let currentDate = new Date();
		this.join(currentDate);
		currentDate.setMonth(currentDate.getMonth() + 6);
		this.terminate(currentDate)
	}
}

class EmployeeConcreteComponent extends EmployeeComponent {
	constructor(name) {
		super();
		this.name = name;
	}
	getName() {
		return this.name;
	}
	join(date) {
		console.log(`${this.getName()} joined on ${date}`)
	}
	terminate(date) {
		console.log(`${this.getName()} terminated on ${date}`)
	}
	doTask() { }
}

class EmployeeDecorator extends EmployeeComponent {
	constructor(employee) {
		super();
		this.employee = employee;
	}
	getName() {
		return this.employee.getName();
	}
	join(date) {
		this.employee.join(date)
	}
	terminate(date) {
		this.employee.terminate(date)
	}
}

class Manager extends EmployeeDecorator {
	constructor(employee) {
		super(employee);
	}

	createRequirement() {
		console.log(`${this.employee.getName()} is create requirements.`);
	}

	assignTask() {
		console.log(`${this.employee.getName()} is assigning tasks.`);
	}

	manageProgress() {
		console.log(`${this.employee.getName()} is managing the progress.`);
	}

	doTask() {
		this.employee.doTask();
		this.createRequirement();
		this.assignTask();
		this.manageProgress();
	}
}

class TeamLeader extends EmployeeDecorator {
	constructor(employee) {
		super(employee);
	}
	planing() {
		console.log(`${this.employee.getName()} is planing.`);
	}
	motivate() {
		console.log(`${this.employee.getName()} is motivating his members.`);
	}
	monitor() {
		console.log(`${this.employee.getName()} is monitoring his members.`);
	}
	doTask() {
		this.employee.doTask();
		this.planing();
		this.motivate();
		this.monitor();
	}
}

class TeamMember extends EmployeeDecorator {
	constructor(employee) {
		super(employee);
	}
	reportTask() {
		console.log(`${this.employee.getName()} is reporting his assigned tasks.`);
	}
	coordinateWithOthers() {
		console.log(`${this.employee.getName()} is coordinating with other members of his team.`);
	}
	doTask() {
		this.employee.doTask();
		this.reportTask();
		this.coordinateWithOthers();
	}
}

// Client
console.log("NORMAL EMPLOYEE: ");
var employee = new EmployeeConcreteComponent("EM");
employee.showInformation();
employee.doTask();

console.log("\nTEAM LEADER: ");
var teamLeader = new TeamLeader(employee);
teamLeader.showInformation();
teamLeader.doTask();

console.log("\nMANAGER: ");
var manager = new Manager(employee);
manager.showInformation();
manager.doTask();

console.log("\nTEAM LEADER AND  MANAGER: ");
var teamLeaderAndManager = new Manager(teamLeader);
teamLeaderAndManager.showInformation();
teamLeaderAndManager.doTask();