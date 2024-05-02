const mapData1 = [
    { "name": 1, "value": "20岁，光阴不再来", "category": "个人成长" },
    { "name": 2, "value": "帮你省钱的三个心理技巧", "category": "生活方式与习惯" },
    { "name": 3, "value": "别陷入“温水煮青蛙”", "category": "个人成长" },
    { "name": 4, "value": "别再emo了，教你治愈心碎", "category": "社交与关系" },
    { "name": 5, "value": "不合群的美丽", "category": "社交与关系" },
    { "name": 6, "value": "成功的关键不是智商，而是毅力", "category": "个人成长" },
    { "name": 7, "value": "从肥皂剧中学到的人生道理", "category": "个人成长" },
    { "name": 8, "value": "读书如何改变人生", "category": "生活方式与习惯" },
    { "name": 9, "value": "真正拉开你与周围人的差距是知道自己贵在哪里", "category": "个人成长" },
    { "name": 10, "value": "真正厉害的人都戒掉了玻璃心", "category": "心理调节" },
    { "name": 11, "value": "拖延症人群的内心世界", "category": "生活方式与习惯" },
    { "name": 12, "value": "健康的时间观念", "category": "生活方式与习惯" },
    { "name": 13, "value": "每天一秒钟", "category": "生活方式与习惯" },
    { "name": 14, "value": "那些限制你的执念是你的不幸之源", "category": "个人成长" },
    { "name": 15, "value": "逆袭，从假装强大开始", "category": "个人成长" },
    { "name": 16, "value": "你该认清恐惧而不是目标", "category": "个人成长" },
    { "name": 17, "value": "女孩要勇敢而不必完美", "category": "个人成长" },
    { "name": 18, "value": "改变自己只需要两年时间", "category": "生活方式与习惯" },
    { "name": 19, "value": "再艰难，也要跳出舒适圈", "category": "个人成长" },
    { "name": 20, "value": "如何摆脱无效努力", "category": "个人成长" },
    { "name": 21, "value": "Taylor Swift纽约大学毕业典礼演讲", "category": "个人成长" },
    { "name": 22, "value": "饭圈儿女孩的爱", "category": "生活方式与习惯" },
    { "name": 23, "value": "如何成为一个自律的人", "category": "生活方式与习惯" },
    { "name": 24, "value": "学会断舍离——精简快乐的生活", "category": "生活方式与习惯" },
    { "name": 25, "value": "请相信，你可以进步", "category": "个人成长" },
    { "name": 26, "value": "一个最简单的方式戒掉坏习惯", "category": "生活方式与习惯" },
    { "name": 27, "value": "不要公开你的个人目标", "category": "生活方式与习惯" },
    { "name": 28, "value": "为什么你应该读冯内古特", "category": "生活方式与习惯" },
    { "name": 29, "value": "为什么你总在吃，还一直饿？", "category": "健康与健身" },
    { "name": 30, "value": "为什么有人那么普通却又那么自信", "category": "社交与关系" },
    { "name": 31, "value": "为什么饮食失调很难治疗", "category": "健康与健身" },
    { "name": 32, "value": "久坐的危害", "category": "健康与健身" },
    { "name": 33, "value": "别让任何人打乱你的生活节奏", "category": "生活方式与习惯" },
    { "name": 34, "value": "心流，幸福的秘密", "category": "个人成长" },
    { "name": 35, "value": "想要真正的成功，自己向上的时候要拉别人一把", "category": "社交与关系" },
    { "name": 36, "value": "我们为什么会做梦", "category": "健康与健身" },
    { "name": 37, "value": "我们的食物系统怎么了", "category": "健康与健身" },
    { "name": 38, "value": "我们能摆脱爱情吗", "category": "社交与关系" },
    { "name": 39, "value": "抑郁是世界上最温柔的病", "category": "心理调节" },
    { "name": 40, "value": "拥抱焦虑", "category": "心理调节" },
    { "name": 41, "value": "敢于不同意，去怀疑的勇气", "category": "个人成长" },
    { "name": 42, "value": "是睡个好觉还是熬夜学习", "category": "健康与健身" },
    { "name": 43, "value": "求求你别再熬夜了", "category": "生活方式与习惯" },
    { "name": 44, "value": "爱情应该有的样子", "category": "社交与关系" },
    { "name": 45, "value": "生活不仅仅是快乐", "category": "社交与关系" },
    { "name": 46, "value": "睡眠与记忆的惊人联系", "category": "健康与健身" },
    { "name": 47, "value": "糖如何影响大脑", "category": "健康与健身" },
    { "name": 48, "value": "肌肉增长的奥秘", "category": "健康与健身" },
    { "name": 49, "value": "记得说出感谢", "category": "生活方式与习惯" },
    { "name": 50, "value": "高海拔如何影响你的身体", "category": "健康与健身" },
    { "name": 51, "value": "20年后，你将会在哪里？", "category": "健康与健身" },
    { "name": 52, "value": "关于生活、工作和平衡的4个教训", "category": "生活方式与习惯" },
    { "name": 53, "value": "如何才能幸福", "category": "社交与关系" },
    { "name": 54, "value": "学习一门外语的秘密", "category": "生活方式与习惯" },
    { "name": 55, "value": "怎样说话人们才爱听", "category": "生活方式与习惯" },
    { "name": 56, "value": "怎样走出负面情绪", "category": "心理调节" },
    { "name": 57, "value": "感到抑郁不要默默忍受", "category": "心理调节" },
    { "name": 58, "value": "我们如何毫无恐惧地一起直面未来", "category": "心理调节" },
    { "name": 59, "value": "我受够了对肥胖的恐惧", "category": "健康与健身" },
    { "name": 60, "value": "我把自己活成了艺术品", "category": "社交与关系" },
    { "name": 61, "value": "深度睡眠对大脑的好处", "category": "健康与健身" },
    { "name": 62, "value": "能力比经历重要", "category": "个人成长" },
    { "name": 63, "value": "运动改变大脑", "category": "健康与健身" },
    { "name": 64, "value": "为什么屏幕剥夺了我们的快乐", "category": "健康与健身" },
    { "name": 65, "value": "你不必强迫自己积极向上", "category": "心理调节" },
    { "name": 66, "value": "如何从倦怠中恢复", "category": "心理调节" },
    { "name": 67, "value": "如何在压力下保持冷静", "category": "心理调节" },
    { "name": 68, "value": "如何将你的不满变成行动", "category": "心理调节" },
    { "name": 69, "value": "如何摆脱颓靡，进入“心流”状态", "category": "个人成长" },
    { "name": 70, "value": "如何解决焦虑", "category": "心理调节" },
    { "name": 71, "value": "微笑是你的超能力", "category": "心理调节" },
    { "name": 72, "value": "12个最宝贵的人生经验", "category": "个人成长" },
    { "name": 73, "value": "一切只需10分钟的专注", "category": "个人成长" },
    { "name": 74, "value": "要始终相信，越努力越幸运", "category": "个人成长" },
    { "name": 75, "value": "请停止糟蹋自己", "category": "个人成长" },
    { "name": 76, "value": "贫穷的本质", "category": "个人成长" },
    { "name": 77, "value": "你凭什么认为自己不会画画", "category": "生活方式与习惯" },
    { "name": 78, "value": "你可以冒一点风险来增加你的运气", "category": "个人成长" },
    { "name": 79, "value": "运气对成功有多重要", "category": "个人成长" },
    { "name": 80, "value": "一个在摸索的青少年", "category": "个人成长" },
    { "name": 81, "value": "停止与别人作比较", "category": "心理调节" },
    { "name": 82, "value": "女孩，请表达你的愤怒", "category": "社交与关系" },
    { "name": 83, "value": "如何在纷扰的网络世界中回归平静", "category": "生活方式与习惯" },
    { "name": 84, "value": "如何掌控你的空闲时间", "category": "生活方式与习惯" },
    { "name": 85, "value": "如何无所畏惧地面对权威", "category": "生活方式与习惯" },
    { "name": 86, "value": "不要成为自己人生的旁观者", "category": "个人成长" },
    { "name": 87, "value": "为什么你应该知道你同事的工资", "category": "社交与关系" },
    { "name": 88, "value": "人们为什么总相信虚假信息", "category": "心理调节" },
    { "name": 89, "value": "从失恋中走出来需要多久", "category": "社交与关系" },
    { "name": 90, "value": "如何维持一段长久的友情", "category": "社交与关系" },
    { "name": 91, "value": "学习即自由", "category": "个人成长" },
    { "name": 92, "value": "学会走出自己的舒适区", "category": "个人成长" },
    { "name": 93, "value": "学外语真的可以让你更聪明", "category": "生活方式与习惯" },
    { "name": 94, "value": "我不想要孩子不再告诉我，我会改变主意", "category": "社交与关系" },
    { "name": 95, "value": "我们为什么要工作", "category": "生活方式与习惯" },
    { "name": 96, "value": "更年期如何影响大脑", "category": "健康与健身" },
    { "name": 97, "value": "演奏乐器对大脑的好处", "category": "健康与健身" },
    { "name": 98, "value": "瑜伽如何作用于身体和大脑", "category": "健康与健身" },
    { "name": 99, "value": "睡眠是你的超能力", "category": "健康与健身" },
    { "name": 100, "value": "简化生活，提升幸福感", "category": "生活方式与习惯" }
];

function showTED() {
    const category = document.getElementById("categorySelect").value;
    if (category) {
        const TED1 = mapData1.filter(data => data.category === category);
        TED1.sort((a, b) => a.name - b.name);
        displayTED(TED1);
    }else{
        const allTED = mapData1.sort((a, b) => a.name - b.name);
        displayTED(allTED);
    }
}

function displayTED(TED) {
    const TEDList = document.getElementById("TEDList");
    TEDList.innerHTML = "";
    TED.forEach(TED => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class='tednum'>打卡号</span>-<span class='tednum'>${TED.name}</span>：<span class='tedtext'>${TED.value}</span>`;
        TEDList.appendChild(listItem);
    });
}

window.onload = function() {
    showTED();
}