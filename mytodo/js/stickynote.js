// 获取id为board的元素
const board = document.querySelector("#board");
let highestZIndex = 1;
// 循环创建102个便利贴
for (let i = 0; i < 102; i++) {
    const sticky = document.createElement("div");
    sticky.classList.add("stickynote");

    sticky.style.zIndex = highestZIndex; // 将初始 z-index 设置为当前最高值

    

    // 设置背景颜色
    const colorIndex = i % 6;
    const colorMap = ['#dcc7e1', '#bfd1b1', '#f9d3e3', '#aed0ee', '#fffbc7', '#f0c2a2'];
    sticky.style.backgroundColor = colorMap[colorIndex];

    // 创建一个textarea元素作为便利贴的文本框
    const text = document.createElement("textarea");
    text.type = "text";
    text.placeholder = "Drag Me";
    text.maxLength = 100;
    text.classList.add("stickynote-text");

    // 将文本框添加到便利贴容器中
    sticky.appendChild(text);
    // 将便利贴容器添加到板块中
    board.appendChild(sticky);

    // 自适应便利贴文本框高度
    text.addEventListener('input', function () {
        text.style.height = 'auto';
        text.style.height = (text.scrollHeight) + 'px';
    });

    // 创建可拖动便利贴的功能
    let isDragging = false;
    let offsetX, offsetY;

    sticky.style.zIndex = highestZIndex;
    sticky.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - sticky.getBoundingClientRect().left;
        offsetY = e.clientY - sticky.getBoundingClientRect().top;
        highestZIndex++; // 增加最高 z-index 值
        sticky.style.zIndex = highestZIndex; // 将被点击的便利贴的 z-index 设置为更新后的最高值
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            sticky.style.left = e.clientX - offsetX + 'px';
            sticky.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            // sticky.style.zIndex = 1; // 恢复层级
        }
    });

    // 双击便利贴删除
    sticky.addEventListener("dblclick", () => {
        sticky.remove();
    });

    // 输入框获得焦点时禁用拖动，失去焦点时重新启用
    text.addEventListener("focus", () => {
        isDragging = false;
    });

    text.addEventListener("blur", () => {
        isDragging = false;
    });
}