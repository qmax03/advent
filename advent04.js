const {data, dataTest} = require('./advent04Data')

const parsedData = data.split('\n')


const compareAssigments = (ass1, ass2) => {
    const [ass1val1, ass1val2] = ass1.split('-').map(x => parseInt(x, 10))
    const [ass2val1, ass2val2] = ass2.split('-').map(x => parseInt(x, 10))
    return ass1val1 >= ass2val1 && ass1val2 <= ass2val2
}

const sum1 = parsedData.map((row) => {
    const [assigmnts1Raw, assigmnts2Raw] = row.split(',')
    if (compareAssigments(assigmnts1Raw, assigmnts2Raw) || compareAssigments(assigmnts2Raw, assigmnts1Raw)) {
        return 1
    }
    return 0

}).reduce((carry, item) => carry + item, 0)

console.log("first: ", sum1)


const compareAssigments2 = (ass1, ass2) => {
    const [ass1val1, ass1val2] = ass1.split('-').map(x => parseInt(x, 10))
    const [ass2val1, ass2val2] = ass2.split('-').map(x => parseInt(x, 10))

    return ass1val1 >= ass2val1 && ass1val2 <= ass2val2 || ass1val1 >= ass2val1 && ass1val1 <= ass2val2 || ass1val2 >= ass2val1 && ass1val2 <= ass2val2
}


const sum2 = parsedData.map((row) => {
    const [assigmnts1Raw, assigmnts2Raw] = row.split(',')
    if (compareAssigments2(assigmnts1Raw, assigmnts2Raw) || compareAssigments2(assigmnts2Raw, assigmnts1Raw)) {
        return 1
    }
    return 0

}).reduce((carry, item) => carry + item)


console.log("second:", sum2)


