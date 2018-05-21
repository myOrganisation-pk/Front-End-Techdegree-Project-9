


// Creates the styling of the line chart //

const lChart = document.getElementById('lineChart');
let lineChart = new Chart(lChart, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
      {
        label: 'TRAFFIC',
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255, 255, 255)',
        lineTension: 0,
        data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
        backgroundColor: [
          'rgba(117, 90, 175, 0.25)',
        ],
        borderColor: [
          'rgba(83, 89, 151, 0.5)',
        ],
        borderWidth: 1
      }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        },
        ticks: {
        }
      }],
      yAxes: [{
        gridLines: {
          offsetGridLines: true,
          display: true,
        },
        ticks: {
          beginAtZero: true,
          steps: 20,
          stepValue: 500,
          max: 2500
        }
      }]
    }
  }
});

// Creates the styling of the bar chart //

const bChart = document.getElementById('barChart');
let barChart = new Chart(bChart, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'DAILY TRAFFIC',
        fill: true,
        data: [50, 75, 150, 100, 200, 175, 57],
        backgroundColor: [
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)',
          'rgba(117, 90, 175, 1)'
        ],
        borderColor: [
          'rgba(83, 89, 151, 0.5)',
        ],
        borderWidth: 1
      }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        },
        ticks: {
        }
      }],
      yAxes: [{
        gridLines: {
          offsetGridLines: true,
          display: true,
        },
        ticks: {
          beginAtZero: true,
          steps: 5,
          stepValue: 50,
          max: 250
        }
      }]
    }
  }
});

// Creates the styling of the pie chart //

const dChart = document.getElementById('doughnutChart');
let doughnutChart = new Chart(dChart, {
  type: 'doughnut',
  data: {
    labels: ['PHONES', 'TABLETS', 'DESKTOP'],
    datasets: [
      {
        label: 'MOBILE USERS',
        fill: true,
        data: [100, 50, 25],
        backgroundColor: [
          'rgba(117, 90, 175, 1)',
          'rgba(65, 200, 154, 1)', 
          'rgba(65, 182, 200, 1)',
        ],
        borderColor: [
          'rgba(83, 89, 151, 0.5)',
        ],
        borderWidth: 1
      }]
  },
  options: {
    layout: {
      padding: {
        right: 20,
        top: 0
      }
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 15
      }
    }
  }
});





