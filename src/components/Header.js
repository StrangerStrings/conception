import React from 'react'
import { Link } from 'react-router-dom'
import mainLoop from 'mainloop.js'

export default class Header extends React.Component {

    render (){
        return(
        <header>
            <h1>Conception</h1>
    
            {this.props.buttons && (
                <div className='header-buttons'>
    
                {this.state.playing ? (
                    <div className='pause-button'
                    onClick={()=>{
                        mainLoop.stop()
                        this.setState({ playing: false })
                    }}>
                        <svg viewBox='0 0 50 50'>
                            <path d='M 3 43 L 3 7 C 3 3.137 6.137 0 10 0 L 13.104 0 C 16.968 0 20.104 3.137 20.104 7 L 20.104 43 C 20.104 46.863 16.968 50 13.104 50 L 10 50 C 6.137 50 3 46.863 3 43 Z  M 30.826 43 L 30.826 7 C 30.826 3.137 33.962 0 37.826 0 L 41.312 0 C 45.176 0 48.312 3.137 48.312 7 L 48.312 43 C 48.312 46.863 45.176 50 41.312 50 L 37.826 50 C 33.962 50 30.826 46.863 30.826 43 Z'> </path>
                        </svg>
                    </div>
                ):(
                    <div className='play-button'
                    onClick={()=>{
                        mainLoop.start()
                        this.setState({playing:true})
                    }}>
                        <svg viewBox='-849 2717.126 269.898 324.749'>
                            <path d=' M -804.729 2740.562 L -593.3 2867.42 C -574.369 2878.778 -574.369 2897.222 -593.3 2908.58 L -804.729 3035.438 C -829.163 3050.098 -849 3038.866 -849 3010.372 L -849 2765.628 C -849 2737.134 -829.163 2725.902 -804.729 2740.562 Z'> </path>
                        </svg>
                    </div>
                )}
                    
                    <div className='back-button'
                    onClick={this.props.quitGame}
                    >
                        <svg viewBox='0 0 50 50'>
                            <path d=' M 15.526 18.084 L 45.164 18.084 C 47.833 18.084 50 20.153 50 22.702 L 50 22.702 C 50 25.251 47.833 27.32 45.164 27.32 L 15.526 27.32 L 25.741 37.535 C 27.525 39.319 27.525 42.217 25.741 44.002 L 25.677 44.066 C 23.892 45.85 20.994 45.85 19.21 44.066 L 1.339 26.195 C 0.38 25.236 -0.063 23.957 0.007 22.702 C -0.063 21.447 0.38 20.168 1.339 19.21 L 19.21 1.339 C 20.994 -0.446 23.892 -0.446 25.677 1.339 L 25.741 1.402 C 27.525 3.187 27.525 6.085 25.741 7.87 L 15.526 18.084 Z  '> </path>
                        </svg>
                    </div>
                </div>
            )}

            {this.props.githubLink && (
                    <a href=''>
                    <h5>ben</h5>
                    <h5>green</h5>
                </a>
            )}
    
        </header>
        )
    }

    state = {
        playing: true
    }

}

