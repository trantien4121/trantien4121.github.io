//Bai1: Su dung js trong html
//alert('Hello javascripts');

//Bai2: Khai bao bien

//Khai bao bien
    // var fullName = 'Tran Tien';    //Khai bao ten
    // var age ='21'; //Khai bao tuoi

//Goi ham thong bao
    // alert(fullName);
    // alert(age);

//Bai3: Mot so ham built-in (function built-in)
//1. Console (in ra dong o phan console (F12))
    console.log(123)    //Hien thi 123 trong console
    var universityName='Dai Hoc Khoa Hoc Hue';
    console.log(universityName);

    var sos='Canh bao lua dao!';
    console.warn(sos);  //In ra canh bao, co biet tuong cham thang mau vang
//2. Confirm (hien ra thong bao: co OK va cancel)
    // confirm('Xac nhan ban da du tuoi');

//3. promot (Hien thi 1 dong thong tin + 1 vung co the nhap dc gia tri: co OK va cancel)
    // prompt('Xac Nhan ban da du tuoi');

//4. SetTimeout (Cho 1 doan code chay sau 1 gia tri thoi gian(ms), chi chay 1 lan )
    // setTimeout(function() {
    //     alert('Day la thong tin');
    // }, 5000);
    
//5. SetInterval (Tuong tu nhu setTimout nhung cu cach 1 so ms thi no chay 1 lan)
    // setInterval(function() {
    //     alert('thong bao lien tuc sau 3000ms!');
    // }, 3000);

    // setInterval(function() {
    //     console.warn('Canh bao lua dao sau 3000ms! ' + Math.random());
    // }, 3000);

//Bai4: Lam quen voi toan tu
    // 1. Toan tu so hoc 
    // 2. Toan tu gan
    // 3. Toan tu so sanh 
    // 4. Toan tu logic

//Bai5: Toan tu so hoc
/* Toan tu so hoc
+       --> Cong
-       --> Tru
*       --> Nhan
/       --> Chia
**      --> Luy Thua
%       --> Chia lay du
++      --> Tang 1 gia tri
--      --> Giam 1 gia tri
 */

    // var a=1, b=2;
    // var c=a+b;  //c=3
    // var d=b**a; //Luy thua: 2^1, d=2
    // alert(d%c); //2%3=2
    // alert(a++); //a van bang 2: vi in xog moi++
    // alert(b--); //b van bang 1 vi in xog moi --
    // alert(++a);
    // console.log('Gia tri cua a+b la: ',c);
    // //alert in nhu console o dong code tren ko duoc

//Bai6: Toan tu ++-- voi tien to va hau to

var a=6;
var b=10;

var output1=a++;
var output2=--b;
console.log('output1: ', output1);
console.log('output2: ', output2);
// Luc nay output1=6 va output2=9

//Bai7: Toan tu gan
/*
Toan tu         vi du           Tuong duong
=               x=y             x=y
+=              x+=y            x=x+y
-=              x-=y            x=x-y
*=              x*=y            x=x*y    
/=              x/=y            x=x/y
**=             x**=y           x=x**y

*/ 

//Bai 8: Toan tu chuoi - string operator

    // var firstName='Tien';
    // var lastName='Tran';

    // console.log(firstName + ' ' + lastName);    //Day la phep noi chuoi

    // var name = 'Tien';
    // name=name+' Tran';
    // console.log(name);

//Bai 9: Toan tu so sanh trong javascript (phan 1)

/*  Toan tu so sanh

==      -->         Bang
!=      -->         Khong bang
>       -->         Lon hon
<       -->         Nho hon
>=      -->         Lon hon hoac bang
<=      -->         Nho hon hoac bang

*/

    // var a=1;
    // var b=2;

    // if(a>=b) {
    //     console.log('a >= b');
    // }else{
    //     console.log('a < b');
    // }

    // var a = 'Tran Tien';
    // var b = 'Tran tien';
    // if(a==b){
    //     console.log('Hai chuoi bang nhau');
    // }else{
    //     console.log('Hai chuoi khac nhau')
    // }
    // //So anh chuoi co phan biey chu hoa chu thuong

//Bai10: Kieu du lieu boolean

    // var isSuccess=true;
    // console.log(isSuccess);
    // //kieu boolean thi khi xuat hien o tab console se hien mau xanh

    // var a=1;
    // var b=2;
    // var isSuccess=a>b;
    // console.log(isSuccess); //Se in ra ket qua la false

//Bai 11: Cau lenh dieu kien if-else
    
    //Tuong tu nhu C++
    //0, false, " " hoac ' ', undefined, NaN, null 
    //===>6 gia tri nay neu nam trong dieu kien thi se la FALSE
    //==>con lai la TRUE

//Bai 12:  Toan tu logical

    /*  Toan tu logic
        1.&&-and
        2. ||- or
        3. ! - not
    */

    //Tuong tu nhu C++

//Bai13: Kieu du lieu trong javascripts

/*  Kieu du lieu trong javascripts
1. Kieu du lieu nguyen thuy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined: Khai bao 1 bien ma ko gan gia tri cho no
    - Null: ko co gi
    - Symbol: 
2. Kieu du kieu phuc tap - Complex Data
    - Function
    - Object
*/
    //Vi du kieu symbol
    //var id = symbol('id');    //unique

    //Vi du kieu Function
        // var myFunction= function(){
        //     alert('HI! I AM TIEN TRAN!');
        // }
        // myFunction();   //De goi va chay function

    //Vi du kieu object: gom object va Array
    var myObject = {
        name: 'Tran Tien',
        age:21,
        address:'Lai An, TP Hue, Thua Thien Hue',
        myFunction: function(){

        }
    };
    console.log('myObject', myObject);

    var myArray = [
        'Javascripts',
        'PHP',
        'C++',
        'SQL'
    ];
    console.log(myArray);

    //Kiem tra kieu du kieu
    var a=1;
    var b='Tran Tien';
    console.log(typeof a);
    console.log(typeof b);
    //Typeof Null la object
    //Type cua Object va Array deu la Object


//Bai 14: Toan tu so sanh (phan 2)
/*
 1. === : So anh bang tuyet doi (phai cung kieu)
 2. !==

 */
    // var a=1;
    // var b='1';
    // console.log(a==b); //Ket qua la true
    // console.log(a===b); //Ket qua la false

    // console.log(a!=b); //Ket qua la false
    // console.log(a!==b);    //Ket qua la true

//Bai15: Toan tu logical va cau lenh dieu kien if- else

    // var a=1;
    // var b=2;
    // var result = a<b;
    // console.log('result', result);

    // if(result){
    //     console.log('A < B');
    // }else{
    //     console.log('A >= B');
    // }

    // var result1= 'A' && 'B' && 'C';
    // console.log(result1);   //Ket qua chay no in ra chu C
    // //Ket qua result lay tu trai sang phai: neu dau tien ko nam trong 6 gia tri dac biec(tra ve false) thi tiep tuc lay cai tiep theo va in ra cai cuoi, con neu nam trong 6 truong hop do thi lay no luon
    // var result2= null && 'A';
    // console.log(result2);   //Ket qua chay la null

    // var result3='A' && 'B' && NaN && 'D';
    // if(result3){
    //     console.log('Dieu kien dung!');
    // }else{
    //     console.log('Dieu kien sai!');
    // }
    // //Ket qua la 'Dieu kien sai!' vi tra ve NaN thi result3 la false->dk Sai tra lai ham trong else

    // //  || thi nguoc lai voi &&, neu ko nam trong 6 truong hop dac biec thi lay luon ko can quan tam den nhung thang tiep theo
    // var result4= 'A' || undefined || 'C';
    // console.log(result4);   //Ket qua la undefined;

