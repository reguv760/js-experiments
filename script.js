$(document).ready(function(){
  // $("header").fadeOut(1000, "linear", function(){
  //   $(this).fadeIn(1000);
  // });
  //
  // $("#fart").animate({"width" : "925px"}, 1000, function(){
  //   $(this).css("background-color", "#333");
  // });
  //
  // $(".button").click(function(){
  //   console.log($(this) + " is my button");
  // });
  //
  // $(".button").mouseover(function(){
  //   $(this).css("background-color", "#333");
  // });
  //
  // $(".button").mouseout(function(){
  //   $(this).css("background-color", "#81cfe2");
  // });

  //var diceArray1 = [];
  //var diceArray2 = [];

  var totalRoll = [];

  var rollAmount = 100000;

  for (var i = 0; i < rollAmount; i++)
  {
    var randomDice1 = Math.floor(Math.random() * 6) + 1;
    var randomDice2 = Math.floor(Math.random() * 6) + 1;

    if (randomDice1 + randomDice2 != 0)
      totalRoll.push(parseInt(randomDice1 + randomDice2));
  }

  //console.log(randomDice1 + randomDice2);

  console.log(findDiceFrequency(totalRoll));

  function findDiceFrequency(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
  }


  ///chart:::
  var x = d3.scale.linear()
      .domain([0, d3.max(findDiceFrequency(totalRoll))])
      .range([0, 420]);

  d3.select(".chartHolder")
    .selectAll("div")
      .data(findDiceFrequency(totalRoll))
    .enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });

  
});
