import axios from "axios";
import { Container, List, H1, Span, Title, Item } from "../Users/Users.styled";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Img, UserContainer, UserInfo } from "./User.styled";
import user from "../../svg/user.svg";
// import { useFetchUserQuery } from "../../Api/api";

export const User = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const id = location.pathname.slice(7);
  useEffect(() => {
    async function fetchUser() {
      setData({});
      try {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((r) => {
            setData(r.data);
          });
      } catch (error) {
        if (error) {
          console.log(error);
        }
      }
    }
    fetchUser();
  }, [location, id]);

  // console.log(data);

  return (
    <Container>
      <div>
        <H1>Users</H1>

        <List>
          <Item>
            <Title>Active</Title>
            <Span>60</Span>
          </Item>
          <Item>
            <Title>Online</Title>
            <Span>16</Span>
          </Item>
          <Item>
            <Title>Filtered</Title>
            <Span>43</Span>
          </Item>
          <Item>
            <Title>Banned</Title>
            <Span>64</Span>
          </Item>
        </List>
      </div>
      <UserContainer>
        {data.address ? (
          <>
            <Img src={user} alt="" width={145} />
            <h1>{data.name}</h1>
            <h2>{data.company.catchPhrase}</h2>
            <UserInfo>
              <h3>Address</h3>
              <p>
                {data.address.street}, {data.address.suite}
              </p>
              <p>
                {data.address.city}, {data.address.zipcode}
              </p>
              <h3>Phone</h3>
              <p>{data.phone}</p>
              <h3>Website</h3>
              <a href={data.website}>{data.website}</a>
            </UserInfo>
          </>
        ) : (
          ""
        )}
      </UserContainer>
    </Container>
  );
};
