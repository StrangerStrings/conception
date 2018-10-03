const settingsDefaultState = {

    noOfSperm: 30,
    movesPerRound: 250,
    sizeOfMoves: 3,

    gapBool: true,
    sizeOfGapSettings: 6,
    offset1Settings: 0,

    barrierBool:false,
    sizeOfBarrierSettings: 3,
    offset2Settings: 0,

    gapWidth: 15,
    gapRight: 40,
    obstacle1bottom: 15,
    obstacle1height: 2.5, 

    barrierLeft:  21 ,
    barrierWidth: 13,
    obstacle2bottom: 30,
    obstacle2height: 4, 

    eggLeft: 23,
    eggBottom: 45
}


const settingsReducer = (state = settingsDefaultState, action) => {
    switch (action.type) {

        case 'UPDATE_SETTINGS':
            console.log(action.settings)
            return {
                ...state,
                ...action.settings
            }

        case 'UPDATE_GAP_BOOL':
            return{
                ...state,
                gapBool: action.gapBool
            }
        case 'UPDATE_BARRIER_BOOL':
            return {
                ...state,
                barrierBool: action.barrierBool
            }

        default:
            return state
    }
}





const timeDefaultState = {
    count: 0,
    speed: 60,
    speedSettings: 7,
}


const timeReducer = (state = timeDefaultState, action) => {
    switch (action.type) {

        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1
            }

        case 'RESET_COUNT':
            return {
                ...state,
                count: 0
            }
            
        case 'CHANGE_SPEED':
            return {
                ...state,
                speed: action.speed,
                speedSettings: action.speedSettings
            }

        default:
            return state
    }
}



const gameDefaultState = {
    displaySperm: true,
    generation: 1,
    virgin: true,
    successScreen: false,
    babyName: ''
}


const gameReducer = (state = gameDefaultState, action) => {
    switch (action.type) {

        case 'NEXT_GENERATION':
            return {
                ...state,
                generation: state.generation + 1
            }

        case 'DISPLAY_SPERM':
            return {
                ...state,
                displaySperm: action.displaySperm
            }

        case 'FIRST_SUCCESS':
            return {
                ...state,
                babyName: action.babyName,
                virgin: false,
                successScreen: true
            }

        case 'HIDE_SUCCESS_SCREEN':
            return {
                ...state,
                successScreen: false
            }

        case 'END_GAME':
            return gameDefaultState

        default:
            return state
    }
}




const genepoolDefaultState = []


const genepoolReducer = (state = genepoolDefaultState, action) => {
    switch (action.type) {

        case 'ADD_TO_GENEPOOL':
            return [
                ...state,
                ...action.directionsArray
            ]

        case 'RESET_GENEPOOL':
            return []

        default:
            return state
    }
}




const directionsDefaultState = []


const directionsReducer = (state = directionsDefaultState, action) => {
    switch (action.type) {

        case 'CREATE_NEW_DIRECTIONS':
            return action.directions

        default:
            return state
    }
}


export { settingsReducer, timeReducer, gameReducer, genepoolReducer,directionsReducer}