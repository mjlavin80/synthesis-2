$(document).ready(function(){
  Chart.defaults.global.defaultFontColor = '#fff';

  var ctx = document.getElementById('myChart').getContext('2d');

  var dataOptions = {
    labels: ["Allegheny General", "Allegheny Valley", "Forbes Regional", "Heritage Valley", "Jefferson Regional", "Ohio Valley", "St. Clair", "UPMC East", "UPMC McKeesport", "UPMC Passavant", "UPMC Presbyterian", "UPMC St. Margaret's", "West Penn"],
    datasets: [{
      label: "2016",
      backgroundColor: [
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)'
      ],
      
      borderColor: [
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)',
      'rgba(204, 0, 0, 0.25)'
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 41],
    }]
  };

  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: dataOptions,
    options: {}
  });
});