//Bai16: Chuoi- String
/*  CHUOI TRONG JAVASCRIPTS

1. Tao chuoi
    - Cac cach tao chuoi
    - Nen dung cach nao? Ly do?
    - Kiem tra data type
2. Mot so case su dung backslash(\)
3. Xem do dai chuoi
4. Chu y do dai khi viet code
5 Template string ES6

*/
//1. Cach tao chuoi
    //var fullName1='Tran Tien';  //cach 1 - cach hay dung (thuong dung)
    //var name1= new string('Tran Tien'); //cach 2
    //Nen dung cach 1
//2. backlash(\)
    //Neu muon in ra : Ma sinh vien la '19T1021271'
    //var thongBao='Ma sinh vien la \'19T1021271\'';
    //console.log(thongBao);
//3. Xem do dai chuoi
    //var fullName='Tran Tien';
    //console.log(fullName.length);
//4. Do dai: neu nhieu qua thi su dung "+" trong chuoi sau do xuong hang de de nhin
//5. Template string Es6
    // var firstName='Tien';
    // var lastName='Tran';
    // console.log('Toi la:',firstName, lastName);   //Cach cu
    // console.log(`Toi la: ${firstName} ${lastName}`);    // cai trong ngoac nhon la string, neu la kieu du lieu khac thi no se tu dong convert sang string

//Bai17: Lam viec voi chuoi

    var myString='Hoc JS tai F8!';

//1. Length
    // console.log(myString.length);
//2. Find index

    // var myString = 'Hoc JS tai F8! JS va JS';
    // console.log(myString.indexOf('JS'));    //Tra ve 4, vi tri cua chu J, neu ko co tra ve -1;
    // // Neu co nhieu ki tu'JS' trong chuoi thi tra ve vi tri dau tien
    // //Neu muon tim kiem 'JS' thu 2 thi:
    // console.log(myString.indexOf('JS', 6));
    // //So truyen vao o sau la vi tri bat dau tim kiem (6>4).

    // //Neu muon tim chu 'JS' cuoi cung trong chuoi
    // console.log(myString.lastIndexOf('JS'));

    // //Neu muon tim kiem
    // console.log(myString.search('F8'));
    // //Cung giong IndexOf, nhung ko nhap dc tham so. Chi tim dc bieu thuc chinh quy.

//3. Cut string
    // //Cat lay chuoi JS
    // console.log(myString.slice(4,6));
    // //Cat tu chuoi Js den het
    // console.log(myString.slice(4));
    // //Cat tu dau den cuoi thi truyen vao 0
    
    // //Neu muon cat nguoc tu phai sang trai
    //     //neu dem tu phai sang trai thi dem: 0, -1, -2,...
    // console.log(myString.slice(-3,-1)); //Ket qua tra ve la 'F8'

//4. Replace
    // //vidu: sua 'JS' thanh 'Javascripts'
    // console.log(myString.replace('JS', 'Javascripts'));
    // //Neu muon thay nhieu chu 'JS' thanh 'Javascripts'
    // console.log(myString.replace(/JS/g, 'Javascripts'));

//5. Convert to Upper case
    // console.log(myString.toUpperCase());    //Chuyen tat ca sang chu hoa

//6. Convert to lower case
    // console.log(myString.toLowerCase()); //Chuyen tat ca sang chu thuong

//7. Trim (Loai bo khoang trang thua o hai dau)
    // console.log(myString.trim());

//8. Split (Cat 1 chuoi thanh Array)
    // var languages = 'Javascripts, PHP, ruby';
    // console.log(languages.split(', '));
    // //Vi du co 1 bien, va can cat tung chu cai
    // var language = 'Javascripts';
    // console.log(language.split(''));

//9. get a charater by index
    // const myString2 = 'Tien Tran';
    // console.log(myString2.charAt(0));   //Tra ve ki tu o vi tri truyen vao, neu ko co thi tra ve chuoi rong
    // //Cach 2
    // console.log(myString2[0]);  //Khi su dung dau [] neu khong tim thay thi no tra ve gia tri Undefined

//Bai18: So va lam viec voi so
    //Kieu so (Number) trorng java scripts
//1. Tao gia tri Number
    //Cac cach tao
        // //Cach 1 (thong thuong, hay dung)
        // var age=18;
        // var pi=3.14;
        // //cach 2 (khong khuyen khich)
        // var ortherNumber = new Number(9);
        // console.log(typeof ortherNumber);   //Tra ve se la kieu Objects

        // var result=20/'ABC';    //Phep toan ko hop le (NaN)
        // console.log(result);    //Tra ve NaN
        // //De kiem tra no la NaN
        // console.log(isNaN(result)); //Ket qua tra ve la true
//2. Lam viec voi Number
    //To string
        // var age=18;
        // var PI=3.14;

        // console.log(age.toString());    //Chuyen doi kieu Number sang kieu String. Ket qua mau den la string, mau xanh la Number
    //To Fixed
        // var PI = 3.141592654;
        // console.log(PI.toFixed());  //lam tron 0 chu so thap phan
        // console.log(PI.toFixed(2)); //Lam tron 2 chu so thap phan

//Bai19: Mang
    //1. Tao mang
        // //cach 1: Hay dung, khuyen khich dung
        // var lanGuages= [
        //     'javascripts',
        //     'PHP',
        //     'Ruby',    
        //     null, 
        //     undefined,
        //     function(){},  
        //     1,
        //     2  
        // ];  //Co the dua tat ca cac kieu du lieu vao array
        // console.log(lanGuages);

        // //Cach 2: it dung, de xay ra loi
        // var languages= new Array(
        //     'javascripts',
        //     'PHP',
        //     'Ruby',    
        //     null, 
        //     undefined,
        //     function(){},  
        //     1,
        //     2  
        // );
        // console.log(languages);
        // //Type cua Array la Object
        // //De kiem tra co phai la array hay khong
        // console.log(Array.isArray(languages));

    //2. Truy Xuat Mang

        // console.log(lanGuages.length);
        // console.log(lanGuages[2]);

//Bai20: Lam viec voi mang
    // var languages=[
    //     'Javascripts',
    //     'PHP',
    //     'C/C++',
    //     'Ruby',
    // ];
    // //To String: chuyen array sang string, ngan cach boi dau ","
    //     console.log(languages.toString());
    // //Join: chuyen Array sang string, ngan cach boi dau 'dau can truyen vao'
    //     console.log(languages.join('_'));
    // //Pop:Xoa phan tu cuoi mang, tra lai phan tu ma no da xoa
    //     console.log(languages.pop());   //ket qua in ra la ruby;
    //     console.log(languages); //chi con 3 phan tu
    //     //Khi xoa het thi no se tra ve gia tri undefined
    // //Push: Them phan tu cuoi mang( 1 hoac nhieu), va tra ve gia tri so phan tu
    //     console.log(languages.push('Java', 'SQL server'));
    //     console.log(languages);
    // //Shift: Xoa di 1 phan tu o dau mang, tra ve phan tu ma no da xoa, in ra no
    //     console.log(languages.shift()); //Ket qua la javascrripts
    //     console.log(languages);
    //     //Khi xoa het thi se tra ve gia tri Undefined
    // //Unshift: Them 1 hoac nhieu phan tu vao dau mang, tra ve do dai cua mang
    //     console.log(languages.unshift('Python', 'Nodejs')); //Ket qua tra ve la 6
    //     console.log(languages);
    // //Splicing: Xoa, cat, chen phan tu moi vao mang
    //     languages.splice(1, 2);
    //     console.log(languages);
    //     //Tham so 1: vi tri dat con tro o dau
    //     //Tham so 2: xoa di may phan tu
    //         //Chen:
    //     languages.splice(1,0, 'Tran Tien');
    //     console.log(languages);
    //     //Tham so 1: vi tri dat con tro
    //     //0: de chen
    //     //phan tu can chen
    //         //Xoa va thay the
    //         languages.splice(1, 2, 'Dart', 'Java');
    //         console.log(languages);
    // //concat: noi 2 array
    //     var language2=[
    //         'MySQL',
    //         'C#',
    //     ]
    //     console.log(languages.concat(language2));   //Hop nhat vao mang language
    // //slicing: cat mang
    //     console.log(languages.slice(1,2)); //cat tu vi tri a(1) den vi b(2)
    //     console.log(languages.slice(1));    //cat tu dau den cuoi mang

