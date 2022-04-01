import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { // Инициализируем состояние
            count: 0
        }
        this.dicrement = this.dicrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState({count: this.state.count +1})
    }
    dicrement(){
        this.setState({count: this.state.count -1})
}

    render() {
        return ( //Ставим круглые скобки, т.к. возвращаем НЕ объект
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.dicrement}>Discrement</button>
            </div>
        )
    }
}
export default ClassCounter;