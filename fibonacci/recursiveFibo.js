/**
 * Having a function execute itself
 * Golden rule: We should have a base case
 */

let count = 0
const memo = {}

function fibo(n) {
	// base case
	if (n <= 2) {
		return 1
	}
	if (n in memo) {
		return memo[n]
	}
	count++
	const result = fibo(n - 2) + fibo(n - 1)
	memo[n] = result
	return result
}

console.log(fibo(200))
console.log(`Amount of iteration: ${count}`)