//Bai21: Ham
    //Quy tac dat ten ham: a-z, A-Z, 0-9, _ , $ , ko dc dat so o gia tri dau tien

    // function showDialog() {
    //     // code
    //     alert('Hi! Welcome to my Website!');
    // }

    // showDialog();   //goi Ham

//Bai22: Tham so trong ham

    // function writeLog(message, message2) {
    //     console.log(message, message2);
    // }
    // //message la tham so
    // writeLog('Test meassage','so 1');   //Neu ham 2 tham so ma ch i truyen vao 1 tham so thi van chay dc, gia tri sau hien thi se la undefined

    // //Arguments
    // function coutLog() {
    //     console.log(arguments);
    // }
    // coutLog('log 1', 'log 2', 'log 3');
    
    // //For: Gia su in ra cach nhau 
    // function inLog(){
    //     var mang='';    //dinh nghia 1 mnag rong
    //     for(var param of arguments){
    //        //mang+=param+ ' ';
    //        mang+=`${param} - `;
    //     }
    //     console.log(mang);
    // }
    // inLog('Log 1', 'log 2', 'log 3');

//Bai23: Return trong Ham
    // var isConfirm = confirm('Yeu cau?');
    // console.log(isConfirm); //Tra ve true Neu nhan OK, Tra ve False neu nhan Cancel

    // function cong(a, b) {
    //     return a+b; //Neu ko return thi no se tra ve gia tri Undefined
    //     //console.log('fsdgfdj');//Nhung cau lenh duoi return se bo qua va k dc thuc thi

    // }   
    // var kq=cong(2,3);
    // console.log('Ket qua phep cong la:',kq);
    //return co the tra ve bat cu kieu du lieu gi

//Bai24: Hieu hon ve function
    //Khi dat nhieu ham cung 1 ten: no se goi den ham cuoi cung trong code
    //khai bao bien trog ham nhu binh thuong
    //Dinh nghia ham trong ham: 

        // function showMessage(){
        //     function showMessage2(){
        //         console.log('Message 2');
        //     }
        //     showMessage2();
        // }
        // showMessage();
    
//Bai 25: Cac loai Function
    //Declaration function: co the goi ham truoc khi no dc dinh nghia
        // function showMessage(){
        //     console.log('Declaration function');
        // }
        // showMessage();

    //Expresstion function: ko the goi ham truoc khi no dc dinh nghia
                            //thuong 3 kieu ben duoi, dat ten cho de hieu
        // var showMessage2=function testName(){
        //     console.log('Expresstion function');
        // }
        // showMessage2();

        // setTimeout(function testName(){

        // })

        // var myObject={
        //     myFunction: function testName(){

        //     }
        // }
    //Arrow function: len nang cao se hoc

//Bai26: Polyfill
        //Tao 1 ham ma trinh duyet cu ko ho tro, chi co trinh duyet moi moi ho tro, no dc goi la Polyfill,

        // if(!String.prototype.includes){
        //     String.prototype.includes=function(search, start){
        //         'use strict';
        //         if (search instanceof RegExp){
        //             throw TypeError('first argument must not be a RegExp');
        //         }
        //         if(start===undefined) {
        //             start=0;
        //         }
        //         return this.indexOf(search, start)!==-1;
        //     };
        // }

        // 'Javascript course'.includes('Javascript', 0);  //Tim kiem trong chuoi Javascript course co chuoi Javascript khong

//Bai27: Objects
    // //Them 1 bien vao object
    // var pass ='password';

    // var myInfo={
    //     name: 'Tran Tien',
    //     age: 21,
    //     degree: 'University',
    //     address: 'TP Hue, Thua Thien Hue',
    //     [pass]: 'Tien1245',  //Them bien
    //     getName: function(){
    //         return this.name;   //this.name la myInfo.name
    //     },
    //     getAge: function(){
    //         return this.age;
    //     }
    // };
    // myInfo.email = 'Trantien04012k1@gmail.com'; //Them 1 truong moi email vao object
    // console.log(myInfo);

    // //Lay value ra ngoai
    // console.log(myInfo.name);   //Ney key ko co thi tra ve gia tri undefined
    // //hoac console.log(myInfo['name']);
    // //hoac
    // var myKey='address';
    // console.log(myInfo[myKey]);
    
    // //Xoa 1 key, value
    // delete myInfo.age;
    // //lay ham trong object:
    // console.log(myInfo.getName());

    // //Trong truong hop la function thi goi no la --> phuong thuc, giong nhu phuowng thuc cua oop tren C++
    // //Trong truong hop du lieu thi goi la --> thuoc tinh

    // //Cung giong nhu class trong oop C++

//Bai28: Object Constructor : co the hieu la xay dung doi tuong

    // //Ham tao; coi no nhu ban thiet ke, mo ta thiet ke cua doi tuong
    // //No cung gan giong nhu ham tao trong C++
    // function User(firstName,lastName, avatar){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    //     this.avatar=avatar;

    //     this.getName=function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // var author=new User('Tien', 'Tran', 'Avatar');  //doi tuong
    // var user =new User('Son', 'Dang', 'Avatar');    //doi tuong

    // author.title='Chia se danh gia';
    // user.comments='noi dung binh luan';

    // console.log(author);
    // console.log(user);
    
    // //Tra ve mo ta cua ban thiet ke
    //     //console.log(author.constructor);
    
    // console.log(author.getName());
    // console.log(user.getName());

//Bai29: Objects prototype - Basic (Nguyen mau doi tuong)

    // function User(firstName,lastName, avatar){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    //     this.avatar=avatar;

    //     this.getName=function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }

    // var user1=new User('Tien', 'Tran', 'Avatar');  //doi tuong
    // var user2 =new User('Son', 'Dang', 'Avatar');    //doi tuong
    
    // console.log(user1);
    // console.log(user2);

    // //Them thuoc tinh className='F8' vao
    // User.prototype.className='F8';  //Neu them ma ko co prototye thi khi console se tra ve gia tri undefined
    
    // //Them phuong thuc getAvatar
    // User.prototype.getAvatar=function(){
    //     return this.avatar;
    // };
    //     //sau khi them thi o console se hien className va getavatar o phan __prototype__
    // console.log(user1.className);
    // console.log(user1.getAvatar());

//Bai30: Doi Tuong Date

    // var date= new Date();

    // console.log(typeof date);   //Trave Objects
    // console.log(date);  //Tra ve thoi gian hien tai

    // //neu tao bang cah: var date= Date(); thi khi typeof se tra ve string nhung k the truy xuat
    // var year=date.getFullYear();    //Tra ve year
    // var month=date.getMonth()+1;  //Tra ve 0->11, nen khi can lay thi +1
    //     //console.log(month);
    // var day=date.getDate();
    //     //console.log(day);

    // console.log(`${day}/${month}/${year}`);

