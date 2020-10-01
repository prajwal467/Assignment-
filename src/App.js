import React, {Component} from 'react';

import Temp from './components/f1.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '/test/test.html'
        };
    }

    render() {
        return (
            <div className="App">
             <Temp />
            
            </div>
        );
    }
}

export default App;
