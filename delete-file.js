const fs = require('fs');
// delete a file
fs.unlink('./samplefiles/sample2.xlsx', (err) => {
    if (err) {
        throw err;
    }
    console.log("Excel file deleted");
});