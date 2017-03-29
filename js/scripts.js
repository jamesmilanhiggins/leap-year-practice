// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function(){
$("#leap-year").submit(function(event) {
  event.preventDefault();
  var year = parseInt($("#year").val());
  var result = leapYear(year);
  $(".year").text(year);

  if (!result) {
    $(".not").text("not");
  } else {
      $(".not").text("");
    }
     $("#result").show();
  });



});
