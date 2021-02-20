function countPrimeNumbers() {
   return Math.floor(Math.random() * 100) +2;
}
let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.")
