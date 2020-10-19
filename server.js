var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Note'); // Create a table for 'Note' with default settings
mobileApp.tables.add('Notebook'); // Create a table for 'Notebook' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
