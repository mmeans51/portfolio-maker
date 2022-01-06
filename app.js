const fs = require('fs');
const generatePage = require('./src/page-template.js');
const pageHTML = generatePage(Name, githubName);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.tml to see the out put!')
});