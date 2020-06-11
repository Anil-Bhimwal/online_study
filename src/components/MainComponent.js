import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import CourseDetail from './CourseDetailComponent';
import { COURSES } from '../shared/courses';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
    };
  }


  render() {
    const HomePage = () => {
      return (
        <Home
        />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu courses={this.state.courses} />} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu courses={this.state.courses} onClick={(courseId) => this.onCourseSelect(courseId)} />
        <CourseDetail course={this.state.courses.filter((course) => course.id === this.state.selectedCourse)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;