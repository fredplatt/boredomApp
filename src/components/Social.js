import React from 'react'

class Social extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activity: ''
        }
    }

    render() {
        const getThingToDo = () => {
            fetch('http://www.boredapi.com/api/activity?type=social')
                .then((data)=>{return data.json()})
                .then((data)=>{
                    const thingToDo = (data.activity)
                    this.setState({activity: thingToDo})
                })
        }

        return (
            <div>
                <button onClick={getThingToDo}>Inspire me!</button>
                <h2>{this.state.activity}</h2>
            </div>
        )
    }
}

export default Social