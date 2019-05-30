import React from 'react'
import { bounceInRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium'

const styles = {
    bounceInRight: {
        animation: 'x 0.5s',
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

            fetch('http://www.boredapi.com/api/activity' + this.props.target)
                .then((data)=>{return data.json()})
                .then((data)=>{
                    const thingToDo = (data.activity)
                    this.setState({activity: ''})
                    this.setState({activity: <div style={styles.bounceInRight}><a href={"https://www.google.com/search?q=" + thingToDo}>{thingToDo}</a></div>})
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