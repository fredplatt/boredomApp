import React from 'react'

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
                    this.setState({activity: thingToDo})
                })
        }

        return (
            <div className="activity">
                <button onClick={getThingToDo}>Or have something completely random!</button>
                <a href={"https://www.google.com/search?q=" + this.state.activity}>{this.state.activity}</a>
            </div>
        )
    }
}

export default Home