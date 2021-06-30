//create and write data to excel
const xlsx = require("xlsx");
let today = (query) =>{
  let dateAndTime=  new Date().toISOString().split('T');
  //"2021-06-30T08:43:09.627Z"
 return query === 'date' ? dateAndTime[0] : dateAndTime[1];
}
let generateMockData = (recordsCount) =>{
let data=[];
for(let i=0;i<recordsCount;i++){
data.push({
    id: i,
    name:  `sample ${i}`,
    status: i%2 ? "Success": "Failed",
    date: today('date'),
    time: today('time')
  })
}
return data;
}
let data = generateMockData(6);
const newWorkBook = xlsx.utils.book_new();
const newWrokSheet = xlsx.utils.json_to_sheet(data);
//params - new workbook,worksheet with data,sheet name
xlsx.utils.book_append_sheet(newWorkBook, newWrokSheet, "sample-sheet-1");
//New-excel file will be created in the current folder
xlsx.writeFile(newWorkBook, "samplefiles/sample2.xlsx");


//adding another sheet:
let newData = generateMockData(6);
const anotherSheet = xlsx.utils.json_to_sheet(newData);
//params - new workbook,worksheet with data,sheet name
xlsx.utils.book_append_sheet(newWorkBook, anotherSheet, "sample-sheet-2");
//New-excel file will be created in the current folder
xlsx.writeFile(newWorkBook, "samplefiles/sample2.xlsx");
