import React, { Component } from 'react';
import {
    Card, CardImg,  CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Image from 'react-bootstrap/Image'

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
    //To render a single course
    renderCourse(course) {
        if (course != null) {
            return (
                <Card>
                    <CardImg top src={course.image} alt={course.name} />
                    <CardBody>
                        <CardTitle>{course.name}</CardTitle>
                        <CardText>{course.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const menu = this.props.courses.map((course) => {
            return (
                <div key={course.id} className="col-12 col-md-5 m-1">
                    <Card key={course.id}
                        onClick={() => this.onCourseSelected(course)}>
                        <Image src={course.image} alt= {course.name} thumbnail />
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderCourse(this.state.selectedCourse)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;