const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, (response) => {
    if (response === 'yes') {
      callback(true);
      reader.close();
    } else if (response === 'no') {
      callback(false);
      reader.close();
    } else {
      askIfGreaterThan(el1, el2, callback);
    }
  })
}


