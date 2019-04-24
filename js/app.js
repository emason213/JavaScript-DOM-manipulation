var $tbody = document.querySelector("tbody");
var $dataInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $commentInphter =document.queryselector("#comment")
var $searchButton = document.querySelector("#search");
var $resetButton = document.querySelector("#reset");


$searchButton.addEventListener("click", searchData);
$resetButton.addEventListener("click", resetData);


var filteredData = dataSet;
var resetData = dataSet;

var startingIndex = 0;
var resultsPerPage = 1000;

function renderTable() {

    var endingIndex = startingIndex + resultsPerPage;

    for (var i = 0; i < filteredData.length; i++) {
    
        var $row = $tbody.insertRow(i);

        var currentSighting = filteredData[i];
        var fields = Object.keys(currentSighting);

        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        };
    };
};
function searchData(event){

	event.preventDefault();

	var filteredDate = $dateInput.value.trim() //trim removes any white spaces in between
	if(filteredDate !=""){
		filteredData = dataSet.filter(function (data){
			var dataDate = data.datetime;
			return dataDate ===filteredDate;
		});
	

	};
	
	var filteredCity = $cityInput.value.trim().toLowerCase();
  	if (filteredCity !="") {
    	filteredData = filteredData.filter(function(data) {
     		var dataCity = data.city.toLowerCase();
      		return dataCity === filteredCity;

		});
	};

	var filteredState = $stateInput.value.trim().toLowerCase();
	if (filteredState !="") {
		filteredData = filteredData.filter(function(data) {
			var dataState = data.set.toLowerCase();
			return dataState === filteredState;
		});
	};


	var filteredCountry = $countryInput.value.trim().toLowerCase();
	if(filteredCountry !="") {
		fileteredData = filteredData.filter(function(data) {
			var dataCountry = data.country.toLowerCase();
			return dataCountry === filteredCountry;
		});
	};

		renderTable();

	}

		function resetData() {
  		filteredData = dataSet;
  		$dateInput.value = "";
  		$cityInput.value = "";
  		$stateInput.value = "";
  		$countryInput.value = "";
 		$shapeInput.value = "";
  		renderTable();


	}

	function resetForm() {
		document.getElementById("myForm").reset();
	}

	// Render the table 

	renderTable();