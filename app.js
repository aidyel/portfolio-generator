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

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const[iname, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(iname, github), err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Checkout index.html to see the output!')
})
