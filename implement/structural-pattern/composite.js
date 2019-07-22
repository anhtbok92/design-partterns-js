/* Ví dụ: Một chương trình quản lý một hệ thống tập tin có cấu trúc cây có chứa các nhánh là các thư mục (folder – composite), cũng như các nút lá là các tệp (file – leaf).
Một folder có thể chứa một hoặc nhiều file hoặc folder. Do đó, folder là một đối tượng phức tạp và file là một đối tượng đơn giản. File và Folder có nhiều thao tác và thuộc tính chung,
chẳng hạn như: di chuyển (cut) , sao chép (copy), liệt kê (view) hoặc các thuộc tính thư mục như tên tệp và kích thước. */

class FileComponent {
	constructor() { }
	cutAction() { }
	viewAction() { }
}

class FileLeaf extends FileComponent {
	constructor(fileName) {
		super();
		this.fileName = fileName;
	}
	cutAction() {
		console.log('Do cut action with file: ', this.fileName);
	}
	viewAction() {
		console.log('Do view action with file: ', this.fileName);
	}
}

class FolderComposite extends FileComponent {
	constructor(files) {
		super();
		this.files = files;
	}

	cutAction() {
		for (var file of this.files) {
			file.cutAction()
		}
	}

	viewAction() {
		for (var file of this.files) {
			file.cutAction()
		}
	}
}

// client
var file1 = new FileLeaf("file 1");
var file2 = new FileLeaf("file 2");
var file3 = new FileLeaf("file 3");

var files = [file1, file2, file3];
var folder = new FolderComposite(files);
folder.cutAction();