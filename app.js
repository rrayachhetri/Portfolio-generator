const inquirer = require('inquirer');
inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answer => console.log(answer));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile("index.html", pageHTML, err => {
//   if(err) throw err;
  
//   console.log('Portfolio Complete! Checkout index.html to see the output!');
// });
