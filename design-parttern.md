# 1. Định nghĩa
Design Patterns (mẫu thiết kế) là một kỹ thuật trong lập trình hướng đối tượng, nó khá quan trọng và mọi lập trình viên nên phải biết.

Design Pattern được sử dụng thường xuyên trong các ngôn ngữ OOP. Nó cung cấp cho bạn các `mẫu thiết kế`, giải pháp để giải quyết các vấn đề chung, thường gặp trong lập trình.

Các vấn đề mà bạn gặp phải có thể bạn sẽ tự nghĩ ra cách giải quyết nhưng có thể nó chưa phải là tối ưu. Design Pattern giúp bạn giải quyết vấn đề một cách tối ưu nhất, cung cấp cho bạn các giải pháp trong lập trình OOP.

Design Patterns không phải là ngôn ngữ cụ thể nào cả. Nó có thể thực hiện được ở phần lớn các ngôn ngữ lập trình, chẳng hạn như Java, C#, thậm chí là Javascript hay bất kỳ ngôn ngữ lập trình nào khác.

> "Mỗi pattern mô tả một vấn đề xảy ra lặp đi lặp lại, và trình bày trọng tâm của giải pháp cho vấn đề đó, theo cách mà bạn có thể dùng đi dùng lại hàng triệu lần mà không cần phải suy nghĩ." — Christopher Alexander.

# 2. Lợi ích
- Tái sử dụng mã lệnh và dẽ dàng mở rộng.
- Nó là tập hơn những giải pháp đã được tối ưu hóa, đã được kiểm chứng để giải quyết các vấn đề trong software engineering.
Vậy khi bạn gặp bất kỳ khó khăn gì, design patterns là kim chỉ nam giúp bạn giải quyết vấn đề thay vì tự tìm kiếm giải pháp cho một vấn đề đã được chứng minh.
- Design pattern cung cấp giải pháp ở dạng tổng quát, giúp tăng tốc độ phát triển phần mềm bằng cách đưa ra các mô hình test, mô hình phát triển đã qua kiểm nghiệm.
- Dùng lại các design pattern giúp tránh được các vấn đề tiềm ẩn có thể gây ra những lỗi lớn, dễ dàng nâng cấp, bảo trì về sau.
- Giúp cho các lập trình viên có thể hiểu code của người khác 1 cách nhanh chóng. Mọi thành viên trong team có thể dễ dàng trao đổi với nhau để cùng xây dựng dự án mà không mất quá nhiều thời gian.


# 3. Phân loại
- `Creational Pattern` (nhóm khởi tạo – 5 mẫu) gồm: Factory Method, Abstract Factory, Builder, Prototype, Singleton. Những Design pattern loại này cung cấp một giải pháp để tạo ra các `object` và che giấu được logic của việc tạo ra nó, thay vì tạo ra object một cách trực tiếp bằng cách sử dụng method `new`. Điều này giúp cho chương trình trở nên mềm dẻo hơn trong việc quyết định object nào cần được tạo ra trong những tình huống được đưa ra.

- `Structural Pattern` (nhóm cấu trúc – 7 mẫu) gồm: Adapter, Bridge, Composite, Decorator, Facade, Flyweight và Proxy.
Những Design pattern loại này liên quan tới class và các thành phần của object. Nó dùng để thiết lập, định nghĩa quan hệ giữa các đối tượng.

- `Behavioral Pattern` (nhóm tương tác/ hành vi – 11 mẫu) gồm: Interpreter, Template Method, Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy và Visitor. Nhóm này dùng trong thực hiện các hành vi của đối tượng, sự giao tiếp giữa các object với nhau.


# 4. Creational Pattern 
## 4.1 Singleton
- Singleton đảm bảo chỉ duy nhất một thể hiện (instance) được tạo ra và nó sẽ cung cấp cho bạn một method để có thể truy xuất được thể hiện duy nhất đó mọi lúc mọi nơi trong chương trình.
- Sử dụng Singleton khi chúng ta muốn: 
	- Đảm bảo rằng chỉ có một instance của lớp.
	- Việc quản lý việc truy cập tốt hơn vì chỉ có một thể hiện duy nhất.
	- Có thể quản lý số lượng thể hiện của một lớp trong giớn hạn chỉ định.
- Một số trường hợp sử dụng của Singleton Pattern thường gặp:
	- Vì class dùng Singleton chỉ tồn tại 1 Instance (thể hiện) nên nó thường được dùng cho các trường hợp giải quyết các bài toán cần truy cập vào các ứng dụng như: Shared resource, Logger, Configuration, Caching, Thread pool, …
	- Một số design pattern khác cũng sử dụng Singleton để triển khai: Abstract Factory, Builder, Prototype, Facade,…

## 4.2 Factory Method
- Factory Pattern quản lý và trả về các đối tượng theo yêu cầu, giúp cho việc khởi tạo đổi tượng một cách linh hoạt hơn.
- Trong Factory Pattern, chúng ta tạo đối tượng mà không để lộ logic tạo đối tượng ở phía người dùng và tham chiếu đến đối tượng mới được tạo ra bằng cách sử dụng một interface chung.
- Factory Pattern được sử dụng khi có một class cha (super-class) với nhiều class con (sub-class), dựa trên đầu vào và phải trả về 1 trong những class con đó.
- Factory Pattern được sử dụng khi:
	- Chúng ta có một super class với nhiều class con và dựa trên đầu vào, chúng ta cần trả về một class con. Mô hình này giúp chúng ta đưa trách nhiệm của việc khởi tạo một lớp từ phía người dùng (client) sang lớp Factory.
	- Chúng ta không biết sau này sẽ cần đến những lớp con nào nữa. Khi cần mở rộng, hãy tạo ra sub class và implement thêm vào factory method cho việc khởi tạo sub class này

