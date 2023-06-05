import React from "react";
import { Card } from "react-bootstrap";

function CardComponent(props) {
    return (
        <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.location}</Card.Title>
                <Card.Text>
                    {props.host}
                    <br />
                    {props.date}
                    <br />
                    <br />
                    {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
