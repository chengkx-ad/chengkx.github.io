// 获取id为board的元素
const board = document.querySelector("#board"); 

// 循环创建102个便利贴
for (let i = 0; i < 102; i++) {
    // 创建div元素作为便利贴的容器，并添加类名"stickynote"
    const sticky = document.createElement("div"); 
    sticky.classList.add("stickynote");  
    if((i + 1) % 6 == 0)
    {
        // 红
        sticky.style.background='#f0c2a2';
    }
    else if((i + 1) % 6 == 5)
    {
        // 黄
        sticky.style.background='#fffbc7';
    }
    else if((i + 1) % 6 == 4)
    {
        // 蓝
        sticky.style.background='#aed0ee';
    }
    else if((i + 1) % 6 == 3)
    {
        // 粉
        sticky.style.background='#f9d3e3';
    }
    else if((i + 1) % 6 == 2)
    {
        // 绿
        sticky.style.background='#bfd1b1';
    }
    else if((i + 1) % 6 == 1)
    {
        // 紫
        sticky.style.background='#dcc7e1';
    }
    // 创建一个textarea元素作为便利贴的文本框
    const text = document.createElement("textarea"); 
    // 设置输入类型为文本
    text.type = "text"; 
    // 设置占位符文本为"Drag Me"
    text.placeholder = "Drag Me"; 
    // 设置最大字符长度为100
    text.maxLength = 100; 
    // 添加类名"stickynote-text"到便利贴文本框
    text.classList.add("stickynote-text"); 

    // 将文本框添加到便利贴容器中
    sticky.appendChild(text); 
    // 将便利贴容器添加到板块中
    board.appendChild(sticky); 
}

// 自适应便利贴文本框高度
document.querySelectorAll('textarea').forEach(textarea => {
    function setHeight() {
        // 先重置高度
        textarea.style.height = 'auto'; 
        // 根据实际内容设置高度
        textarea.style.height = `${textarea.scrollHeight}px`; 
    }
    setHeight();
     // 输入时自动调整高度
    textarea.addEventListener('input', setHeight);
    // 内容改变时自动调整高度
    textarea.addEventListener('change', setHeight); 
});

// 创建可拖动便利贴的对象
const draggables = Draggable.create(".stickynote", {
    // 设置拖动方向为水平和垂直
    type: "x,y", 
    // 拖动开始时的回调函数
    onDragStart: function () { 
        // 启用惯性动画，外部js库
        InertiaPlugin.track(this.target, "x"); 
        // 拖动开始时的动画效果
        grabNoteAnimation(this.target); 
        const inputField = this.target.querySelector('.stickynote-text');
        // 修改文本框的占位符文本
        inputField.placeholder = "Stick Me"; 
    },
    // 拖动中的回调函数
    onDrag: function () { 
        // 获取水平方向上的速度
        let dx = InertiaPlugin.getVelocity(this.target, "x"); 
        // 调用GSAP库
        gsap.to(this.target, { 
            // 根据速度旋转便利贴(所以会有越快越歪)
            rotation: dx * -0.003, 
            duration: 0.5,
            ease: "elastic.out(1.8, 0.6)",
            // 动画完成后的回调函数
            onComplete: function () { 
                // 旋转回初始状态
                gsap.to(this.target, { 
                    rotation: 0,
                    duration: 0.5,
                    ease: "elastic.out(1.8, 0.6)"
                });
            }
        });
    },
     // 拖动结束时的回调函数
    onDragEnd: function () {
        releaseNoteAnimation(this.target); 
        const inputField = this.target.querySelector('.stickynote-text');
        // 贴好了，就是"Write On Me"
        inputField.placeholder = "Write On Me"; 
    },
    // 避免拖动时误触发内部元素的点击事件
    dragClickables: false, 
});

// 拖动便利贴时的抓取动画
function grabNoteAnimation(target) {
    // 创建动画时间线对象
    const timeline = gsap.timeline(); 
    timeline
        .to(target, {
            rotateX: 30, 
            boxShadow: "-1px 14px 40px -4px rgba(0, 0, 0, 0.12), inset 0 14px 20px -12px rgba(0, 0, 0, 0.3)", // 添加阴影效果
            duration: 0.3
        })
        .to(target, {
            // 将便利贴旋转回初始状态
            rotation: 0, 
            rotateX: 5,
            // 缩放便利贴
            scale: 1.1, 
            boxShadow: "-1px 14px 40px -4px rgba(0, 0, 0, 0.12), inset 0 24px 30px -12px rgba(0, 0, 0, 0.3)", // 调整阴影效果
            // 弹性缓动效果
            ease: "elastic.out(0.8, 0.5)" 
        }, 0.15);
    timeline.play();
}

// 释放便利贴时的动画
function releaseNoteAnimation(target) {
    const timeline = gsap.timeline(); 
    timeline
        .to(target, {
            rotateX: 30, 
            boxShadow: "-1px 10px 5px -4px rgba(0, 0, 0, 0.02), inset 0 24px 30px -12px rgba(0, 0, 0, 0.2)", // 调整阴影效果
            duration: 0.3
        })
        .to(target, {
            // 还原缩放
            scale: 1 
        }, 0)
        .to(target, {
            // 将便利贴旋转回初始状态
            rotateX: 5, 
            boxShadow: "-1px 10px 5px -4px rgba(0, 0, 0, 0.02), inset 0 24px 30px -12px rgba(0, 0, 0, 0.2)", // 调整阴影效果
            ease: "elastic.out(0.8, 0.5)"
        }, 0.2);
    timeline.play();
}

// 双击便利贴删除
document.querySelectorAll(".stickynote").forEach((sticky) => {
    sticky.addEventListener("dblclick", function() {
        const dragInstance = draggables.find((instance) => instance.target === sticky);
        if (dragInstance) {
            dragInstance.disable();
        }
        sticky.remove();
    });
});

// 输入框获得焦点时禁用拖动
// 输入框失去焦点时重新启用拖动
document.querySelectorAll(".stickynote-text").forEach((textField) => {
    textField.addEventListener("focus", () => {
        draggables.forEach((instance) => {
            if (instance.target.contains(textField)) {
                instance.disable();
            }
        });
    });

    textField.addEventListener("blur", () => {
        draggables.forEach((instance) => {
            if (instance.target.contains(textField)) {
                instance.enable();
            }
        });
    });
});
