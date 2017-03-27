$(document).ready(function(){
  Chart.defaults.global.defaultFontColor = '#fff';

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',

  data: {
    labels: ["He tha best", "Hottest memes", "Cutie 11/10", "V Snuggly", "Very soft", "Can literally throw me"],
    datasets: [{
      backgroundColor: [
        "#ff0000",
        "#ff00f6",
        "#b400ff",
        "#00f0ff",
        "#00ff12",
        "#fffc00",
        
      ],
      data: [32, 103, 55, 67, 37, 100,]
    }]
  }
});
});