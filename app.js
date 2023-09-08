let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.Color = "#2cab37"

let btn1 = document.getElementById("btn1")

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData("1");
})

let = usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.id}

usercard.appendChild(p)
