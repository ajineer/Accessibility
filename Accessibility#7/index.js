$(document).ready(function () {
  let interval;

  $("#submit").click(function () {
    if (interval) {
      clearInterval(interval);
    }
    const int1 = parseInt($("#integer-one").val(), 10) || 0;
    const int2 = parseInt($("#integer-two").val(), 10) || 0;
    let countdown = int1 + int2;

    $("timer").text(countdown);

    if (countdown >= 0) {
      interval = setInterval(function () {
        console.log(countdown);
        countdown--;
        if (countdown < 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  });
});
