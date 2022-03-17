// const printProfileData = profileDataArr => {
//     // This...
//     for(let i = 0; i <profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
const fs = require('fs');
const { compileFunction } = require('vm');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const[iname, github] = profileDataArgs;
console.log(iname, github);

const pageHTML = generatePage(iname, github);


fs.writeFile('index.html', pageHTML, err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Checkout index.html to see the output!');
});
