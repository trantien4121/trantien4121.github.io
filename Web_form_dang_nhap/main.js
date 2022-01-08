var correct_user='19T1021271'; // Khai báo tên user đúng
var correct_password='412001';  // Khai báo tên mật khẩu đúng

var inputUsename=document.getElementById('username'); // Khai báo biến input user để nhập username
var inputPassword=document.getElementById('password');  //Khai báo biến input password để nhập password

var formLogin=document.getElementById('form-login');  //Khai Báo biến formLogin để nhập từ Id='form-login'

if(formLogin.attachEvent){                            
  formLogin.attachEvent('submit', onformSubmit);
}else{
  formLogin.addEventListener('submit', onformSubmit);
}

function onformSubmit(e){
  var username=inputUsename.value;
  var password=inputPassword.value;

  if(username==correct_user && password==correct_password){
    alert('Đăng Nhập thành công!');
    open("https://trantien4121.github.io/");
  }else{
    alert('Đăng Nhập Không thành công! Kiểm tra lại Mã Sinh Viên và Mật Khẩu')
  }
}

