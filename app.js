let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.Color = "#33cc18";
tg.MainButton.text = "Авторизоваться";
function themeChanger() {
    tg.MainButton.show();
}
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData("1");
})

let = usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.id}`

usercard.appendChild(p)
