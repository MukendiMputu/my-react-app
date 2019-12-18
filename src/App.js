import React from 'react';

import NameComponent from './components/NameComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: ["Hello ", "Salut ", "Hola ", "Ciao "],
      i: 0
    }
  }
  // declaring component
  componentDidMount() {
    console.log('mounted')
  }

  changeGreeting() {
    this.setState({
      i: (+ 1)
    });
  }

  render() {

    return (
      <div>
        <p  className="text-large">
          {this.state.array[this.state.i]}, my name is <NameComponent />!
        </p>

        <button onClick={this.changeGreeting.bind(this)}>
          Press!
        </button>

      </div>
    );

  }
}

export default App;
