// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
//What exaclty do I do with this stuff above. 

// Start with a function 
function buildTable(data) {
  //First, clear out any existing data 
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
      }
    );
  });
}

//starting a new fxn 
function handleClick() {
    let date = d3.select("#datetime").property("value) 
    //add a defulat filter to the new variable
    let filterData = tableData;

 //Check to see if a date was entered and filter the 
 //data using that date 
 if (date) {
     //apply 'filter' to the table data to only keep the
     //rows where the 'datetime' value mathces the filter value 
     filteredData = filteredData.filter(row => row.datetime === date);
  }
  

  //Rebuild the  the talbe using the filtred data 
  // @note: if no date ws entred , then filterData will 
  //just be the og table data 
  buildTable(filteredData);
  };

 // Attach an event to listen for the form button

d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData); 