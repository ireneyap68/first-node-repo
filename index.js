// const myModule = require('./myModule.js');

// const fs = require('fs');
// const { count } = require('console');

// fs.readFile('story.txt', 'utf8', (err,data) =>{
//     if(err) {
//         console.log("There was a problem reading the file")
//     } else {
//         console.log(data);
//     }
// });

// myModule.beBasic();
// myModule.count();

// let i = 1

// const counts = () => {
//     console.log(i)
//     i=i*2
// }

// const myTimer = setInterval(count,1000)
// const today = new Date()

// console.log(today)

const moment = require('moment')
console.log(moment().format("MMM Do YYYY"))

const emptyTrash = require('empty-trash');
(async () => {
	await emptyTrash();
})();


console.log(moment('03-21-1994', 'MM DD YYYY').format("dddd [the] Do [of] MMMM [in the year] YYYY"));