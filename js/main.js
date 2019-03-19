// const addIconAlert()  = document.addEventListener('hover', ()=> {
//   const bellIcon = document.getElementById("bell-icon");
//   bellIcon.classList.add("iconAlert");
// });

// searchForm.addEventListener("keyup", function() {
//     // var inputWord = keyword.value.toLowerCase();
//     for (i=0; i < 12; i++) {
//       var imageCapt = document.getElementsByTagName("A")[i].getAttribute("data-title").toLowerCase();
//       if (imageCapt.indexOf(keyword.value.toLowerCase()) > -1) {
//         images[i].style.display = '';
//       } else {
//         images[i].style.display = 'none';
//         }
//     }
// });


// addIconAlert();
const alert = document.getElementById('iconAlert');
alert.addEventListener('hover', function() {


});

const keyword = document.getElementById('keyword');
document.addEventListener('keyup', function() {
    console.log(keyword.value.toUpperCase());
});

// CHARTS
var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10","11-17","18-24", "25-31"],
tension: 0,

backgroundColor: '#aaaacb',
borderColor: 'rgba(118, 120, 237, .8)',
datasets: [{
    label: "Hourly",
    backgroundColor: '#b7c2e0',
    borderColor: 'rgba(118, 120, 237, .8)',
    borderWidth: .5,
    pointStyle: 'circle',
    radius: 5,
    data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250 ],
},
{
  label: "Daily",
  backgroundColor: '#b7c2e0',
  borderColor: 'rgba(118, 120, 237, .8)',
  borderWidth: .5,
  pointStyle: 'circle',
  radius: 5,
    data: [500, 1000, 750, 1000, 2500, 500, 1500, 2750, 2250, 2550, 2250, 1000, 750 ],
},
{
  label: "Weekly",
  backgroundColor: '#b7c2e0',
  borderColor: 'rgba(118, 120, 237, .8)',
  borderWidth: .5,
  pointStyle: 'circle',
  radius: 5,
    data: [750, 750, 1250, 1000, 500, 2000, 1500, 1250, 1250, 1000, 2250, 2000, 2250 ],
},
{
  label: "Monthly",
  backgroundColor: '#b7c2e0',
  borderColor: 'rgba(118, 120, 237, .8)',
  borderWidth: .5,
  pointStyle: 'circle',
  radius: 5,
    data: [1000, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250 ],
}]
},

// Configuration options go here
options: {
  title: {
  }
}
});

var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "Th", "F", "S"],
        datasets: [{
            label: '' ,
            data: [50, 100, 150, 125, 200, 225, 75],
            backgroundColor: [
                '#5e75ba',
                '#5e75ba',
                '#5e75ba',
                '#5e75ba',
                '#5e75ba',
                '#5e75ba',
                '#5e75ba',

            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("donutChart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: [
                        '#b7c2e0',
                        '#85ba5e',
                        '#5e75ba'
                      ],
        borderColor: '#535389',
        borderWidth: .5,
        data: [15, 18, 67],
    }]
    },
    options: {}
});
// var myLineChart = new Chart(ctx, {
// type: 'line',
// data: data,
// options: options
// });
