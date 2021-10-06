//profileDataArgs holds the command line argument
const profileDataArgs = process.argv.slice(2, process.argv.length);
// 
const [name, github] = profileDataArgs;
// const name = profileDataArgs[0];
// const GitHub = profileDataArgs[1];
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html>
  <html lang='en'>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initaila-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>
  <body>
   <h1>${name}</h1>
   <h2><a href="https://github.com/${github}">GitHub</a></h2>
   </body>
   </html>
   `;
};
// console.log(name, github)
// console.log(generatePage(name, github));
const fs = require('fs');

fs.writeFile("index.html", generatePage(name, github), err => {
  if(err) throw err;
  console.log('Portfolio Complete! Checkout index.html');
})
