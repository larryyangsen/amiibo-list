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
        return <input className="amiibo-input" type="text" defaultValue={value} id={id} ref={this.inputRef} />;
    }
    componentDidMount() {
        this.inputRef.current.focus();
        this.inputRef.current.onblur = e => {
            this.inputRef.current.value && this.props.onchange(this.inputRef.current.value);
        };
        this.inputRef.current.onkeyup = e => {
            this.inputRef.current.value && e.keyCode === 13 && this.props.onchange(this.inputRef.current.value);
        };
    }
}
