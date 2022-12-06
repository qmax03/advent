const {data, dataTest, dataTest2} = require('./advent06Data')


const dataProcess = data
const uniqueChars = 14
for (let i = 0; i < dataProcess.length; i++) {
    const part = dataProcess.substring(i, i + uniqueChars)
    const partPole = part.split('')
    const hasDuplicates = partPole.some(item => partPole.filter(search => search === item).length > 1)
    // console.log(hasDuplicates, i + 4)
    if (!hasDuplicates) {
        console.log(uniqueChars + i)
        return
    }

}


// console.log("first: ", sum1)

// console.log("second:", sum2)


