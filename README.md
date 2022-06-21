# Bài tập lớn môn Xử lý tiếng nói

**Dự án**: Alan Web App

**Thành viên - công việc: (Nhóm 7)**
 1. 19021388 - Kiều Văn Tuyên (Làm chức năng dự đoán thể loại nhạc)
 2. 19021394 - Nguyễn Đức Vinh (Làm chức năng xem phim)
 3. 19021359 - Kiều Thái Sơn (Làm chức năng xem tin tức)
 5. 19031393 - Hà Long Việt (Làm chức năng xem thời tiết)
 
## Mô tả chung về dự án
Trang web cung cấp trợ lý giọng nói là [Alan AI](https://alan.app/) giúp cho việc tương tác với máy tính trở nên dễ dàng hơn. Trang web gồm các chức năng chính là: Xem phim, đọc báo, xem thông tin thời tiết các khu vực, và cuối cùng là phân loại thể loại âm nhạc.

## Các chức năng của web

### 1. Movie Page
Trang web có chức năng giúp người dùng tìm kiếm thông tin về các bộ phim, chẳng hạn như các bộ phim mới ra rạp, hay có thể tìm kiếm các bộ phim theo từng năm cũng như là theo thể loại phim. Hơn nữa, người dùng cũng có thể xem trailer cũng như là nghe review tổng quan về bộ phim đó. Và tất cả đều có thể dễ dàng thực hiện thông qua giọng nói của người dùng.
  #### Link demo chức năng: [Demo](https://drive.google.com/file/d/14qmCDGYmiuuVfmAssPTSL8tM8iSjtFCE/view?usp=sharing)
  #### Cách thức hoạt động:
  + Nếu đang không ở trang movie, người dùng có thể điều hướng sang bằng câu lệnh 'Go to movies page' hoặc 'i want to watch some movies'.
  + Ở trang movie, người dùng có thể tra các câu lệnh khả dụng ở icon '?' bên trên góc phải màn hình.
  + Tìm kiếm phim theo năm: Sử dụng lệnh 'What are the best movies from + năm'
  + Tìm kiếm phim bộ: Sử dụng lệnh 'What are the best dramas that were released this year?'
  + Tìm kiếm các bộ phim mới nhất: Sử dụng lệnh 'What are the best/top movies now/today'
  + Sau khi sử dụng lệnh tìm kiếm, khi đó, các thông tin về bộ phim sẽ hiển thị trên màn hình, 
      bao gồm 20 bộ phim theo thứ tự sắp xếp (Giả sử tìm kiếm phim hot nhất, thứ tự sẽ là điểm đánh giá từ cao xuống thấp,..). Lúc đó, trợ lý sẽ hỏi ta xem có muốn đọc hết tiêu đề các bộ phim hay không, nếu chọn yes thì các tiêu đề bộ phim sẽ được đọc qua, và màn hình sẽ tự scroll đến bộ phim mà trợ lý đang đọc.
  + Để xem thông tin và nghe review về từng phim cụ thể (Lệnh: Tell me about + tên phim)
  + Xem trailer về phim (Lệnh: Play trailer for + tên phim)
  + Xem tổng hợp những nhận xét, đánh giá, phê bình và điểm số của một bộ phim thông qua số thứ tự (Lệnh: Open the movie + số thứ tự phim)
### 2. NewsPaper
Nếu người dùng muốn đọc báo, có thể đến với chức năng xem tin tức của trang web. Ở đây, ta có thể tìm kiếm các tin tức từ đủ mọi lĩnh vực thể loại hay bất kì nội dung nào.
  #### Link demo chức năng: [Demo](https://drive.google.com/file/d/11E-CVbxqTJkUVU1v5qtk482jXC3g5xjF/view?usp=sharing)
  #### Cách thức hoạt động:
  + Nếu đang không ở trang tin tức, người dùng có thể điều hướng sang bằng câu lệnh 'Go to news page' hoặc 'i want to read some news'.
  + Ở trang news, người dùng có thể tra các câu lệnh khả dụng ở icon bên trên góc bên phải màn hình.
  + Tìm kiếm thông tin theo nguồn (Dùng lệnh: Give me the new from + nguồn: CNN, ABC News,...). 
  + Tìm kiếm theo lĩnh vực (Dùng lệnh: Give me the latest news from + chủ đề, lĩnh vực: Science, technology, business,...)
  + Tìm kiếm theo từ khoá bất kì (What’s up with + từ khóa: bitcoin, war, covid,....)
  + Sau khi sử dụng lệnh tìm kiếm, khi đó, các thông tin về bài viết mà ta tìm kiếm sẽ hiển thị trên màn hình. Lúc đó, trợ lý sẽ hỏi ta xem có muốn đọc hết tiêu đề bài viết hay không, nếu chọn yes thì các tiêu đề bài viết sẽ được đọc lên, và màn hình sẽ tự scroll đến bài viết mà trợ lý đang đọc.
  + Để xem thông tin chi tiết về bài báo, có thể dùng lệnh: Open the article number + số thứ tự (được đánh ở góc phải bên dưới mỗi card)
### 3. Xem dự báo thời tiết
Ngoài việc giải trí như xem phim và đọc báo, trang web còn cung cấp tính năng giúp người dùng tra cứu thông tin về thời tiết của các khu vực. Từ đó có thể theo dõi được tình hình thời tiết để có những kế hoạch hay hoạt động hợp lý. 
#### Link demo chức năng: [Demo](https://drive.google.com/file/d/18L_Q6CqyywWynfJCOWblZQYarReFMVc4/view?usp=sharing)
#### Cách thức hoạt động:
+ Nếu đang không ở trang thời tiết, người dùng có thể điều hướng sang bằng câu lệnh 'Go to weather page'
+ Xem dự báo thời tiết ở một thành phố cụ thể (Dùng lệnh: Give me the weather in + tên thành phố)
+ Sau khi sử dụng lệnh tìm kiếm, giao diện sẽ hiện lên một thẻ chứa thông tin thời tiết của thành phố đó, bao gồm: nhiệt độ, trạng thái (có mây, mưa, ...), thời điểm bắt đầu bình minh và hoàng hôn, tốc độ gió, độ ẩm cũng như là thông tin thời tiết về các ngày tiếp theo trong tuần. Qua đó, có được cái nhìn khách quan về thời tiết một cách rõ ràng hơn.


### 4. Dự đoán thể loại âm nhạc
Khi chúng ta nghe một bài hát, có đôi lúc chúng ta sẽ thắc mắc hay tò mò về thể loại của bài hát đó. Trang web này có chức năng giúp chúng ta có thể biết được thể loại bài hát một cách đơn giản với độ chính xác là 76%. Ngoài ra, sau khi có kết quả dự đoán thì ta có thể xem được biểu đồ dự đoán hay có thể là xem được thông tin về thể loại âm nhạc mà kết quả trả về.
#### Link demo chức năng: [Demo](https://drive.google.com/file/d/1NcOP2-T-5Uzc9JflU-d14CuZvno7tvLG/view?usp=sharing)
#### Dữ liệu
- Dữ liệu được sử dụng trong chức năng này được lấy từ bộ dữ liệu [GTZAN Dataset - Music Genre Classification](https://www.kaggle.com/datasets/andradaolteanu/gtzan-dataset-music-genre-classification).

- Tuy nhiên, nhóm chúng em chỉ sử dụng dữ liệu trong folder 'genres original' (Một bộ sưu tập gồm 10 thể loại với 100 tệp âm thanh mỗi thể loại, có độ dài mỗi file là 30 giây) để thực hiện cho việc huấn luyện model. Có tổng cộng 10 thể loại trong tập dữ liệu:
1. Disco
2. Metal
3. Reggae
4. Blues
5. Rock
6. Classical
7. Jazz
8. Hiphop
9. Country
10. Pop
#### Xử lý dữ liệu

- Sử dụng trích xuất đặc trưng MFCC (mel frequency cepstral coeffecients) làm đầu vào của mô hình.

- Để tạo ra nhiều mẫu hơn, các bài hát có thời lượng 30s đã được cắt nhỏ thành 10 đoạn dẫn đến tổng số mẫu là gần 10000 (vì có một file nhạc bị lỗi). Việc cắt thành nhiều đoạn hơn sẽ cho ra độ chính xác cải thiện hơn một chút (đã thử với việc cắt thành 20 đoạn). Sau đó trích xuất đặc trưng để lấy ra MFCC từng phân đoạn.

+ Dữ liệu sau đó được lưu vào một file json. Mỗi phân đoạn có dữ liệu đầu vào (130x13) trong đó có 130 vector MFCC và số đặc trưng là 13. Dữ liệu đã được chia thành dữ liệu Train, Validation và Test, trong đó Validation data giúp kiểm tra độ chính xác của mô hình để thay đổi các tham số trước khi áp dụng mô hình vào dữ liệu thử nghiệm.
#### Huấn luyện Model
Mô hình sử dụng: Sử dụng mô hình học sâu CNNs (Convolutional Neural Networks)

**Architecture of the Model:** 

- Đầu tiên, đầu vào được đưa dưới dạng MFCC vào một lớp phức hợp với chức năng kích hoạt relu và 32 bộ lọc với kích thước lưới là (3x3) và sau đó đến một lớp tổng hợp có bộ lọc là (3x3) và strides là 2 theo hướng ngang và dọc. Lớp chuyển đổi thứ 2 cũng tương tự như lớp trên để cải thiện hiệu suất bằng cách tăng độ phức tạp của mạng. Lớp cuối cùng có chút thay đổi với kích thước bộ lọc đều là (2x2).

- Sau đó dứ liệu được làm phẳng và đưa vào dense layer với chức năng kích hoạt relu với tổng cộng 128 neurons trong đó. Drop layout được thêm vào để tránh overfitting bằng cách loại bỏ một số neuron, xác suất bỏ lớp là 0,3 và việc loại bỏ các neuron sẽ xóa tất cả các kết nối của nó dẫn đến việc làm cho mô hình trở nên mạnh mẽ.

- Cuối cùng, đầu ra có tổng cộng 10 neurons, mỗi neuron trong số chúng có chức năng kích hoạt là softmax để có sự phân tán xác suất đồng nhất.

**Optimizer và loss function:** 

- Có tổng cộng 600 epoch và batch size là 512, trọng số được thay đổi để giảm thiểu chi phí. Để giảm thiểu chi phí, trình tối ưu hóa adam đã được sử dụng. Hàm mất mát được sử dụng là sparse_categorical_crossentropy, rất hữu ích trong trường hợp đầu ra không được mã hóa one hot và cuối cùng đầu ra được định trước là đầu ra có xác suất cao nhất. 
- Ngoài ra việc sử dụng hàm callback EarlyStopping trong keras giúp ngừng training khi không có sự cải thiện về loss sau 1 số epoch liên tiếp giúp cho việc training trở nên nhanh chóng và hiệu quả hơn.
#### Kết quả: 
- Việc áp dụng mô hình vào dữ liệu test dẫn đến độ chính xác là 76%, có thể được coi là khá tốt với điều kiện đây không phải là phân loại nhị phân và rất nhiều nhầm lẫn có thể xảy ra khi phân biệt một số thể loại tương tự.

![](https://github.com/kenjius01/voice-app/blob/main/result.png)
