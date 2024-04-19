(() => { 
    // 锁定元素
    const form = document.querySelector(".form"); 
    const input = form.querySelector(".form__input"); 
    const ul = document.querySelector(".toDoList"); 

    // 代办提交时
    form.addEventListener('submit', e => {
        // 阻止表单的默认提交行为
        e.preventDefault(); 
        // 生成唯一的id
        let itemId = String(Date.now()); 
        // 获取输入框中的待办事项内容
        let toDoItem = input.value; 
        // 如果待办事项列表已经有6个或以上的项
        if (ul.children.length >= 6) { 
            alert("喵喵大王处理不过来啦！"); 
            return;
        }
        // 将待办事项添加到页面中
        const li = document.createElement('li'); 
        li.setAttribute("data-id", itemId); 
        li.innerText = toDoItem; 
        ul.appendChild(li);
        
        // 清空输入框
        input.value = ''; 
    });

    // 点击删除时
    ul.addEventListener('click', e => {
        // 获取被点击项的id
        let id = e.target.getAttribute('data-id') 
        // 如果被点击的不是待办事项，则退出函数
        if (!id) return 
        // 弹出确认对话框，确认是否删除该待办事项
        if (confirm("好耶，喵喵大王又做完一件事♪(^∇^*)")) { 
            // 从页面中删除该待办事项
            var li = document.querySelector('[data-id="' + id + '"]'); 
            ul.removeChild(li); 
        }
    });
})();