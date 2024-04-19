// 锁定元素
var hoursContainer = document.querySelector('.hours') 
var minutesContainer = document.querySelector('.minutes') 
var secondsContainer = document.querySelector('.seconds') 
var tickElements = Array.from(document.querySelectorAll('.tick')) 

// 保存上一次时间，初始值为0。
var last = new Date(0) 
// 设置为-1，以确保首次更新所有时间显示
last.setUTCHours(-1) 
// 用于记录动画效果的状态
var tickState = true 

// 更新时间
function updateTime () {
    var now = new Date 
    var lastHours = last.getHours().toString() 
    var nowHours = now.getHours().toString()
    // 如果上一次时间的小时和当前时间的小时不相等
    if (lastHours !== nowHours) {
        // 更新小时的显示
        updateContainer(hoursContainer, nowHours) 
    }
    // 分钟和秒同理
    var lastMinutes = last.getMinutes().toString() 
    var nowMinutes = now.getMinutes().toString() 
    if (lastMinutes !== nowMinutes) { 
        updateContainer(minutesContainer, nowMinutes) 
    }
    var lastSeconds = last.getSeconds().toString() 
    var nowSeconds = now.getSeconds().toString() 
    if (lastSeconds !== nowSeconds) {
        updateContainer(secondsContainer, nowSeconds) 
    }
    // 更新上一次时间为当前时间
    last = now 
}

// 切换'tick'元素的CSS类'tick-hidden'以实现闪烁效果
function tick () {
    tickElements.forEach(t => t.classList.toggle('tick-hidden')) 
}

// 更新显示
function updateContainer (container, newTime) {
    var time = newTime.split('') 
    if (time.length === 1) { 
        //单个数字补0
        time.unshift('0') 
    }
    // 更新显示
    var first = container.firstElementChild 
    if (first.lastElementChild.textContent !== time[0]) { 
        updateNumber(first, time[0]) 
    }
    var last = container.lastElementChild 
    if (last.lastElementChild.textContent !== time[1]) { 
        updateNumber(last, time[1])
    }
}

// 变更动画实现
function updateNumber (element, number) {
    var second = element.lastElementChild.cloneNode(true) 
    second.textContent = number 
    element.appendChild(second) 
    element.classList.add('move') 

    setTimeout(function () {
        element.classList.remove('move')
    }, 975)
    //选用975而非1000会更平滑
    setTimeout(function () {
        element.removeChild(element.firstElementChild) 
    }, 975)
}

setInterval(updateTime, 100) 