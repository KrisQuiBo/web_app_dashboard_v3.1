// message user widget
  // search user autocomplete
const newMembers = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver',
    'Jane Sullivan'
  ];
  const searchUser = document.getElementById('searchUser');
  const userName = searchUser.value;
  function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(searchUser, newMembers);

  //
  // const searchUser = document.getElementById('searchUser');
  // const userName = searchUser.value;
  // searchUser.addEventListener("keyup", function() {
  //     for (i=0; i < newMembers.length; i++) {
  //       let memberLetts = Array.from(newMembers[i].toLowerCase());
  //
  //       if (memberLetts.indexOf(userName.toLowerCase()) > -1) {
  //         userName.value = memberList.value;
  //         // members[i].style.display = '';
  //       }
  //       // else {
  //       //   newMembers[i].style.display = 'none';
  //       //   }
  //     }
  // });
//
//   document.addEventListener('keyup', function() {
//     const searchMembers = document.getElementById('searchMembers');
//     const searchValue =  searchMembers.value.toUpperCase();
//       console.log(searchValue);
// });
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
const message = document.getElementById('message');
const sendMessage = document.getElementById('sendMessage');
sendMessage.addEventListener('click', function(e) {
  e.preventDefault();
  if (searchUser.value == '') {
    window.alert('You must search for and select a member.');
    } else if(message.value == '') {
      window.alert('Please enter a message for ' + searchUser.value + '!');
    } else {
    window.alert('Your message to ' + searchUser.value + ' was sent!');
    }
    searchUser.value = '';
    message.value = '';
});


// alerts and drop down menu
  // trigger bell animation when mouse hovers over badge
const alertBadge = document.getElementById('iconAlert');
const bell = document.getElementById('bellIcon');
alertBadge.addEventListener('mouseover', () => {
    bell.classList.add('bellAnim');
  alertBadge.addEventListener('mouseout', () => {
    bell.classList.remove('bellAnim');
  });
});

  // reveal recent alerts window
const alertWindow = document.getElementById('alertWindow');
const iconAlert = document.getElementById('iconAlert');
  let clicks = 3;
  iconAlert.addEventListener('click', () => {
  alertWindow.classList.remove('hide');
  alertWindow.classList.add('embed');
});

//close alerts in pop-up window
const closebtns = document.getElementsByClassName("close");
for (let i = 0; i < closebtns.length; i++) {
closebtns.onClick = function() {

}
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
  //coundown alerts in badge
    iconAlert.innerText = clicks--;
});
}

// close Alert box
const alert = document.getElementById('alert');
const hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', function() {
  alert.classList.add('hide');
});

// add active class to icon menu when icon clicked
const iconMenu = document.getElementById("nav");
var icons = document.getElementsByClassName("icons");
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

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

// CHARTS

const btnChart = document.getElementById("btn-chart");
var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Line charts

const hrChrt = document.getElementById('hour');
const dayChrt = document.getElementById('day');
const wkChrt = document.getElementById('week');
const mnthChrt = document.getElementById('month');

console.log(Chart.defaults);
Chart.defaults.global.animation.easing = 'easeOutCirc';
Chart.defaults.global.elements.rectangle.borderWidth = 10;
Chart.defaults.global.elements.rectangle.hoverBackgroundColor = '#85ba5e';
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
            label: 'Daily Traffic' ,
            data: [50, 100, 150, 125, 200, 225, 75],
            hoverBackgroundColor: '#85ba5e',
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
      legend: {
        display: false
      },
      maintainAspectRatio: false,
       aspectRatio: 1,

        scales: {
          xAxes: [{
            barPercentage: 0.9,
              barThickness: 'flex'
          }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    lineHeight: 1.3
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
    options: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontSize: 15,
          boxWidth: 10,
          padding: 10
        }
      },
      layout: {
        padding: {
          // top: 50
        }
       },
      maintainAspectRatio: false,
       aspectRatio: 1,
    }
});
}
