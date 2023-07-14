import CardList from "./CardList.js";
import SearchBox from './SearchBox.js';
import React, { Component } from "react";
import Scroll from './Scroll.js';
import './App.css';

// State -> is Object that describes your App; Parent feeds state into child, and it is called Prop  
// It can change and affect our app and lives in the parent component

class App extends Component {
    constructor() {
        super();
         this.state = {     // Virtual DOM collects this state
            robots: [],
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {       // React Lifecycle Hook Component
        fetch("https://jsonplaceholder.typicode.com/users")     // Part of window object; to make requests to servers
            .then(response => response.json())
            .then(user => this.setState({ robots: user }));
    }

    render() {
        // The render() function should be pure, meaning that it does not modify component 
        // state, it returns the same result each time it’s invoked, and it does not directly 
        // interact with the browser.
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        // Conditional Rendering
        if(!this.state.robots.length) {     // If robots.length === 0, it will evaluate as false
            return <h1 className="tc f1">Loading...</h1>
        }
        else {
            return(
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>     
                        {/* CardList is child of Scroll; can use props.children to access it */}
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;