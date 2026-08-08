let grid =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

console.log(grid[0][1])
grid[0][1] = 99

// for (let i = 0; i < grid.length; i++){
//     for (let j = 0; j < grid[0].length; j++) {
//         console.log(grid[i][j])
//     }
// }

for (let row of grid) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log()
}

console.log("-----------------")

grid.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "))
console.log()
}) 