$(document).ready(function($) {
    fadeInElems();
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(loading, 24);
    function loading() {
        if (width >= 43) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
});

function restore() {
    $(".restoreButton").css('backgroundColor', 'green').text("Restored");
    $(".restoreButton").prepend("<i></i>");
    $(".restoreButton > i").addClass('fa fa-check');
}

function closeTeam() {
    $("#teamClose").fadeOut('400', function() {
        $("#projectClose").addClass('fullWidth');
    });
    if ( $("#projectClose").css('display') == "none") {
            chart.options.maintainAspectRatio = true;
        }
}

function closeProject() {
    $("#projectClose").fadeOut('400', function() {});
     if ($("#teamClose").css('display') == "none") {
            chart.options.maintainAspectRatio = true;
        }
}

function fadeInElems(){
        $(".team").fadeIn('600', function() {
           $(".project-activity").fadeIn('fast', function() {}); 
        });
    }



// Progress circle

var pct = 0,
  span_progress = document.getElementById("span_progress"),
  div_loading_progress = document.getElementById("div_loading_progress");


function display_pct(p) {
  span_progress.innerHTML=""+p+"%";
  div_loading_progress.className="c100 p"+p;
}

function update_pct(){
  display_pct(pct++);
        
  if (pct<=80) {
            setTimeout(update_pct,20);
  }
}

setTimeout(update_pct,100);


// Toggle Navbar
var a = true;
$("#toggleNav").click(function(event) {
    if (a == true) {
        $("#prof, .menu").css('display', 'none');
        $(".col-md-10").addClass('fullWidth');
        a = false;
    }
    else {
        $("#prof, .menu").css('display', 'block');
        $(".col-md-10").removeClass('fullWidth');
        a = true;
    }
    
});


// Chart control
var ctx = document.getElementById('myChart').getContext('2d');
ctx.height = 100;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Client feedback",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        tooltips: {
            mode: 'point'
        }
    }
});


// Media query via Jquery
// if (window.matchMedia("(min-width: 992px)").matches) {
//         $("#prof").css('display', 'none');
//         $(".col-md-10").addClass('fullWidth');
//         a = false;

//         $("#toggleNav").click(function(event) {
//         if (a == true) {
//             $(".menu, #prof").css('display', 'block');
//             a = false;
//         }
//         else {
//             $(".menu, #prof").css('display', 'none');
//             a = true;
//         }
    
// });
// }