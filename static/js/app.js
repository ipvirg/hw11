// from data.js
var tableData = data;
        
// Select the input element and get the raw HTML node
var tbody = d3.select("tbody");

// Create funtion to display full table for UFO Sightings data
function loadTable(ufodata) {
    // tbody.html("");
    ufodata.forEach((ufo) => {
                var row = tbody.append("tr");
                Object.values(ufo).forEach((value) => {
                var cell = row.append("td");
                cell.text(value);
                });
    });    
}

// Select the Filter Table button
var filterbtn = d3.select("#filter-btn");
// Select Reset Table button
var resetbtn = d3.select("#reset");

function filterTablebtn() {

        // Prevent the page from refreshing
        d3.event.preventDefault();

        // Grab the value property of the input element

        var filterDate = d3.select("#datetime").property("value");
        var filterCity = d3.select("#city").property("value");
        var filterState = d3.select("#state").property("value");
        var filterCountry = d3.select("#country").property("value");
        var filterShape = d3.select("#shape").property("value");
      
        var filteredData = data;

        if (filterDate != "") {
            filteredData = filteredData.filter(filteredufo => filteredufo.datetime === filterDate);
            }
       
        if (filterCity != "") {
            filteredData = filteredData.filter(filteredufo => filteredufo.city.toLowerCase() === filterCity.toLowerCase());
            }

        if (filterState != "") {
            filteredData = filteredData.filter(filteredufo => filteredufo.state.toLowerCase() === filterState.toLowerCase());
            }

        if (filterCountry != "") {
            filteredData = filteredData.filter(filteredufo => filteredufo.country.toLowerCase() === filterCountry.toLowerCase());
            }

        if (filterShape != "") {
            filteredData = filteredData.filter(filteredufo => filteredufo.shape.toLowerCase() === filterShape.toLowerCase());
            }

        tbody.html('');
        loadTable(filteredData);
      
    }

function resetTablebtn() {
      tbody.html('');
      loadTable(tableData);
    }

// Display full table
loadTable(tableData);

filterbtn.on("click", filterTablebtn );
resetbtn.on("click", resetTablebtn );