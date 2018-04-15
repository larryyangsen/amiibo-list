import React, { Component } from 'react';
import axios from 'axios';
import AmiiboContext from './amiibo-context';
import Input from './input';

export default class AmiiboContextProvider extends Component {
    state = {
        amiibo: []
    };
    constructor() {
        super(...arguments);
        this.amiiboUrl = new URL('http://www.amiiboapi.com/api/amiibo');
        const searhParams = new URLSearchParams({ character: 'mario' });
        this.amiiboUrl.search = searhParams;
    }
    async getAmiibo(character) {
        const searhParams = character === 'all' ? new URLSearchParams() : new URLSearchParams({ character });
        this.amiiboUrl.search = searhParams;
        try {
            const { data } = await axios.get(this.amiiboUrl);
            this.setState({ amiibo: data.amiibo });
        } catch (e) {
            this.setState({
                amiibo: []
            });
        }
    }
    onInputBlur = async name => {
        await this.getAmiibo(name);
    };

    render() {
        return (
            <AmiiboContext.Provider value={{ ...this.state }}>
                <div>
                    <label htmlFor="name-input">Character:</label>
                    <Input id="name-input" onblur={this.onInputBlur} value={'mario'} />
                </div>
                {this.props.children}
            </AmiiboContext.Provider>
        );
    }
    async componentWillMount() {
        await this.getAmiibo('mario');
    }
}
