import styled from "styled-components";
import images from "../../images/bgi.png";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  background-repeat: no-repeat;
  background-image: url(${images});
`;

export const UserInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Img = styled.img`
  margin-top: 140px;
`;
