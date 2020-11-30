function calculate() {
    $( "#ValueForm" ).validate({
        
    });
    
if ($( "#Valueform" ).valid()) {
    
 /* Variables */
var basecurrency = document.getElementById("basecurrency").value;
var convertcurrency = document.getElementById("convertcurrency").value;
var fromdate = document.getElementById("FromDate").value;
var todate= document.getElementById("ToDate").value;

    
 /* URL for AJAX Call */
var myURL = "https://api.worldtradingdata.com/api/v1/forex_history?base="+basecurrency+"&convert_to="+convertcurrency+"&date_from="+fromdate+"&date_to="+todate+"&sort=oldest&api_token=fkRtRi45gN3bzUL2tXDCvcUDJU77D8qFxdPPSUIdowTCwBsarVNW6oY4uamQ";


var myMethod = "GET";

$(document).ready(function() { 

   
    $.ajax({
      method: myMethod,
      url: myURL
    })

    /* AJAX complete - result is in msg */
      .done(function( msg ) {

			/*jsonresult = msg["history"]['2020-01-07']['close']*/
			var dates = [];		// contains the date for each data point
			var values = [];	// contains the closing value for each data point

			i = 0;
			// loop through each day and get the keydate - see https://www.w3schools.com/js/js_json_objects.asp
			for (var datekey in msg.history) {
				dates[i] = datekey;
				// Now that we have the key, get the value
  				values[i] = msg.history[datekey];
				i = i + 1;
			}

			var ctx = document.getElementById("chartjs-0");
			var myChart = new Chart(ctx, {
			"type":"line",
			"data": {
				"labels": dates,
				"datasets":[{"label": "One " + basecurrency + " to " + convertcurrency,
				"data": values,
				"fill":false,
				"borderColor":"rgb(75, 192, 192)",
				"lineTension":0.1}]},
				"options":{ 
					responsive: false,
					maintainAspectRatio: true,
					title: {
						display: true,
						text: basecurrency + " to " + convertcurrency,
						fontSize : 18
					},
					scales: {
						xAxes: [{
							type: 'time',
							time: {
									displayFormats: {
									day: 'MMM D'
								}
							}
						}],

						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: convertcurrency
							}
						}]

					}
				}
			});
    });
});
}
}
        
function clearForm() {
    document.getElementById("basecurrency").value = "";
    document.getElementById("convertcurrency").value = "";
    document.getElementById("FromDate").value="";
    document.getElementById("ToDate").value="";
}