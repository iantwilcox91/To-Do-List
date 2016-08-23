// buisness logic
function toDoObject(title, notes, done ){
  this.whatyoucallit = title;
  this.howyoudoit = notes;
  this.finished = false;
}






// user interface logic
$(document).ready(function(){
  $("form#new-thingtodoidtag").submit(function(event){
    event.preventDefault();

    var inputtedtitle = $("input#whatyoucallit").val();
    var inputtednotes = $("input#howyoudoit").val();
    var inputteddone = $("input#finished").val();

    var newToDoObject = new toDoObject(inputtedtitle, inputtednotes, inputteddone)

    $("ul#toDoObjectlistid").append("<li><span class='createdlist'>" + newToDoObject.whatyoucallit + "</span></li>");


    $(".createdlist").append(" " +  +" ");
      $("#toDoObjectlistid").show();
      $("#toDoObjectlistid h2").text(newToDoObject.whatyoucallit);



      // whatyoucallit howyoudoit finished etc etc etc add the last bits!!




    });
});
