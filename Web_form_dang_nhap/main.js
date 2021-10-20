$(document).ready(function(){
    //khai báo biến submit form lấy đối tượng nút submit
    var submit = $("form-submit[type='submit']");

    //khi nút submit được click
    submit.click(function()
    {
      //khai báo các biến dữ liệu gửi lên server
      var user = $("form-input[placeholder='Mã sinh viên']").val(); //lấy giá trị trong input user

      //Kiểm tra xem trường đã được nhập hay chưa
      if(user == ''){
        alert('Vui lòng nhập Tên người dùng');
        return false;
      }

      //Lấy toàn bộ dữ liệu trong Form
      var data = $('form#form_input').serialize();
    
      //Sử dụng phương thức Ajax.
      $.ajax({
            type : 'GET', //Sử dụng kiểu gửi dữ liệu POST
            url : 'data.php', //gửi dữ liệu sang trang data.php
            data : data, //dữ liệu sẽ được gửi
            success : function(data)  // Hàm thực thi khi nhận dữ liệu được từ server
                      { 
                         if(data == 'false') 
                         {
                           alert('Không có người dùng');
                         }else{
                           $('#content').html(data); //dữ liệu HTML trả về sẽ được chèn vào trong thẻ có id content
                         }
                      }
            });
            return false;
      });
});