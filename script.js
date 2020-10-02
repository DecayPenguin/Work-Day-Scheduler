var today = $("#currentDay");

//current date in header
function todaysDate(){
$("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

}
    todaysDate();


//unsuccessful attempt to change color of the text boxes
function changeColor(){
    var currentHour = moment().hours();

  $("#time-block").each(function(){
      var calenderHour = parseInt($(this).attr("id"));
      console.log(calendarHour);

//       if (calendarHour < currentHour){
//           $(this).addClass("past");
//       }
//       else if (calendarHour === currentHour){
//           $(this).removeClass("past");
//           $(this).addClass("present");
//       }
//       else {
//           $(this).removeClass("past");
//           $(this).removedClass("present");
//           $(this).addClass("future");
//       }
//     })
// }

// changeColor();

// $(".saveBtn").on("click", function(){
//     console.log("item saved!");

//     var value = $(this.siblings(".description").val();
//     console.log(value);
    
//     var time = $(this).parent().attr("id");
//     console.log(time)
//     )
// })