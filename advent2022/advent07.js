const {data, dataTest} = require('./advent07Data')

const parsedData = dataTest.split('\n')

let state = "";
let currentFolderStructure = []

let currentFolder = "/"

const folderStructure = {}

function updatePath(original, path, value) {
    const last = path.pop();
    console.log({last})
    let ref = path.reduce((acc, key) => acc[key] || {}, original)

    ref[last] = {...ref[last], ...value};
    return original
}


const result = parsedData.reduce((folders, command) => {
    const parsed = command.split(' ')
    if (parsed[1] === 'cd') {
        // console.log('cd')
        state = 'changeFolder'
        if (parsed[2] === '..') {
            currentFolderStructure.pop()
            console.log("poop?", parsed)
        } else {
            // let snadReference = currentFolderStructure.reduce((carry, item) => {
            //     console.log({carry, item})
            //     carry = carry[item]
            //     return carry
            // }, folderStructure)


            // folderStructure[currentFolder][parsed[2]] = {}
            currentFolder = parsed[2]

            if (currentFolder !== '/') {
                console.log({
                    currentFolder,
                    folderStructure,
                    currentFolderStructure
                })
                updatePath(folderStructure, [...currentFolderStructure], {[currentFolder]: {}})
                console.log(folderStructure)
            }
            // snadReference = {...snadReference, [currentFolder]: {}}
            currentFolderStructure.push(currentFolder)

            folders[currentFolder] = 0
        }
    } else if (parsed[1] === 'ls') {
        // console.log('ls')
        state = 'dirList'

    } else if (parsed[0] !== 'dir') {
        // console.log('item')

        // console.log(folders, parsed)
        folders[currentFolder] += parseInt(parsed[0], 10)
    } else {
        // console.log("dir", currentFolder,
        //     parsed[1])
        // folderStructure[currentFolder][parsed[1]] = {}
    }
    return folders

}, {"/": 0})

console.log({folderStructure, currentFolderStructure})
console.log("first: ", JSON.stringify({result, folderStructure}, null, 2))

const compute = (result, folderStructure) => {
    const keys = Object.keys(folderStructure)
    keys.forEach(key => {
        folderStructure[key] = fuuuuuu
    })
}

console.log(compute(result, folderStructure))

// console.log("second:", sum2)

