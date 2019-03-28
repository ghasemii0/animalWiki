$(document).ready(function() {
  $("form").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === "snake") {
      $("#snake").show();
    } else if (animal === "turtle") {
      $("#turtle").show();
    } else if (animal === "insects") {
      $("#insects").show();
    } else {
    }
    event.preventDefault();
  });
});
