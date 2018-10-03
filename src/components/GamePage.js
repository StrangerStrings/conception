import React from 'react'
import { connect } from 'react-redux'

import {increaseCount, resetCount, addToGenepool, resetGenepool, createNewDirections, changeSpeed, displaySperm, resetGeneration, nextGeneration, hideSuccessScreen, endGame} from '../redux/actions'
import { randomMutantDirections, createActualDirections} from '../functions'
const [totalWidth,totalHeight] = [55,60]

import Sperm from './Sperm.js'
import Header from './Header.js'
import mainLoop from 'mainloop.js'


class GamePage extends React.Component {

    render() {
        return (
            <div>
            <Header buttons={!this.props.game.successScreen} quitGame={this.quitCurrentGame}/>
            <div className='game' style={{ width: totalWidth + 'rem', height: totalHeight + 'rem' }}>


                {/* <Sperm directions={this.props.directions[0]}/> */}
                <div><Sperm directions={this.props.directions[0]} /><Sperm directions={this.props.directions[1]} /><Sperm directions={this.props.directions[2]} /><Sperm directions={this.props.directions[3]} /><Sperm directions={this.props.directions[4]} /><Sperm directions={this.props.directions[5]} /><Sperm directions={this.props.directions[6]} /><Sperm directions={this.props.directions[7]} /><Sperm directions={this.props.directions[8]} /><Sperm directions={this.props.directions[9]} /></div>
                {this.props.settings.noOfSperm >= 20  && <div><Sperm directions={this.props.directions[10]} /><Sperm directions={this.props.directions[11]} /><Sperm directions={this.props.directions[12]} /><Sperm directions={this.props.directions[13]} /><Sperm directions={this.props.directions[14]} /><Sperm directions={this.props.directions[15]} /><Sperm directions={this.props.directions[16]} /><Sperm directions={this.props.directions[17]} /><Sperm directions={this.props.directions[18]} /><Sperm directions={this.props.directions[19]} /></div>}
                {this.props.settings.noOfSperm >= 30 && <div><Sperm directions={this.props.directions[20]} /><Sperm directions={this.props.directions[21]} /><Sperm directions={this.props.directions[22]} /><Sperm directions={this.props.directions[23]} /><Sperm directions={this.props.directions[24]} /><Sperm directions={this.props.directions[25]} /><Sperm directions={this.props.directions[26]} /><Sperm directions={this.props.directions[27]} /><Sperm directions={this.props.directions[28]} /><Sperm directions={this.props.directions[29]} /></div>}
                {this.props.settings.noOfSperm >= 40  && <div><Sperm directions={this.props.directions[30]} /><Sperm directions={this.props.directions[31]} /><Sperm directions={this.props.directions[32]} /><Sperm directions={this.props.directions[33]} /><Sperm directions={this.props.directions[34]} /><Sperm directions={this.props.directions[35]} /><Sperm directions={this.props.directions[36]} /><Sperm directions={this.props.directions[37]} /><Sperm directions={this.props.directions[38]} /><Sperm directions={this.props.directions[39]} /></div>}
                {this.props.settings.noOfSperm >= 50 && <div><Sperm directions={this.props.directions[40]} /><Sperm directions={this.props.directions[41]} /><Sperm directions={this.props.directions[42]} /><Sperm directions={this.props.directions[43]} /><Sperm directions={this.props.directions[44]} /><Sperm directions={this.props.directions[45]} /><Sperm directions={this.props.directions[46]} /><Sperm directions={this.props.directions[47]} /><Sperm directions={this.props.directions[48]} /><Sperm directions={this.props.directions[49]} /></div>}
                {this.props.settings.noOfSperm >= 60  && <div><Sperm directions={this.props.directions[50]} /><Sperm directions={this.props.directions[51]} /><Sperm directions={this.props.directions[52]} /><Sperm directions={this.props.directions[53]} /><Sperm directions={this.props.directions[54]} /><Sperm directions={this.props.directions[55]} /><Sperm directions={this.props.directions[56]} /><Sperm directions={this.props.directions[57]} /><Sperm directions={this.props.directions[58]} /><Sperm directions={this.props.directions[59]} /></div>}
                {this.props.settings.noOfSperm >= 70 && <div><Sperm directions={this.props.directions[60]} /><Sperm directions={this.props.directions[61]} /><Sperm directions={this.props.directions[62]} /><Sperm directions={this.props.directions[63]} /><Sperm directions={this.props.directions[64]} /><Sperm directions={this.props.directions[65]} /><Sperm directions={this.props.directions[66]} /><Sperm directions={this.props.directions[67]} /><Sperm directions={this.props.directions[68]} /><Sperm directions={this.props.directions[69]} /></div>}
                {this.props.settings.noOfSperm >= 80  && <div><Sperm directions={this.props.directions[70]} /><Sperm directions={this.props.directions[71]} /><Sperm directions={this.props.directions[72]} /><Sperm directions={this.props.directions[73]} /><Sperm directions={this.props.directions[74]} /><Sperm directions={this.props.directions[75]} /><Sperm directions={this.props.directions[76]} /><Sperm directions={this.props.directions[77]} /><Sperm directions={this.props.directions[78]} /><Sperm directions={this.props.directions[79]} /></div>}
                {this.props.settings.noOfSperm >= 90 && <div><Sperm directions={this.props.directions[80]} /><Sperm directions={this.props.directions[81]} /><Sperm directions={this.props.directions[82]} /><Sperm directions={this.props.directions[83]} /><Sperm directions={this.props.directions[84]} /><Sperm directions={this.props.directions[85]} /><Sperm directions={this.props.directions[86]} /><Sperm directions={this.props.directions[87]} /><Sperm directions={this.props.directions[88]} /><Sperm directions={this.props.directions[89]} /></div>}
                {this.props.settings.noOfSperm >= 100  && <div><Sperm directions={this.props.directions[90]} /><Sperm directions={this.props.directions[91]} /><Sperm directions={this.props.directions[92]} /><Sperm directions={this.props.directions[93]} /><Sperm directions={this.props.directions[94]} /><Sperm directions={this.props.directions[95]} /><Sperm directions={this.props.directions[96]} /><Sperm directions={this.props.directions[97]} /><Sperm directions={this.props.directions[98]} /><Sperm directions={this.props.directions[99]} /></div>}
            
            {this.props.settings.gapBool && (
            <div>
                <div className='vwall vwall-left'
                    style = {{
                        width: this.props.settings.gapWidth +'rem',
                        bottom: this.props.settings.obstacle1bottom + 'rem',
                        height: this.props.settings.obstacle1height + 'rem',
                    }}
                ></div>
                <div className='vwall vwall-right'
                    style={{
                        left: this.props.settings.gapRight + 'rem',
                        bottom: this.props.settings.obstacle1bottom + 'rem',
                        height: this.props.settings.obstacle1height + 'rem',
                    }}
                ></div>
            </div>
            )}

            {this.props.settings.barrierBool && (
                <div className='vwall vwall-top'
                    style={{
                        left: this.props.settings.barrierLeft + 'rem',
                        width: this.props.settings.barrierWidth + 'rem',
                        bottom: this.props.settings.obstacle2bottom + 'rem',
                        height: this.props.settings.obstacle2height + 'rem',
                    }}
                ></div>
            )}

                <div className='egg'
                    style={{
                        left: this.props.settings.eggLeft + 'rem',
                        bottom: this.props.settings.eggBottom + 'rem'
                    }}
                    onClick={(e) => {
                        console.log(this.props.genepool);
                        console.log(this.props.directions);
                        
                    }}
                ></div>


                {this.props.game.successScreen && (
                <div className='successBox'>
                    <fieldset>
                        <h3>Congratulations, It's a {this.props.game.babyName}!</h3>
                    </fieldset>
                    <div>
                        <button
                        onClick={()=>{
                            this.quitCurrentGame()
                        }}
                        >Menu</button>
                        
                        <button className='continue-button'
                        onClick={()=>{
                            mainLoop.start()
                            this.props.dispatch(hideSuccessScreen())
                        }}
                        >Continue</button>
                    </div>
                </div>
                )}

            </div>


            <fieldset className='inGameSettings'><legend>Settings</legend>

                    <div><label>Game Speed:<input type="number"
                    defaultValue={this.props.speedSettings} step="1" min="1" max="10" 
                    onChange={(e) => {
                        this.props.dispatch(changeSpeed(e.target.value))                        
                    }} /></label></div>

                <div><label>Show Sperm?<input type="checkbox" 
                    defaultChecked={this.props.game.displaySperm}
                    onChange={(e) => {
                        this.props.dispatch(displaySperm(e.target.checked))                        
                            }} /></label></div>

                <div><label>Generation:
                    <p>{this.props.game.generation}</p>
                    </label></div>
                

            </fieldset>

        </div>
        )
    }

