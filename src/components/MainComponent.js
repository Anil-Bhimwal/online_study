import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import CourseDetail from './CourseDetailComponent';
import { COURSES } from '../shared/courses';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {
    const HomePage = () => {
      return(
          <Home 
              course={this.state.courses.filter((course) => course.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu courses={this.state.courses} />} />
          <Route exact path='/contactus' component={Contact} />} />
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