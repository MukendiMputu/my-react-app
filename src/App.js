import React from 'react';

import NameComponent from './components/NameComponent';

class App extends React.Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    var word = 'Hello';
    var style = {fontSize: '20px'};

    return (
      <div>
        <p style={style} className="text-large">
          Hi! My name is <NameComponent />
        </p>
        <div>{word}</div>
      </div>
    );

  }
}

export default App;
