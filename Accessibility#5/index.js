$(document).ready(function () {
  $("#input-field").on("keypress", function (event) {
    if (event.which === 13) {
      alert("You pressed the Enter key!");
    }
  });
});
