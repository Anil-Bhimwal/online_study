import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { COURSES } from './shared/courses';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ONLINE STUDY</NavbarBrand>
          </div>
        </Navbar>
        <Menu courses={this.state.courses} />
      </div>
    );
  }

}

export default App;
