import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card, CardTitle, CardText } from "reactstrap";

const Profile = (props) => {
  console.log("this is my param", props.match.params.youssef);
  const [user, setUser] = useState({});
  useEffect(() => {
    const url =
      "https://jsonplaceholder.typicode.com/users/?id=" +
      props.match.params.youssef;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
  }, []);
  return (
    <Container>
      <Row>
        <Col md="4" lg="4" sm="6" xs="12">
          <Card body>
            <div className="card-back"></div>
            <CardText className="avatar">{user.name && user.name[0]} </CardText>

            <CardTitle>{user.name}</CardTitle>
            <CardText>{user.phone}</CardText>
            <CardText className="text-muted">{user.email}</CardText>
            <CardText className="text-muted">{user.website}</CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
