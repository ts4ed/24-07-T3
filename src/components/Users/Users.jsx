import {
  Container,
  List,
  H1,
  Span,
  Title,
  Item,
  Table,
  TdUser,
  UserInfo,
  Name,
  TableTitle,
  Address,
  Email,
  Company,
  Info,
  ContainerUsers,
  TR,
  ImgInfo,
  SpanUser,
  SpanCompany,
  SpanEmail,
  SpanTitle,
  LinkUser,
  CompanyInfo,
  EmailInfo,
  Ul,
  DistanceInfo,
  FormGroup,
  Tickets,
  Form,
  CheckBox,
  SpanTicket,
  PTicket,
} from "./Users.styled";
import { Link } from "react-router-dom";
import { useFetchUsersQuery } from "../../Api/api";
import avatar from "../../svg/avatar.svg";
import info from "../../svg/info.svg";
import hight from "../../svg/hight.svg";
import plus from "../../svg/plus.svg";
import urgent from "../../svg/urgent.svg";
import news from "../../svg/new.svg";
import defaults from "../../svg/default.svg";

export const Users = () => {
  const { data } = useFetchUsersQuery();
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
      <ContainerUsers>
        <H1>All Users</H1>
        <Table>
          <TableTitle>
            <SpanUser>User details</SpanUser>
            <SpanCompany>Company name</SpanCompany>
            <SpanEmail>Email</SpanEmail>
            <SpanTitle>Distance</SpanTitle>
          </TableTitle>
          <Ul>
            {data &&
              data.map(({ id, name, company, email, address, website }) => (
                <TR key={id}>
                  <LinkUser as={Link} to={`/users/${id}`}>
                    <TdUser>
                      <img src={avatar} alt="" width={44} />
                      <UserInfo>
                        <Name>{name}</Name>
                        <Address>{address.city}</Address>
                      </UserInfo>
                    </TdUser>
                    <CompanyInfo>
                      <div>
                        <Company>{company.name}</Company>
                        <Info>{company.bs}</Info>
                      </div>
                    </CompanyInfo>
                    <EmailInfo>
                      <Email>{email}</Email>
                      <Info>{website}</Info>
                    </EmailInfo>
                    <DistanceInfo>
                      <img src={hight} alt="" />
                    </DistanceInfo>
                    <div>
                      <ImgInfo src={info} alt="" />
                    </div>
                  </LinkUser>
                </TR>
              ))}
          </Ul>
        </Table>
      </ContainerUsers>
      <FormGroup>
        <Tickets>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px",
              marginLeft: "32px",
              marginRight: "32px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "19px",
                lineHeight: "24px",
                letterSpacing: "0.4px",
                color: "#252733 ",
              }}
            >
              Unresolved tickets
            </h2>
            <p style={{ margin: 0, color: "#3751FF" }}>View details</p>
          </div>

          <PTicket style={{ margin: 0, marginLeft: "32px" }}>
            <span style={{ color: "#9FA2B4" }}>Group:</span>Support
          </PTicket>
          <ul style={{ padding: 0, listStyle: "none" }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "32px",
                marginRight: "32px",
                height: "58px",
              }}
            >
              <PTicket style={{ margin: 0 }}>
                Waiting on Feature Request
              </PTicket>
              <SpanTicket style={{ margin: 0 }}>4238</SpanTicket>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "32px",
                marginRight: "32px",
                height: "58px",
              }}
            >
              <PTicket style={{ margin: 0 }}>
                Awaiting Customer Response
              </PTicket>
              <SpanTicket style={{ margin: 0 }}>1005</SpanTicket>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "32px",
                marginRight: "32px",
                height: "58px",
              }}
            >
              <PTicket style={{ margin: 0 }}>Awaiting Developer Fix</PTicket>
              <SpanTicket style={{ margin: 0 }}>914</SpanTicket>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "32px",
                marginRight: "32px",
                height: "58px",
              }}
            >
              <PTicket style={{ margin: 0 }}>Pending</PTicket>
              <SpanTicket style={{ margin: 0 }}>281</SpanTicket>
            </li>
          </ul>
        </Tickets>
        <Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px",
              marginLeft: "32px",
              marginRight: "32px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "19px",
                lineHeight: "24px",
                letterSpacing: "0.4px",
                color: "#252733 ",
              }}
            >
              Task
            </h2>
            <p style={{ margin: 0, color: "#3751FF" }}>View all</p>
          </div>
          <PTicket style={{ margin: 0, marginLeft: "32px" }}>
            <span style={{ color: "#9FA2B4" }}>Today</span>
          </PTicket>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "58px",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "323px",
                  marginLeft: "32px",
                  height: "32px",
                  border: "none",
                }}
                type="text"
                placeholder="Create new task"
              />
              <button
                type="submit"
                style={{
                  borderRadius: "8px",
                  border: "none",
                  padding: 0,
                  marginRight: "32px",
                }}
              >
                <img src={plus} alt="" width={24} height={24} />
              </button>
            </div>
            <CheckBox>
              <label
                style={{
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                }}
                htmlFor="taskChoice1"
              >
                <input
                  type="radio"
                  id="taskChoice1"
                  name="task"
                  value="finish"
                />
                <span style={{ marginLeft: "16px" }}>Finish ticket update</span>
                <img style={{ marginLeft: "auto" }} src={urgent} alt="" />
              </label>

              <label
                style={{
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                }}
                htmlFor="taskChoice2"
              >
                <input
                  type="radio"
                  id="taskChoice2"
                  name="task"
                  value="create"
                />
                <span style={{ marginLeft: "16px" }}>
                  Create new ticket example
                </span>
                <img style={{ marginLeft: "auto" }} src={news} alt="" />
              </label>

              <label
                style={{
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                }}
                htmlFor="taskChoice3"
              >
                <input
                  type="radio"
                  id="taskChoice3"
                  name="task"
                  value="update"
                />
                <span style={{ marginLeft: "16px" }}>Update ticket report</span>
                <img style={{ marginLeft: "auto" }} src={defaults} alt="" />
              </label>
            </CheckBox>
          </form>
        </Form>
      </FormGroup>
    </Container>
  );
};
