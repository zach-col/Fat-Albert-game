var userInput =prompt("Are you faaaaaat alberttt?");
if ("userInput" == "1") {
    alert("You are Awesome!!");
} 

else 
{
 alert("Hey Hey Hey!!");
}



$(document).ready(function(){
    $("p").click(function(){
        $("p").hide();
    });
    $("p").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
  $(document).mousemove(function(e){
      $('#imgFollow').offset({left:e.pageX,top:e.pageY+20});    
  });
});
