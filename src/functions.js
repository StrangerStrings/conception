export const randomMutantDirections = (mutationAmount, noOfDirections, directionMagnitude) => {

    let array = []
    for (let i = 0; i < mutationAmount; i++) {
        let arr = []
        for (let j = 0; j < (noOfDirections-30); j++) {
            let ar = []
            ar[0] = (-(directionMagnitude*5) + Math.round(Math.random() * directionMagnitude * 10)) / 10
            ar[1] = (-(directionMagnitude*5) + Math.round(Math.random() * directionMagnitude * 10)) / 10
            arr.push(ar)
        }
        for (let j = 0; j < 30; j++) {
            let ar = [0, 0]
            arr.push(ar)
        }
        array.push(arr)
    }

    return array
}

export const createActualDirections = (genepool, noOfDirections, noOfSperm) => {
    
    let arr = []
    for (let i = 0; i < noOfSperm; i++) {
        let ar = []
        for (let j = 0; j < noOfDirections; j++) {
            let r = Math.floor(Math.random() * genepool.length)
            ar.push(genepool[r][j])
        }
        arr.push(ar)
    }
    
    return arr
}


export const fitnessTest = (
    { x, y, crashed, impregnated },
    { gapBool, obstacle1bottom, obstacle1height, obstacle2bottom, obstacle2height, eggLeft, eggBottom }
) => {

    if (y < 0) { return 0 }
    if (impregnated) { return 200 }

    let fitness = 1
    fitness *= (y / eggBottom) * 5
    if (crashed) { fitness /= 4 }

    if (gapBool && y > obstacle1bottom + obstacle1height + 2) {
        fitness *= (y / (eggBottom - obstacle1bottom)) * 3
    }

    if (y > obstacle2bottom + obstacle2height + 2) {
        let distToEggX = (eggLeft + 4) - x
        let distToEggY = (eggBottom + 5) - y
        let distToEgg = Math.sqrt(Math.pow(distToEggX, 2) + Math.pow(distToEggY, 2))
        console.log(distToEgg);

        fitness *= (4.5 / distToEgg) * 8
    }

    return Math.round(fitness)
}