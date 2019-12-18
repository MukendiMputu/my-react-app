import React from 'react';

import NameComponent from './components/NameComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: ["Hello ", "Salut ", "Hola ", "Ciao "],
      intro: ["my name is ", "je m'appelle ", "me llamo ", "mi chiamo "],
      i: 0
    }
  }
  // declaring component
  componentDidMount() {
    console.log('mounted')
  }

  // changes between the array elements
  changeGreeting() {
    if(this.state.i < 3){
      this.setState({
          i: (this.state.i + 1)%3
        });
    }
  }

  render() {
    const style = {fontSize: '36pt'};

    return (
      <div>
        <p style={style} className="text-large">
          {this.state.array[this.state.i]}, {this.state.intro[this.state.i]} <NameComponent />!
        </p>

        <button onClick={this.changeGreeting.bind(this)}>
          Press!
        </button>

      </div>
    );

  }
}

export default App;
