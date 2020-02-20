const csv = require('csv-parser');
const fs = require('fs');
var jsonArray=[];
fs.createReadStream('customer-data.csv')
  .pipe(csv())
  .on('data', (row) => {
    jsonArray.push(row);
  })
  .on('end', () => {
    fs.writeFileSync('customer-data.json', JSON.stringify(jsonArray));
    console.log('Result Exported to customer-data.json.');
  });
  