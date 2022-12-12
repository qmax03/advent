const testData = `65332`

const rady = testData.split('\n')

let pocet = 0

const treesRows = rady.map((stromy, indexRadek) => {

    const strom = stromy.split("").map((kus) => {

        return parseInt(kus, 10)
    })

    console.log(strom)

    for (let i = 0; i <= strom.length - 1; i++) {

        if (i === 0 || i === strom.length - 1) {
            pocet++
            console.log("ends")
        } else {

            let foundHigher = false

            for (let j = i + 1; j < strom.length; j++) {
                console.log(strom[i] < strom[j], strom[i], strom[j], {pocet, indexRadek, j, i})
                if (strom[i] <= strom[j]) {
                    foundHigher = true
                    console.log(strom[i], strom[j], {pocet, indexRadek, j, i})
                }
            }
            console.log({podminka: foundHigher})
            if (!foundHigher) {

                console.log("plus J")
                pocet++

            } else {
                foundHigher === false
                for (let k = i - 1; k >= 0; k--) {
                    if (strom[i] <= strom[k]) {
                        foundHigher = true
                    }

                }
                console.log({podminka: foundHigher})
                if (!foundHigher) {

                    console.log("plus K")
                    pocet++

                }
            }
        }
    }
    console.log("fina", {pocet, indexRadek})


})

console.log(pocet)