    //lifecycle methods
    componentWillMount() {
        let directions = createActualDirections(this.props.genepool, this.props.settings.movesPerRound, (parseInt(this.props.settings.noOfSperm) + 5));
        this.props.dispatch(createNewDirections(directions))
        mainLoop.setUpdate(this.mainTimeFunction).setDraw().setSimulationTimestep(this.props.speed)
        mainLoop.start()
    }



    mainTimeFunction = () => {
        this.props.dispatch(increaseCount());
        
        //timer if statements
        if (this.props.count == (this.props.settings.movesPerRound - 70)) {
            let mutationAmount = Math.ceil(this.props.genepool.length/20) + 4
            this.setState({mutationAmount})
            this.props.dispatch(resetGenepool());
        }
        if (this.props.count == (this.props.settings.movesPerRound - 50)) {
            let directionsArray = randomMutantDirections(this.state.mutationAmount, this.props.settings.movesPerRound, this.props.settings.sizeOfMoves);
            this.props.dispatch(addToGenepool(directionsArray));
            
        }
        if (this.props.count == (this.props.settings.movesPerRound - 15) && this.props.count <= (this.props.settings.movesPerRound - 12)) {
            let directions = createActualDirections(this.props.genepool, this.props.settings.movesPerRound, (parseInt(this.props.settings.noOfSperm) + 5));
            this.props.dispatch(createNewDirections(directions));
            
        if (this.props.count <= (this.props.settings.movesPerRound - 12)){
            this.props.dispatch(resetCount());
            this.props.dispatch(nextGeneration())
            console.log('generation score: '+this.props.genepool.length);
        }
        }
    }


    quitCurrentGame = () => {
        mainLoop.stop()
        this.props.dispatch(endGame())
        this.props.dispatch(resetCount())
        this.props.dispatch(resetGenepool())
        this.props.history.push('/')
        
        
    }

    state = {
        mutationAmount: 4
    }






}

//can import function (selectors) that change the data somehow before its passed in as props
const mapStateToProps = (state) => ({
    settings: state.settings,
    time: state.time,
    game: state.game,
    count: state.time.count,
    speed: state.time.speed,
    speedSettings : state.time.speedSettings,
    genepool: state.genepool,
    directions: state.directions,
    state:state
})


export default connect(mapStateToProps)(GamePage)






