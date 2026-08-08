let grid = [[1, 2, 3], [6, 5, 4], [7, 8, 9]]
console.log(grid[2][1])

console.log(grid.map(row => row.reduce((a, b) => (a + b), 0)))


let suites =
    [['login-pass', 'register-pass', 'logout-fail'],
    ['search-pass', 'filter-fail', 'sort-pass'],
    ['checkout-pass', 'payment-fail', 'order-pass']]

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        if (suites[i][j].includes('fail')) {
            console.log(suites[i][j])
        }
    }
}

let exectimes = [[233, 234, 543, 432], [245, 644, 643, 642], [854, 643, 642, 267]]
console.log(exectimes.map(row => row.reduce((a, b) => (a + b), 0)))