## 4.3 Abstract Factory
- Abstract Factory tạo ra một Super-factory dùng để tạo ra các Factory khác. Hay còn được gọi là Factory của các Factory. Abstract Factory Pattern là một Pattern cấp cao hơn so với Factory Method Pattern.
- Trong Abstract Factory pattern, một interface có nhiệm vụ tạo ra một Factory của các object có liên quan tới nhau mà không cần phải chỉ ra trực tiếp các class của object. Mỗi Factory được tạo ra có thể tạo ra các object bằng phương pháp giống như Factory pattern. Hãy tưởng tượng, Abstract factory như là một nhà máy lớn chứa nhiều nhà máy nhỏ, trong các nhà máy đó có những xưởng sản xuất, các xưởng đó tạo ra những sản phẩm khác nhau.
- Lợi ích của Abstract Factory Pattern là gì?
	- Các lợi ích của Factory Pattern cũng tương tự như Factory Method Pattern như: cung cấp hướng tiếp cận với Interface thay thì các implement, che giấu sự phức tạp của việc khởi tạo các đối tượng với người dùng (client), độc lập giữa việc khởi tạo đối tượng và hệ thống sử dụng, …
	- Giúp tránh được việc sử dụng điều kiện logic bên trong Factory Pattern. Khi một Factory Method lớn (có quá nhiều sử lý if-else hay switch-case), chúng ta nên sử dụng theo mô hình Abstract Factory để dễ quản lý hơn (cách phân chia có thể là gom nhóm các sub-class cùng loại vào một Factory).
	- Abstract Factory Pattern là factory của các factory, có thể dễ dạng mở rộng để chứa thêm các factory và các sub-class khác.
	- Dễ dàng xây dựng một hệ thống đóng gói (encapsulate): sử dụng được với nhiều nhóm đối tượng (factory) và tạo nhiều product khác nhau.

## 4.4 Builder
- Builder xây dựng một đôi tượng phức tạp bằng cách sử dụng các đối tượng đơn giản và sử dụng tiếp cận từng bước, việc xây dựng các đối tượng đôc lập với các đối tượng khác.
- Builder Pattern được xây dựng để khắc phục một số nhược điểm của Factory Pattern và Abstract Factory Pattern khi mà Object có nhiều thuộc tính. Có ba vấn đề chính với  Factory Pattern và Abstract Factory Pattern khi Object có nhiều thuộc tính:
	- Quá nhiều tham số phải truyền vào từ phía client tới Factory Class.
	- Một số tham số có thể là tùy chọn nhưng trong Factory Pattern, chúng ta phải gửi tất cả tham số, với tham số tùy chọn nếu không nhập gì thì sẽ truyền là null.
	- Nếu một Object có quá nhiều thuộc tính thì việc tạo sẽ phức tạp.
- Sử dụng Builder Pattern khi nào?
	- Tạo một đối tượng phức tạp: có nhiều thuộc tính (nhiều hơn 4) và một số bắt buộc (requried), một số không bắt buộc (optional).
	- Khi có quá nhiều hàm constructor, bạn nên nghĩ đến Builder.
	- Muốn tách rời quá trình xây dựng một đối tượng phức tạp từ các phần tạo nên đối tượng.
	- Muốn kiểm soát quá trình xây dựng.
	- Khi người dùng (client) mong đợi nhiều cách khác nhau cho đối tượng được xây dựng.

## 4.5 Prototype
- Prototypecó nhiệm vụ khởi tạo một đối tượng bằng cách clone một đối tượng đã tồn tại thay vì khởi tạo với từ khoá `new`. Đối tượng mới là một bản sao có thể giống 100% với đối tượng gốc, chúng ta có thể thay đổi dữ liệu của nó mà không ảnh hưởng đến đối tượng gốc.
- Prototype Pattern được dùng khi việc tạo một object tốn nhiều chi phí và thời gian trong khi bạn đã có một object tương tự tồn tại.
- Sử dụng Prototype khi nào?
	- Chúng ta có một object và cần phải tạo 1 ọbject mới khác dựa trên object bạn đầu mà không thể sử dụng toán tử new hay các hàm contructor để khởi tạo. Vì sao vậy? Lý do đơn giản là ở đây chúng ta ko hề được biết thông tin nội tại của object đó hoặc object đó đã có thể bị che dấu đi nhiều thông tin khác mà chỉ cho ta một thông tin rất giới hạn không đủ để hiểu được. Do vậy ta ko thể dùng toán tử new để khởi tạo nó được. Giải pháp: để cho chính object mẫu tự xác định thông tin và dữ liệu sao chép.
	- Khởi tạo đối tượng lúc run-time: chúng ta có thể xác định đối tượng cụ thể sẽ được khởi tạo lúc runtime nếu class được implement / extend từ một Prototype.
	- Cấu hình một ứng dụng với dynamic class.
	- Muốn truyền đối tượng vào một hàm nào đó để xử lý, thay vì truyền đối tượng gốc có thể ảnh hưởng dữ liệu thì ta có thể truyền đối tượng sao chép.
	- Chi phí của việc tạo mới đối tượng (bằng cách sử dụng toán tử new) là lớn.
	- Ẩn độ phức tạp của việc khởi tạo đối tượng từ phía Client.


# 5. Structural Pattern
## 5.1 Adapter
- Adapter Pattern cho phép các inteface (giao diện) không liên quan tới nhau có thể làm việc cùng nhau. Đối tượng giúp kết nối các interface gọi là Adapter.
- Adapter Pattern giữ vai trò trung gian giữa hai lớp, chuyển đổi interface của một hay nhiều lớp có sẵn thành một interface khác, thích hợp cho lớp đang viết. Điều này cho phép các lớp có các interface khác nhau có thể dễ dàng giao tiếp tốt với nhau thông qua interface trung gian, không cần thay đổi code của lớp có sẵn cũng như lớp đang viết.
- Adapter Pattern còn gọi là Wrapper Pattern do cung cấp một interface “bọc ngoài” tương thích cho một hệ thống có sẵn, có dữ liệu và hành vi phù hợp nhưng có interface không tương thích với lớp đang viết.
- Ví dụ: Cái phích cắm điện có 3 chân nhưng ổ điện chỉ có 2 lỗ thì phải dùng thêm 1 cái bộ chuyển để chuyển từ 3 chân sang 2 chân – bộ chuyển này cũng được gọi là Adapter. Laptop không sử dụng nguồn điện xoay chiều 224V mà chỉ sử dụng được nguồn 12V, nên để laptop có thể sử dụng được nguồn điện 224V cần có một adapter làm cầu nối trung gian để chuyển nguồn điện xoay chiều 224V thành nguồn điện 1 chiều 12V.
- Sử dụng Adapter Pattern khi nào?
	- Adapter Pattern giúp nhiều lớp có thể làm việc với nhau dễ dàng mà bình thường không thể. Một trường hợp thường gặp phải và có thể áp dụng Adapter Pattern là khi không thể kế thừa lớp A, nhưng muốn một lớp B có những xử lý tương tự như lớp A. Khi đó chúng ta có thể cài đặt B theo Object Adapter, các xử lý của B sẽ gọi những xử lý của A khi cần.
	- Khi muốn sử dụng một lớp đã tồn tại trước đó nhưng interface sử dụng không phù hợp như mong muốn.
	- Khi muốn tạo ra những lớp có khả năng sử dụng lại, chúng phối hợp với các lớp không liên quan hay những lớp không thể đoán trước được và những lớp này không có những interface tương thích.

