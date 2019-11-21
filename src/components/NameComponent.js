import React from 'react';

class NameComponent extends React.Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    var word = 'Hello';
    var style = {fontSize: '20px'};

    return (
      <div>
        <p>Mukendi Mputu</p>
      </div>
    );

  }
}

export default NameComponent;
