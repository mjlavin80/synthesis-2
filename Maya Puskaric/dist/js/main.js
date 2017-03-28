$(document).ready(function(){
  Chart.defaults.global.defaultFontColor = '#fff';

  var ctx = document.getElementById('myChart').getContext('2d');

  var dataOptions = {
    labels: ["Allegheny General", "Allegheny Valley", "Forbes Regional", "Heritage Valley", "Jefferson Regional", "Ohio Valley", "St. Clair", "UPMC East", "UPMC McKeesport", "UPMC Passavant", "UPMC Presbyterian", "UPMC St. Margaret's", "West Penn"],
    datasets: [{
      label: "2016",
      backgroundColor: [
      'rgba(200, 117, 30, 0.4)',
      'rgba(200, 117, 30, 0.4)',
      'rgba(200, 117, 30, 0.4)',
      'rgba(200, 117, 30, 0.4)',
      'rgba(247, 215, 49, 0.4)',
      'rgba(157, 29, 33, 0.4)',
      'rgba(26, 113, 90, 0.4)',
      'rgba(247, 215, 49, 0.4)',
      'rgba(200, 117, 30, 0.4)',
      'rgba(200, 117, 30, 0.4)',
      'rgba(247, 215, 49, 0.4)',
      'rgba(247, 215, 49, 0.4)',
      'rgba(200, 117, 30, 0.4)'
      ],

      borderColor: [
      'rgba(200, 117, 30, 0.9)',
      'rgba(200, 117, 30, 0.9)',
      'rgba(200, 117, 30, 0.9)',
      'rgba(200, 117, 30, 0.9)',
      'rgba(247, 215, 49, 0.9)',
      'rgba(157, 29, 33, 0.9)',
      'rgba(26, 113, 90, 0.9)',
      'rgba(247, 215, 49, 0.9)',
      'rgba(200, 117, 30, 0.9)',
      'rgba(200, 117, 30, 0.9)',
      'rgba(247, 215, 49, 0.9)',
      'rgba(247, 215, 49, 0.9)',
      'rgba(200, 117, 30, 0.9)'
      ],
      borderWidth: 1,
      data: [2.5, 2.5, 3, 3, 4, 2, 5, 4, 3, 3, 4, 3.5, 3],
    }]
  };

  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: dataOptions,
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Grade ( 1 to 5 )'
          },
          ticks: {
            suggestedMin: 1
          }
        }]
      }
    }
  });
});
