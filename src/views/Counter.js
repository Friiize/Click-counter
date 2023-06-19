import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { currentCount : 0 }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    decrementCounter() {
        if (this.state.currentCount - 1 < 0) return;
        this.setState({
            currentCount: this.state.currentCount - 1
        });
    }

    render() {
        return(
            <div>
                <p>count : {this.state.currentCount}</p>
                <button onClick={this.incrementCounter}>Incrémenter</button>
                <button onClick={this.decrementCounter}>Décrémenter</button>
            </div>
        )
    }
}

export default Counter;
