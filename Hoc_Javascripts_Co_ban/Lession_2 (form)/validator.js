// Đối tượng `Validator`
function Validator(options){
    function getParent(elenment, selector){
        while (elenment.parentElement){
            if (elenment.parentElement.matches(selector)){
                return elenment.parentElement;
            }
            elenment=elenment.parentElement;
        }
    }

    var selectorRules = {}; //gán bằng objects rỗng để lưu lại các rules 
    
   //Hàm thực hiện validate
    function validate(inputElement, rule){     //Hàm thực hiện việc hiện ra lỗi hoặc bỏ lỗi đi
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        //Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule & kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i=0; i<rules.length; ++i){
            switch(inputElement.type){
                case 'radio': 
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else{
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    //Lấy elenment của form cần validate
    var formElement=document.querySelector(options.form);
    if (formElement){
        //Khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault();

            var isFormValid = true;

            //lặp qua từng rule và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);

                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid){
                // Trường hợp submit với javascript
               if (typeof options.onsubmit === 'function'){
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
                options.onsubmit(formValues);
               }
               // Trường hợp submit với hành vi mặc định
               else{
                   formElement.submit();
               }
            }
        }


        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blue, input)
        options.rules.forEach(function(rule){
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement){
                inputElement.onblur=function(){
                    validate(inputElement, rule);
                }

                //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });

            //Lưu lại các Rules cho mỗi input

            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector]=[rule.test];
            }
            //selectorRules[rule.selector] = rule.test;
        });
    }


}

// Định nghĩa các rules 
// Nguyen tac cua cac rule: Khi co loi thi tra ra message loi, khi hop le thi ko tra ra cai gi ca (undefined)
Validator.isRequired=function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : message || 'Vui lòng nhập trường này';   //.trim() loại bỏ các dấu cách

        }
    };
}

Validator.isEmail=function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Email không hợp lệ'
        }
    };
}

Validator.minLength=function(selector, min, message){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined: message ||`Vui lòng nhập tối thiểu ${min} ký tự`
        }
    };
}

Validator.isConfirmed=function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue () ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    };
}
