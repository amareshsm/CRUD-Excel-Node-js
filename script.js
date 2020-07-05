const  xlsx = require('xlsx')
const wb = xlsx.readFile('excel.xlsx',{cellDates:true})
//console.log(wb.SheetNames);  //work sheet  name
const ws = wb.Sheets['Sheet1'];
//console.log(ws); // to print work sheet content 
const data = xlsx.utils.sheet_to_json(ws) //converting worksheet data to json format.
console.log(data)
temp={
    Name:'panid',
    Age:'65',
    Role:'dev',
    DOb:'12/06/2020',
}
data.push(temp)
data.map((record,index)=>{
    console.log("row "+index)
    console.log(record)
     //delete record.age  - to delete colm from our json data.
    if(record.Age > 60){
        record.type='Senior citizen'        
    }else{
        record.type='Citizen'
    }
})
console.log(data)
//creating a new excel file(New-excel.xlxs) with sheet name new data
 const newWorkBook = xlsx.utils.book_new();
 const newWrokSheet = xlsx.utils.json_to_sheet(data)
 xlsx.utils.book_append_sheet(newWorkBook,newWrokSheet,"new-data")
 //New-excel file will be created in the current folder 
 xlsx.writeFile(newWorkBook,"New-excel.xlsx")
