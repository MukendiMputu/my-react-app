import React, {Component} from 'react';

import NameComponent from './components/NameComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: ["Hello", "Salut", "Hola", "Ciao"],
      intro: ["my name is ", "je m'appelle ", "me llamo ", "mi chiamo "],
      btnLabel: ["Press me!", "Presse-moi!", "Haz click!", "Clicca mi!"],
      i: 0
    }
  }

  // good practice to initialize data/variable
  componentDidMount() {
    console.log('mounted')
  }
  //
  componentDidUpdate( ){

  }

  // changes between the array elements
  changeGreeting() {
    this.setState({
        i: (this.state.i + 1)%4
      });

  }

  render() {
    const style = {fontSize: '36pt'};

    return (
      <div>
{/*         <p style={style} className="text-large">
          {this.state.array[this.state.i]}, {this.state.intro[this.state.i]} <NameComponent />!
        </p>

        <button className="btn-success" onClick={this.changeGreeting.bind(this)}>
          {this.state.btnLabel[this.state.i]}
        </button>
 */}
      </div>
    );

  }
}

export default App;
