const buy = document.getElementById("buy");


const home = document.getElementById("home");


const shop = document.getElementById("shop");



buy.onclick = function(){


home.style.display="none";


shop.style.display="flex";


};





const rub = document.getElementById("rub");

const robux = document.getElementById("robux");



rub.oninput=function(){


robux.innerHTML =
Math.floor(rub.value * 1.2);



};