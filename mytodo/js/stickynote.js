const board = document.querySelector("#board");
let highestZIndex = 1;

function createStickyNote() {
    const sticky = document.createElement("div");
    sticky.classList.add("stickynote");
    sticky.style.zIndex = highestZIndex;

    const colorMap = ['#dcc7e1', '#bfd1b1', '#f9d3e3', '#aed0ee', '#fffbc7', '#f0c2a2'];
    sticky.style.backgroundColor = colorMap[board.children.length % 6];

    const text = document.createElement("textarea");
    text.type = "text";
    text.placeholder = "Drag Me";
    text.maxLength = 100;
    text.classList.add("stickynote-text");
    sticky.appendChild(text);
    board.appendChild(sticky);

    text.addEventListener('input', () => {
        text.style.height = 'auto';
        text.style.height = (text.scrollHeight) + 'px';
    });

    let isDragging = false;
    let startX, startY, offsetX, offsetY;

    sticky.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        offsetX = e.clientX - sticky.getBoundingClientRect().left;
        offsetY = e.clientY - sticky.getBoundingClientRect().top;
        highestZIndex++;
        sticky.style.zIndex = highestZIndex;
    });

    sticky.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        offsetX = touch.clientX - sticky.getBoundingClientRect().left;
        offsetY = touch.clientY - sticky.getBoundingClientRect().top;
        highestZIndex++;
        sticky.style.zIndex = highestZIndex;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            sticky.style.left = e.clientX - offsetX + 'px';
            sticky.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            sticky.style.left = touch.clientX - offsetX + 'px';
            sticky.style.top = touch.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    sticky.addEventListener("dblclick", () => {
        sticky.remove();
    });

    text.addEventListener("focus", () => {
        isDragging = false;
    });

    text.addEventListener("blur", () => {
        isDragging = false;
    });
}

for (let i = 0; i < 102; i++) {
    createStickyNote();
}