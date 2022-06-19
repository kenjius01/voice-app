# Bài tập lớn môn Xử lý tiếng nói

**Dự án**: Alan Web App

**Thành viên - công việc: (Nhóm 7)**
 1. 19021388 - Kiều Văn Tuyên (Làm chức năng dự đoán thể loại nhạc)
 2. 
 3.
 4.
 
## Mô tả chung về dự án
Trang web cung cấp trợ lý giọng nói là [Alan AI](https://alan.app/) giúp cho việc tương tác với máy tính trở nên dễ dàng hơn. Trang web gồm các chức năng chính là: Xem phim, đọc báo, xem thông tin thời tiết các khu vực, và cuối cùng là phân loại thể loại âm nhạc.

## Các chức năng của web

### Dự đoán thể loại âm nhạc
Khi chúng ta nghe một bài hát, có đôi lúc chúng ta sẽ thắc mắc hay tò mò về thể loại của bài hát đó. Trang web này có chức năng giúp chúng ta có thể biết được thể loại bài hát một cách đơn giản với độ chính xác là 75%.
#### Link demo chức năng: 
#### Dữ liệu
Dữ liệu được sử dụng trong chức năng này được lấy từ bộ dữ liệu [GTZAN Dataset - Music Genre Classification](https://www.kaggle.com/datasets/andradaolteanu/gtzan-dataset-music-genre-classification).

Tuy nhiên, nhóm chúng em chỉ sử dụng dữ liệu trong folder 'genres original' (Một bộ sưu tập gồm 10 thể loại với 100 tệp âm thanh mỗi thể loại, có độ dài mỗi file là 30 giây) để thực hiện cho việc huấn luyện model. Có tổng cộng 10 thể loại trong tập dữ liệu:
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

Sử dụng trích xuất đặc trưng MFCC (mel frequency cepstral coeffecients) làm đầu vào của mô hình.

Để tạo ra nhiều mẫu hơn, các bài hát có thời lượng 30s đã được cắt nhỏ thành 10 đoạn dẫn đến tổng số mẫu là gần 10000 (vì có một file nhạc bị lỗi). Việc cắt thành nhiều đoạn hơn sẽ cho ra độ chính xác cải thiện hơn một chút (đã thử với việc cắt thành 20 đoạn). Sau đó trích xuất đặc trưng để lấy ra MFCC từng phân đoạn.

Dữ liệu sau đó được lưu vào một file json. Mỗi phân đoạn có dữ liệu đầu vào (130x13) trong đó có 130 vector MFCC, mỗi vectơ trong số chúng có 13 coeffecients. Dữ liệu đã được chia thành dữ liệu Train, Validation và Test, trong đó Validation data giúp kiểm tra độ chính xác của mô hình để thay đổi các tham số trước khi áp dụng mô hình vào dữ liệu thử nghiệm.
#### Huấn luyện Model
Mô hình sử dụng: Sử dụng mô hình học sâu CNNs (Convolutional Neural Networks)

Architecture of the Model: 

