const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, (response) => {
    if (response === 'yes') {
      callback(true);
    } else if (response === 'no') {
      callback(false);
    } else {
      askIfGreaterThan(el1, el2, callback);
    }
  })
} 
//let test = function (bool) {
//  console.log(bool)
//}
//askIfGreaterThan(3, 1, test);
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        madeAnySwaps = true;
      }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

}

console.log(innerBubbleSortLoop([3, 2, 1], 0, false, () => {
  console.log('In outer bubble sort loop');
  reader.close();
}));

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}
