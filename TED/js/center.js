function searchWord() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchList = document.getElementById('searchList');
    searchList.innerHTML = "";

    // 从外部JSON文件加载数据
    fetch('../datas/output_word.json')
        .then(response => response.json())
        .then(data => {
            data.filter(item => item.word.toLowerCase().includes(searchInput)).forEach(item => {
                const li = document.createElement('li');
                li.innerHTML =`<span>单词</span> - ${item.word} - <span>对应TED来源</span> - ${item.numbers.join(', ')}`;
                searchList.appendChild(li);
            });
        })
        .catch(err => console.error('Error loading JSON file: ', err));
}

// 页面加载时默认显示频率最高的前30条数据
window.addEventListener('load', function() {
    fetch('../datas/output_word.json')
        .then(response => response.json())
        .then(data => {
            const top30Data = data.sort((a, b) => b.count - a.count);
            top30Data.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML  = `<span>单词</span> - ${item.word} - <span>对应TED来源</span> - ${item.numbers.join(', ')}`;
                document.getElementById('searchList').appendChild(li);
            });

            const words = data;
            let resultContainer = document.getElementById('result-container');
            let resultWords = words.filter(word => word.word.split(" ").length > 1);
            resultWords = resultWords.map(word => word.word).sort();
            displayResult(resultWords);
            

            function displayResult(words) {
                // 清除之前的结果
                itemList.innerHTML = '';
                const resultList = document.getElementById('itemList');
                // const resultList = document.createElement('ul');
                words.forEach(word => {
                    const listItem = document.createElement('li');
                    listItem.textContent = word;
                    resultList.appendChild(listItem);
                });

                itemList.appendChild(resultList);
            }
        })
        .catch(err => console.error('Error loading JSON file: ', err));
});

function resetPage() {
    location.reload();
}

function openSouGouSearch(word) {
    const existingIframe = document.querySelector('iframe');
    const existingCloseButton = document.querySelector('.close-button');

    if (existingIframe) {
        document.body.removeChild(existingIframe);
    }
    if (existingCloseButton) {
        document.body.removeChild(existingCloseButton);
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://fanyi.sogou.com/text?keyword=${encodeURIComponent(word)}`;
    iframe.style.position = 'fixed';
    iframe.style.top = '10%';
    iframe.style.left = '10%';
    iframe.style.width = '80%';
    iframe.style.height = '85%';
    iframe.style.border = '2px solid #bfc1a9';
    iframe.style.zIndex = '9999';
    iframe.style.borderRadius = '10px'; 
    document.body.appendChild(iframe);

    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '关闭';
    closeButton.classList.add('close-button');
    closeButton.style.position = 'fixed';
    closeButton.style.top = '5%';
    closeButton.style.right = '5%';
    closeButton.style.zIndex = '10000';
    closeButton.style.border = '1.2px solid #bfc1a9';
    closeButton.style.borderRadius = '5px'; 
    closeButton.style.fontFamily = 'serif';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(iframe);
        document.body.removeChild(closeButton);
    });
    document.body.appendChild(closeButton);
}

// 点击搜索结果触发打开百度搜索功能
document.getElementById('searchList').addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        const word = clickedElement.innerHTML.split(' - ')[1];
        openSouGouSearch(word);
    }
});