$(document).ready(function(){
  /* SET PARAMETERS */
   var change_img_time 	= 5000;
   var transition_speed	= 300;

   var myStartButton = document.getElementById("startAnim");
   var myStopButton = document.getElementById("stopAnim");
   var startPressed = false;
   var stopPressed = false;
   var firstStart = false;

   var animationInterval = null;

   var simple_slideshow	= $(".imageContainer ul"),
       listItems 			= simple_slideshow.children('li'),
       listLen				= listItems.length,
       i 					= 0,

       changeList = function () {

         listItems.eq(i).fadeOut(transition_speed, function () {
         i += 1;
         if (i === listLen) {
           i = 0;
         }
         listItems.eq(i).fadeIn(transition_speed);
       });
   };

   listItems.not(':first').hide();

  myStartButton.addEventListener("click", function(){
    if (!startPressed)
    {
      startPressed = true;
      $(this).css({"opacity":"0.25"});

      if (!firstStart)
      {
        firstStart = true;
        myStartButton.innerHTML = '<a href="#">Start Slideshow</a>';
      } else
      {
        myStartButton.innerHTML = '<a href="#">Resume Slideshow</a>';
      }

      if (animationInterval === null)
        animationInterval = setInterval(changeList, change_img_time);

      if (stopPressed)
      {
        stopPressed = false;
        myStopButton.style.opacity = 1;
        //myStopButton.addEventListener("click", initStopButton);
      }
    }
  });

  myStopButton.addEventListener("click", function(){
    if (!stopPressed)
    {
      stopPressed = true;
      $(this).css({"opacity":"0.25"});
      clearInterval(animationInterval);
      if (stopPressed)
      {
        startPressed = false;
        myStartButton.style.opacity = 1;
        myStartButton.innerHTML = '<a href="#">Resume Slideshow</a>';
        //myStartButton.innerHTML = '<a href="#">Start Slideshow</a>';
        //myStopButton.addEventListener("click", initStopButton);
      }
    }
  });

  //run:::
  //myStartButton.click();
});
