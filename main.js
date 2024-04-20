const bgColor = document.querySelector("body");
const randdom = document.querySelector("h1");

let random = Math.floor(Math.random() * 100);

randdom.style.color = "red";
bgColor.style.background ="black";
bgColor.style.display ="flex";
bgColor.style.justifyContent ="center";
bgColor.style.alignItems = 'center';
randdom.style.fontSize ="70px";
randdom.style.fontFamily ="nosifer";
randdom.style.marginTop ="230px";

randdom.innerHTML = random;
 