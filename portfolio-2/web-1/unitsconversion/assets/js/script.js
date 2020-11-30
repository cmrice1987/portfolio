function CalculateUnit() {
  "use strict";
  var operator
  var form = $("#myform");


  if (form.valid()) {


    var FromValue = document.getElementById("Operand1").value;


    var FromUnit;

    if (document.getElementById("fcentimetersOperator").checked) {
      FromUnit = document.getElementById("fcentimetersOperator").value;
    }

    if (document.getElementById("fMetersOperator").checked) {
      FromUnit = document.getElementById("fMetersOperator").value;
    }
    if (document.getElementById("fKilometersOperator").checked) {
      FromUnit = document.getElementById("fKilometersOperator").value;
    }
    if (document.getElementById("fInchesOperator").checked) {
      FromUnit = document.getElementById("fInchesOperator").value;
    }

    if (document.getElementById("fFeetOperator").checked) {
      FromUnit = document.getElementById("fFeetOperator").value;
    }
    if (document.getElementById("fYardOperator").checked) {
      FromUnit = document.getElementById("fYardOperator").value;
    }
    if (document.getElementById("fMilesOperator").checked) {
      FromUnit = document.getElementById("fMilesOperator").value;
    }

    var ToUnit;
    if (document.getElementById("tcentimetersOperator").checked) {
      ToUnit = document.getElementById("tcentimetersOperator").value;
    }
    if (document.getElementById("tMetersOperator").checked) {
      ToUnit = document.getElementById("tMetersOperator").value;
    }
    if (document.getElementById("tKilometersOperator").checked) {
      ToUnit = document.getElementById("tKilometersOperator").value;
    }
    if (document.getElementById("tInchesOperator").checked) {
      ToUnit = document.getElementById("tInchesOperator").value;
    }
    if (document.getElementById("tFeetOperator").checked) {
      ToUnit = document.getElementById("tFeetOperator").value;
    }
    if (document.getElementById("tYardOperator").checked) {
      ToUnit = document.getElementById("tYardperator").value;
    } 
    if (document.getElementById("tMilesOperator").checked) {
      ToUnit = document.getElementById("tMilesOperator").value;
    }
    var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
    var myMethod = "POST";


    var myData = {};
    myData.FromValue = FromValue;
    myData.FromUnit = FromUnit;
    myData.ToUnit = ToUnit;

    $(document).ready(function () {


      $.ajax({
        method: myMethod,
        data: myData,
        url: myURL
      })


        .done(function (msg) {
          document.getElementById("ToUnitMsg").innerHTML = msg;
        });
    });
  }
}

function clearform() {
  "use strict";

  /* Set all of the form values to blank or false */
  document.getElementById("FromValue").value = "";
  document.getElementById("FromValueMsg").innerHTML = "";
  document.getElementById("FromUnitMsg").innerHTML = "";
  document.getElementById("fCentimetersoperator").checked = false;
  document.getElementById("fMetersoperator").checked = false;
  document.getElementById("fKilometersoperator").checked = false;
  document.getElementById("fInchesoperator").checked = false;
  document.getElementById("fFeetoperator").checked = false;
  document.getElementById("fYardoperator").checked = false;
  document.getElementById("fMiles2operator").checked = false;
  document.getElementById("FromUnitMsg").innerHTML = "";
  document.getElementById("tCentimetersoperator").checked = false;
  document.getElementById("tMetersoperator").checked = false;
  document.getElementById("tKilometersoperator").checked = false;
  document.getElementById("tInchesoperator").checked = false;
  document.getElementById("tFeetoperator").checked = false;
  document.getElementById("tYardoperator").checked = false;
  document.getElementById("tMilesoperator").checked = false;
  document.getElementById("ToUnitMsg").innerHTML = "";
  document.getElementById("ToValue").innerHTML = "";
}

  function clearForm() {
    document.getElementById("fCentimetersoperator").value = "";
    document.getElementById("fMetersoperator").value = "";
    document.getElementById("fKilometersoperator").value = "";
    document.getElementById("fInchesoperator").value = "";
    document.getElementById("fFeetoperator").value = "";;
    document.getElementById("fYardoperator").value = "";
    document.getElementById("fMiles2operator").value = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("tCentimetersoperator").value = "";
    document.getElementById("tMetersoperator").value = "";
    document.getElementById("tKilometersoperator").value = "";
    document.getElementById("tInchesoperator").value = "";
    document.getElementById("tFeetoperator").value = "";
    document.getElementById("tYardoperator").value = "";
    document.getElementById("tMilesoperator").value = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
  }
  /* Form Validation */
  $("#myform").validate({

  });