//Bai31: Lenh re nhanh IF-ELSE

    // var date=8;

    // if(date===2){
    //     console.log('Thu 2');
    // }else if(date===3){
    //     console.log('Thu 3');
    // }else if(date===4){
    //     console.log('thu 4');
    // }else if(date===5){
    //     console.log('thu 5');
    // }else if(date===6){
    //     console.log('thu 6');
    // }else if(date===7){
    //     console.log('thu 7');
    // }else{
    //     console.log('Chu Nhat');
    // }

//Bai32: Lenh re nhanh switch

    // var date=8;
    
    // //Neu gia tri cua date ko nam trong switch thi k in ra
    // //Neu muon in ra khi k lot vao case: dung default
    // //Neu ko co break, thi tinh tu case dung, no se lot vao tat ca caa case ben duoi 

    // switch(date){
    //     case 2:
    //         console.log('Thu 2');
    //         break;
    //     case 3:
    //         console.log('Thu 3');
    //         break;
    //     case 4:
    //         console.log('Thu 4');
    //         break;
    //     case 5:
    //         console.log('Thu 5');
    //         break;
    //     case 6:
    //         console.log('Thu 6');
    //         break; 
    //     case 7:
    //         console.log('Thu 7');
    //         break;
    //     case 8:
    //         console.log('Chu Nhat');
    //         break;
    //     default:
    //         console.log('Sai Ngay!');
    // }

    //Su dung:  khi can so sanh tinh dung sai--> dung if else, <3 gia tri thi dung if else
    //          khi dc cho truoc nhung gia tri (biet truoc) thi dung case, thong thuong  >3 gia tri thi dung case 

//Bai33: Toan tu 3 ngoi - Ternary operator

    // var course={
    //     name: 'Javascript',
    //     coin: 250
    // }
    
    // //Khi ko su dung toan tu 3 ngoi
    // if(course.coin>0){
    //     console.log(`${course.coin} coins`);
    // }else{
    //     console.log('Free');
    // }

    // //Khi su dung toan tu 3 ngoi: tuong tu nhu trong C++
    // var result=course.coin>0 ? `${course.coin} coins` : 'Free';
    // console.log(result);

//Bai34: Gioi thieu vong lap
    
    //Vong lap - Loop
    /*
    1. for - Lap voi dieu kien dung
    2. for/in - Lap qua key cua doi tuong
    3. for/of - lap qua value cua doi tuong
    4. while - Lap khi dieu kien dung
    5. do/while - Lap it nhat 1 lan, sau do lap khi dieu kien dung

    */

//Bai35: Vong lap for (for loop)

    // for(var i=1; i<=5; i++){
    //     console.log(i);
    // }

//Bai36: Vong lap for - Phan 2 
//Bai37: vong lap for - Phan 3
    
    //Ung dung for de lay cac phan tu cua 1 mang
    // var array=[
    //     'javascripts',
    //     'PHP',
    //     'MySQL',
    //     'Python',
    //     'C/C++'
    // ];

    // for(var i=0; i<array.length; i++){
    //     console.log(array[i]);
    // }

//Bai38: Vong lap for/in (Thuong su dung de lay key cua 1 doi tuong)
    // var myInfo={
    //     name:'Tran Tien',
    //     age:21,
    //     degree:'University',
    //     phone:'0345476075',
    //     email:'trantien04012k1@gmail.com'
    // };

    // for(var key in myInfo){
    //     //code
    //     console.log(key);   //in ra key
    //     console.log(myInfo[key]);   //in ra gia tri cua key
    // }

//Bai39: VOng lap for/of (thuong su dung de lay ra cac phan tu cua mang hoac lay ra tung chu cai cua 1 chuoi hoac cung co the su dung voi object(nhung phai bien doi))

    // //Truong hop su dung voi mang
    // var ngoaiNgu=[
    //     'Javascripts',
    //     'PHP',
    //     'MySQL'
    // ];

    // for (var value of ngoaiNgu){
    //     console.log(value);
    // }

    // //Truong hop su dung voi chuoi
    // var ngonNgu='Javascripts';
    // for(var value of ngonNgu){
    //     console.log(value); //Moi lan lap no se in ra 1 chu cai
    // }

    // //Truong hop su dung voi Objects

    // var myProfiles={
    //     name: 'Tran Tien',
    //     age: 18,
    //     address: 'TP Hue, Viet Nam'
    // }

    // //cach1:
    // console.log(Object.keys(myProfiles)); //Tra ve 1 mang cac key
    
    // for(var value of Object.keys(myProfiles)){
    //     console.log(myProfiles[value]);
    // }
    
    // //cach 2
    // for(var value of Object.values(myProfiles)){
    //     console.log(value);
    // }

//Bai40: Vong lap while 
    // //in cac gia tri tu 0->5
    // var i=1;
    // while(i<=5){
    //     console.log(i);
    //     i++;
    // }
    // //In ra cac phan tu cua mang
    // var myMang=[
    //     'java',
    //     'PHP',
    //     'C/C++'
    // ]
    // var j=0;
    // while(j<myMang.length){
    //     console.log(myMang[j]);
    //     j++;
    // }

//Bai41: Vong lap do while
    // //In ra cac gia tri tu 1->5
    // var i=1;
    // do{
    //     console.log(i);
    //     i++;
    // }while(i<6)

    // //Vi du: nap the cho den khi thanh cong
    // var j=0;
    // var isSucceSS=false;
    // do{
    //     j++;
    //     console.log('Nap the lan ' + j);
    //     //Thanh cong
    //     if(false){
    //         isSucceSS=true;
    //     }
    // }while(!isSucceSS && j<=3)

//Bai42: Break va continue trong vong lap
    // //Dung break de in ra tu 0->5, trong khi vong lap chay tu 0->10
    // for(var i=0; i<10; i++){
    //     console.log(i);
    //     if(i>=5){
    //         break;
    //     }
    // }
    
    // //Dung continue, de in ra cac so chan tu 0->10
    // for(var i=0; i<10; i++){
    //     if(i%2!==0){
    //         continue;
    //     }
    //     console.log(i);
    // }

//Bai43: Vong lap long nhau (Nested loop)

    // //IN ra tung gia tri cua tung phan tu trong mang da cho
    // var myMang=[
    //     [1,2],
    //     [3,4],
    //     [5,6]
    // ];

    // for(var i=0; i<myMang.length; i++){
    //     for(var j=0; j<myMang[i].length; j++){
    //         console.log(myMang[i][j]);
    //     }
    // }

//Bai44: Them vi du ve vong lap

    // //In ra 1 day so thu tu tu 10 ve 1
    // for(var i=10; i>0; i--){
    //     console.log(i);
    // }

    // //IN ra cac gia tri cach nhau 5 don vi
    // for(var i=0; i<20; i+=5){
    //     console.log(i);
    // }

//Bai45: Lam viec voi mang (phan 2)

