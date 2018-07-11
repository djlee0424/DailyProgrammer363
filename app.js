const readLine = require('readline');
var checkIE = require('./checkIE');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.question('What word to test? ', (answer) => {
    let result = checkIE.check(answer);
    console.log(`${answer} works: ${result}`);
  
    rl.close();
  });