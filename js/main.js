

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


// alerts drop down menu
const iconAlert = document.getElementById('iconAlert');
const ul = document.createElement('ul');
const alertDiv = document.createElement('div');
iconAlert.addEventListener('click', () => {
  const user = document.getElementById('user');

  user.appendChild(ul);
  user.classList.toggle('show');
  const li = document.createElement('li');
  li.textContent="lorem ipsum";
  ul.appendChild(li);

});

// add active class to selected items
//
// const addActive = (e)=> {
//     e.target.classList.toggle('active');
// }
// const iconNav = document.getElementById('icon-menu');
// iconNav.addEventListener('click', addActive);

const iconMenu = document.getElementById("nav");
var icons = document.getElementsByClassName("icons");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// sticky navigation
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// const navbar = document.getElementById("icon-menu");
//
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// local storage
function supportsLocalStorage() {
  try {
  return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e) {
    return false;
  }
}

if(supportsLocalStorage()) {
 function saveSet() {
   localStorage.setItem('publicProf', publicProf.checked);
   localStorage.setItem('emailNotify', emailNotify.checked);
   localStorage.setItem('timezone', timezone.options[timezone.selectedIndex].value);
}
function clearSet() {
  publicProf.checked = false;
  emailNotify.checked = false;
  localStorage.emailNotify = false;
  localStorage.publicProf = false;
  localStorage.timezone = timezone.options[0].text;
  timezone.value = timezone.options[0].text;
  // timezone;
}
const clearSettings = document.getElementById('clearSettings');
  clearSettings.addEventListener('click', function(e) {
    e.preventDefault();
    clearSet();
  });

const saveSettings = document.getElementById('saveSettings');
 saveSettings.addEventListener('click', function(e) {
   e.preventDefault();
   saveSet();
 });



window.onload = function() {
  let publicProf = document.getElementById('publicProf');
  let emailNotify = document.getElementById('emailNotify');
  let timezone = document.getElementById('timezone');

const remember = () => {
  publicProf.checked = JSON.parse(localStorage.getItem('publicProf'));
  emailNotify.checked = JSON.parse(localStorage.getItem('emailNotify'));
  timezone.value = localStorage.getItem('timezone');
}
  remember();
}

    document.getElementById('sendMessage').addEventListener('click', function(event) {
      event.preventDefault();
      const message = document.getElementById('message').value;
      const searchUser = document.getElementById('searchUser').value;

      localStorage.setItem('message', message);
      localStorage.setItem('searchUser', searchUser);

      window.alert('what?')
    });
  }

const alert = document.getElementById('alert');
const hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', function() {
  alert.classList.add('hide');
});

const members = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver',
    'Jane Sullivan'
  ];
  document.addEventListener('keyup', function() {
    const searchMembers = document.getElementById('searchMembers');
    const searchValue =  searchMembers.value.toUpperCase();
      console.log(searchValue);
});
//   let nameArray = members[i].split('');
//   for (let i =0; i <members.length; i++) {
//
//   const searchMembers = document.getElementById('searchMembers');
//   document.addEventListener('keyup', function() {
//     const searchValue =  searchMembers.value.toUpperCase();
//     if(nameArray.toUpperCase == searchValue) {
//       console.log('searchMembers');
//     }
//
//
//   });
// }



// CHARTS
// Line charts


// var ctx = document.getElementById('lineChart').getContext('2d');
// const barData = {
// labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10","11-17","18-24", "25-31"],
// tension: 0,
// backgroundColor: '#aaaacb',
// borderColor: 'rgba(118, 120, 237, .8)',
// datasets: [{
//     // label: "Hourly",
//     backgroundColor: 'rgba(183, 194, 224, .3)',
//     borderColor: 'rgba(118, 120, 237, .8)',
//     borderWidth: .5,
//     pointStyle: 'circle',
//     radius: 5,
//     data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250 ],
// },
// {
//   // label: "Daily",
//   backgroundColor: 'rgba(133, 186, 94, .4)',
//   borderColor: 'rgba(118, 120, 237, .8)',
//   borderWidth: .5,
//   pointStyle: 'circle',
//   radius: 5,
//     data: [500, 1000, 750, 1000, 2500, 500, 1500, 2750, 2250, 2550, 2250, 1000, 750 ],
// },
// {
//   // label: "Weekly",
//   backgroundColor: 'rgba(183, 194, 224, .8)',
//   borderColor: 'rgba(118, 120, 237, .8)',
//   borderWidth: .5,
//   pointStyle: 'circle',
//   radius: 5,
//     data: [750, 750, 1250, 1000, 500, 2000, 1500, 1250, 1250, 1000, 2250, 2000, 2250 ],
// },
// {
//   // label: "Monthly",
//   backgroundColor: 'rgba(133, 186, 94, .8)',
//   borderColor: 'rgba(118, 120, 237, .8)',
//   borderWidth: .5,
//   pointStyle: 'circle',
//   radius: 5,
//     data: [1000, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250 ],
// }]
// }
const hrChrt = document.getElementById('hour');
const dayChrt = document.getElementById('day');
const wkChrt = document.getElementById('week');
const mnthChrt = document.getElementById('month');

console.log(Chart.defaults);
Chart.defaults.global.animation.easing = 'easeOutCirc';
Chart.defaults.global.elements.rectangle.borderWidth = 13;
Chart.defaults.global.elements.lineTension = .8;

// Chart.defaults.global.animation.onComplete = () => {
//   console.log('Finished!');
// }

let myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [
            {
                label: 'Visitors',
                data: [350, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: 'rgba(115, 119, 191, 0.25)',
                borderColor: '#7477bf',
                borderWidth: 1.5,
                pointBorderWidth: 1.8,
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#e7e8f9',
                pointRadius: 5,
                lineTension: .2,
            }
        ]
    },
});
hrChrt.addEventListener('click', () => {
    myChart.data.labels = ['9am', '10am', '11pm', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    myChart.config.data.datasets[0].data = [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 1750, 2250 ];
    myChart.data.datasets[0].backgroundColor = 'rgba(183, 194, 224, .3)';
    myChart.update();
});

dayChrt.addEventListener('click', () => {
    myChart.data.labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    myChart.config.data.datasets[0].data = [1000, 750, 1000, 2500, 2750, 1500, 750];
    myChart.data.datasets[0].backgroundColor = 'rgba(133, 186, 94, .4)';
    myChart.update();
});
wkChrt.addEventListener('click', () => {
    myChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    myChart.config.data.datasets[0].data = [350, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];
    myChart.data.datasets[0].backgroundColor = 'rgba(183, 194, 224, .8)';
    myChart.update();
});
mnthChrt.addEventListener('click', () => {
    myChart.data.labels = ['Jan','Feb','March','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];
    myChart.config.data.datasets[0].data = [1500, 2000, 3000, 4000, 3200, 2000, 2500, 2800, 3500, 4000, 3000, 2500];
    myChart.data.datasets[0].backgroundColor = 'rgba(133, 186, 94, .4)';
    myChart.update();
});


var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
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
