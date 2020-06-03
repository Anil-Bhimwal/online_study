import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Image from 'react-bootstrap/Image';

class CourseDetail extends Component {
    RenderComments(course) {
        if (course != null && course.comments != null) {
            const comments = course.comments.map((comm, i) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)));
                return (

                    <li key={comm.id} className="comment">
                        <p>
                            {comm.comment}
                        </p>
                        <p>
                            -- {comm.author}, {date}
                        </p>
                    </li>
                );
            })

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>

                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    //Render Course
    RenderCourse(course) {
        if (course != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Image src={course.image} alt={course.name} thumbnail />
                        <CardBody>
                            <CardTitle>{course.name}</CardTitle>
                            <CardText>{course.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

            );
        } else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const course = this.props.selectedCourse;
        return (

            <div className="row">
                {this.RenderCourse(course)}
                {this.RenderComments(course)}
            </div>

        );
    }

}
export default CourseDetail;