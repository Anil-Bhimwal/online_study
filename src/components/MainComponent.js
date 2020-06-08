import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import CourseDetail from './CourseDetailComponent';
import { COURSES } from '../shared/courses';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        courses: COURSES,
        selectedCourse: null
    };
  }

  onCourseSelect(courseId) {
    this.setState({ selectedCourse: courseId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Online Study </NavbarBrand>
          </div>
        </Navbar>
        <Menu courses={this.state.courses} onClick={(courseId) => this.onCourseSelect(courseId)} />
        <CourseDetail course={this.state.courses.filter((course) => parseInt(course.id) === parseInt(this.state.selectedCourse))[0]} />
      </div>
    );
  }
}

export default Main;