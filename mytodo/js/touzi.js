// const { Illustration, Group, Box, Hemisphere, TAU, easeInOut } = Zdog;

//     const root = document.querySelector(".luck");
//     const canvas = root.querySelector("canvas");
//     const button = document.createElement("button");
//     button.className = "roller";

//     const colors = {
//         white: "hsl(0 0% 99%)",
//         black: "hsl(206 6% 24%)",
//         red: "hsl(4 77% 55%)"
//     };

//     const stroke = 20;
//     const size = 50;
//     const diameter = 13;
//     const offset = 16;

//     const illustration = new Illustration({
//     element: canvas,
//     zoom: 2,
//     rotate: {
//         x: (TAU / 14) * -1,
//         y: TAU / 8
//     }
//     });

//     const dice = new Box({
//     addTo: illustration,
//     color: colors.white,
//     stroke,
//     width: size,
//     height: size,
//     depth: size
//     });

//     const dot = new Hemisphere({
//     color: colors.black,
//     stroke: 0,
//     diameter
//     });

//     const one = new Group({
//     addTo: dice,
//     translate: {
//         y: (size / 2 + stroke / 2) * -1
//     },
//     rotate: {
//         x: TAU / 4
//     }
//     });

//     dot.copy({
//     addTo: one,
//     color: colors.red
//     });

//     const six = new Group({
//     addTo: dice,
//     translate: {
//         y: size / 2 + stroke / 2
//     },
//     rotate: {
//         x: (TAU / 4) * -1
//     }
//     });

//     for (const { x, y } of [
//     { x: offset, y: offset * -1 },
//     { x: offset, y: 0 },
//     { x: offset, y: offset },
//     { x: offset * -1, y: offset },
//     { x: offset * -1, y: 0 },
//     { x: offset * -1, y: offset * -1 }
//     ]) {
//     dot.copy({
//         addTo: six,
//         translate: {
//         x,
//         y
//         }
//     });
//     }

//     const two = new Group({
//     addTo: dice,
//     translate: {
//         z: (size / 2 + stroke / 2) * -1
//     },
//     rotate: {
//         x: TAU / 2
//     }
//     });

//     for (const { x, y } of [
//     { x: offset, y: offset * -1 },
//     { x: offset * -1, y: offset }
//     ]) {
//     dot.copy({
//         addTo: two,
//         translate: {
//         x,
//         y
//         }
//     });
//     }

//     const five = new Group({
//     addTo: dice,
//     translate: {
//         z: size / 2 + stroke / 2
//     }
//     });

//     for (const { x, y } of [
//     { x: 0, y: 0 },
//     { x: offset, y: offset * -1 },
//     { x: offset, y: offset },
//     { x: offset * -1, y: offset },
//     { x: offset * -1, y: offset * -1 }
//     ]) {
//     dot.copy({
//         addTo: five,
//         translate: {
//         x,
//         y
//         }
//     });
//     }

//     const three = new Group({
//     addTo: dice,
//     translate: {
//         x: (size / 2 + stroke / 2) * -1
//     },
//     rotate: {
//         y: TAU / 4
//     }
//     });

//     for (const { x, y } of [
//     { x: 0, y: -0 },
//     { x: offset, y: offset * -1 },
//     { x: offset * -1, y: offset }
//     ]) {
//     dot.copy({
//         addTo: three,
//         translate: {
//         x,
//         y
//         }
//     });
//     }

//     const four = new Group({
//     addTo: dice,
//     translate: {
//         x: size / 2 + stroke / 2
//     },
//     rotate: {
//         y: (TAU / 4) * -1
//     }
//     });

//     for (const { x, y } of [
//     { x: offset, y: offset * -1 },
//     { x: offset, y: offset },
//     { x: offset * -1, y: offset },
//     { x: offset * -1, y: offset * -1 }
//     ]) {
//     dot.copy({
//         addTo: four,
//         translate: {
//         x,
//         y
//         }
//     });
//     }

//     illustration.updateRenderGraph();

//     button.textContent = "Roll";