## 5.2 Bridge
- Bridge dùng để tách tính trừu tượng (abstraction) ra khỏi tính hiện thực (implementation) của 1 class. Từ đó có thể dễ dàng chỉnh sửa hoặc thay thế mà không làm ảnh hưởng đến những nơi có sử dụng lớp ban đầu.

	Điều đó có nghĩa là, ban đầu chúng ta thiết kế một class với rất nhiều xử lý, bây giờ chúng ta không muốn để những xử lý đó trong class đó nữa. Vì thế, chúng ta sẽ tạo ra một class khác và move các xử lý đó qua class mới. Khi đó, trong lớp cũ sẽ giữ một đối tượng thuộc về lớp mới, và đối tượng này sẽ chịu trách nhiệm xử lý thay cho lớp ban đầu.
- Bridge Pattern khá giống với mẫu Adapter Pattern ở chỗ là sẽ nhờ vào một lớp khác để thực hiện một số xử lý nào đó. Tuy nhiên, ý nghĩa và mục đích sử dụng của hai mẫu thiết kế này hoàn toàn khác nhau:
	- Adapter Pattern hay còn gọi là Wrapper pattern được dùng để biến đổi một class/ interface sang một dạng khác có thể sử dụng được. Adapter Pattern giúp các lớp không tương thích hoạt động cùng nhau mà bình thường là không thể.
	- Bridge Pattern được sử dụng được sử dụng để tách thành phần trừu tượng (abstraction) và thành phần thực thi (implementation) riêng biệt.
	- Adapter Pattern làm cho mọi thứ có thể hoạt động với nhau sau khi chúng đã được thiết kế (đã tồn tại). Bridge Pattern nên được thiết kế trước khi phát triển hệ thống để Abstraction và Implementation có thể thực hiện một cách độc lập.
- Lợi ích của Bridge Pattern là gì
	- Giảm sự phục thuộc giữa abstraction và implementation 
	- Giảm số lượng những lớp con không cần thiết
	- Code sẽ gọn gàn hơn và kích thước ứng dụng sẽ nhỏ hơn
	- Dễ bảo trì hơn
	- Dễ dàng mở rộng về sau
- Sử dụng Bridge Pattern khi nào?
	- Khi bạn muốn tách ràng buộc giữa Abstraction và Implementation, để có thể dễ dàng mở rộng độc lập nhau.
	- Cả Abstraction và Implementation của chúng nên được mở rộng bằng subsclass.
	- Sử dụng ở những nơi mà những thay đổi được thực hiện trong implement không ảnh hưởng đến phía client.

## 5.2 Composite
- Composite Pattern là một sự tổng hợp những thành phần có quan hệ với nhau để tạo ra thành phần lớn hơn. Nó cho phép thực hiện các tương tác với tất cả đối tượng trong mẫu tương tự nhau.
- Composite được sử dụng khi chúng ta cần xử lý một nhóm đối tượng tương tự theo cách xử lý 1 object. Composite pattern sắp xếp các object theo cấu trúc cây để diễn giải 1 phần cũng như toàn bộ hệ thống phân cấp. Pattern này tạo một lớp chứa nhóm đối tượng của riêng nó. Lớp này cung cấp các cách để sửa đổi nhóm của cùng 1 object. Pattern này cho phép Client có thể viết code giống nhau để tương tác với composite object này, bất kể đó là một đối tượng riêng lẻ hay tập hợp các đối tượng.
- Ví dụ: Một chương trình quản lý một hệ thống tập tin có cấu trúc cây có chứa các nhánh là các thư mục (folder – composite), cũng như các nút lá là các tệp (file – leaf). Một folder có thể chứa một hoặc nhiều file hoặc folder. Do đó, folder là một đối tượng phức tạp và file là một đối tượng đơn giản. File và Folder có nhiều thao tác và thuộc tính chung, chẳng hạn như: di chuyển (cut), sao chép (copy), liệt kê (view) hoặc các thuộc tính thư mục như tên tệp và kích thước.
- Sử dụng Composite Pattern khi nào?
	- Composite Pattern chỉ nên được áp dụng khi nhóm đối tượng phải hoạt động như một đối tượng duy nhất (theo cùng một cách).
	- Composite Pattern có thể được sử dụng để tạo ra một cấu trúc giống như cấu trúc cây.

## 5.3 Decorator
- Decorator cho phép người dùng thêm chức năng mới vào đối tượng hiện tại mà không muốn ảnh hưởng đến các đối tượng khác. Kiểu thiết kế này có cấu trúc hoạt động như một lớp bao bọc (wrap) cho lớp hiện có. Mỗi khi cần thêm tính năng mới, đối tượng hiện có được wrap trong một đối tượng mới (decorator class).
- Decorator pattern còn được gọi là Wrapper hay Smart Proxy.
- Lợi ích của Decorator Pattern là gì?
	- Tăng cường khả năng mở rộng của đối tượng, bởi vì những thay đổi được thực hiện bằng cách implement trên các lớp mới.
	- Client sẽ không nhận thấy sự khác biệt khi bạn đưa cho nó một wrapper thay vì đối tượng gốc.
	- Một đối tượng có thể được bao bọc bởi nhiều wrapper cùng một lúc.
	- Cho phép thêm hoặc xóa tính năng của một đối tượng lúc thực thi (run-time).
- Sử dụng Decorator Pattern khi nào?
	- Khi muốn thêm tính năng mới cho các đối tượng mà không ảnh hưởng đến các đối tượng này.
	- Khi không thể mở rộng một đối tượng bằng cách thừa kế (inheritance). Chẳng hạn, một class sử dụng từ khóa final, muốn mở rộng class này chỉ còn cách duy nhất là sử dụng decorator.
	- Trong một số nhiều trường hợp mà việc sử dụng kế thừa sẽ mất nhiều công sức trong việc viết code. Ví dụ trên là một trong những trường hợp như vậy.

