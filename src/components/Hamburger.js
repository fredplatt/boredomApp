import React from "react";
import {bubble as Menu} from "react-burger-menu";

class Hamburger extends React.Component {

    render () {
        return (
            <div id="outer-container">
                <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                <main id="page-wrap">
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="educational" className="menu-item" href="/educational/">Educational</a>
                    <a id="recreational" className="menu-item" href="/recreational/">Recreation</a>
                    <a id="social" className="menu-item" href="/social/">Social</a>
                    <a id="diy" className="menu-item" href="/diy/">DIY</a>
                    <a id="charity" className="menu-item" href="/charity/">Charity</a>
                    <a id="cooking" className="menu-item" href="/cooking/">Cooking</a>
                    <a id="relaxation" className="menu-item" href="/relaxation/">Relaxation</a>
                    <a id="music" className="menu-item" href="/music/">Music</a>
                    <a id="busywork" className="menu-item" href="/busywork/">Busywork</a>
                </main>
            </Menu>
            <h2>Open the menu to choose a category, or click the activity to find out more!</h2>
            </div>

        );
    }
}

export default Hamburger