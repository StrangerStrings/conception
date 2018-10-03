import {createStore, combineReducers} from 'redux'
import { settingsReducer, timeReducer, gameReducer, directionsReducer, genepoolReducer } from './reducers'


const configureStore = () => {
    const store = createStore(
        combineReducers({
            settings: settingsReducer,
            time: timeReducer,
            game: gameReducer,
            genepool: genepoolReducer,
            directions: directionsReducer
        })
    )
    return store
}

export default configureStore