## 5.4 Facade
- Facade cung cấp một giao diện chung đơn giản thay cho một nhóm các giao diện có trong một hệ thống con (subsystem). Facade Pattern định nghĩa một giao diện ở một cấp độ cao hơn để giúp cho người dùng có thể dễ dàng sử dụng hệ thống con này. Facade Pattern cho phép các đối tượng truy cập trực tiếp giao diện chung này để giao tiếp với các giao diện có trong hệ thống con. Mục tiêu là che giấu các hoạt động phức tạp bên trong hệ thống con, làm cho hệ thống con dễ sử dụng hơn.
- Facade Pattern tương tự với Adapter Pattern. Hai Pattern này làm việc theo cùng một cách, nhưng mục đích sử dụng của chúng khác nhau. Adapter Pattern chuyển đổi mã nguồn để làm việc được với mã nguồn khác. Nhưng Façade Pattern cho phép bao bọc mã nguồn gốc để nó có thể giao tiếp với mã nguồn khác dễ dàng hơn.
- Lợi ích của Facade Pattern là gì?
	- Giúp cho hệ thống của bạn trở nên đơn giản hơn trong việc sử dụng và trong việc hiểu nó, vì một mẫu Facade có các phương thức tiện lợi cho các tác vụ chung.
	- Giảm sự phụ thuộc của các mã code bên ngoài với hiện thực bên trong của thư viện, vì hầu hết các code đều dùng Facade, vì thế cho phép sự linh động trong phát triển các hệ thống.
	- Đóng gói tập nhiều hàm API được thiết kế không tốt bằng một hàm API đơn có thiết kế tốt hơn.
- Sử dụng Facade Pattern khi nào?
	- Khi hệ thống có rất nhiều lớp làm người sử dụng rất khó để có thể hiểu được quy trình xử lý của chương trình. Và khi có rất nhiều hệ thống con mà mỗi hệ thống con đó lại có những giao diện riêng lẻ của nó nên rất khó cho việc sử dụng phối hợp. Khi đó có thể sử dụng Facade Pattern để tạo ra một giao diện đơn giản cho người sử dụng một hệ thống phức tạp.
	- Khi người sử dụng phụ thuộc nhiều vào các lớp cài đặt. Việc áp dụng Façade Pattern sẽ tách biệt hệ thống con của người dùng và các hệ thống con khác, do đó tăng khả năng độc lập và khả chuyển của hệ thống con, dễ chuyển đổi nâng cấp trong tương lai.
	- Khi bạn muốn phân lớp các hệ thống con. Dùng Façade Pattern để định nghĩa cổng giao tiếp chung cho mỗi hệ thống con, do đó giúp giảm sự phụ thuộc của các hệ thống con vì các hệ thống này chỉ giao tiếp với nhau thông qua các cổng giao diện chung đó.
	- Khi bạn muốn bao bọc, che giấu tính phức tạp trong các hệ thống con đối với phía Client.

## 5.5 Flyweight
- Flyweight cho phép tái sử dụng đối tượng tương tự đã tồn tại bằng cách lưu trữ chúng hoặc tạo đối tượng mới khi không tìm thấy đối tượng phù hợp.
- Flyweight Pattern được sử dụng khi chúng ta cần tạo một số lượng lớn các đối tượng của 1 lớp nào đó.	Do mỗi đối tượng đều đòi hỏi chiếm giữ một khoảng không gian bộ nhớ, nên với một số lượng lớn đối tượng được tạo ra có thể gây nên vấn đề nghiêm trọng đặc biệt đối với các thiết bị có dung lượng nhớ thấp. Flyweight Pattern có thể được áp dụng để giảm tải cho bộ nhớ thông qua cách chia sẻ các đối tượng. Vì vậy performance của hệ thống được tối ưu.
- Flyweight object là immutable, nghĩa là không thể thay đổi khi nó đã được khởi tạo.
- Lợi ích của Flyweight Pattern là gì?
	- Giảm số lượng đối tượng được tạo ra bằng cách chia sẻ đối tượng. Vì vậy, tiết kiệm bộ nhớ và các thiết bị lưu trữ cần thiết.
	- Cải thiện khả năng cache dữ liệu vì thời gian đáp ứng nhanh.
	- Tăng performance.
- Sử dụng Flyweight Pattern khi nào?
	- Khi có một số lớn các đối tượng được ứng dụng tạo ra một cách lặp đi lặp lại.
	- Khi việc tạo ra đối tượng đòi hỏi nhiều bộ nhớ và thời gian.
	- Khi muốn tái sử dụng đối tượng đã tồn tại thay vì phải tốn thời gian để tạo mới.
	- Khi nhóm đối tượng chứa nhiều đối tượng tương tự và hai đối tượng trong nhóm không khác nhau nhiều.

## 5.5 Proxy
- Proxy có nghĩa là “ủy quyền” hay “đại diện”. Mục đích xây dựng Proxy pattern cũng chính vì muốn tạo ra một đối tượng sẽ ủy quyền, thay thế cho một đối tượng khác.
- Proxy Pattern là mẫu thiết kế mà ở đó tất cả các truy cập trực tiếp đến một đối tượng nào đó sẽ được chuyển hướng vào một đối tượng trung gian (Proxy Class). Mẫu Proxy (người đại diện) đại diện cho một đối tượng khác thực thi các phương thức, phương thức đó có thể được định nghĩa lại cho phù hợp với múc đích sử dụng.
- Proxy Pattern còn được gọi là Surrogate (thay thế) hoặc Placeholder (trình giữ chỗ).
- Lợi ích của Proxy Pattern là gì?
	- Cãi thiện Performance thông qua lazy loading, chỉ tải các tài nguyên khi chúng được yêu cầu.
	- Nó cung cấp sự bảo vệ cho đối tượng thực từ thế giới bên ngoài.
	- Giảm chi phí khi có nhiều truy cập vào đối tượng có chi phí khởi tạo ban đầu lớn.
	- Dễ nâng cấp, bảo trì.
