import React from 'react';
//import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import {Nav, Navbar, Form, FormControl} from 'react-bootstrap'
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
    //const style = {fontSize: '36pt'};

    return (
      <div >
{/*     <p style={style} className="text-large">
          {this.state.array[this.state.i]}, {this.state.intro[this.state.i]} <NameComponent />!
        </p>

        <button className="btn-success" onClick={this.changeGreeting.bind(this)}>
          {this.state.btnLabel[this.state.i]}
        </button>
 */}
{/*         <Form className="text-center">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Jumbotron>
        <h1>{this.state.array[this.state.i]}, {this.state.intro[this.state.i]} <NameComponent />!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary" onClick={this.changeGreeting.bind(this)}>
          {this.state.btnLabel[this.state.i]}</Button>
        </p>
      </Jumbotron>
      </div>
    );

  }
}

export default App;
