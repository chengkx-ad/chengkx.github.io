// 加载 JSON 文件
fetch('./output_word.json')
.then(response => response.json())
.then(data => {
    // 数据加载成功后的处理逻辑
    const words = data;
    let resultContainer = document.getElementById('result-container');
    
    tedBtn.addEventListener('click', () => {
        const inputNumber = prompt('请输入TED打卡号:');
        if (!inputNumber) {
            return;
        }
        let resultWords = words.filter(word => word.numbers.includes(parseInt(inputNumber)));
        if (resultWords.length === 0) {
            alert("右一同学，你还没读到那篇TED嘞");
            return;
        }
        resultWords = resultWords.map(word => word.word).sort();
        displayResult(resultWords);
    });

    phraseBtn.addEventListener('click', () => {
        let resultWords = words.filter(word => word.word.split(" ").length > 1);
        resultWords = resultWords.map(word => word.word).sort();
        displayResult(resultWords);
    });

    randomBtn.addEventListener('click', () => {
        let randomIndex = Math.floor(Math.random() * words.length);
        let randomWord = words[randomIndex].word;
        displayResult([randomWord]);
    });

    // 在页面中显示结果
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
.catch(error => {
    console.error('Error loading JSON file: ', error);
});
// 点击搜索结果触发打开搜索功能
document.getElementById('itemList').addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        const word = clickedElement.innerHTML;
        openSouGouSearch(word);
    }
});