import React from 'react'
import { connect } from 'react-redux'
import { addToGenepool, firstSuccess } from '../redux/actions';
import {fitnessTest} from '../functions'
import MainLoop from 'mainloop.js'
// import { totalWidth, totalHeight, bottomConstant } from './Game.js'

class Sperm extends React.Component {

    render() {
        return (
            <div>
            
            {this.props.game.displaySperm && (
            <div
                className = {this.state.impregnated ? 'sperm impregnated': 'sperm'}
                style= {{
                    left: this.state.x + 'rem',
                    bottom: this.state.y + 'rem',
                    transition: 'left ' + this.props.speed + 'ms,bottom ' + this.props.speed +'ms',
                }}
            >
                <div></div>
            </div>
            )}


            </div>
        )
    }


    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count,
            x: 27,
            y: 0,
            crashed: false,
            impregnated: false
        }
    }

    componentWillReceiveProps(){
        
        if (this.state.count != this.props.count && !this.state.crashed && !this.state.impregnated){

            this.moveSperm()
            if (this.props.settings.gapBool) { this.crashTest1() }
            if (this.props.settings.barrierBool){this.crashTest2()}
            this.sidesTest()
            this.eggTest()

            this.setState(() => ({ count: this.props.count  }))
        }


        if (this.state.count == (this.props.settings.movesPerRound - 29)) {

            let fitness = fitnessTest(this.state, this.props.settings)
            let arr = []
            for (let i = 0; i < fitness; i++) {
                arr.push(this.props.directions)
            }
            
            setTimeout(()=>{
                this.props.dispatch(addToGenepool(arr))
            },fitness)
        }

        if (this.props.count == (this.props.settings.movesPerRound - 16)){
            this.setState({ x:27, y:0 , crashed:false, impregnated:false})
        }

    }



    moveSperm = () => {
        // console.log(this.props.count);
        
        this.setState((prevState) => ({
            x: prevState.x + this.props.directions[this.state.count][0],
            y: prevState.y + this.props.directions[this.state.count][1],
        }));
    }

    crashTest1 = () => {
        //left wall
        if (this.state.x < this.props.settings.gapWidth && 
            this.state.y > this.props.settings.obstacle1bottom &&
            this.state.y < (this.props.settings.obstacle1bottom + this.props.settings.obstacle1height)
        ) {
            this.setState(()=>({ crashed: true }))
        }
        //right wall
        if (this.state.x > this.props.settings.gapRight &&
            this.state.y > this.props.settings.obstacle1bottom &&
            this.state.y < (this.props.settings.obstacle1bottom + this.props.settings.obstacle1height)
        ) {
            this.setState(() => ({ crashed: true }))
        }
    }

    crashTest2 = () => {
        //top wall
        if (this.state.x > this.props.settings.barrierLeft &&
            this.state.x < (this.props.settings.barrierLeft + this.props.settings.barrierWidth) &&
            this.state.y > this.props.settings.obstacle2bottom &&
            this.state.y < (this.props.settings.obstacle2bottom + this.props.settings.obstacle2height)
        ) {
            this.setState(() => ({ crashed: true }))
        }
    }

    sidesTest = () => {
        if (this.state.x < 0){
            this.setState({ x: 1 })
        }
        if (this.state.x > 60){
            this.setState({ x: 59 })
        }
    }

    eggTest = () => {
        if (this.state.x > (this.props.settings.eggLeft + 1.6) &&
            this.state.x < (this.props.settings.eggLeft + 8 - 1.6) &&
            this.state.y > (this.props.settings.eggBottom + 1) &&
            this.state.y < (this.props.settings.eggBottom + 10 - 1)
        ) {
            this.setState(() => ({ impregnated: true }))

            if (this.props.game.virgin){
                MainLoop.stop()
                this.props.dispatch(firstSuccess())
            }
        }
    }

}



const mapStateToProps = (state) => ({
    count: state.time.count,
    speed: state.time.speed,
    game: state.game,
    genepool: state.genepool,
    settings: state.settings,
})


export default connect(mapStateToProps)(Sperm)