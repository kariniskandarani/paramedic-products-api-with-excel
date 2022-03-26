//require express
const express = require("express")

//require cors
var cors = require('cors')

// create an express app
const app = express()

app.use(cors())

// use the express-static middleware
app.use(express.static("public"))

//require xlsx
var xlsx= require('xlsx');

// define the first route
app.get("/Products", function (req, res) {
     //using npm xlsx
   var dataPathExcel='data1.xlsx';
   var wb= xlsx.readFile(dataPathExcel);
   var sheetName= wb.SheetNames[0];
   var sheetValue= wb.Sheets['Products'];
   // console.log(sheetValue);

   var data= xlsx.utils.sheet_to_json(sheetValue);

   res.send(data);
})

// start the server listening for requests
app.listen(process.env.PORT || 2000, 
	() => console.log("Server is running..."));