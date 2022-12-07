const {testData02, data02} = require('./data02')

// A for Rock, B for Paper, and C for Scissors
const oponentMap = {A: 1, B: 2, C: 3}

//X for Rock, Y for Paper, and Z for Scissors
const myMap = {X: 1, Y: 2, Z: 3}


// 1 for Rock, 2 for Paper, and 3 for Scissors
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.

const getResult = (oponent, me) => {
    const oponentValue = oponentMap[oponent]
    const meValue = myMap[me]

    if (oponentValue === meValue) {//draw
        return 3 + meValue
    } else if ((oponentValue === 1 && meValue === 3) || (oponentValue === 3 && meValue === 2) || (oponentValue === 2 && meValue === 1)) {
        return meValue
    } else {
        return 6 + meValue
    }
}

const resultPart1 = data02.split('\n').map(row => {
    const game = row.split(' ')
    const result = getResult(game[0], game[1])
    return result
}).reduce((carry, item) => carry + item)
console.log(resultPart1)


const winArray = {1: 3, 2: 1, 3: 2}
const looseArray = {3: 1, 1: 2, 2: 3}


// X 1 means you need to lose, Y 2 means you need to end the round in a draw, and Z 3 means you need to win.
const getResult2 = (oponent, me) => {
    const oponentValue = oponentMap[oponent]
    const meValue = myMap[me]

    if (meValue == 2) { //draw
        return oponentValue + 3
    } else if (meValue == 1) { // loose
        return winArray[oponentValue]
    }
    return looseArray[oponentValue] + 6

}

const resultPart2 = data02.split('\n').map(row => {
    const game = row.split(' ')
    const result = getResult2(game[0], game[1])
    return result
}).reduce((carry, item) => carry + item)

console.log(resultPart2)