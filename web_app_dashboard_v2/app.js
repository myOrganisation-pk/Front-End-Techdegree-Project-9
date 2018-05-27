

// Popup functionality //
$(window).load(function () {
  $(".trigger_popup_fricc").click(function () {
    $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function () {
    $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function () {
    $('.hover_bkgr_fricc').hide();
  });
  
  // alert icon with 2 alert messages //
  
});
let closeBtn = document.querySelector('.closebtn');
  closeBtn.addEventListener('click', function () {
    alert('Thank you for visiting this page.');
    alert('This message will now self destruct.');
  });


// Line chart variables and layout //
var chart_labels = ["0:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
var traffic_data = ['100', '120', '130', '150', '120', '130', '150', '160', '180', '200', '250', '300', '500', '800', '700', '750', '1200', '1000', '900', '1000', '1200', '800', '600', '550', '400'];
var daily_data = ['300', '350', '500', '600', '750', '900', '850'];
var weekly_data = ['300', '350', '500', '600', '750', '900', '850', '400', '500', '700', '300', '350', '500', '600', '750', '900', '850', '400', '500', '700', '300', '350', '500', '600', '750', '900', '850', '400', '500', '700', '300', '350', '500', '600', '750', '900', '850', '400', '500', '700', '300', '350', '500', '600', '750', '900', '850', '400', '500', '700', '800', '300'];
var monthly_data = ['600', '750', '900', '850', '400', '500', '700', '300', '350', '500', '600', '750'];
// Creates the styling of the line chart //
const ctx = document.getElementById('traffic').getContext('2d');
var config = {
  type: 'line',
  data: {
    labels: chart_labels,
    datasets: [{
      type: 'line',
      label: 'Traffic',
      yAxisID: 'y-axis-0',
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: 'rba(255, 255, 255)',
      lineTension: 0,
      backgroundColor: [
        'rgba(117, 90, 175, 0.25)',
      ],
      borderColor: [
        'rgba(83, 89, 151, 0.5)',
      ],
      data: traffic_data,
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        position: 'left',
        'id': 'y-axis-0',

        gridLines: {
          offsetGridLines: true
        }
      }],
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    }
  }
};

// chart functionality for line chart navigation //
var traffic_chart = new Chart(ctx, config);
document.getElementById('0').addEventListener('click', function () {
  var data = traffic_chart.config.data;
  data.datasets[0].data = traffic_data;
  data.labels = chart_labels;
  traffic_chart.update();
});

document.getElementById('1').addEventListener('click', function () {
  var chart_labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var traffic_data = daily_data;
  var data = traffic_chart.config.data;
  data.datasets[0].data = traffic_data;
  data.labels = chart_labels;
  traffic_chart.update();
});

document.getElementById('2').addEventListener('click', function () {
  var chart_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var traffic_data = weekly_data;
  var data = traffic_chart.config.data;
  data.datasets[0].data = traffic_data;
  data.labels = chart_labels;
  traffic_chart.update();
});

document.getElementById('3').addEventListener('click', function () {
  var chart_labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var traffic_data = monthly_data;
  var data = traffic_chart.config.data;
  data.datasets[0].data = traffic_data;
  data.labels = chart_labels;
  traffic_chart.update();
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

// Nav search box //
$('#filtersubmit').click(function () {
  alert('Searching for ' + $('#filter').val());
});


//******* AUTOCOMPLETE FUNCTIONALITY FOR USER SEARCH ******* //
var userNames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
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
        b.addEventListener("click", function (e) {
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
  inp.addEventListener("keydown", function (e) {
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

autocomplete(document.getElementById('search-name'), userNames);


//---- LOCAL STORAGE ----//

const timeZone = document.getElementById('timezone');

window.onload = function () {
  // message user //
  if (localStorage) {
    document.getElementById('message-form').addEventListener('submit', function () {
      var name = document.getElementById('search-name').value;
      localStorage.setItem('search-name', name);

    });
    timezone.selectedIndex = localStorage.getItem('timezone');

    // Send button with confirmation message //
    const form = document.getElementById('message-form');
    const search = document.getElementById('search-name');
    const textArea = document.getElementById('other');

    form.onsubmit = function (e) {
      e.preventDefault();
      var name = localStorage.getItem('search-name');
      if (search.value.length == 0 || textArea.value.length == 0) {
        alert('Please enter a message.');
      } else {
        alert('Message sent to ' + name);
        form.reset();
      }
    };

    // Settings //

    // On/Off switches //
    document.getElementById('save').addEventListener('click', function (event) {

      let email = document.getElementById('email-checkbox').checked;
      localStorage.setItem('emailSetting', email);

      let profile = document.getElementById('profile-checkbox').checked;
      localStorage.setItem('privacySetting', profile);
    });

    // email switch on refresh
    if (localStorage.getItem('emailSetting') == 'true') {
      $('#email-checkbox').prop('checked', true);
    } else {
      $('#email-checkbox').prop('checked', false);
    }

    // privacy switch on refresh
    if (localStorage.getItem('privacySetting') == 'true') {
      $('#profile-checkbox').prop('checked', true);
    } else {
      $('#profile-checkbox').prop('checked', false);
    }

    // timezone //
    document.getElementById('settings-form').addEventListener('submit', function (e) {
      localStorage.setItem('timezone', timezone.selectedIndex);
    });
  }
}
// reset local storage with cancel button //
document.getElementById('cancel').addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.clear();
  $('#timezone').val('');
  $('#email-checkbox').prop('checked', false);
  $('#profile-checkbox').prop('checked', false);
});



















