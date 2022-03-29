function Validator(formSelector){
    var _this=this;
    var formRules ={};  //tao object rong de chua name, rules
 
    function getParent(element, selector){
        while(element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element=element.parentElement;
        } 
    }



    

    /**
     * Quy uoc tao rules
     * - Neu co loi thi return `eror message`
     * - Neu ko co loi thi return `undefined`
     */
    var validatorRules={
        required: function(value){  //value o day la gia tri nhap vao de kiem tra
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function(value){  
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email không hợp lệ'
        },
        min: function(min){  
            return function(value){  
                return value.length>= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            }
        },
        max: function(max){  
            return function(value){  
                return value.length<= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        },
    };


    
     //Lay ra form element trong form theo  `formSelector`
    var formElement = document.querySelector(formSelector);

    //Chi xu ly khi co Element trong dom
    if(formElement){
        //console.log(formElement);   //in ra <form action="POST class="form" .... </form>
        var inputs= formElement.querySelectorAll('[name][rules]');  //Lay tat ca nhung the input co name va rules, Tra ve 1 node list gom 3 thanh phan: fullname, email, password
        for (var input of inputs){
           
            var rules=input.getAttribute('rules').split('|'); //Tách những rules được ngăn cách bởi dấu | và gán nó vào trong rules
            for(var rule of rules){
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(rule.includes(':')){
                    ruleInfo = rule.split(':'); //Nếu 1 trong các rule chứa dấu : thì tách nó ra, trong trường hợp này là min:6;
                    rule = ruleInfo[0]; //min
                }
                
                var ruleFunc=validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc=ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name]=[ruleFunc];
                }
            }


            //Lắng nghe sự kiện để Validate (blur, change)

            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        //Hàm thực hiện validate
        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules){
                errorMessage =  rule(event.target.value);
                if(errorMessage) break;
            }

            //Nếu có lỗi thì hiển thị Message lỗi ra UI của website
            if(errorMessage){

                var formGroup = getParent(event.target, '.form-group');
                if (formGroup){
                    formGroup.classList.add('invalid'); //add invalid vào, khi không nhập hoặc sai thì sẽ hiện đỏ
                    
                    var formMessage=formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText=errorMessage;
                    }
                }
            }
            return !errorMessage;
        }
        // Hàm Clear Message lỗi
        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');

                if(formMessage){
                    formMessage.innerText = '';
                }
            }
        }
    }


     //Xử lý hành vi submit form
    formElement.onsubmit= function(event){
        event.preventDefault();    //Ngăn chặn hành vi mặc định

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        
        for (var input of inputs){
            if (!handleValidate({ target: input })){
                isValid=false;
            }
        }

        //Khi không có lỗi thì submit form
        if(isValid){
            if(typeof _this.onsubmit==='function'){
                //code như bên cách 1 để trả về giá trị nhập vào của người dùng
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce(function(values, input){
                    
                        switch(input.type){
                            case 'radio':   //Chọn 1 trong các lựa chọn
                                values[input.name]= formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':    //Chọn dc nhiều cái (trong Bài này dùng radio để thể hiện giới tính, nên checkbox để viết thêm phòng trường hợp khi cần thiết)
                                if(!input.matches(':checked')) {
                                    values[input.name]='';
                                    return values;
                                }

                                if(!Array.isArray(values[input.name])){
                                    values[input.name]=[];
                                }
                                values[input.name].push(input.values);
                                break;
                            case 'file':
                                values[input.name]=input.files;
                                break;
                            default:
                                values[input.name]=input.value;
                        }

                    return values;
                }, {});

                //Gọi lại hàm onsubmit và trả về kèm giá trị của form
                _this.onsubmit(formValues);
            }else{
                formElement.submit();
            }
        }
    }

    //console.log(formRules);
}