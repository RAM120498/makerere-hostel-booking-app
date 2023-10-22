import { Component } from "react";

class Counter extends Component{
    constructor()
    {
            super();
            this.state = {
                counter: 0,
            };
    }

    increment()
    {
        this.setState(
            {
                counter: this.state.counter + 1,
            }
        )
    }

    decrement()
    {
        this.setState(
            {
                counter: this.state.counter - 1,
            }
        )
    }

    render()
    {
        return(
            <body>
                <h1>Count value is: {this.state.counter}</h1>
                <button onClick={() => this.increment()}>Increase</button>
                <br></br>
                <br></br>
                <button onClick={() => this.decrement()}>Decrease</button>
            </body>
        )
    }
}

export default Counter;