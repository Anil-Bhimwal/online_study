import React, { Component } from 'react';
import {Card} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import CourseDetail from './CourseDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: null

        };
    }
    onCourseSelected(course) {
        this.setState({ selectedCourse: course });
    }

    render() {
        const menu = this.props.courses.map((course) => {
            return (
                <div key={course.id} className="col-12 col-md-5 m-1">
                    <Card key={course.id}
                        onClick={() => this.onCourseSelected(course)}>
                        <Image src={course.image} alt={course.name} thumbnail />
                        {/* <CardImg width="100%" src={course.image} alt={course.name} />
                        <CardImgOverlay>
                            <CardTitle>{course.name}</CardTitle>
                        </CardImgOverlay> */}
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <CourseDetail selectedCourse={this.state.selectedCourse} />
            </div>
        );
    }
}

export default Menu;