let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.Color = "#33cc18";
tg.MainButton.text = "Авторизоваться";
function themeChanger() {
    tg.MainButton.show();
    tg.MainButton.onClick(function send() {
        let login = document.getElementById('username').value;
        let pass = document.getElementById('password').value;
        let kek = login + "|" + pass;
        tg.sendData(kek);
})
}

let = usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.id}`

usercard.appendChild(p);
