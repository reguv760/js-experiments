$(document).ready(function(){
  //console.log("test");

  //main array
  var totalRoll = [];

  ///declare chart:::
  var ctx = document.getElementById("myChart");
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart;

  var resetButton = document.getElementById("resetChart");
  var rollAmount;
  console.log(resetButton);

  function countDiceFreq()
  {
    rollAmount = parseInt(prompt("How many times do you want to roll the dice?"));

    //check if rollAmount is an Integer!
    while (isNaN(parseInt(rollAmount)))
    {
      rollAmount = parseInt(prompt("Please enter an interger!"));
    }


    for (var i = 0; i < parseInt(rollAmount); i++)
    {
      var randomDice1 = Math.ceil(Math.random() * 6);
      var randomDice2 = Math.ceil(Math.random() * 6);

      if (randomDice1 + randomDice2 != 0)
      {
        var totalDice = parseInt(randomDice1 + randomDice2);
        totalRoll.push(totalDice);
      }
    }
  }

  //RUN PROGRAM WITH THESE FUNCTIONS!
  countDiceFreq();
  drawChart();

  //draw chart function!
  function drawChart()
  {
    //draw chart from data:::
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
      //console.log(totalRoll[i]);
      if (totalRoll[i] === num)
      {
        count++;
      }
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
