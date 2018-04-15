import React, { Component } from 'react';
import AmiiboProvider from './amiibo-provider';
import AmiiboContext from './amiibo-context';
import Content from './content';

export default class extends Component {
    constructor(props) {
        super(props);
        this.amiiboUrl = new URL('http://www.amiiboapi.com/api/amiibo');
    }

    render() {
        return (
            <AmiiboProvider>
                <AmiiboContext.Consumer>
                    {context =>
                        context.amiibo.map(amiibo => <Content key={amiibo.head + amiibo.tail} amiibo={amiibo} />)
                    }
                </AmiiboContext.Consumer>
            </AmiiboProvider>
        );
    }
}