//     let state = "wait";
//     let frame = null;
//     let ticker = 0;
//     const cycle = 125;

//     let angles = {
//     x: illustration.rotate.x,
//     y: illustration.rotate.y,
//     z: illustration.rotate.z
//     };

//     let anglesNext = { ...angles };

//     const animate = () => {
//     if (ticker >= cycle) {
//         angles.x = anglesNext.x % TAU;
//         angles.y = anglesNext.y % TAU;
//         angles.z = anglesNext.z % TAU;

//         illustration.rotate.x = angles.x;
//         illustration.rotate.y = angles.y;
//         illustration.rotate.z = angles.z;

//         illustration.updateRenderGraph();

//         state = "wait";
//         button.setAttribute("data-state", state);

//         ticker = 0;
//         cancelAnimationFrame(frame);
//     } else {
//         const ease = easeInOut((ticker / cycle) % 1, 3);

//         illustration.rotate.x = angles.x + (anglesNext.x - angles.x) * ease;
//         illustration.rotate.y = angles.y + (anglesNext.y - angles.y) * ease;
//         illustration.rotate.z = angles.z + (anglesNext.z - angles.z) * ease;

//         illustration.updateRenderGraph();

//         ticker++;
//         frame = requestAnimationFrame(animate);
//     }
//     };

//     const handleClick = () => {
//     if (state !== "wait") return;

//     const [x, y, z] = Array(3)
//         .fill()
//         .map((_) => (Math.floor(Math.random() * 4) * TAU) / 4 + TAU * 2);

//     anglesNext = {
//         x,
//         y,
//         z
//     };

//     state = "roll";
//     button.setAttribute("data-state", state);
//     animate();
//     };

//     button.addEventListener("click", handleClick);

//     root.appendChild(button);


// 低配版
// document.querySelector('.roller').addEventListener('click', function() {
//     var canvas = document.querySelector('canvas');
//     var ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var num = Math.floor(Math.random() * 6) + 1;
//     switch (num) {
//       case 1:
//         drawDot(ctx, 100, 100);
//         break;
//       case 2:
//         drawDot(ctx, 50, 50);
//         drawDot(ctx, 150, 150);
//         break;
//       case 3:
//         drawDot(ctx, 50, 50);
//         drawDot(ctx, 100, 100);
//         drawDot(ctx, 150, 150);
//         break;
//       case 4:
//         drawDot(ctx, 50, 50);
//         drawDot(ctx, 50, 150);
//         drawDot(ctx, 150, 50);
//         drawDot(ctx, 150, 150);
//         break;
//       case 5:
//         drawDot(ctx, 50, 50);
//         drawDot(ctx, 50, 150);
//         drawDot(ctx, 100, 100);
//         drawDot(ctx, 150, 50);
//         drawDot(ctx, 150, 150);
//         break;
//       case 6:
//         drawDot(ctx, 50, 50);
//         drawDot(ctx, 50, 100);
//         drawDot(ctx, 50, 150);
//         drawDot(ctx, 150, 50);
//         drawDot(ctx, 150, 100);
//         drawDot(ctx, 150, 150);
//         break;
//     }
//   });
  
//   function drawDot(ctx, x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, 5, 0, Math.PI * 2);
//     ctx.fill();
//   }

// 图片版
// 在页面加载后显示初始图片
window.onload = function() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var images = {}; // 用于存储预加载的图像
  var imageURLs = [
    './src/lucky.jpg',
    './src/1.png',
    './src/2.png',
    './src/3.png',
    './src/4.png',
    './src/5.png'
  ];

  // 预加载所有图像
  var promises = imageURLs.map(function(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        images[url] = img;
        if (url === './src/lucky.jpg') { // 只显示一张
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        resolve();
      };
      img.src = url;
    });
  });

  // 在所有图像都加载完毕后绑定点击事件
  Promise.all(promises).then(function() {
    document.querySelector('.roller').addEventListener('click', function() {
      var num = Math.floor(Math.random() * 5) + 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images['./src/' + num + '.png'], 0, 0, canvas.width, canvas.height);
    });
  });
};