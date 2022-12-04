const {data, dataTest} = require('./advent03Data')

const parsedData = data.split('\n')

const charToNumber = (char) => {

    // a=97
    // A=65
    // Lowercase item types a through z have priorities 1 through 26.
    // Uppercase item types A through Z have priorities 27 through 52.
    const charNum = char.charCodeAt(0)
    if (charNum >= 97) { //lower
        return charNum - 96
    }
    return charNum - 64 + 26
}

const sameChars = parsedData.map(item => {
    const firstHalf = item.substring(0, item.length / 2)
    const seconfHalf = item.substring(item.length / 2, item.length)
    for (let char of firstHalf) {
        if (seconfHalf.includes(char)) {
            return charToNumber(char)
        }
    }
})
const sum = sameChars.reduce((carry, item) => carry + item)
console.log("first: ", sum)


const groups = parsedData.reduce((carry, item) => {
    if (carry[carry.length - 1].length === 3) {
        carry[carry.length] = []
    }
    carry[carry.length - 1].push(item)
    return carry
}, [[]])

const sameCHarsGroup = groups.map(item => {
    const first = item[0]
    const second = item[1]
    const third = item[2]

    for (let char of first) {
        if (second.includes(char) && third.includes(char)) {
            return charToNumber(char)
        }
    }
})

const sum2 = sameCHarsGroup.reduce((carry, item) => carry + item)

console.log("second:", sum2)