// Array methods
    
    // var courSE=[
    //     {
    //         id: 1,
    //         name: 'Javascripts',
    //         coins: 250
    //     },
    //     {
    //         id: 2,
    //         name: 'HTML/CSS',
    //         coins: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Python',
    //         coins: 0
    //     },
    //     {
    //         id: 4,
    //         name:'Python',
    //         coins: 400
    //     }
    // ];

    // //forEach(); cung giong nhu for, duyet qua tung phan tu cua mang roi in ra
    // courSE.forEach(function(course, index){
    //     console.log(index, course);
    // });   

    // //every(): huu ich de kiem tra tat ca cac phan tu trong mang phai thoa dk gi do, tra ve kieu boolean
    // var isFree=courSE.every(function(course, index){
    //     return course.coins===0;
    // });
    // console.log(isFree);    //Ket qua la false

    // //some(): huu ich de kiem tra xem co it nhat 1 phan tu trong mang phai thoa dk gi do, tra ve kieu boolean
    // var isFrees=courSE.some(function(course, index){
    //     return course.coins===0;
    // });
    // console.log(isFrees);

    // //find(): Tim kiem xem tron mang co phan tu thoa dieu kien
    //     //Kiem tra phan tu nao ma return la true thi lay phan tu do, neu kiem tra ko co thi tra ve undefined
    //     //find() chi tra ve cho chung ta 1 phan tu
    // var courseName=courSE.find(function(course, index){
    //     return course.name==='Python';
    // });
    // console.log(courseName);    //Tra ve 1 phan tu

    // //filter(): giong find()
    //     //No se tra ve tat ca phan tu no thoa man
    // var courseName1=courSE.filter(function(course, index){
    //     return course.name==='Python';
    // });
    // console.log(courseName1);    //Tra ve tat ca phan tu thoa dk

    // //Hai ham map() va reduce() se noi sau

//Bai46: Array map() method trong javascript

    // var courSE=[
    //     {
    //         id: 1,
    //         name: 'Javascripts',
    //         coins: 250
    //     },
    //     {
    //         id: 2,
    //         name: 'HTML/CSS',
    //         coins: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Python',
    //         coins: 0
    //     },
    //     {
    //         id: 4,
    //         name:'Python',
    //         coins: 400
    //     }
    // ];

    // //map(): Bo sung, thay doi cac phan tu

    // var newCourse=courSE.map(function(course, index, originArray){
    //     //console.log(course);
    //     return {
    //         id: course.id,
    //         name: `Khoa hoc: ${course.name}`,
    //         course: course.coins,
    //         coinText: `Gia: ${course.coins}`,
    //         index: index,
    //         originArray: originArray,   //Tra ve cai cu truoc khi bi tahy doi
    //     }
    // });
    // console.log(newCourse); //Tat ca deu la Undefined neu ko return, no return cai gi thi se ta ve cai do

    // //Neu chi muon lay ra ten khoa hoc
    // var newCourseName=courSE.map(function(course, index){
    //     //console.log(course);
    //     return course.name;
    // });
    // console.log(newCourseName);

//Bai47: Aray reduce methods

    // //Khi muon nhan ve 1 gia tri duy nhat sau khi tinh toan va xu ly tren phan tu trong Array
    // var courSE=[
    //     {
    //         id: 1,
    //         name: 'Javascripts',
    //         coins: 250
    //     },
    //     {
    //         id: 2,
    //         name: 'HTML/CSS',
    //         coins: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Python',
    //         coins: 0
    //     },
    //     {
    //         id: 4,
    //         name:'Python',
    //         coins: 400
    //     }
    // ];

    // //Vidu: tra ve tong so coins

    // //TH: dung vong lap
    // var totalCoin=0;
    // for(var course of courSE){
    //     totalCoin+=course.coins;
    // }
    // console.log(totalCoin);

    // //TH dung reduce()
    //     //Khoi tao gia tri - ban dau cung giong nhu khoi tao bien tong ban dau la 0
    // var i=0;
    // var totalCoins= courSE.reduce(function(accumulator, currentValue, currentIndex, originArray){
    //     i++;
    //     var total= accumulator+ currentValue.coins;
    //     console.table({
    //         'Luot chay: ': i,
    //         'Bien luu tru: ': accumulator,
    //         'Gia khoa hoc: ': currentValue.coins,
    //         'Tich tru duoc: ': total
    //     });
    //     // console.log(currentValue);  //Gia tri
    //     // console.log(currentIndex);  //Chi muc
    //     // return 100;
    //     return accumulator+currentValue.coins;
    // }, 0);
    // console.log(totalCoin);
    // //Lan chay dau tien la lan chay ma accumulator dc gan gia tri bang gia tri ma chung ta truyen o cuoi reduce()
    // //No return cai gi thi no luu tru cai do
    // //Cac khai bao bien total va console.table({}) chi la du a vao de hieu hon, neu tra ve tong thi chi can return 

//Bai48: Array reduce() methods qua vidu
    // //VI du o bai hoc truoc, co the su dung bien khac
    // var courSE=[
    //     {
    //         id: 1,
    //         name: 'Javascripts',
    //         coins: 250
    //     },
    //     {
    //         id: 2,
    //         name: 'HTML/CSS',
    //         coins: 0
    //     },
    //     {
    //         id: 3,
    //         name: 'Python',
    //         coins: 0
    //     },
    //     {
    //         id: 4,
    //         name:'Python',
    //         coins: 400
    //     }
    // ];

    // var i=0;
    // var totalCoin=courSE.reduce(function(total, course){
    //     i++;
    //     console.log(i, total);
    //     return total+course.coins;
    // }, 0);   //0 nay la gia tri ko bat buoc, tuy nhien no se anh huong den qua trinh thuc hien
    //         //Khi khong co gia tri nay thi se lay gia tri dau tien ca mang lam gia tri khoi tao, luc nay currentValue se la gia tri thu 2
    
    // console.log(totalCoin);

    // //Nhung bai toan ko can truyen gia trị khoi tao
    // var numbers=[100,200, 220, 200, 480];
    // var totalsum= numbers.reduce(function(total, number){
    //     return total+number;
    // });
    // console.log(totalsum);

    // //Flat -"Lam phang mang tu Depth Arrray - Mang sau"
    // var depthArray=[1, 2, [3,4], 5, 6, [7, 8, 9]];
    // var flatArray=depthArray.reduce(function(flatOutput, depthItem){
    //     return flatOutput.concat(depthItem);
    // }, []); //Truyen vao mang rong
    // console.log(flatArray);

    // //Lay ra cac khoa hoc va dua vao 1 mang moi
    // var topics=[
    //     {
    //         topic: 'Front-end',
    //         course: [
    //             {
    //                 id: 1,
    //                 title: 'HTML, CSS'
    //             },
    //             {
    //                 id: 2,
    //                 title: 'Javascripts'
    //             }
    //         ]
    //     },
    //     {
    //         topic: 'Back-end',
    //         course: [
    //             {
    //                 id: 1,
    //                 title: 'PHP'
    //             },
    //             {
    //                 id: 2,
    //                 title: 'NodeJS'
    //             }
    //         ]
    //     },
    // ];

    // var newCourses= topics. reduce(function(courses,topic ){
    //     return courses.concat(topic.course);
    // }, []);
    // console.log(newCourses);

//Bai 49: string/Array includes() methods

    // //includes methods: co san voi string va array
    // var titlE= 'Responsive web design';
    // console.log(titlE.includes('web',1)); //Ket qua tra ve true, co the truyen them vi tri bat dau tim kiem

    // var khoaHoc=[
    //     'java',
    //     'php',
    //     'sql'
    // ];
    // console.log(khoaHoc.includes('java'));  //Ket qua tra ve la true, cung co the truyen vi tri bat dau tim kiem

