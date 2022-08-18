// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  var endingValue = 0;
  var strHtml = '';

  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;

  document.getElementById('result').innerHTML = strHtml;

  strHtml += '<table>';
  strHtml += '<thead>';
  strHtml += '<tr>';
  strHtml += '<th>Year</th>';
  strHtml += '<th>Starting Value</th>';
  strHtml += '<th>Interest Earned</th>';
  strHtml += '<th>Ending Value</th>';
  strHtml += '</tr>';
  strHtml += '</thead>';
  strHtml += '<tbody>';
  for(var i = 0; i < years; i++) {
    if (endingValue !== 0) {
      amount = endingValue;
    }

    endingValue = amount + (amount*rate)/100;
    strHtml += '<tr>';
    strHtml += '<td>' + (i+1) + '</td>';
    strHtml += '<td>$' + amount.toFixed(2) + '</td>';
    strHtml += '<td>$' + ((amount*rate)/100).toFixed(2) + '</td>';
    strHtml += '<td>$' + endingValue.toFixed(2) + '</td>';
    strHtml += '</tr>';
  }
  strHtml += '</tbody>';
  strHtml += '</table>';
console.log('strhtml ', strHtml);
  document.getElementById('result').innerHTML = strHtml;
} // end generateTable
