const {data, dataTest} = require('./advent07Data')

const parsedData = data.split('\n')

let state = "";
let currentFolderStructure = []

let currentFolder = "/"

const folderStructure = {"/": {sum: 0, folders: {}}}

const updatePath = (original, path, value) => {
    const last = path.pop();
    let ref = path.reduce((acc, key) => acc[key].folders || {}, original)
    ref[last].folders = {...ref[last].folders, [value]: {sum: 0, folders: {}}};
    return original
}

const addSum = (original, path, value) => {
    const last = path.pop();
    let ref = path.reduce((acc, key) => acc[key].folders || {}, original)
    ref[last].sum += parseInt(value, 10);
}


const result = parsedData.reduce((folders, command) => {
    const parsed = command.split(' ')
    if (parsed[1] === 'cd') {
        // console.log('cd')
        state = 'changeFolder'
        if (parsed[2] === '..') {
            currentFolderStructure.pop()
        } else {

            currentFolder = parsed[2]

            if (currentFolder !== '/') {
                updatePath(folderStructure, [...currentFolderStructure], currentFolder)
            }
            currentFolderStructure.push(currentFolder)

            folders[currentFolder] = 0
        }
    } else if (parsed[1] === 'ls') {
        // console.log('ls')
        state = 'dirList'

    } else if (parsed[0] !== 'dir') { //file sum
        // console.log('item')
        addSum(folderStructure, [...currentFolderStructure], parseInt(parsed[0], 10))
    } else {
        // console.log("dir", currentFolder,
        //     parsed[1])
        // folderStructure[currentFolder][parsed[1]] = {}
    }
    return folders

}, {"/": 0})

// console.log({folderStructure, currentFolderStructure})
// console.log("first: ", JSON.stringify({folderStructure}, null, 2))

let total = 0
const folderSizes = []
const compute = (folderStructure) => {
    const keys = Object.keys(folderStructure)
    // console.log(keys)

    let sum = 0
    keys.forEach(key => {
        const lowerKeys = Object.keys(folderStructure[key].folders)


        let localSum = 0
        if (lowerKeys.length > 0) {
            localSum = folderStructure[key].sum + compute(folderStructure[key].folders)
            // console.log(key, newFolderSum, folderStructure[key].sum, compute(folderStructure[key].folders))

        } else {

            localSum = folderStructure[key].sum
            // console.log({newFolderSum: folderStructure[key].sum})
        }
        folderSizes.push(localSum)
        if (localSum < 100000) {
            // console.log({localSum})
            total += localSum

        }
        sum += localSum

    })
    return sum
    // console.log(sum)
    // if (sum <= 100000) {
    //     // total += sum
    //
    // } else {
    //     return 0
    // }
}

console.log(compute(folderStructure))

console.log("second:", folderSizes, folderSizes.sort((a, b) => a - b).find(a => a > 1518953))

console.log(JSON.stringify({folderSizes}, null, 2))