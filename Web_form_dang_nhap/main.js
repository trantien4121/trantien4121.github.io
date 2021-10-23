var correct_user='19T1021271';
var correct_password='412001';

var inputUsename=document.getElementById('username');
var inputPassword=document.getElementById('password');

var formLogin=document.getElementById('form-login');

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