import React from 'react'
import { connect } from 'react-redux'
import { updateSettings, updateBarrierBool, updateGapBool, addToGenepool } from '../redux/actions'
import { randomMutantDirections} from '../functions'

import Header from './Header.js'


const SettingsPage = (props) => (
    <div>
        <Header githubLink={false}/>
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(updateSettings({
                noOfSperm: e.target.noOfSperm.value,
                movesPerRound: e.target.movesPerRound.value,
                sizeOfMoves: e.target.sizeOfMoves.value,

                sizeOfGapSettings: e.target.sizeOfGap.value,
                offset1Settings: e.target.offset1.value,

                sizeOfBarrierSettings: e.target.sizeOfBarrier.value,
                offset2Settings: e.target.offset2.value,
            }))

            let movesPerRound = e.target.movesPerRound.value
            let directionsArray = randomMutantDirections(4, movesPerRound, props.settings.sizeOfMoves);
            props.dispatch(addToGenepool(directionsArray))
    
            props.history.push('/game')
        }} >


        <fieldset><legend>Sperm</legend>

            <div><label>Number of Sperm:</label><input type="number" name="noOfSperm" 
                defaultValue={props.settings.noOfSperm} step="10" min="10" max="100" /></div>

            <div><label>Moves per Round:</label><input type="number" name="movesPerRound" 
                defaultValue={props.settings.movesPerRound} step="20" min="50" max="350" /></div>

            <div><label>Size of Moves:</label><input type="number" name="sizeOfMoves" 
                defaultValue={props.settings.sizeOfMoves} step="1" min="1" max="5" /></div>

        </fieldset>


        <fieldset className='obstaclesFieldset'><legend>Obstacles</legend>

                <div><label>Gap?<input type="checkbox" name="gapBool"
                onChange={(e)=>props.dispatch(updateGapBool(e.target.checked))}
                    defaultChecked={props.settings.gapBool} /></label></div>

                <div><label>Size:</label><input type="number" name="sizeOfGap" disabled={!props.settings.gapBool}
                    defaultValue={props.settings.sizeOfGapSettings} step="1" min="1" max="10" /></div>

                <div><label>Offset:</label><input type="number" name="offset1" disabled={!props.settings.gapBool}
                    defaultValue={props.settings.offset1Settings} step="1" min="-5" max="5" /></div>

                <p></p>

                <div><label>Barrier?<input type="checkbox" name="barrierBool"
                    onChange={(e) => props.dispatch(updateBarrierBool(e.target.checked))}
                    defaultChecked={props.settings.barrierBool} /></label></div>

                <div><label>Size:</label><input type="number" name="sizeOfBarrier" disabled={!props.settings.barrierBool}
                    defaultValue={props.settings.sizeOfBarrierSettings} step="1" min="1" max="10" /></div>

                <div><label>Offset:</label><input type="number" name="offset2" disabled={!props.settings.barrierBool}
                    defaultValue={props.settings.offset2Settings} step="1" min="-5" max="5" /></div>

        </fieldset>

        <div className='settingsButton'><button >Begin</button></div>




        </form>

    </div>
)


//can import function (selectors) that change the data somehow before its passed in as props
const mapStateToProps = (state) => ({
    settings: state.settings
})


export default connect(mapStateToProps)(SettingsPage)