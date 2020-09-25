import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserCard from "../UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
