$(document).ready(function(){

  ///init
  var myHiHat = document.getElementById("hiHat");
  var myCrash = document.getElementById("crashCymbal");
  var mySnare = document.getElementById("snareDrum");
  var myBass = document.getElementById("bassDrum");
  var myDeepBass = document.getElementById("DeepBassDrum");

  //creates <audio></audio> as object::
  var obj1 = document.createElement("audio");
  var obj2 = document.createElement("audio");
  var obj3 = document.createElement("audio");
  var obj4 = document.createElement("audio");
  var obj5 = document.createElement("audio");

  var instArray = [myHiHat, myCrash, mySnare, myBass, myDeepBass];
  var myObjArray = [obj1, obj2, obj3, obj4, obj5];

  ////define buttons::::
  function initButton(button, myObj)
  {
    button.audioLoaded = false;
    button.addEventListener("click", function()
    {
      if (!$(this).audioLoaded)
      {
        switch (button)
        {
          case myHiHat:
            myObj.src = "sounds/OH00.mp3";
            break;
          case myCrash:
            myObj.src = "sounds/CY0000.mp3";
            break;
          case mySnare:
            myObj.src = "sounds/SD0010.mp3";
            break;
          case myBass:
            myObj.src = "sounds/BD0000.mp3";
            break;
          case myDeepBass:
            myObj.src = "sounds/BD0010.mp3";
            break;
          default:
            break;
        }

        myObj.volume=0.50;
        myObj.autoPlay=false;
        myObj.preLoad=true;
        $(this).audioLoaded = true;
      }
      myObj.play();

      $(this).stop().css({"opacity":"1"}).animate({opacity:"0.5"}, 125, function()
      {
        $(this).animate({opacity:"1"}, 125);
      });
    });
  };

  ////run:::
  for (var i = 0; i < instArray.length; i++)
  {
    initButton(instArray[i], myObjArray[i]);
  }

  ///keyboard listners:::
  window.onkeydown = function(e) {
     var key = e.keyCode ? e.keyCode : e.which;

     switch (key)
     {
      case 65: ///a = hiHat
        myHiHat.click();
        break;

      case 87:   //w = crash
        myCrash.click();
        break;

      case 83: //d = snare
        mySnare.click();
        break;

      case 68: //s = bass
        myBass.click();
        break;

      case 8: //backspace for that drop!
        myDeepBass.click();
        break;

      default:
        break;
      }
  }
});
