const {data, dataTest} = require('./advent10Data')

const parsedData = dataTest.split('\n').map(row => {
    const command = row.split(' ')
    return [command[0], parseInt(command[1], 10)]
})
//
// let cycle = 0
// // console.log(parsedData)
// const result = []
//
// const isCycleReady = (cycle, value, command = 'recur') => {
//     if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
//         result.push(value * cycle)
//     } else if (command === 'addx') {
//         isCycleReady(cycle - 1, value)
//     }
// }
//
// parsedData.reduce((x, [command, value], index) => {
//     if (command === 'noop') {
//         cycle++
//         isCycleReady(cycle, x, command)
//     } else {
//         cycle += 2
//         isCycleReady(cycle, x, command)
//         x += value
//     }
//     return x
//
// }, 1)
//
// const sum1 = result.reduce((sum, item) => sum + item, 0)
//
// // console.log("first: ", sum1)
//
// let dataStream = ""
// let ctr = []
// let currentSpritePosition = 0
//
// let cycle2 = 0
// const writeData = (cycle, register, command = 'recur',) => {
//     if (dataStream.length === 40) {
//         ctr.push(dataStream)
//         dataStream = "";
//         // currentCtrPosition = 0
//         currentSpritePosition = 0
//     }
//     console.log("writeData", {command, register, if: currentSpritePosition === register, dataStream})
//
//     if (currentSpritePosition === register) {
//         dataStream += '#'
//     } else {
//         dataStream += '.'
//     }
//
//     if (command === 'addx') {
//         writeData(cycle, register,)
//     }
//
//
//     // if
//     // if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
//     //     console.log(value * cycle, command)
//     //     result.push(value * cycle)
//     // } else if (command === 'addx') {
//     //     isCycleReady(cycle - 1, value)
//     // }
// }
//
// // parsedData.reduce((register, [command, value], index) => {
// //
// //
// //     console.log({register, command, value})
// //
// //     writeData(cycle2, index === 0 ? 0 : register, command,)
// //     if (command === 'noop') {
// //         cycle2++
// //     } else {
// //         cycle2 += 2
// //         register += value
// //     }
// //
// //     return register
// // }, 1)
// console.log("second:", ctr, dataStream)
//
const instructions = data.split('\n')
//
// function part2() {
//     function checkLine() {
//         sprite = [X - 1, X, X + 1];
//         if (sprite.includes(cycle)) {
//             line.push("#");
//         } else {
//             line.push(" ");
//         }
//         cycle++;
//         if (cycle % 40 === 0) {
//             console.log(line);
//             line = [];
//             X += 40;
//         }
//     }
//
//     let cycle = 0;
//     let X = 1;
//     let sprite = [];
//     let line = [];
//     for (let i = 0; i < instructions.length; i++) {
//         let action = instructions[i][0];
//         let value = parseInt(instructions[i][1]);
//         if (action === "noop") {
//             checkLine();
//         }
//         if (action === "addx") {
//             checkLine();
//             checkLine();
//             X += value;
//         }
//     }
// }
//
//
// part2()


let cycle = 1, sum = 0, x = 1;
let row = "";

for (const line of instructions) {
    const loops = line.startsWith("addx") ? 2 : 1;

    for (let i = 0; i < loops; i++) {
        const column = (cycle - 1) % 40;
        row += x - 1 <= column && column <= x + 1 ? '█' : ' ';
        if (column === 39) {
            console.log(row);
            row = "";
        }
        if ((cycle - 20) % 40 === 0) {
            sum += cycle * x;
        }
        cycle++;
    }

    x += loops === 2 ? +line.split(" ")[1] : 0;
}