import React, { Component } from 'react';
import AmiiboProvider from './amiibo-provider';
import AmiiboContext from './amiibo-context';
import Content from './content';
import './app.css';
export default class extends Component {
    constructor(props) {
        super(props);
        this.amiiboUrl = new URL('http://www.amiiboapi.com/api/amiibo');
    }

    render() {
        return (
            <AmiiboProvider>
                <AmiiboContext.Consumer>
                    {context => (
                        <div className="amiibo-container">
                            {context.amiibo.map(amiibo => <Content key={amiibo.head + amiibo.tail} amiibo={amiibo} />)}
                        </div>
                    )}
                </AmiiboContext.Consumer>
            </AmiiboProvider>
        );
    }
}