- Sử dụng Proxy Pattern khi nào?
	- Khi muốn bảo vệ quyền truy xuất vào các phương thức của object thực.
	- Khi cần một số thao tác bổ sung trước khi thực hiện phương thức của object thực.
	- Khi tạo đối tượng ban đầu là theo yêu cầu hoặc hệ thống yêu cầu sự chậm trễ khi tải một số tài nguyên nhất định (lazy loading).
	- Khi có nhiều truy cập vào đối tượng có chi phí khởi tạo ban đầu lớn.
	- Khi đối tượng gốc tồn tại trong môi trường từ xa (remote).
	- Khi đối tượng gốc nằm trong một hệ thống cũ hoặc thư viện của bên thứ ba.
	- Khi muốn theo dõi trạng thái và vòng đời đối tượng.

# 6. Behavioral Pattern
## 6.1 Chain of Responsibility (COR)
- Chain of Responsiblity cho phép một đối tượng gửi một yêu cầu nhưng không biết đối tượng nào sẽ nhận và xử lý nó. Điều này được thực hiện bằng cách kết nối các đối tượng nhận yêu cầu thành một chuỗi (chain) và gửi yêu cầu theo chuỗi đó cho đến khi có một đối tượng xử lý nó.
- Chain of Responsibility Pattern hoạt động như một danh sách liên kết (Linked list) với việc đệ quy duyệt qua các phần tử (recursive traversal).
- Lợi ích của Chain of Responsibility Pattern là gì?
	- Giảm kết nối (loose coupling): Thay vì một đối tượng có khả năng xử lý yêu cầu chứa tham chiếu đến tất cả các đối tượng khác, nó chỉ cần một tham chiếu đến đối tượng tiếp theo. Tránh sự liên kết trực tiếp giữa đối tượng gửi yêu cầu (sender) và các đối tượng nhận yêu cầu (receivers).
	- Tăng tính linh hoạt : đảm bảo Open/Closed Principle.
	- Phân chia trách nhiệm cho các đối tượng: đảm bảo Single Responsibility Principle.
	- Có khả năng thay đổi dây chuyền (chain) trong thời gian chạy.
	- Không đảm bảo có đối tượng xử lý yêu cầu.
- Sử dụng Chain of Responsibility Pattern khi nào?
	- Có nhiều hơn một đối tượng có khả thực xử lý một yêu cầu trong khi đối tượng cụ thể nào xử lý yêu cầu đó lại phụ thuộc vào ngữ cảnh sử dụng.
	- Muốn gửi yêu cầu đến một trong số vài đối tượng nhưng không xác định đối tượng cụ thể nào sẽ xử lý yêu cầu đó.
	- Khi cần phải thực thi các trình xử lý theo một thứ tự nhất định..
	- Khi một tập hợp các đối tượng xử lý có thể thay đổi động: tập hợp các đối tượng có khả năng xử lý yêu cầu có thể không biết trước, có thể thêm bớt hay thay đổi thứ tự sau này.

