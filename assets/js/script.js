$(document).ready(function () {
  //display the current date and time
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY, h:mm a"));

  //this function will create a loop for the past, present, and future "time color."
  function timeColorRotation() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      if (blockTime < currentHour) {
        $(this).addClass("past");
      } else if (blockTime === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }
  timeColorRotation();

  //This function will listen to the save button every time the button is clicked; The "setItem" will run to save the data to the local storage and 
  //the "getItem" will help the application store the text in the text area even when the user refreshes the application.
  
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function (event) {
    event.preventDefault();
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, description);
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
