import React from 'react';

import NameComponent from './components/NameComponent';

class App extends React.Component {

  componentDidMount() {
    console.log('mounted')
  }

  changeColor() {
    NameComponent.style={fontColor: 'green'};
  }

  render() {
    var greeting = ['Hello '];
    var style = {fontSize: '20px'};
    var array = ["Salut ", "Hola ", "Ciao "];


    array.forEach(
      function(word, i){
        greeting.push(
          <span key={i}>{i} {word}</span>
        )
      }
    )

    return (
      <div>
        <p style={style} className="text-large">
          {greeting}, my name is <NameComponent />!
        </p>

        <button onClick={this.changeColor/* () => {console.log('Boomm!')} */}>
          Press!
        </button>

      </div>
    );

  }
}

export default App;