//Bai50: Math Object

    // //1. Math.PI: tra lai so PI
    //     console.log(Math.PI);
    // //2. Math.round(): Lam tron
    //     console.log(Math.round(1.3));   //kq la 1
    // // Math.abs(): gia tri tuyet doi
    //     console.log(Math.abs(-9.5));
    // //4. Math.cell(): Lam tron tren
    //     console.log(Math.ceil(4.1));    //Kq la 5
    // //5. Math.floor(): lam tron duoi
    //     console.log(Math.floor(4.9));   //Kq la 4
    // //6. Math.random(): Tra ve 1 so thap phan ngau nhien nho hon 1
    //     console.log(Math.random());
    //     //Ung dung de random so tu 0 den 9
    //     console.log(Math.floor(Math.random()*10));
    //     //Ung dung de random in ra voi ti le deu
    //         var random_deu=Math.floor(Math.random()*5);
    //         var bonus=[
    //             '10 coin',
    //             '20 coin',
    //             '30 coin',
    //             '40 coin',
    //             '50 coin',
    //         ];
    //         console.log(bonus[random_deu]); //Day la ti le deu
    //     //Ung dung de random in ra voi ti le k deu
    //     var random_Kodeu=Math.floor(Math.random()*100); 
    //     if (random_Kodeu < 5){
    //         console.log('Cuong hoa thanh cong');
    //     }else{
    //         console.log('Cuong hoa ko thanh cong');
    //     }
    //     //Thuong ung dung khi lam game
    // //7. Math.min(): nho nhat
    //     console.log(Math.min(24, 56, 30, -100));  //kq la -100
    // //7. Math.max(): lon nhat
    // console.log(Math.max(24, 56, 30, -100));  //kq la 56

//Bai51: Hieu ve Javascript Callback Function | Callback Trong Javascript | Javascript Callback
    //Callback la ham dc truyen qua doi so
    //Khi goi ham khac

    // function myFunction(param){
    //     if (typeof param==='function'){
    //         param('Hoc lap trinh');
    //     }
    // }
    // function myCallback(value){
    //     console.log('Value: ', value);
    // }
    // myFunction(myCallback); // Ket qua in ra la: Value: Hoc lap trinh

//Bai52: Callback - Phan 2
    // var khoaHOC=[
    //     'java',
    //     'php',
    //     'ruby',
    //     'sql'
    // ];
    // var htmls=khoaHOC.map(function(khoahoc){
    //     return `<h2>${khoahoc}</h2>`;
    // });
    // console.log(htmls.join(''));

    // //Neu ko dung ham map() co san, thi ta dung cach sau:
    // Array.prototype.map2=function(callback){
    //     var output=[];
    //     var arrayLength= this.length;

    //     for(var i=0; i<arrayLength; i++){
    //        var result= callback(this[i], i);
    //        output.push(result);
    //     }
    //     return output;
    // }

    // var htmls_2=khoaHOC.map2(function(khoahoc){
    //     return `<h2>${khoahoc}</h2>`;
    // });
    // console.log(htmls_2.join(''));

//Bai53: Empty Elements of array
//Bai: 54, 55, 56, 57:.....

//Bai58: DE QUY
    //1. Xac dinh diem dung
    //2. Tao ra diem dung
//vd:
    // var array_notSX = ['a', 'b', 'c', 'a', 'b', 'c'];
    // console.log(new Set(array_notSX));  //kq tra ve la {'a', 'b', 'c'}

    // function deQuy(){
        
    // }

    // deQuy();

    // //In dem nguoc tu 5 ve 1
    // function countDown(num){
    //     if (num > 0){
    //         console.log(num);
    //         return countDown(num-1);
    //     }
    //     else{
    //         return num;
    //     }
    // }

    // countDown(5);   //kq in ra la 5 4 3 2 1

    // //vd: in ra cac phan tu cua mang su dung de quy

    // function loop(start, end, cb){
    //     if(start <= end){
    //         cb(start);
    //         return loop(start+1, end, cb);
    //     }
    // }
    
    // var array=['javascript', 'PHP', 'C/C++'];
    
    // loop(0, array.length-1, function(index){
    //     console.log(array[index]);
    // });
    
    // //vd: tinh giai thua
    //     //Ko dung de quy, dung vong lap
    // function giaiThua(so){
    //     var s=1;
    //     for (var i=so; i>0; i--){
    //         s=s*i;
    //     }
    //     return s;
    // }
    // console.log(giaiThua(6));
        
    //     //Dung de quy

    // function giaiThua_DQ(so){
    //     if(so > 0) {
    //         return so*giaiThua_DQ(so-1);
    //     }
    //     return 1;
    // }
    // console.log(giaiThua_DQ(6));

//Bai59: HTML DOM la gi?

    //dom: documents object models

    //HTML DOM có 3 thành phần
    //1. elements: thẻ tag, ví dụ: h1,..
    //2. attribute: thuộc tính trong thẻ tag, ví dụ: class, id, title, src,..
    //3. Text: Đoạn chữ, 

    //Node: là điểm giao nhau, có thể là elements, atttribult hoặc text
    //javascript có thể thay đổi elements, attribute, Text
    
//Bai60: HTML DOM và DOM API

    //HTML DOM là quy chuẩn mà W3C đưa ra, khác javascript
    //js cung cấp bộ công cụ truy xuất vào HTML DOM

    //javascript: Browser | Server (NodeJS)

    //Application programing interface

    //Browser: HTML -> DOM -> WEB API

//Bai61: DOM Document Object trong javascript

    //document là đại diện cho toàn bộ website
    //console.log(document);
    //document.write('Hello Bro'); // sẽ hiển thị trong trang web và ghi vào thẻ body (sau phần tử cuối cùng)

//Bai62: Get element methods

    // //1. Element: ID, class, tag, CSS selector, HTML colection
    //     //ID
    // var headingNode = document.getElementById('heading');
    // //console.log(headingNode); kq hiển thị ở console là <h1 id="heading">HTML DOM</h1>
    
    // console.log({
    //     element: headingNode
    // }); //kq hiển thị đưa vào objects

    //     //Class
    // var headingNodes = document.getElementsByClassName('heading');
    // console.log(headingNodes);  //trả vể 2 thẻ h2, ko trả về trực tiếp như ID, trả về HTML collection

    //     //Tag Name
    // var headingNodes_Tag = document.getElementsByTagName('h2');
    // console.log(headingNodes_Tag);
    //     //CSS Selector
    // var headingNode_CSS = document.querySelector('.box .heading-2:first-child');
    // console.log(headingNode_CSS);  //Lấy ra thằng heading 2 đầu tiên

    //         //Trường hợp trả về tất cả
    // var headingNode_CSS_ALL = document.querySelectorAll('.box .heading-2');
    // console.log(headingNode_CSS_ALL);   //Trả về tất cả dưới dạng NodeList (Gần giống mảng)
    // console.log(headingNode_CSS_ALL[3]);  //Trả về heading-2 thứ 4
        
    //         //form
    // console.log(document.forms); //Khi truy xuất form thì ko cần get element, mà chỉ cần truy xuất trực tiếp tơi form
    // console.log(document.forms[0]); //Trả về form đầu tiên (form-1)-- Truy xuất theo index như trong mảng
    // console.log(document.forms['form-1']); //Trả về form đầu tiên (form-1)
    // console.log(document.forms.testForm); //Nếu ten from phù hợp với quy tắc đặt tên trong js, thì gọi như này vẫn dc, vì 2 TH trên sai quy tắc đặt tên nên ko được

    //     //HTML collection
    // console.log(document.anchors); //Chứa thẻ a (fanpage)

    // //Thường dùng id, class hơn các trường hợp tagName, HTML collection
    
