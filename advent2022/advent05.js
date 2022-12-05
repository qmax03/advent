const {
    data, boxPosition, testBoxPosition,
    testData
} = require('./advent05Data')
const boxPositionParsed = boxPosition.split('\n')
    .map(row => row.split(' ').map(rs => rs.substring(1, 2) === '0' ? null : rs.substring(1, 2)))
    .reverse()
    .reduce((carry, item, rowIndex) => {
        item.forEach((box, index) => {
            if (rowIndex === 0) {
                carry[index] = []
            }
            if (!!box) {
                carry[index].push(box)
            }
        })
        return carry
    }, [])


const parsedData = data.split('\n').map(direcion => {
    const text = direcion.split(' ')
    const howMany = parseInt(text[1], 10);
    const from = parseInt(text[3], 10) - 1;
    const to = parseInt(text[5], 10) - 1;

    return {
        howMany,
        from,
        to
    }
})
// move 3 from 8 to 2
// console.log(parsedData)
// console.log(boxPositionParsed)
//
// parsedData.map(({
//                     howMany,
//                     from,
//                     to
//                 }) => {
//     for (let i = 0; i < howMany; i++) {
//         boxPositionParsed[to].push(boxPositionParsed[from].pop())
//     }
// })

console.log(boxPositionParsed)
parsedData.map(({
                    howMany,
                    from,
                    to
                }) => {

    boxPositionParsed[to].push(...boxPositionParsed[from].splice(boxPositionParsed[from].length - howMany))
    // const newArray = []
    // for (let i = 0; i < howMany; i++) {
    //
    //
    //     newArray.push(boxPositionParsed[from].pop())
    // }
    // console.log(newArray)
    // boxPositionParsed[to].push(newArray.reverse())
})
// console.log(testData)
// console.log(testBoxPosition)
// console.log(boxPositionParsed)
console.log(boxPositionParsed.map(items => items[items.length - 1]).join(''))