const {data, dataTest} = require('./advent12Data')

const parsedData = data.split('\n').map(row => row.split(''))
// x levo pravo  - dataTest[y][x]
// y dolo horo

let preventInfinte = 0

/**
 Sabqponm
 abcryxxl
 accszExk
 acctuvwj
 abdefghi

 v..v<<<<
 >v.vv<<^
 .>vv>E^^
 ..v>>>^^
 ..>>>>>^

 */
const finalPosition = {x: 121, y: 20}
let position = {x: 0, y: 20}
let path = [{x: 0, y: 20}]

const comparePositions = (a, b) => a.charCodeAt(0) >= b.charCodeAt(0)
const maxRows = parsedData.length
const maxRowsIndex = parsedData.length - 1
const maxColumns = parsedData[0].length
const maxColumnsIndex = parsedData[0].length - 1

const excludePosition = []
const notInExclude = ({x, y}) => !excludePosition.some((exclude) => x === exclude.x && y === exclude.y)
const notInPath = ({x, y}) => !path.some((exclude) => x === exclude.x && y === exclude.y)


const nextMove = ({x, y}) => {
    let aroundChars = [];
    if (x > 0) {
        aroundChars.push({y, x: x - 1})
    }
    if (y > 0) {
        aroundChars.push({y: y - 1, x})
    }
    if (x < maxColumnsIndex) {
        aroundChars.push({y, x: x + 1})
    }
    if (y < maxRowsIndex) {
        aroundChars.push({y: y + 1, x})
    }

    const getChar = (char) => char === 'S' ? 'a' : char === 'E' ? 'z' : char

    const actualChar = getChar(parsedData[y][x])

    const actualCharNum = actualChar.charCodeAt(0)


    aroundChars = aroundChars.map(item => ({
        ...item,
        climb: getChar(parsedData[item.y][item.x]).charCodeAt(0) - actualCharNum,
        otherChar: parsedData[item.y][item.x],
        actualChar,
        xToEnd: Math.abs(item.x - finalPosition.x),
        yToEnd: Math.abs(item.y - finalPosition.y)
    }))

    const max = aroundChars.reduce((carry, item) => {
        carry.xm = Math.max(item.xToEnd, carry.xm)
        carry.ym = Math.max(item.yToEnd, carry.ym)
        carry.xl = Math.min(item.xToEnd, carry.xl)
        carry.yl = Math.min(item.yToEnd, carry.yl)
        return carry
    }, {xm: -Infinity, ym: -Infinity, xl: Infinity, yl: Infinity})

    const xDiff = max.xm - max.xl
    const yDiff = max.ym - max.yl


    aroundChars = aroundChars.filter(({
                                          x,
                                          y, climb
                                      }) => [0, 1].includes(climb) && notInExclude({
        x,
        y
    }) && notInPath({
        x,
        y
    }))
    if (xDiff >= yDiff) {
        aroundChars = aroundChars.sort((a, b) => a.xToEnd - b.xToEnd)
    } else {
        aroundChars = aroundChars.sort((a, b) => a.yToEnd - b.yToEnd)
    }


    // aroundChars = aroundChars.sort((a, b) => {
    //     if( xDiff >= yDiff){
    //         if( a.xToEnd === max.xm ){
    //             return -1
    //         }
    //     }
    //     a.climb > b.climb
    // })

    return aroundChars[0]
}

do {
    const next = nextMove(position)
    if (!next) {
        excludePosition.push(path.pop())
        // console.log("one Back", position)
    } else {
        path.push(next)
    }
    position = path[path.length - 1]

    if (next?.x === finalPosition.x && next?.y === finalPosition.y) {
        console.log("END", {next, path, excludePosition, preventInfinte})
        break;

    }
    // console.log({
    //     next, path, excludePosition, steps: path.length
    // })

    preventInfinte++;
} while (preventInfinte < 40000)

console.log("END2?", {path, excludePosition, preventInfinte})

// console.log("first: ", sum1)

// console.log("second:", sum2)