## 6.2 Command
- Command cho phép chuyển yêu cầu thành đối tượng độc lập, có thể được sử dụng để tham số hóa các đối tượng với các yêu cầu khác nhau như log, queue (undo/redo, transtraction.
- Nói cho dễ hiểu, Command Pattern cho phép tất cả những Request gửi đến object được lưu trữ trong chính object đó dưới dạng một object Command. Khái niệm Command Object giống như một class trung gian được tạo ra để lưu trữ các câu lệnh và trạng thái của object tại một thời điểm nào đó.
- Command dịch ra nghĩa là ra lệnh. Commander nghĩa là chỉ huy, người này không làm mà chỉ ra lệnh cho người khác làm. Như vậy, phải có người nhận lệnh và thi hành lệnh. Người ra lệnh cần cung cấp một class đóng gói những mệnh lệnh. Người nhận mệnh lệnh cần phân biệt những interface nào để thực hiện đúng mệnh lệnh.
- Lợi ích của Command Pattern là gì?
	- Dễ dàng thêm các Command mới trong hệ thống mà không cần thay đổi trong các lớp hiện có. Đảm bảo Open/Closed Principle.
	- Tách đối tượng gọi operation từ đối tượng thực sự thực hiện operation. Giảm kết nối giữa Invoker và Receiver.
	- Cho phép tham số hóa các yêu cầu khác nhau bằng một hành động để thực hiện.
	- Cho phép lưu các yêu cầu trong hàng đợi.
	- Đóng gói một yêu cầu trong một đối tượng. Dễ dàng chuyển dữ liệu dưới dạng đối tượng giữa các thành phần hệ thống.
- Sử dụng Command Pattern khi nào?
	- Khi cần tham số hóa các đối tượng theo một hành động thực hiện.
	- Khi cần tạo và thực thi các yêu cầu vào các thời điểm khác nhau.
	- Khi cần hỗ trợ tính năng undo, log , callback hoặc transaction

## 6.3 Interpreter
- Interpreter nghĩa là thông dịch, mẫu này nói rằng “để xác định một biểu diễn ngữ pháp của một ngôn ngữ cụ thể, cùng với một thông dịch viên sử dụng biểu diễn này để diễn dịch các câu trong ngôn ngữ”.
- Nói cho dễ hiểu, Interpreter Pattern giúp người lập trình có thể “xây dựng” những đối tượng “động” bằng cách đọc mô tả về đối tượng rồi sau đó “xây dựng” đối tượng đúng theo mô tả đó.

	`Metadata (mô tả) –> [Interpreter Pattern] –> Đối tượng tương ứng.`

- Interpreter Pattern có hạn chế về phạm vi áp dụng. Mẫu này thường được sử dụng để định nghĩa bộ ngữ pháp đơn giản (grammar), trong các công cụ quy tắc đơn giản (rule)...
- Lợi ích của Interpreter Pattern là gì?
	- Dễ dàng thay đổi và mở rộng ngữ pháp. Vì mẫu này sử dụng các lớp để biểu diễn các quy tắc ngữ pháp, chúng ta có thể sử dụng thừa kế để thay đổi hoặc mở rộng ngữ pháp. Các biểu thức hiện tại có thể được sửa đổi theo từng bước và các biểu thức mới có thể được định nghĩa lại các thay đổi trên các biểu thức cũ.
	- Cài đặt và sử dụng ngữ pháp rất đơn giản. Các lớp xác định các nút trong cây cú pháp có các implement tương tự. Các lớp này dễ viết và các phân cấp con của chúng có thể được tự động hóa bằng trình biên dịch hoặc trình tạo trình phân tích cú pháp.
- Sử dụng Interpreter Pattern khi nào?
	- Bộ ngữ pháp đơn giản. Pattern này cần xác định ít nhất một lớp cho mỗi quy tắc trong ngữ pháp. Do đó ngữ pháp có chứa nhiều quy tắc có thể khó quản lý và bảo trì.
	- Không quan tâm nhiều về hiệu suất. Do bộ ngữ pháp được phân tích trong cấu trúc phân cấp (cây) nên hiệu suất không được đảm bảo.
	- Interpreter Pattern thường được sử dụng trong trình biên dịch (compiler), định nghĩa các bộ ngữ pháp, rule, trình phân tích SQL, XML...

## 6.4 Iterator
- Iterator được sử dụng để “Cung cấp một cách thức truy cập tuần tự tới các phần tử của một đối tượng tổng hợp, mà không cần phải tạo dựng riêng các phương pháp truy cập cho đối tượng tổng hợp này”.

	Nói cách khác, một Iterator được thiết kế cho phép xử lý nhiều loại tập hợp khác nhau bằng cách truy cập những phần tử của tập hợp với cùng một phương pháp, cùng một cách thức định sẵn, mà không cần phải hiểu rõ về những chi tiết bên trong của những tập hợp này.
- Lợi ích của Iterator Pattern là gì?
	- Đảm bảo nguyên tắc Single responsibility principle (SRP) : chúng ta có thể tách phần cài đặt các phương thức của tập hợp và phần duyệt qua các phần tử (iterator) theo từng class riêng lẻ.
	- Đảm bảo nguyên tắc Open/Closed Principle (OCP) : chúng ta có thể implement các loại collection mới và iterator mới, sau đó chuyển chúng vào code hiện có mà không vi phạm bất cứ nguyên tắc gì.
	- Chúng ta có thể truy cập song song trên cùng một tập hợp vì mỗi đối tượng iterator có chứa trạng thái riêng của nó.
- Sử dụng Iterator Pattern khi nào?
	- Cần truy cập nội dung của đối tượng trong tập hợp mà không cần biết nội dung cài đặt bên trong nó.
	- Hỗ trợ truy xuất nhiều loại tập hợp khác nhau.
	- Cung cấp một interface duy nhất để duyệt qua các phần tử của một tập hợp.

## 6.5 Mediator
- Để có một thiết kế hướng đối tượng tốt, chúng ta phải tạo ra nhiều class tương tác với nhau. Nếu một số nguyên tắc nhất định không được áp dụng, cuối cùng hệ thống trở thành một mớ hỗn độn trong đó mỗi đối tượng phụ thuộc (dependency) vào nhiều đối tượng khác để thực thi. Để tránh các class kết hợp chặt chẽ, chúng ta cần một cơ chế để tạo thuận lợi cho sự tương tác giữa các đối tượng theo cách mà các đối tượng không nhận thức được sự tồn tại của các đối tượng khác. Một trong những cách để giải quyết vấn đề này là áp dụng Mediator Pattern.
- Mediator có nghĩa là người trung gian. Pattern này nói rằng “Định nghĩa một đối tượng gói gọn cách một tập hợp các đối tượng tương tác. Mediator thúc đẩy sự khớp nối lỏng lẻo bằng cách ngăn không cho các đối tượng đề cập đến nhau một cách rõ ràng và nó cho phép bạn thay đổi sự tương tác của họ một cách độc lập”.
- Mediator Patern (mô hình trung gian) được sử dụng để giảm sự phức tạp trong "giao tiếp" giữa các lớp và các đối tượng. Mô hình này cung cấp một lớp trung gian có nhiệm vụ xử lý thông tin liên lạc giữa các tầng lớp, hỗ trợ bảo trì mã code dễ dàng bằng cách khớp nối lỏng lẻo.

	Khớp nối lỏng lẻo ở đây được hiểu là các đối tượng tương đồng không “giao tiếp” trực tiếp với nhau mà giao tiếp thông qua người trung gian, và nó cho phép thay thay đổi cách tương tác giữa chúng một cách độc lập.
- Lợi ích của Mediator Pattern là gì?
	- Đảm bảo nguyên tắc Single responsibility principle (SRP) : chúng ta có thể tách phần giao tiếp giữa các thành phần (component) ra một nơi khác.
	- Đảm bảo nguyên tắc Open/Closed Principle (OCP) : chúng ta có thể implement thêm một Mediator mới mà không ảnh hưởng đến các component hiện có.
	- Giảm khớp nối giữa các component.
	- Tái sử dụng các component dễ dàng hơn.
	- Đơn giản hóa cách giao tiếp giữa các đối tượng. Một mediator sẽ thay thế mối quan hệ nhiều-nhiều (many-to-many) giữa các component bằng quan hệ một-nhiều (one-to-many) giữa một mediator với các component.
	- Quản lý tập trung, giúp làm rõ các component tương tác trong hệ thống như thế nào trong hệ thống.
- Sử dụng Mediator Pattern khi nào?
	- Khi tập hợp các đối tượng giao tiếp theo những cách thức được xác định rõ ràng nhưng cách thức đó quá phức tạp. Sự phụ thuộc lẫn nhau giữa các đối tượng tạo ra kết quả là cách tổ chức không có cấu trúc và khó hiểu.
	- Khi cần tái sử dụng một đối tượng nhưng rất khó khăn vì nó tham chiếu và giao tiếp với nhiều đối tượng khác.
	- Điều chỉnh hành vi giữa các lớp một cách dễ dàng, không cần chỉnh sửa ở nhiều lớp.
	- Thường được sử dụng trong các hệ thống truyền thông điệp (message-based system), chẳng hạn như hệ thống chat.
	- Khi giao tiếp giữa các object trong hệ thống quá phức tạp, có quá nhiều quan hệ giữa các object trong hệ thống. Một điểm chung để kiểm soát hoặc giao tiếp là cần thiết.
	
## 6.6 Memento
- Đôi khi chúng ta cần phải ghi lại trạng thái bên trong của một đối tượng. Điều này là bắt buộc khi thực hiện tại các điểm kiểm tra và cung cấp cơ chế hoàn tác cho phép người dùng có thể khôi phục từ các lỗi.
	Chúng ta phải lưu thông tin trạng thái ở đâu đó để có thể khôi phục các đối tượng về trạng thái trước đó của chúng. Nhưng các đối tượng thường đóng gói một phần hoặc tất cả trạng thái của chúng, khiến nó không thể truy cập được vào các đối tượng khác và không thể lưu ở bên ngoài. Public các trạng thái này sẽ vi phạm nguyên tắc đóng gói, có thể làm giảm độ tin cậy và khả năng mở rộng của ứng dụng. Trong những trường hợp như vậy chúng ta có thể nghĩ đến Memento Pattern, nó sẽ giúp chúng ta giải quyết vấn đề này.
- Memento là mẫu thiết kế có thể lưu lại trạng thái của một đối tượng để khôi phục lại sau này mà không vi phạm nguyên tắc đóng gói. Dữ liệu trạng thái đã lưu trong đối tượng memento không thể truy cập bên ngoài đối tượng được lưu và khôi phục. Điều này bảo vệ tính toàn vẹn của dữ liệu trạng thái đã lưu.
- Hoàn tác (Undo) là một trong những thao tác được sử dụng nhiều nhất trong trình soạn thảo văn bản (editor). Mẫu thiết kế Memento được sử dụng để thực hiện thao tác Undo. Điều này được thực hiện bằng cách lưu trạng thái hiện tại của đối tượng mỗi khi nó thay đổi trạng thái, từ đó chúng ta có thể khôi phục nó trong mọi trường hợp có lỗi.
- Lợi ích của Memento Pattern là gì?
	- Bảo bảo nguyên tắc đóng gói: sử dụng trực tiếp trạng thái của đối tượng có thể làm lộ thông tin chi tiết bên trong đối tượng và vi phạm nguyên tắc đóng gói.
	- Đơn giản code của Originator bằng cách để Memento lưu giữ trạng thái của Originator và Caretaker quản lý lịch sử thay đổi của Originator.
- Sử dụng Memento Pattern khi nào?
	- Các ứng dụng cần chức năng cần Undo/ Redo: lưu trạng thái của một đối tượng bên ngoài và có thể restore/ rollback sau này.
	- Thích hợp với các ứng dụng cần quản lý transaction

## 6.7 Observer
- Tất cả các chương trình hướng đối tượng là về các đối tượng và sự tương tác của chúng. Trong trường hợp khi một số đối tượng nhất định cần được thông báo thường xuyên về những thay đổi xảy ra trong các đối tượng khác. Để có một thiết kế tốt có nghĩa là tách rời càng nhiều càng tốt và giảm sự phụ thuộc. Mẫu thiết kế Observer (quan sát) có thể được sử dụng bất cứ khi nào mà một đối tượng có sự thay đổi trạng thái, tất các thành phần phụ thuộc của nó sẽ được thông báo và cập nhật một cách tự động.
- Observer định nghĩa mối phụ thuộc một – nhiều giữa các đối tượng để khi mà một đối tượng có sự thay đổi trạng thái, tất các thành phần phụ thuộc của nó sẽ được thông báo và cập nhật một cách tự động.
- Observer Pattern còn gọi là Dependents, Publish/Subcribe hoặc Source/Listener.
- Lợi ích của Observer Pattern là gì?
	- Dễ dàng mở rộng với ít sự thay đổi : mẫu này cho phép thay đổi Subject và Observer một cách độc lập. Chúng ta có thể tái sử dụng các Subject mà không cần tái sử dụng các Observer và ngược lại. Nó cho phép thêm Observer mà không sửa đổi Subject hoặc Observer khác. Vì vậy, nó đảm bảo nguyên tắc Open/Closed Principle (OCP).
	- Sự thay đổi trạng thái ở 1 đối tượng có thể được thông báo đến các đối tượng khác mà không phải giữ chúng liên kết quá chặt chẽ.
	- Một đối tượng có thể thông báo đến một số lượng không giới hạn các đối tượng khác.
- Sử dụng Observer Pattern khi nào?
	- Thường được sử dụng trong mối quan hệ 1-n giữa các object với nhau. Trong đó một đối tượng thay đổi và muốn thông báo cho tất cả các object liên quan biết về sự thay đổi đó.
	- Khi thay đổi một đối tượng, yêu cầu thay đổi đối tượng khác và chúng ta không biết có bao nhiêu đối tượng cần thay đổi, những đối tượng này là ai.
	- Sử dụng trong ứng dụng broadcast-type communication.
	- Sử dụng để quản lý sự kiện (Event management).
	- Sử dụng trong mẫu mô hình MVC (Model View Controller Pattern) : trong MVC, mẫu này được sử dụng để tách Model khỏi View. View đại diện cho Observer và Model là đối tượng Observable.

## 6.8 State
- Trong các ứng dụng, một số đối tượng có thông tin về trạng thái. Hành vi của đối tượng phụ thuộc vào trạng thái của nó tại thời điểm thực thi (run-time) và các phương thức xử lý nghiệp vụ có thể thay đổi trạng thái buộc đối tượng có hành vi xử lý khác đi. Trong trường hợp như vậy, chúng ta có thể sử dụng State Pattern.
- State Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern). Nó cho phép một đối tượng thay đổi hành vi của nó khi trạng thái nội bộ của nó thay đổi. Đối tượng sẽ xuất hiện để thay đổi lớp của nó.
- Lợi ích của State Pattern là gì?
	- Đảm bảo nguyên tắc Single responsibility principle (SRP) : tách biệt mỗi State tương ứng với 1 class riêng biệt.
	- Đảm bảo nguyên tắc Open/Closed Principle (OCP) : chúng ta có thể thêm một State mới mà không ảnh hưởng đến State khác hay Context hiện có.
	- Giữ hành vi cụ thể tương ứng với trạng thái.
	- Giúp chuyển trạng thái một cách rõ ràng.
