window.addEventListener("load", function () {
    let str = `/* 你好
 * 今天展示一下所学的JS和CS的功底
 * 以下是个太极 
 * 首先画一个圆，一半黑一半白 */
#box {
  border: 1px solid red;
  width: 200px;
  height: 200px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%);
  border-radius: 50%;
  box-shadow: -2px -2px 5px 0px rgba(0,0,0,0.75);
  border: none;
}
/* 画阴阳鱼,一黑一白 */
#box::before {
  content: "";
  display: block;
  border: 1px solid red;
  width: 50%;
  height: 50%;
  background-color: black;
  position:absolute;
  left:50%;
  top:0;
  transform:translateX(-50%);
  border-radius: 50%;
  border:none;
}
#box::after {
  content: "";
  display: block;
  border: 1px solid red;
  width: 50%;
  height: 50%;
  background-color:white;
  position:absolute;
  left:50%;
  top:50%;
  transform:translateX(-50%);
  border-radius: 50%;
  border:none;
}
/* 让八卦图转起来 */
@keyframes bagua {
     from{
         transform: rotate(0deg);
     }
     to{
         transform: rotate(360deg);
     }
 }
 #box {
     animation: bagua  5s linear infinite;
 }

#box::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
#box::after{
  background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);
}
 
 `
    let html = document.querySelector("#demo");
    let style = document.querySelector("#style");
    let n = 0
    let str2 = '';
    function step() {
        setTimeout(function () {
            if (n < str.length) {
                if (str[n] === "\n") {
                    str2 = str2 + '<br>';
                } else if (str[n] === " ") {
                    str2 = str2 + "&nbsp;";
                } else {
                    str2 = str2 + str[n];
                }
                html.innerHTML = str2;
                html.scrollTo(0, 9999);
                window.scrollTo(0, 9999);
                style.innerHTML = str.slice(0, n);
                n += 1
                step();
            }

        }, 10)

    }
    step();
})