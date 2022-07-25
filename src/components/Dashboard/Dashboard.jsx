import { Container, List, Title, Links } from "./Dashboard.styled";
import { Link } from "react-router-dom";
import svg from "../../svg/svg.svg";
import svg1 from "../../svg/svg1.svg";
import svg2 from "../../svg/svg2.svg";
import svg3 from "../../svg/svg3.svg";
import svg4 from "../../svg/svg4.svg";
import svg5 from "../../svg/svg5.svg";
import svg6 from "../../svg/svg6.svg";
import svg7 from "../../svg/svg7.svg";
import svg8 from "../../svg/svg8.svg";
import logo from "../../svg/logo.svg";

export const Dashboard = () => {
  return (
    <Container>
      <Title>
        <img src={logo} alt="" /> Dashboard{" "}
      </Title>
      <List>
        <li>
          <img src={svg1} alt="" />
        </li>
        <Links as={Link} to="/users">
          <img src={svg2} alt="" />
        </Links>

        <li>
          <img src={svg3} alt="" />
        </li>
        <li>
          <img src={svg4} alt="" />
        </li>
        <li>
          <img src={svg5} alt="" />
        </li>
        <li>
          <img src={svg6} alt="" />
        </li>
      </List>
      <img src={svg} alt="" />
      <List>
        <li>
          <img src={svg7} alt="" />
        </li>
        <li>
          <img src={svg8} alt="" />
        </li>
      </List>
    </Container>
  );
};
