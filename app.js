const inquirer = require("inquirer");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
  promptUser().then(answers => console.log(answers));
  const promptProject = portfolioData => {
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    .then(projectData => {
      portfolioData.projects.push(projectData);
    });
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is the name of your project?'
      },
      {
        type: 'input',
        name: 'decription',
        message: 'provide a description of the project (required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'what did you build this project with? (check all that apply)',
        choices: ['javascript', 'html','es6', 'jquery', 'boostrap', 'node']
      },
      {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'would you like to enter another project?',
        default: false
      }
    ])
  };
  promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(fullName, githubName);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.tml to see the out put!')
// });
