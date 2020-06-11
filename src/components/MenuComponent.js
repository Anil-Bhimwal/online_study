import React from 'react';
import { Card } from 'reactstrap';
import Image from 'react-bootstrap/Image';

function RenderMenuItem({ course, onClick }) {
    return (
        <Card key={course.id}>
            <Image src={course.image} alt={course.name} thumbnail />
            {/* <CardImg width="100%" src={course.image} alt={course.name} />
                <CardImgOverlay>
                    <CardTitle>{course.name}</CardTitle>
                </CardImgOverlay> 
                */}
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.courses.map((course) => {
        return (
            <div key={course.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem course={course} onClick={props.onClick} />
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


export default Menu;