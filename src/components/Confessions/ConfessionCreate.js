import React, { Component } from 'react';

class ConfessionCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }
    
    handleChangeInput = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    
    enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13 && this.state.input) {
            this.props.newConfession(this.state.input);
            this.setState({
                input: ''
            });
        }
    }
    

    render() {
        return (
            <div className="create-confession-bar-wrapper">
                <input 
                    className="create-confession-bar"
                    placeholder="What do you have to say?"
                    value={this.state.input}
                    onChange={this.handleChangeInput}
                    onKeyPress={this.enterPressed}
                ></input>
            </div>
        );
    }
}

export default ConfessionCreate;