function loading() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("img");
  var date = new Date();
  var hour = date.getHours();

  msg.innerHTML = `Now it's ${hour} o'clock.`;
  if (hour >= 0 && hour < 12) {
    //Good Morning!
    img.src = "assets/img/morning.png";
    document.body.style.background = "#e2cd9f";
  } else if (hour >= 12 && hour <= 18) {
    //Good Afternoon!!
    img.src = "assets/img/afternoon.png";
    document.body.style.background = "#b9846f";
  } else {
    //Good Night!!!
    img.src = "assets/img/night.png";
    document.body.style.background = "#515154";
  }
}
