function countPrimeNumbers() {
    return Math.floor(Math.random() * 100) +2;
 }
 let start = performance.now();
for (let index = 0; index <100; index++) {
    setTimeout(function(){
		countPrimeNumbers();
	}, 3000);
}
let end = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.")
 