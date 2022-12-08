// noinspection DuplicatedCode

const {data, dataTest} = require('./advent08Data')


const parsedData = data.split('\n').map(row => row.split(''))

// console.log(parsedData)
const outside = parsedData.length * 2 + (parsedData[0].length - 2) * 2

const sum1 = parsedData.reduce((sum, row, rowIndex) => {
    row.forEach((tree, treeIndex) => {
        if (rowIndex === 0 || rowIndex === parsedData.length - 1 || treeIndex === 0 || treeIndex === row.length - 1) {
            sum += 1
        } else {
            let foundHigher = false
            for (let i = 0; i < row.length; i++) { //radek
                if (row[i] >= tree && i !== treeIndex) {
                    foundHigher = true
                }

                if (i === treeIndex && !foundHigher) {
                    break
                } else if (i === treeIndex) {
                    foundHigher = false
                }
            }

            if (!foundHigher) {
                sum += 1
            } else {
                foundHigher = false

                for (let i = 0; i < parsedData.length; i++) { //sloupec
                    if (parsedData[i][treeIndex] >= tree && i !== rowIndex) {
                        foundHigher = true
                    }
                    if (i === rowIndex && !foundHigher) {
                        break
                    } else if (i === rowIndex) {
                        foundHigher = false
                    }
                }

                if (!foundHigher) {
                    sum += 1
                }
            }
        }
    })
    return sum
}, 0)
console.log("first: ", sum1)


const sum2 = parsedData.flatMap((row, rowIndex) =>
    row.map((tree, treeIndex) => {
        let scenicVal = [0, 0, 0, 0]
        for (let i = treeIndex + 1; i < row.length; i++) { // od stromu doprava
            scenicVal[0] += 1
            if (row[i] >= tree) {
                break
            }
        }
        for (let i = treeIndex - 1; i >= 0; i--) { // od stromu doleva
            scenicVal[1] += 1
            if (row[i] >= tree) {
                break
            }
        }
        for (let i = rowIndex + 1; i < parsedData.length; i++) { // od stromu dolu
            scenicVal[2] += 1
            if (parsedData[i][treeIndex] >= tree) {
                break
            }
        }
        for (let i = rowIndex - 1; i >= 0; i--) { // od stromu nahoru
            scenicVal[3] += 1
            if (parsedData[i][treeIndex] >= tree) {
                break
            }
        }
        return scenicVal[0] * scenicVal[1] * scenicVal[2] * scenicVal[3]
    })
).reduce((carry, item) => Math.max(carry, item), 0)
console.log("second:", sum2)


