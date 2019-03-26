$(document).ready(function(){
  //main array
  var totalRoll = [];

  var totalRollAmount = $(".totalRoll");
  console.log(totalRollAmount);

  ///declare chart:::
  var ctx = document.getElementById("myChart");
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart;

  var resetButton = document.getElementById("resetChart");
  var rollAmount;
  var maxRoll = 250000;

  function countDiceFreq()
  {
    rollAmount = prompt("How many times do you want to roll a pair of dice?");

    //check if number is an integer OR number is less than maxRoll
    while ((!isInt(rollAmount)) || (rollAmount > maxRoll))
    {
      if (rollAmount > maxRoll)
      {
        rollAmount = prompt("Please enter an integer that is less than or equal to " + maxRoll);

      } else
      if (!isInt(rollAmount))
      {
        rollAmount = prompt("Please enter an integer!");
      }
    }

    //round number after checking if number is an integer AND less than maxRoll
    //parses as integer
    var roundedRollAmount = parseInt(Math.round(rollAmount));

    for (var i = 0; i < roundedRollAmount; i++)
    {
      var randomDice1 = Math.ceil(Math.random() * 6);
      var randomDice2 = Math.ceil(Math.random() * 6);

      if (randomDice1 + randomDice2 != 0)
      {
        var totalDice = parseInt(randomDice1 + randomDice2);
        totalRoll.push(totalDice);
      }
    }

    totalRollAmount.html(roundedRollAmount);

  }

  //RUN PROGRAM WITH THESE FUNCTIONS!
  countDiceFreq();
  drawChart();

  //functions:::
  function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseInt(value);
    return (x | 0) === x;
  }

  //draw chart from data function!
  function drawChart()
  {
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2", "3", "4", "5", "6","7","8", "9", "10", "11", "12"],
            datasets: [{
                label: 'Frequency of Dice Rolls',
                data: [countFreq(2), countFreq(3), countFreq(4), countFreq(5), countFreq(6), countFreq(7), countFreq(8), countFreq(9), countFreq(10), countFreq(11), countFreq(12)],
                backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

  //search for a number to count:::
  function countFreq(num)
  {
    var count = 0;
    for (var i = 0; i < totalRoll.length; i++)
    {
      if (totalRoll[i] === num)
        count++;
    }
    return count;
  }

  //reset button function:::
  resetButton.addEventListener("click", function()
  {
    myChart.destroy();
    totalRoll = [];

    countDiceFreq();
    drawChart();
  });
});
