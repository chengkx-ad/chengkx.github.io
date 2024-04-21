document.getElementById('openBtn').addEventListener('click', function() {
    const existingIframe = document.querySelector('iframe');
    const existingCloseButton = document.querySelector('.close-button');

    if (existingIframe) {
        document.body.removeChild(existingIframe);
    }
    if (existingCloseButton) {
        document.body.removeChild(existingCloseButton);
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.bilibili.com/video/BV1wL411M7m9?p=2`;
    iframe.sandbox='allow-forms allow-scripts allow-same-origin allow-popups'
    iframe.style.position = 'fixed';
    iframe.style.top = '3%';
    iframe.style.left = '10%';
    iframe.style.width = '80%';
    iframe.style.height = '94%';
    iframe.style.border = '2px solid #bfc1a9';
    iframe.style.zIndex = '9999';
    iframe.style.borderRadius = '10px'; 
    document.body.appendChild(iframe);

    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.style.position = 'fixed';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.top = '3%';
    closeButton.style.right = '7%';
    closeButton.style.zIndex = '10000';
    closeButton.style.border = '1.2px solid #bfc1a9';
    closeButton.style.borderRadius = '50%'; 
    closeButton.style.fontFamily = 'serif';
    closeButton.style.fontSize = '15px';
    closeButton.style.color = 'white';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.padding = '2px';
    closeButton.style.backgroundColor = '#d24735';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(iframe);
        document.body.removeChild(closeButton);
    });
    document.body.appendChild(closeButton);
  });