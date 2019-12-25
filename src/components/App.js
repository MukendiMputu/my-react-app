import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Nav, Navbar, Form, FormControl, Button,
        Container, Row, Col, Carousel, Image, Table
        } from 'react-bootstrap';
import Select from 'react-select';
import NameComponent from './NameComponent';
import { fetchtInfo } from '../actions/actions_info';
import { connect } from 'react-redux';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: ["Hello", "Salut", "Hola", "Ciao"],
      intro: ["my name is ", "je m'appelle ", "me llamo ", "mi chiamo "],
      btnLabel: ["Press me!", "Presse-moi!", "Haz click!", "Clicca mi!"],
      i: 0,
      selectedOption: '',
      JsonList: []
    }
  }

  // good practice to initialize data/variable
  componentDidMount() {
    // the dispatcher alerts store and reducers about the action 'fetchInfo'
    this.props.dispatch(fetchtInfo());
  }

  // changes between the array elements
  changeGreeting() {
    this.setState({
        i: (this.state.i + 1)%4
      });

  }

  // defines behavior of the select box
  handleChange(selectedOption) {
    this.setState({
      selectedOption : selectedOption ? selectedOption : ''
    });
  }

  render() {
    //console.log(this.props);
    const selectList = this.props.info.map( item => {
      return {value: item.name, label: item.name}
    });

    return (
      <div className="">
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
        <Carousel>
          <Carousel.Item>
            <Image src="/firstSlide.png" alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image src="/secondSlide.png" alt="Second slide"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image src="/thirdSlide.png" alt="Third slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <br/>
        <br/>
        <Container>
          <Row className=" justify-content-md-start">
            <Col xs={6} md={4}>
              {/* <Image src="holder.js/171x180" rounded /> */}
              <h3>First column</h3>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </Col>
            <Col xs={6} md={4}>
              {/* <Image src="holder.js/171x180" roundedCircle /> */}
              <h3>Second column</h3>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </Col>
            <Col xs={6} md={4}>
              {/* <Image src="holder.js/171x180" thumbnail /> */}
              <h3>Third column</h3>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </Col>
          </Row>
        </Container>
        <hr/>
        <div className="container">
          <div className="col-sm-12">
            <div className="col-sm-6">
              <h4 className="text-left">Using Ajax on Json and some filter function</h4>
              <br/>
              <Select
                className="basic-single"
                classNamePrefix="select"
                name="form-field-name"
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                value={this.state.selectedOption.value}
                onChange={this.handleChange.bind(this)}
                options={selectList}
              />
            </div>
            <br/>
            <div className="col-sm-12">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.info.map(item => {
                    if(this.state.selectedOption === '' || this.state.selectedOption.value === item.name){
                      return (
                        <tr key={"item-"+item.name} >
                          <td>{item.name}</td>
                          <td>{item.address}</td>
                          <td>{item.company}</td>
                          <td>{item.balance}</td>
                        </tr>
                      )
                    }
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <hr/>
        <div className="footer mt-auto py-3">
          <div className="container">
            <span className="text-muted">&copy;{new Date().getFullYear()} - <NameComponent/></span>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