- Sử dụng State Pattern khi nào?
	- Khi hành vi của đối tượng phụ thuộc vào trạng thái của nó và nó phải có khả năng thay đổi hành vi của nó lúc run-time theo trạng thái mới.
	- Khi nhiều điều kiện phức tạp buộc đối tượng phụ thuộc vào trạng thái của nó.

## 6.9 Strategy
- Có một vài trường hợp, các lớp chỉ khác nhau về hành vi của chúng. Trong trường hợp như vậy, ý tưởng tốt là chúng ta sẽ tách biệt các thuật toán trong các lớp riêng biệt để có khả năng lựa chọn các thuật toán khác nhau trong thời gian chạy (run-time).

	Ý tưởng này được gọi là Strategy Pattern, một pattern giúp chúng ta giải quyết vấn đề về sự thay đổi, tương tự như State Design Pattern.
- Strategy cho phép định nghĩa tập hợp các thuật toán, đóng gói từng thuật toán lại, và dễ dàng thay đổi linh hoạt các thuật toán bên trong object. Strategy cho phép thuật toán biến đổi độc lập khi người dùng sử dụng chúng.
- Ý nghĩa thực sự của Strategy Pattern là giúp tách rời phần xử lý một chức năng cụ thể ra khỏi đối tượng. Sau đó tạo ra một tập hợp các thuật toán để xử lý chức năng đó và lựa chọn thuật toán nào mà chúng ta thấy đúng đắn nhất khi thực thi chương trình. Mẫu thiết kế này thường được sử dụng để thay thế cho sự kế thừa, khi muốn chấm dứt việc theo dõi và chỉnh sửa một chức năng qua nhiều lớp con.
- Lợi ích của Strategy Pattern là gì?
	- Đảm bảo nguyên tắc Single responsibility principle (SRP) : một lớp định nghĩa nhiều hành vi và chúng xuất hiện dưới dạng với nhiều câu lệnh có điều kiện. Thay vì nhiều điều kiện, chúng ta sẽ chuyển các nhánh có điều kiện liên quan vào lớp Strategy riêng lẻ của nó.
	- Đảm bảo nguyên tắc Open/Closed Principle (OCP) : chúng ta dễ dàng mở rộng và kết hợp hành vi mới mà không thay đổi ứng dụng.
	- Cung cấp một sự thay thế cho kế thừa.
