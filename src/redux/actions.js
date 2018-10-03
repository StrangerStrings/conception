

//Time Actions
export const increaseCount = () => ({
    type: 'INCREASE_COUNT'
})

export const resetCount = () => ({
    type: 'RESET_COUNT'
})

const speedKey = [0, 1000, 600, 350, 200, 140 ,90 ,60, 40, 25, 15 ]
export const changeSpeed = (speedSettings) => {
    let speed = speedKey[speedSettings]
    return ({
        type: 'CHANGE_SPEED',
        speedSettings,
        speed
    })
}


//Game Actions
export const endGame = () => ({
    type: 'END_GAME'
})

export const nextGeneration = () => ({
    type: 'NEXT_GENERATION',
})

export const displaySperm = (displaySperm) => {
    return ({
        type: 'DISPLAY_SPERM',
        displaySperm
    })
}

const possibleNames = ['Boy','Girl','Horse']

export const firstSuccess = () => {
    let rand = Math.floor(Math.random()*3)
    return ({
        type: 'FIRST_SUCCESS',
        babyName: possibleNames[rand],
    })
}

export const hideSuccessScreen = () => ({
    type: 'HIDE_SUCCESS_SCREEN'
})






//Genepool Actions
export const addToGenepool = (directionsArray) => ({
    type: 'ADD_TO_GENEPOOL',
    directionsArray
})
export const resetGenepool = () => ({
    type: 'RESET_GENEPOOL'
})






//Directions Actions
export const createNewDirections = (directions) => ({
    type: 'CREATE_NEW_DIRECTIONS',
    directions
})





const keyz = [
    [0,5,9,13,17,21,25,29,33,39,45],   //sizeOfGap & sizeOfBarrier
    [-22,-18,-13,-8,-4,0,4,8,13,18,22],    //offset1
    [-27,-21,-15,-9,-5,0,5,9,15,21,27],    //offset2
]

//Settings Actions
export const updateSettings = ({
    noOfSperm, movesPerRound, sizeOfMoves,
    sizeOfGapSettings, offset1Settings,
    sizeOfBarrierSettings, offset2Settings
}) => {

    let sizeOfGap = keyz[0][sizeOfGapSettings]
    let offset1 = keyz[1][parseInt(offset1Settings) + 5]
    let sizeOfBarrier = keyz[0][sizeOfBarrierSettings]
    let offset2 = keyz[2][parseInt(offset2Settings) + 5]
    
    //need two numbers:
    //barrierLeft: offset2 - (barrierWidth / 2),
    //barrierWidth: sizeOfBarrier
    return ({
        type: 'UPDATE_SETTINGS',
        settings: {
            noOfSperm, movesPerRound, sizeOfMoves,
            sizeOfGapSettings, offset1Settings,
            sizeOfBarrierSettings, offset2Settings,
            gapWidth: (55 - sizeOfGap) * 0.5 + offset1,
            gapRight: (55 + sizeOfGap) * 0.5 + offset1,
            barrierLeft: 27.5 + offset2 - (sizeOfBarrier / 2),
            barrierWidth: sizeOfBarrier
        }
    })
}

export const updateGapBool = (gapBool) => ({
    type: 'UPDATE_GAP_BOOL',
    gapBool
})
export const updateBarrierBool = (barrierBool) => ({
    type: 'UPDATE_BARRIER_BOOL',
    barrierBool
})








