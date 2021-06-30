const  xlsx = require('xlsx');

//get all sheets (workbook) from a file
const wb = xlsx.readFile('./samplefiles/sample1.xlsx',{cellDates:true})
console.log(wb.SheetNames);  

//looping all sheets
for(let sheet of wb.SheetNames){
    console.log(sheet);
    const ws = wb.Sheets[sheet];
    console.log(ws); // to print work sheet content  
    const data = xlsx.utils.sheet_to_json(ws) //converting worksheet data to json format.
    console.log(data);
}
