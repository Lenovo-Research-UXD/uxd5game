var numOfPlayers = 0
var dataScale = [
      "0 - 50",
      "50 - 100",
      "100 - 200",
      "200 - 300",
      "300 - 400",
      "400 - 450",
      "450 - 500",
      "500 - 550",
      "550 - 600",
      "600 - 700",
      "700 - 800",
      "800 - 900",
      "900 - 1200",
      "1200 - 1500",
      "> 1500",
]
var timeScale = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
]
var scoreData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var scoreDataForDesign = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var scoreDataForNondesign = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var networkData = [0, 0, 0, 0, 0]
var hourDataCh1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var hourDataCh7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var startTime, endTime;

function countAppearance(data) {
      if (data.score >= 0 && data.score <= 50) {
            scoreData[0]++
      } else if (data.score > 50 && data.score <= 100) {
            scoreData[1]++
      } else if (data.score > 100 && data.score <= 200) {
            scoreData[2]++
      } else if (data.score > 200 && data.score <= 300) {
            scoreData[3]++
      } else if (data.score > 300 && data.score <= 400) {
            scoreData[4]++
      } else if (data.score > 400 && data.score <= 450) {
            scoreData[5]++
      } else if (data.score > 450 && data.score <= 500) {
            scoreData[6]++
      } else if (data.score > 500 && data.score <= 550) {
            scoreData[7]++
      } else if (data.score > 550 && data.score <= 600) {
            scoreData[8]++
      } else if (data.score > 600 && data.score <= 700) {
            scoreData[9]++
      } else if (data.score > 700 && data.score <= 800) {
            scoreData[10]++
      } else if (data.score > 800 && data.score <= 900) {
            scoreData[11]++
      } else if (data.score > 900 && data.score <= 1200) {
            scoreData[12]++
      } else if (data.score > 1200 && data.score <= 1500) {
            scoreData[13]++
      } else if (data.score > 1500) {
            scoreData[14]++
      }

      if (data.network == "wifi") {
            networkData[0]++
      } else if (data.network == "4g") {
            networkData[1]++
      } else if (data.network == "3g+") {
            networkData[2]++
      } else if (data.network == "2g") {
            networkData[3]++
      } else if (data.network == "unknown") {
            networkData[4]++
      }

      if (data.hour == 0) {
            hourDataCh1[0]++
      } else if (data.hour == 1) {
            hourDataCh1[1]++
      } else if (data.hour == 2) {
            hourDataCh1[2]++
      } else if (data.hour == 3) {
            hourDataCh1[3]++
      } else if (data.hour == 4) {
            hourDataCh1[4]++
      } else if (data.hour == 5) {
            hourDataCh1[5]++
      } else if (data.hour == 6) {
            hourDataCh1[6]++
      } else if (data.hour == 7) {
            hourDataCh1[7]++
      } else if (data.hour == 8) {
            hourDataCh1[8]++
      } else if (data.hour == 9) {
            hourDataCh1[9]++
      } else if (data.hour == 10) {
            hourDataCh1[10]++
      } else if (data.hour == 11) {
            hourDataCh1[11]++
      } else if (data.hour == 12) {
            hourDataCh1[12]++
      } else if (data.hour == 13) {
            hourDataCh1[13]++
      } else if (data.hour == 14) {
            hourDataCh1[14]++
      } else if (data.hour == 15) {
            hourDataCh1[15]++
      } else if (data.hour == 16) {
            hourDataCh1[16]++
      } else if (data.hour == 17) {
            hourDataCh1[17]++
      } else if (data.hour == 18) {
            hourDataCh1[18]++
      } else if (data.hour == 19) {
            hourDataCh1[19]++
      } else if (data.hour == 20) {
            hourDataCh1[20]++
      } else if (data.hour == 21) {
            hourDataCh1[21]++
      } else if (data.hour == 22) {
            hourDataCh1[22]++
      } else if (data.hour == 23) {
            hourDataCh1[23]++
      }
}

$.get('/getStat', function(data) {
      if (data) {
            numOfPlayers = data.length
            startTime = data[0].time
            endTime = data[data.length - 1].time
            document.getElementById('time').innerHTML = "Data from " + startTime + " to " + endTime
      }

      for (index in data) {
            countAppearance(data[index])
      }

      var ctx = document.getElementById('score-chart').getContext('2d');
      /*
      visualization for score
      */
      var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                  labels: dataScale,
                  datasets: [{
                        label: "Score of " + numOfPlayers + " player(s)",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: scoreData,
                  }]
            },
            options: {
                  title: {
                        display: true,
                        text: 'Number of players by score'
                  }
            }
      });


      var ctx2 = document.getElementById('score-chart2').getContext('2d');
      /*
      visualization for score comparison between designer and non-designer
      */
      var chart = new Chart(ctx2, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                  labels: dataScale,
                  datasets: [{
                        label: "Score of " + numOfPlayers + " player(s)",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: scoreData,
                  }]
            },
            options: {
                  title: {
                        display: true,
                        text: 'Number of designer and non-designer by score'
                  }
            }
      });

      /*
      visualization for networktype
      */
      var netScale = [
            "wifi",
            "4g",
            "3g",
            "2g",
            "unknown"
      ]
      var ctx3 = document.getElementById('network-chart').getContext('2d');
      var networkVisData = {
            datasets: [{
                  data: networkData,
                  backgroundColor: [
                        "#17B680",
                        "#1399B3",
                        "#0C66B3",
                        "#0127B3",
                        "#97C306"
                  ]
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: netScale
      };
      var myDoughnutChart = new Chart(ctx3, {
            type: 'doughnut',
            data: networkVisData,
            options: {
                  title: {
                        display: true,
                        text: 'Number of play times by network type'
                  }
            }
      });
      /*
      visualization for timeline
      */
      var ctx4 = document.getElementById('time-chart').getContext('2d');
      var hourVisData = {
            datasets: [{
                  label: "Number of play times by hour",
                  data: hourDataCh1,
                  backgroundColor: "#2B65B3"
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: timeScale
      };
      var myBarChart = new Chart(ctx4, {
            type: 'bar',
            data: hourVisData,
            options: {
                  title: {
                        display: true,
                        text: 'Number of play times by hour'
                  }
            }
      });
})