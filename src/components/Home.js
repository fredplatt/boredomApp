import React from 'react'
import { bounceInRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium'

const styles = {
    bounceInRight: {
        animation: 'y 2s',
        animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
    }
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activity: ''
        }
    }

    render() {
        const getThingToDo = () => {

            fetch('http://www.boredapi.com/api/activity/')
                .then((data)=>{return data.json()})
                .then((data)=>{
                    const thingToDo = (data.activity)
                    this.setState({activity: ''})
                    this.setState({activity: <a href={"https://www.google.com/search?q=" + thingToDo} style={styles.bounceInRight}>{thingToDo}</a>})
                })

        }

        return (
            <div className="activity">
                <button onClick={getThingToDo}>Give me something new to do</button>
                    <StyleRoot>
                    {this.state.activity}
                    </StyleRoot>
            </div>

        )
    }
}

export default Home