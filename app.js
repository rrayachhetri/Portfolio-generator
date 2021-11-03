const inquirer = require('inquirer');
const promptUser = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
};


const promptProject = portfolioData => {
 
  // if there's no 'projects' array properties, create one
  if(!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  ======================
  Add a New Porject
  ======================
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'porvide a description of the project (required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (check all that apply)',
      choices: ['javaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type:'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name:'feature',
      message: 'Would you like to feature this project?',
      default: false
    }, 
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: ' Would you like to enter to another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if(projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile("index.html", pageHTML, err => {
//   if(err) throw err;
  
//   console.log('Portfolio Complete! Checkout index.html to see the output!');
// });
