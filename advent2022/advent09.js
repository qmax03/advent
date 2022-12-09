// noinspection DuplicatedCode

const {data, dataTest, dataTest2} = require('./advent09Data')

const parsedData = dataTest.split('\n').map(row => {
    const s = row.split(' ')
    return {direction: s[0], steps: parseInt(s[1], 10)}
})

// x levo pravo
// y dolo horo


const isDistanceGreat = (pos1, pos2) => Math.abs(pos1.x - pos2.x) > 1 || Math.abs(pos1.y - pos2.y) > 1
const set = new Set()
const sum1 = parsedData.reduce((position, {direction, steps}) => {
    // console.log({direction, steps, position})
    for (let i = 0; i < steps; i++) {
        const sameXPosition = position.h.x === position.t.x
        const sameYPosition = position.h.y === position.t.y
        switch (direction) {
            case 'R':

                position.h.x++;
                if (isDistanceGreat(position.h, position.t)) {
                    position.t.y = position.h.y
                }
                if (!sameXPosition && position.t.x < position.h.x) {
                    position.t.x++;
                }

                break
            case 'L':
                position.h.x--;
                if (isDistanceGreat(position.h, position.t)) {
                    position.t.y = position.h.y
                }
                if (!sameXPosition && position.t.x > position.h.x) {
                    position.t.x--;
                }
                break
            case 'U':
                position.h.y++;
                if (isDistanceGreat(position.h, position.t)) {
                    position.t.x = position.h.x
                }
                if (!sameYPosition && position.t.y < position.h.y) {
                    position.t.y++;
                }

                break
            case 'D':
                position.h.y--;
                if (isDistanceGreat(position.h, position.t)) {
                    position.t.x = position.h.x
                }
                if (!sameYPosition && position.t.y > position.h.y) {
                    position.t.y--;
                }
                break
        }
        set.add(`${position.t.x}-${position.t.y}`)
        // console.log({pos: `${position.t.x}-${position.t.y}`, position, comand: {direction, steps}})
    }

    return position
}, {
    s: {x: 0, y: 0},
    h: {x: 0, y: 0},
    t: {x: 0, y: 0},
})

// console.log("first: ", sum1, set.size)

const baseObject = {
    t9: {x: 0, y: 0},
    t8: {x: 0, y: 0},
    t7: {x: 0, y: 0},
    t6: {x: 0, y: 0},
    t5: {x: 0, y: 0},
    t4: {x: 0, y: 0},
    t3: {x: 0, y: 0},
    t2: {x: 0, y: 0},
    t1: {x: 0, y: 0},
    h: {x: 0, y: 0},
}

// const baseObject = {
//     t9: {x: 0, y: 0},
//     t8: {x: 0, y: 0},
//     t7: {x: 0, y: 0},
//     t6: {x: 0, y: 0},
//     t5: {x: 0, y: 0},
//     t4: {x: 0, y: 0},
//     t3: {x: 1, y: 0},
//     t2: {x: 2, y: 0},
//     t1: {x: 3, y: 0},
//     h: {x: 4, y: 0},
//
// }
const set2 = new Set()

const calculateNextChagePosition = (currentObject, previousObject, direction, key) => {
    const sameXPosition = previousObject.x === currentObject.x
    const sameYPosition = previousObject.y === currentObject.y
    // console.log({currentObject, previousObject, direction}, sameXPosition)
    switch (direction) {
        case 'R':
            if (isDistanceGreat(previousObject, currentObject)) {
                if (!sameYPosition) {
                    currentObject.y++;
                }
                if (!sameXPosition && currentObject.x < previousObject.x && Math.abs(currentObject.x - previousObject.x) > 0) {
                    currentObject.x++;
                }
            }

            // if (isDistanceGreat(previousObject, currentObject)) {
            //     currentObject.y = previousObject.y
            // }
            // if (!sameXPosition && currentObject.x < previousObject.x && Math.abs(currentObject.x - previousObject.x) > 1) {
            //     currentObject.x++;
            // }

            break
        case 'L':

            if (isDistanceGreat(previousObject, currentObject)) {
                console.log("great distance",
                    currentObject,
                    previousObject, key)
                if (!sameYPosition && currentObject.y > previousObject.y) {
                    console.log("y--")
                    currentObject.y--;
                }
                if (!sameXPosition && currentObject.x > previousObject.x && Math.abs(currentObject.x - previousObject.x) > 0) {
                    currentObject.x--;
                }
            }
            // if (isDistanceGreat(previousObject, currentObject)) {
            //     currentObject.y = previousObject.y
            // }
            // if (!sameXPosition && currentObject.x > previousObject.x && Math.abs(currentObject.x - previousObject.x) > 1) {
            //     currentObject.x--;
            // }
            break
        case 'U':
            // up se chova jako right poro dalsi elementy...
            if (isDistanceGreat(previousObject, currentObject)) {

                // console.log("great distance",
                //     currentObject,
                //     previousObject, key)
                if (!sameXPosition) {
                    currentObject.x++;
                }
                if (!sameYPosition && currentObject.y < previousObject.y && Math.abs(currentObject.y - previousObject.y) > 0) {
                    // console.log("+y", key)
                    currentObject.y++;
                } else {
                    // console.log("same y", !sameYPosition && currentObject.y < previousObject.y && Math.abs(currentObject.y - previousObject.y) > 1, !sameYPosition, currentObject.y < previousObject.y, Math.abs(currentObject.y - previousObject.y) > 1)
                }
            }
            break
        case 'D':
            if (isDistanceGreat(previousObject, currentObject)) {
                if (!sameXPosition) {
                    currentObject.x--;
                }
                if (!sameYPosition && currentObject.y < previousObject.y && Math.abs(currentObject.y - previousObject.y) > 0) {
                    currentObject.y--;
                }
            }
            break
    }
    return currentObject
}
const changePosition = (currentObject, direction) => {
    switch (direction) {
        case 'R':
            currentObject.x++;
            break
        case 'L':
            currentObject.x--;
            break
        case 'U':
            currentObject.y++;
            break
        case 'D':
            currentObject.y--;
            break
    }
    return currentObject
}

const keys = Object.keys(baseObject).reverse()

const sum2 = parsedData.reduce((position, {direction, steps}) => {
    for (let i = 0; i < steps; i++) {

        changePosition(position.h, direction)
        keys.forEach((key, index) => {
            // console.log("baseValues", key, position[key], position[keys[index - 1]])
            if (keys[index - 1] && key !== 'h') {
                // console.log({
                //     nch: calculateNextChagePosition(position[key], position[keys[index - 1]], direction, key),
                //     p1: position[key].key
                // })
                calculateNextChagePosition(position[key], position[keys[index - 1]], direction, key)
                // console.log({position, command: {direction, steps}, key, keymi1: keys[index - 1]})

                set2.add(`${position[key].x}-${position[key].y}`)
            }
        })

    }
    console.log({position, command: {direction, steps}})

    return position
}, baseObject)

console.log("second:", sum2, set2.size, set2)


