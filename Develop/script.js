//current Date
var currentDay = dayjs().format('dddd, MMMM D, hh:mm a');
$('#currentDay').text(currentDay); 
var currentHour = dayjs().hour();
$('#currentHour').text(currentHour); 


$(document).ready(function () {
  // when saveBtn is clicked
  $(".saveBtn").click(function(){
    var id = $(this).parent().attr("id").split("-")[1];
    var description = $(this).parent().find(".description").val();
    localStorage.setItem(id,description);
  });

 // adds a class to the current time box telling whether its in the past, present, or future
$(".time-block").each(function(){
  var hour = $(this).attr("id").split("-")[1];
  var text = localStorage.getItem(hour);
  var textBox = $(this).find(".description");
  textBox.val (text);
  if (hour < currentHour){
      $(this).find(".description").addClass("past");
  }else if(hour == currentHour){
      $(this).find(".description").addClass("present");

  }else{
      $(this).find(".description").addClass("future");
   }
});
});
