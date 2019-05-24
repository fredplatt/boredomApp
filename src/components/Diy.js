import React from 'react'

class Diy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activity: ''
        }
    }

    render() {
        const getThingToDo = () => {
            fetch('http://www.boredapi.com/api/activity?type=diy')
                .then((data)=>{return data.json()})
                .then((data)=>{
                    const thingToDo = (data.activity)
                    this.setState({activity: thingToDo})
                })
        }

        return (
            <div className="activity">
                <button onClick={getThingToDo}>Inspire me!</button>
                <a href={"https://www.google.com/search?q=" + this.state.activity}>{this.state.activity}</a>
            </div>
        )
    }
}

export default Diy