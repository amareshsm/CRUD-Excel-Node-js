const xlsx = require("xlsx");
const fs = require('fs');
const path = require('path');
const filesDir = path.join(__dirname,'samplefiles')
const files = fs.readdirSync(filesDir);
// console.log(files);

const readFileToJson =(filename)=>{
    const wb =xlsx.readFile(filename,{cellDates:true})  //celldates - to print date in js as it is.
    const WorkSheet = wb.SheetNames[0]; //accessing the first worksheet
    //console.log(WorkSheets)
    const ws = wb.Sheets[WorkSheet]
    const data = xlsx.utils.sheet_to_json(ws);
    //console.log(data)
  return data;
}
const combineFileContents = () =>{
    let combinedData = [];
    files.forEach((file)=>{
        // const parsedPath = path.parse(file)
          const fileExtension = path.parse(file).ext
          if(fileExtension ==='.xlsx' && file[0] !=='~'){
              //console.log(file) - to print  file names  with extension xlsx
              const filePath = path.join(__dirname,'samplefiles',file);  //accessing the file
              const data = readFileToJson(filePath);
              combinedData = combinedData.concat(data)    
          }
      })
   return combinedData;   
}
console.log(combineFileContents());
let combinedData = combineFileContents();

/*creating a new excel file  to add combined data*/
const newWorkBook = xlsx.utils.book_new();
const newWrokSheet = xlsx.utils.json_to_sheet(combinedData)
xlsx.utils.book_append_sheet(newWorkBook,newWrokSheet,"combined-data") //combined-data will be the sheetname
//combined-excel file will be created in the current folder 
xlsx.writeFile(newWorkBook,"samplefiles/combined-excel.xlsx") //combined-excel will be new excel file name