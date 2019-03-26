$(document).ready(function(){
  var myBubbleCanvas = document.getElementById("section3");
  var resetButton = document.getElementById("generatePolkaDots");

  var flexAlignMode = $(".alignMode");
  var flexJustifyMode = $(".justifyMode");

  var randomColorArray = ["red", "blue", "yellow", "green", "orange", "purple"];

  //randomize style for section3 container:::
  var alignFlexItem = ["flex-start", "flex-end", "center", "baseline"];
  var justifyFlexItem = ["flex-start", "flex-end", "space-around", "space-between"];
  var maxBubbles = 250;

  function initPolkaDots()
  {
    var bubbleAmount = prompt("How many polka dots do you want to see? (Enter 1 - " + maxBubbles + ")");

    //Check if number is between 1 and maxBubbles OR is a valid number:::
    while ((bubbleAmount > maxBubbles) || (bubbleAmount < 1) || !isInt(bubbleAmount))
    {
      if (!isInt(bubbleAmount))
      {
        bubbleAmount = prompt("Please enter an integer!");
      } else
      if (bubbleAmount < 1 ) {
        bubbleAmount = prompt("Please enter a number larger than 0!");
      } else {
        bubbleAmount = prompt("Please enter a number between 1 and " + maxBubbles + ")");
      }
    }

    var roundedBubbleAmount = parseInt(Math.round(bubbleAmount));

    var randomJustifyAlign = justifyFlexItem[Math.floor(Math.random() * justifyFlexItem.length)];
    var randomFlexAlign = alignFlexItem[Math.floor(Math.random() * alignFlexItem.length)];

    $("head").append('<style> #container #section3 { align-items:' + randomFlexAlign + '; align-content:space-around; justify-content:' + randomJustifyAlign + '} </style>')

    //display random selection to HTML:::
    flexAlignMode.html(randomFlexAlign);
    flexJustifyMode.html(randomJustifyAlign);

    //populate polkaDots as dynamic objects:::
    for (var i = 0; i < roundedBubbleAmount; i++)
    {
      var polkaDotName = "bubble" + i;
      var myPolkaDot = '<div class=' + polkaDotName + ' id="bubble"></div>';
      var randomColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)];

      var randomHeightWidth = Math.round(Math.random() * 75) + 25;

      //style for bubble based on randomized values:::
      $("head").append('<style> .bubble' + i + '{ width:' + randomHeightWidth + 'px; height:' + randomHeightWidth + 'px; border-radius:50%; flex-shrink:1; margin:10px; background-color:' + randomColor + '} </style>');

      //display bubble:::
      $("#section3").append(myPolkaDot);
    }
  }

  //run program:::
  initPolkaDots();

  //check if bubbleAmount is integer:::
  function isInt(value) {
    if (isNaN(value))
    {
      return false;
    } else {
      var x = parseInt(value);
      return (x | 0) === x;
    }
  }

  //reset button function:::
  resetButton.addEventListener("click", function()
  {
    $("#section3").html("");
    flexAlignMode.html("");
    flexJustifyMode.html("");
    initPolkaDots();
  });
});
