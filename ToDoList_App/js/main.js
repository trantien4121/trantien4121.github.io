window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert('Please fill out the Task!');
            return;
        }

        const task_el = document.createElement('div');  /*Tạo thẻ div, add class= 'task' vào*/ 
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');  /*Tạo thẻ div, add class= 'content' vào*/ 
        task_content_el.classList.add('content');
        
        task_el.appendChild(task_content_el);   /*Tạo Element con có cấu trúc như HTML , đưa class='content' vào trong class='task'*/

            /*Tạo Cấu trúc của thẻ input*/ 
            const task_input_el = document.createElement('input');     /*Tạo thẻ input có type='text, class='text', value = input.value(task)  */
            task_input_el.classList.add('text');
            task_input_el.type = 'text';
            task_input_el.value = task;
            task_input_el.setAttribute('readonly', 'readonly');     /*Tạo attribute readonly */

        task_content_el.appendChild(task_input_el); /*Tạo Element con có cấu trúc như HTML, đưa cấu trúc của thẻ input vào trong class='content */
            
            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');
                
                /*Render Edit-button*/ 
                const task_edit_el = document.createElement('button');
                    task_edit_el.classList.add('edit');
                    task_edit_el.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'+ ' Edit';
            
                /*Render Delete-button*/ 
                const task_del_el = document.createElement('button');
                    task_del_el.classList.add('delete');
                    task_del_el.innerHTML = '<i class="fa-regular fa-trash-can"></i>'+ ' Delete';

                /*Render Done-button*/
                const task_done_el = document.createElement('button');
                    task_done_el.classList.add('done');
                    task_done_el.innerHTML = '<i class="fa-regular fa-circle-check"></i>'+ ' Done';
        
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_del_el);
        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);

        list_element.appendChild(task_el);      /*Tạo Element con có cấu trúc như HTML , đưa class='task' vào trong class='tasks'*/
        
        input.value = '';   /*Sau khi nhập xog và submit thì cho nó rỗng, đưa về trạng thái ban đầu*/

        task_edit_el.addEventListener('click', ()=>{
            if (task_edit_el.className.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerHTML = '<i class="fa-regular fa-floppy-disk"></i>'+ ' Save';
                task_edit_el.classList.remove('edit');
                task_edit_el.classList.add('save')

            } else {
                task_edit_el.classList.remove('save');
                task_edit_el.classList.add('edit')
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'+ ' Edit';
            }
        })

        task_del_el.addEventListener('click', ()=>{
            list_element.removeChild(task_el);
        })

        task_done_el.addEventListener('click', ()=>{
            //Chưa hoàn thành
            task_input_el.classList.add('checked');     /*Add class check */
            task_edit_el.classList.remove('edit');      /*Remove class edit */
            task_edit_el.innerHTML = '';                /*Xóa edit, cho innerHTML là rỗng */

            task_done_el.innerHTML = '<i class="fa-solid fa-circle-check"></i>'+ ' Done';   /* Chuyển icon done từ regular sang solid*/
        })
    })
})