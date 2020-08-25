// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

tableData.forEach((incident) => {
    console.log(incident);
    var row = tbody.append("tr");

    Object.entries(incident).forEach(([key,value]) => {
        console.log(key,value);
        var cell = row.append('td');
        cell.text(value);
    });
});

button.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime)
    
    var filteredData = tableData.filter(incident => incident.datetime === dateTime);
    console.log(filteredData)

    filteredData.forEach((incident) => {
        var row = tbody.append("tr");

        Object.entries(incident).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });

});
