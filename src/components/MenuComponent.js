import React, { Component } from 'react';
import {Card} from 'reactstrap';
import Image from 'react-bootstrap/Image';

class Menu extends Component {
    render() {
        const menu = this.props.courses.map((course) => {
            return (
                <div key={course.id} className="col-12 col-md-5 m-1">
                    <Card key={course.id}
                        onClick={() => this.props.onClick(course.id)}>
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
            </div>
        );
    }
}

export default Menu;