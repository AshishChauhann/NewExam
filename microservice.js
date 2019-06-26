var express = require('express');
var app = express();

var companyController=function (req, res) {
    var company=[
            {Name:'Ashish',Employee_Designation :'Manager',Age:23 ,Account_Details:'Newly Created' },
			{Name:'Vishal',Employee_Designation :'Manager',Age:23 ,Account_Details:'Old' },
			{Name:'Shruti',Employee_Designation :'Worker',Age:25 ,Account_Details:'Old' },
			{Name:'Sailza',Employee_Designation :'CEO',Age:23 ,Account_Details:'Company Account' }
      ];
  res.send(company);
};
app.get('/company',companyController );
var server = app.listen(8080);



















