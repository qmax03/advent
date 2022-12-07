const {data, dataTest} = require('./advent07Data')

const parsedData = dataTest.split('\n')

let state = "";
let currentFolder = ""
parsedData.reduce((folders, command) => {
    const parsed = command.split(' ')
    if (parsed[1] === 'cd') {
        state = 'changeFolder'

    } else if (parsed[1] === 'ls') {
        state = 'dirList'
        return folders
    }


}, [])
// console.log("first: ", sum1)

// console.log("second:", sum2)


// cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k