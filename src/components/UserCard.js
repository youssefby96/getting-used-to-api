import React from "react";
import { Col, Card, CardText, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Col md="4" lg="4" sm="6" xs="12">
      <Card body>
        <div className="card-back"></div>
        <CardText className="avatar">{user.name[0]} </CardText>

        <CardTitle>{user.name}</CardTitle>
        <CardText>{user.email}</CardText>
        <Button color="primary">
          <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
            Go to profile
          </Link>
        </Button>
      </Card>
    </Col>
  );
};

export default UserCard;