//Bai63: Get element methods 2

    //Bài toán: select những thẻ li trong box-1 và box-2 ở index.html
        //Cách 1
    // var listItemNodes= document.querySelectorAll('.box-1 li');
    // console.log(listItemNodes);

    //     //cách 2
    //     var boxNode=document.querySelector('.box-1')
    //         //công việc 1: sử dụng boxNode
    //     console.log(boxNode);
    //         //công việc 2: sử dụng tới các li elements là con của box-1
    //     console.log(boxNode.querySelectorAll('li'));
    //     console.log(boxNode.querySelector('p'));

//Bai64: Get element methods 3
    
    //1. geElementById: Trả về trực tiếp element (lay it)
    //2. getElementsByClassName
    //3. getElementsByTagName
    //4. querySelector: Tra ve truc tiep element (lay nhieu)
    //5. querySelectorAll

    //6. HTML collection: the img, form, a,...
    //7. document.write: rat it khi su dung (in theo vi tri dat file js trong index.html)

//Bai65: Attribute node & Text node

    //Atribute node: La thuoc tinh nam trong the mo (id, class, title, lang, charset, name, content,...)
    //Text node: doan chu nam trong element

//Bai 66: DOM Attibute
    
    //Them, sua, xoa 1 Attribute
        // var headingElememt=document.querySelector('h1');
        // console.log(headingElememt);
 
    //Them
        //cach1: su dung setter, gan truc tiep
            // headingElememt.title='Heading'; //Them title co ten la Heading vao, no chi co khi doan javascript thuc thi, nhung trong source code se ko co title nay
            // headingElememt.id='Heading';
            // headingElememt.className='Heading';
        
        //cach 2
            // headingElememt.setAttribute('class', 'Heading');

        //Lay Attribute
            // console.log(headingElememt.getAttribute('class')); 
            // console.log(headingElement.title);// lay truc tiep neu hop le (Attribute thuoc element do)

//Bai67: InnerText vs TextContent Property

    //Text node: Lay ra sua doi noi dung Text node
        //InnerText(Chi nhien thi nhung gi nhin thay tren web), textContent(Lay nguyen ban Text node, ke ca nhung noi dung bi an)
            //Dau tien, phai lay ra Element truoc da
        // var headingElememt=document.querySelector('h1');
        // console.log(headingElememt);

        // console.log(headingElememt.innerText);  //in ra ten HTML_ID
        // console.log(headingElememt.textContent);  //in ra ten HTML_ID, cx giong nhu tren

        //     //sua doi
        // headingElememt.innerText='New Heding'; //chi dc thay doi khi file Js dc chay, ko lam thay doi sourse code
        // headingElememt.textContent='New Heding'; //chi dc thay doi khi file Js dc chay, ko lam thay doi sourse code

//Bai68: InnerHTML Propertype

    //Su dung them 1 Element vao 1 Element trong DOM, don thoi cung co the them 1 attribute va 1 text node vao
        //innerHTML
            // var boxElement=document.querySelector('.box');
            // console.log(boxElement);

    // boxElement.innerHTML='<h5 title="Heading_Insert">Heading_insert</h5>';    //Them 1 element vao
    // console.log(document.querySelector('h5').innerText);    //Hien thi Heading_Insert trong console
    // console.log(boxElement.innerHTML);  //Lay ra

        //outerHTML(trong thuc te it khi su dung)
    //console.log(boxElement.outerHTML); //Lay ra het trong box
    // boxElement.outerHTML='<h5 title="Heading_Insert">Heading_insert</h5>';    //se them de vao the box, tuy nhien the box vann con va kho console.log ra thi no van con, vi no con luu trong bo nho, nhung trong dom that ko con nua

//Bai69: Node properties

    // var boxElement=document.querySelector('.box');
    // console.log(boxElement);

    // console.log([boxElement]);  //Hiển thị tất cả thuộc tính khác của boxElement
    // // Nói thêm về các thuộc tính khác trong boxElement

//Bai70: DOM CSS

    // //đối tượng CSS style
    // var boxElement=document.querySelector('.box');
    // console.log(boxElement.style);  //Những style gần giống như CSS

    // boxElement.style.widld='100px'; //set chieu ngang 100 px
    // boxElement.style.height='200px'; //set chieu doc 200px
    // boxElement.style.backgroundColor='blue'; //set backgroundColor laf mau xanh
    // //viet nhu nay dai dong, trung lap

    // //cach viet khac
    // Object.assign(boxElement.style, {
    //     widld:'100px',
    //     height: '200px',
    //     backgroundColor: 'green'

    // });

    // //get ra backgroundColor
    // console.log(boxElement.style.backgroundColor);  //green

//Bai71: ClassList Property
    
    // //Là thuộc tính của element node, có nghĩa là chỉ có thể truy cập vào thuộc tính này khi đã lấy ra được element node
    //     //các phương thức thường được sử dụng: add, contains, remove, toggle
    //     //1. add: Thêm class vào element
    //     //2. contains: kiểm tra 1 class có nằm trong element hay không
    //     //3. remove: xóa bỏ 1 class khỏi element
    //     //4. toggle: nếu đang có 1 class ở elemnt, thì gọi đến toggle sẽ xóa cái đó, còn nếu ko có class đó thì nó sẽ thêm vào
    // var boxElement=document.querySelector('.box');
    // console.log(boxElement.classList);  

    // console.log(boxElement.classList.length); //Lấy ra độ dài cảu class( tương tự nhưn mảng, vì có 1 claa 'box' nên độ dài là 1, nếu 2 phần tử trùng name thì vẫn tính là 1)
    // console.log(boxElement.classList[0]);   //trả vể phần tử đầu tiên 'box'
    
    // // add và contains: ví dụ, add thêm class red vào thẻ div box, sau đó kiểm tra có tồn tại hay không
    // boxElement.classList.add('red');    //vì trong class red ở trên ở thẻ style sẽ chuyển chữ thành màu đỏ
    // console.log(boxElement.classList.contains('red')); //kiểm tra có hay không, trả về true

    // // remove: ví dụ, xóa class red
    // boxElement.classList.remove('red'); //Trả lại màu như cũ, vì đã xóa class red rồi

    // //toggle: có thì bỏ, ko có thì thêm
    // boxElement.classList.toggle('red');
    //     //ví dụ thêm: làm chữ nhấp nháy
    //     setInterval(()=>{
    //         boxElement.classList.toggle('red');
    //     }, 1000);

    // //có thể áp dụng toggle để đóng mở tab menu trong những trình duyệt web

//Bai72: DOM events: những sự kiện (những hành vi của trình duyệt hoặc người dùng) diễn ra trong dom

    //Những sự kiện diễn ra trong quá trình người dùng tương tác với website
    // 1. Attribute events
    
        //ví dụ: khi click vào DOM events thì sẽ hiển thị ra 1 dãy số ở console
            //đã viết ở phần index.htme(h4)
        //ví dụ: khi click vào sẽ hiện chữ DOM events ở console
            //đã viết ở phần index.htme(h5)

    // 2. Assign event using the element node
        
        // var h6Element=document.querySelector('h6');
        // console.log(h6Element);

        //     //lắng nghe sự kiện onclick

        // h6Element.onclick=function(){
        //     console.log(Math.random()); //khi click vào thì mới được thực thi
        // };

        // //ví dụ: duyệt qua và in ra nội dug bên trong (thẻ span trong ví dụ) của tất cả các thẻ h6

        // var h6Elements=document.querySelectorAll('h6');
        // console.log(h6Elements);

        // for(var i=0; i<h6Elements.length; i++){
        //     h6Elements[i].onclick=function(e){
        //         console.log(e.target);
        //     };
        // }

