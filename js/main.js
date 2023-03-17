let Content1 = document.getElementById("Div1");
let Content2 = document.getElementById("Div2");
let Content3 = document.getElementById("Div3");
let icon1 = document.getElementById("Icon1");
let icon2 = document.getElementById("Icon2");
let icon3 = document.getElementById("Icon3");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let text1 = document.getElementById("Text1");
let text2 = document.getElementById("Text2");
let text3 = document.getElementById("Text3");
let text4 = document.getElementById("Text4");
let text5 = document.getElementById("Text5");
let text6 = document.getElementById("Text6");


Content1.addEventListener("mouseover", function(){
    Content1.style.backgroundColor = "white";
    text1.style.color = "#962467";
    text2.style.color = "#962467";
    icon1.style.fill = "#962467";
    btn1.style.backgroundColor = "#962467";
    btn1.style.color = "white";
})
Content1.addEventListener("mouseout", function(){
    Content1.style.backgroundColor = "#962467";
    text1.style.color = "white";
    text2.style.color = "white";
    icon1.style.fill = "white";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "#962467";
})
Content2.addEventListener("mouseover", function(){
    Content2.style.backgroundColor = "white";
    text3.style.color = "#962467";
    text4.style.color = "#962467";
    icon2.style.fill = "#962467";
    btn2.style.backgroundColor = "#962467";
    btn2.style.color = "white";
})
Content2.addEventListener("mouseout", function(){
    Content2.style.backgroundColor = "#962467";
    text3.style.color = "white";
    text4.style.color = "white";
    icon2.style.fill = "white";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "#962467";
})
Content3.addEventListener("mouseover", function(){
    Content3.style.backgroundColor = "white";
    text5.style.color = "#962467";
    text6.style.color = "#962467";
    icon3.style.fill = "#962467";
    btn3.style.backgroundColor = "#962467";
    btn3.style.color = "white";
})
Content3.addEventListener("mouseout", function(){
    Content3.style.backgroundColor = "#962467";
    text5.style.color = "white";
    text6.style.color = "white";
    icon3.style.fill = "white";
    btn3.style.backgroundColor = "white";
    btn3.style.color = "#962467";
})



