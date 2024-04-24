// 加载 JSON 文件
fetch('./output_word.json')
.then(response => response.json())
    .then(data => {
        // 数据加载成功后的处理逻辑
        const words = data;
        const resultContainer = document.getElementById('result-container');
        const itemList = document.getElementById('itemList');
        let currentIndex = 0;
        let shuffledWords = [];

        tedBtn.addEventListener('click', () => {
            const inputNumber = prompt('请输入TED打卡号:');
            if (!inputNumber) {
                return;
            }
            if (isNaN(inputNumber) || parseInt(inputNumber) <= 0) {
                alert("哦呦呦，瞅瞅你输入了个啥╭(╯^╰)╮");
                return;
            }
            let resultWords = words.filter(word => word.numbers.includes(parseInt(inputNumber)));
            if (resultWords.length === 0) {
                alert("呆瓜右一，你还没读到那篇TED哇");
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
            if (shuffledWords.length === 0 || currentIndex === shuffledWords.length) {
                const inputNumber = prompt('想抽查哪一篇~请输入TED打卡号:');
                if (!inputNumber) {
                    return;
                }
                if (isNaN(inputNumber) || parseInt(inputNumber) <= 0) {
                    alert("哦呦呦，瞅瞅你输入了个啥╭(╯^╰)╮");
                    return;
                }
                let resultWords = words.filter(word => word.numbers.includes(parseInt(inputNumber)));
                if (resultWords.length === 0) {
                    alert("呆瓜右一，你还没读到那篇TED哇");
                    return;
                }
                TEDnum = inputNumber;
                TEDlength = resultWords.length;
                currentIndex = 0;
                shuffledWords = shuffleArray(resultWords.map(word => word.word));
            }
            const randomWord = shuffledWords[currentIndex];
            currentIndex++;
            leavenum = TEDlength-currentIndex;
            displayResult([randomWord])
    
            // const remainingWordsCount = shuffledWords.length - currentIndex;
            const flag = document.getElementById('flag');
            const message = document.getElementById('message');
            flag.style.display = 'block';
            message.innerHTML = `当前在抽查的是第<span>${TEDnum}</span>篇TED，<br>该篇还剩下<span>${leavenum}</span>个单词待抽查。`; 
        });

        chongxuan.addEventListener('click', () => {
            shuffledWords.length = 0
            randomBtn.click();
        });

        function displayResult(words) {
            itemList.innerHTML = '';
            flag.style.display = 'none';
            const resultList = document.createElement('ul');
            words.forEach(word => {
                const listItem = document.createElement('li');
                listItem.textContent = word;
                resultList.appendChild(listItem);
            });
            itemList.appendChild(resultList);
        }

        // 在页面中显示结果
        itemList.addEventListener('click', function(event) {
            const clickedElement = event.target;
            if (clickedElement.tagName === 'LI') {
                const word = clickedElement.innerHTML;
                openSouGouSearch(word);
            }
        });

        // 乱序数组函数
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
    })
    .catch(error => {
        console.error('加载 JSON 文件出错：', error);
    });