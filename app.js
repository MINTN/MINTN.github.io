let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.Color = "#33cc18";
tg.MainButton.text = "Авторизоваться";
function themeChanger() {
    tg.MainButton.show();
    tg.MainButton.onClick(function send() {
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            var text = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            let kek = '{\n\t"username": "' + text + '",\n\t"userid": "' + password + '"\n}';
            alert(kek)
            tg.sendData(kek);
})
})
}

let = usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.id}`

usercard.appendChild(p);