//Bai73: DOM events example

//1. Input / select
    //sử dụng element node
    
    var inputValue;

        //xử lý với type=text
    var inputElement=document.querySelector('input[type="text"]');
    //console.log(inputElement);

    inputElement.oninput= function(e){
        inputValue=e.target.value;
    };  //gõ đến đâu hiện ở console đến đó, nếu thực hiện câu lệnh console.log
        //dùng biến inputValue để lưu giá trị
    
        //xử lý với type=checkbox
    var inputElement_check=document.querySelector('input[type="checkbox"]');   
    
    inputElement_check.onchange= function(e){
        console.log(e.target.checked);
    };

        //xử lý với select
    var inputElement_select=document.querySelector('select');
    inputElement_select.onchange= function(e){
        console.log(e.target.value);
    };  //in ra value_1 hoặc value_2 hoặc value_3 tùy thuộc vào lựa chọn

//2. Key up / down
    //onkeyup: nhấn phím lên
    //onkeydown: nhấn phím xuống
    //onkeypress: nhấn giữ phím

    var inputElement=document.querySelector('input[type="text"]');
    // inputElement.onkeydown=function(e){ //or keyup
    //     console.log(e.target.value);
    // }

    inputElement.onkeyup=function(e){ //or keyup
        console.log(e.which);
        switch(e.which){
            case 27:
                console.log('Exit');
                break;
        }
    }   //Nhấn esc sẽ in ra Exit vì Esc có mã là 27

    //lắng nghe sự kiện trực tiếp ở document
    document.onkeydown=function(e){
        switch(e.which){
            case 27:
                console.log('Exit');
                break;
            case 13:    //Enter
                console.log('search');
                break;
        }
    }
    //bắt sự kiện khi vào trang web bấm vào esc sẽ in ra Exit
    //bắt sự kiện nhấn enter sẽ hiện ra search

//Bai74: PreventDefault and StopPropagation

//1. preventDefault: loại bỏ hàng vi mặc định của trình duyệt trên 1 thẻ HTML
    // var aElement= document.anchors;//lấy thẻ a có name
    // console.log(aElement);

    //Bài toán: nếu có f8.edu.vn thì cho chuyển, ko thf ko cho chuyển
    var aElement=document.links;    //cũng giống như trên, lấy tất cả thẻ a
    
    for(var i=0; i< aElement.length; ++i){
        aElement[i].onclick=function(e){

            if(!e.target.href.startsWith('https://f8.edu.vn'))
            e.preventDefault(); //Nếu khác thì ko cho chuyển trang như mặc định
        }
    }


//2. stopPropagation: loại bỏ sự kiện nổi bọt

    //loại bỏ hành vi
    document.querySelector('.click').onclick=function(){
        console.log('DIV');
    }

    document.querySelector('button').onclick=function(e){
        //để ngăn chặn khi click vào click here! thì chỉ cần hiện ra click here!, ko hiện ra DIV
        e.stopPropagation();    //để ngăn chặn
        console.log('Click here!');
    }

//Bai75: Event listener

//1. Event Listener
//2. JSON
//3. Fetch
//4. DOM location
//5. Local storgage
//6. Session storage
//7. Coding convention
//8. Best Practices
//9. Mistages
//10. Performance

//1. Xử lý nhiều việc khi 1 event xảy ra
//2. Lắng nghe / Hủy bỏ lắng nghe

    var btn = document.getElementById('btn');
    console.log(btn);
        //Khi sử dụng DOM events ở các bài học trước

    // btn.onclick=function(){
    //     //Việc 1
    //     console.log('Việc 1');

    //     //Việc 2
    //     console.log('Việc 2');
        
    //     //Việc 3
    //     alert('Việc 3')


    // }

        //Khi sử dụng Event Listener
    btn.addEventListener('click', function(e){
        console.log('Event 1');
    });
    btn.addEventListener('click', function(e){
        console.log('Event 2');
    });
    btn.addEventListener('click', function(e){
        console.log('Event 3');
    });

    function viec_n(){
        console.log('Việc n');
    }
    btn.addEventListener('click', viec_n);
    setTimeout(function(){
        btn.removeEventListener('click', viec_n);
    }, 3000); //remove sự kiện , sau 3s thì click sẽ ko ra nữa

//Bai76: Form validation (xử lý form)
//....


//Bai83; JSON là gì? JSON được sử dụng như thế nào trong javascript?

//1. JSON là một định dạng dữ liệu (chuỗi)
//2. JSON: JavaScript Object Notation
//3. JSON: Number, String, BooLean, Null, Array, Object
//4. Thao tác Mã hóa / giải mã (Encode / decode) 
//Stringify: Từ javascript sang JSON
//Parse: Từ JSON sang Javascript types

    //var json = '["PHP", "javascript"]';   //Array
    //var json = '["name":"Tran Tien", "age": 21]'; //Object

    //Parse
    var a='1';
    var b='true';
    console.log(JSON.parse(a)); //số 1
    console.log(JSON.parse(b)); //true kiểu boolean

    //Stringify
    console.log(JSON.stringify(1)); //Chuỗi '1'
    console.log(JSON.stringify(true)); //Chuỗi 'true'
    console.log(JSON.stringify({
        name: 'Tran Tien',
        age: 21,
        test: function(){}
    }));    //trả về chuỗi {"name": "Tran Tien", "age": 21} và ko hiện function

//Bai 84, 85: Promise (sync async), Promise javascript, học promise trong javascript
    //- Sync (Đồng bộ): Chạy theo luồng, tuần tự
    
    //- Async (Bất đồng bộ):  setTimeout, setInterval, fetch, XMLHttpRequest, đọc file, Request Animation frame, sleep. Vì vậy dùng call back để xử lý những thao tác bất đồng bộ.
    
    //- Nỗi đau: Những vấn đề
        //Callback hell: Có thể giải quyết bằng promise
        //Pyramid of doom: 
    
    //- Lý thuyết, cách hoạt động:
    //Trạnh Thái:
        //1. Pedding: Trạng thái chờ
        //2. Fullfill: Trạng thái thành công
        //3. reject: Trạng thái thất bại

        var promise= new Promise(   //Tạo 1 Promise
            //Executor
            function(resolve, reject){
                //Logic
                //Thành công: resolve()
                //Thất bại: reject()
            }
        );

        promise
            .then(function(){   //Khi resolve thành công thì trả về đây
                console.log('success!');
            })
            .catch(function(){  //Khi reject từ chối thì lọt vào đây
                console.log('failure!');
            })
            .finally(function(){    //Thành công hay thất bại đều trả về
                console.log('Done!');
            })
    
    //Promise sinh ra để giúp xử lý những thao tác bất động bộ (nếu k có promise thì ta thường sử dụng callback, tuy nhiên sẽ hay xảy ra callback hell, code sẽ bị rối, khó nhìn, nên ta dùng promise (ES6 version))
    //Để tạo ra 1 promise ta sẽ dụng 1 từ khóa nêu promise, và trong contructor của nó ta sẻ truyền vào 1 Executor function(), trong đó nhận dc 2 tham số (resolve và reject)
    //resolve() ta sẽ gọi nó khi mà thao tác xử lý thành công
    //reject() ta sẽ gọi khi mà thao tác xử lý thất bại
    //Khi sử dụng promise thì đối tượng tạo ra sẽ qua các phương thức .then và .catch
    //.then: Nhận callback function khi mà promise resolve()
    //.catch: Nhận call back function khi mà promise reject()