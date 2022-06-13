// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// buildTable(tableData)

// 1. Create a variable to keep track of all the filters as an object.
// ia am assuing var since its a little more specific than let its not def that would be python...
var filters = {};

// 3. Use this function to update the filters. 
// im so confused the module gave me this function handleClick() this techinically is the same things a below 
function updateFilters() {

    // 4a. Save the element that was changed as a variable. 
//the element is an object the represent an object, while and object can be anything. like a sting or an arry. 
  let alteredElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
  let alteredValue = alteredElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
  let alteredId = alteredElement.attr("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (alteredValue) {
    filters[alteredId] = alteredValue;
  } else {
    clear = filters[alteredId];

  } 
 
    // 6. Call function to apply all filters and rebuild the table
    filterTable();

  }
      
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values 
    // the mod says this filteredData = filteredData.filter(row => row.datetime === date); SOF said do this?? 
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });


//function that grabs via d3 the variables you are going to filter on
//same function needs to populate the filter variable
//same function needs to then use the filter object you have created to filter
//then call build table on the filtereddata



    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }

  // 2. Attach an event to listen for changes to each filter
   // d3.selectAll("#filter-btn").on("click", handleClick);
  d3.selectAll("imput").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData); 
