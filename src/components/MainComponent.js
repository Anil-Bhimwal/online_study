import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import CourseDetail from './CourseDetailComponent';
import { COURSES } from '../shared/courses';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
      selectedCourse: null
    };
  }

  onCourseSelect(courseId) {
    this.setState({ selectedCourse: courseId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu courses={this.state.courses} onClick={(courseId) => this.onCourseSelect(courseId)} />
        <CourseDetail course={this.state.courses.filter((course) => course.id === this.state.selectedCourse)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;