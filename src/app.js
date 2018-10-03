import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { randomMutantDirections, createActualDirections } from './functions'
import { addToGenepool, createNewDirections } from './redux/actions'

import Header from './components/Header.js'
import SettingsPage from './components/SettingsPage'
import GamePage from './components/GamePage'
import configureStore from './redux/configureStore'

import mainLoop from 'mainloop.js'


//React-Router paths
const AppRouter = () => (
    <BrowserRouter>
        <div>
            {/* <Header/> */}
            <Switch>
                <Route path='/' component={SettingsPage} exact />
                <Route path='/game' component={GamePage} />
            </Switch>
        </div>
    </BrowserRouter>
)


mainLoop.setUpdate(updateGame).setDraw().setSimulationTimestep(500)

function updateGame (){
    console.log('fff');
}
// const updateGame = () => {console.log('f')}



//Redux Store
const store = configureStore()

store.subscribe(()=>{
    // console.log(store.getState());
})


let directionsArrayy = randomMutantDirections(4, 250, 3)
store.dispatch(addToGenepool(directionsArrayy))
let directionss = createActualDirections(store.getState().genepool, 250, 35)
store.dispatch(createNewDirections(directionss))


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)






ReactDOM.render(jsx, document.getElementById('app'));
