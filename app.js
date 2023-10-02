function start_func() {
  let telegramApp = window.Telegram.WebApp;
  document.querySelector('body').style.backgroundColor = telegramApp.themeParams.secondary_bg_color;
  telegramApp.expand();
  telegramApp.MainButton.text = "TestMainButton";
  telegramApp.MainButton.color = "#ff0000";
  telegramApp.MainButton.show();
  telegramApp.MainButton.onClick(function send() {
    let tgusername = telegramApp.initData;
    let tguserId = "1231313";
    let login = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    //let kek = '{\n\t"tgusername": "' + tgusername + '",\n\t"tguserId": "' + tguserId + '",\n\t"login": "' + login + '",\n\t"pass": "' + pass + '"\n}';
    let kek = '{\n\t"login": "' + login + '",\n\t"pass": "' + pass + '"\n}';
    telegramApp.sendData(kek);
  })
};
