import React, { Component } from 'react';
export default class TextInput extends Component {
    state = {
        value: this.props.name || 'mario'
    };
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        const { value, id } = this.props;
        return <input type="text" defaultValue={value} id={id} ref={this.inputRef} />;
    }
    componentDidMount() {
        this.inputRef.current.onblur = e => {
            this.props.onblur(this.inputRef.current.value);
        };
    }
}