- Sử dụng Strategy Pattern khi nào?
	- Khi muốn có thể thay đổi các thuật toán được sử dụng bên trong một đối tượng tại thời điểm run-time.
	- Khi có một đoạn mã dễ thay đổi, và muốn tách chúng ra khỏi chương trình chính để dễ dàng bảo trì.
	- Tránh sự rắc rối, khi phải hiện thực một chức năng nào đó qua quá nhiều lớp con.
	- Cần che dấu sự phức tạp, cấu trúc bên trong của thuật toán.

## 6.10 Template Method
- Trong quá trình phát triển ứng dụng, chúng ta có các component khác nhau có sự tương đồng đáng kể, nhưng chúng không sử dụng interface/ abstract class chung,
dẫn đến code duplicate ở nhiều nơi. Nếu muốn thay đổi chung cho tất cả component, chúng ta phải đi sửa ở từng nơi trong component, làm tốn nhiều chi phí không cần thiết.

	Một trong những cách để giải quyết vấn đề này là sử dụng Template Method Pattern.
- Template nói rằng "Định nghĩa một bộ khung của một thuật toán trong một chức năng, chuyển giao việc thực hiện nó cho các lớp con. Mẫu Template Method cho phép lớp con định nghĩa lại cách thực hiện của một thuật toán, mà không phải thay đổi cấu trúc thuật toán".

	Điều này có nghĩa là Template method giúp cho chúng ta tạo nên một bộ khung (template) cho một vấn đề đang cần giải quyết.
	Trong đó các đối tượng cụ thể sẽ có cùng các bước thực hiện, nhưng trong mỗi bước thực hiện đó có thể khác nhau. Điều này sẽ tạo nên một cách thức truy cập giống nhau nhưng có hành động và kết quả khác nhau.
- Lợi ích của Template Method Pattern là gì?
	- Tái sử dụng code (reuse), tránh trùng lặp code (duplicate): đưa những phần trùng lặp vào lớp cha (abstract class).
	- Cho phép người dùng override chỉ một số phần nhất định của thuật toán lớn, làm cho chúng ít bị ảnh hưởng hơn bởi những thay đổi xảy ra với các phần khác của thuật toán.
- Sử dụng Template Method Pattern khi nào?
	- Khi có một thuật toán với nhiều bước và mong muốn cho phép tùy chỉnh chúng trong lớp con.
	- Mong muốn chỉ có một triển khai phương thức trừu tượng duy nhất của một thuật toán.
	- Mong muốn hành vi chung giữa các lớp con nên được đặt ở một lớp chung.
	- Các lớp cha có thể gọi các hành vi trong các lớp con của chúng một cách thống nhất (step by step).

## 6.11 Visitor
- Visitor cho phép định nghĩa các thao tác (operations) trên một tập hợp các đối tượng (objects) không đồng nhất (về kiểu) mà không làm thay đổi định nghĩa về lớp (classes) của các đối tượng đó. Để đạt được điều này, trong mẫu thiết kế visitor ta định nghĩa các thao tác trên các lớp tách biệt gọi các lớp visitors, các lớp này cho phép tách rời các thao tác với các đối tượng mà nó tác động đến. Với mỗi thao tác được thêm vào, một lớp visitor tương ứng được tạo ra.

	Đây là một kỹ thuật giúp chúng ta phục hồi lại kiểu dữ liệu bị mất (thay vì dùng instanceof). Nó thực hiện đúng thao tác dựa trên tên của phương thức, kiểu của cả đối tượng gọi và kiểu của đối số truyền vào.

	Visitor còn được biết đến như là Double dispatch.
- Lợi ích của Visitor Pattern là gì?
	- Cho phép một hoặc nhiều hành vi được áp dụng cho một tập hợp các đối tượng tại thời điểm run-time, tách rời các hành vi khỏi cấu trúc đối tượng.
	- Đảm bảo nguyên tắc Open/ Close: đối tượng gốc không bị thay đổi, dễ dàng thêm hành vi mới cho đối tượng thông qua visitor.
- Sử dụng Visitor Pattern khi nào?
	- Khi có một cấu trúc đối tượng phức tạp với nhiều class và interface. Người dùng cần thực hiện một số hành vi cụ thể của riêng đối tượng, tùy thuộc vào concrete class của chúng.
	- Khi chúng ta phải thực hiện một thao tác trên một nhóm các loại đối tượng tương tự. Chúng ta có thể di chuyển logic hành vi từ các đối tượng sang một lớp khác.
	- Khi cấu trúc dữ liệu của đối tượng ít khi thay đổi nhưng hành vi của chúng được thay đổi thường xuyên.