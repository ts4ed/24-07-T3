import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #f7f4f4;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  width: 252px;
  height: 134px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin-right: 20px;
  &:hover {
    border-color: blue;
    cursor: pointer;
    colorL blue;
  }
  &:hover > span {
    color: blue;
  }
  &:hover > h2 {
    color: blue;
  }
`;
export const Title = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.4px;

  /* grayscale / gray */

  color: #9fa2b4;
`;
export const H1 = styled.h1`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  margin-left: 30px;

  /* grayscale / black */

  color: #252733;
`;

export const UserList = styled.ul`
  text-decoration: none;
`;
export const UserItem = styled.li`
  display: flex;
  height: 92px;
  width: 1095px;
  justify-content: flex-start;
  align-items: center;
`;
export const Span = styled.span`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 1px;
  color: #252733;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 1064px;

  // margin-left: 31px;
  // margin-right: 41px;
`;
export const TableTitle = styled.div`
  display: flex;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: 0.2px;

  /* grayscale / gray */

  color: #9fa2b4;
`;
export const SpanUser = styled.span`
  margin-left: 31px;
  width: 370px;
`;
export const SpanCompany = styled.span`
  width: 240px;
`;
export const SpanEmail = styled.span`
  width: 250px;
`;
export const SpanTitle = styled.span`
  width: 50px;
`;

export const TdUser = styled.div`
  height: 92px;
  margin-left: 31px;
  display: flex;
  align-items: center;
`;
export const UserInfo = styled.div`
  margin-left: 24px;
  width: 300px;
`;
export const Name = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  margin: 0;
  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
`;

export const Address = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  /* identical to box height, or 133% */

  letter-spacing: 0.1px;

  /* grayscale / gray light */

  color: #c5c7cd;
`;

export const ContainerUsers = styled.div`
  /* grayscale / white */
  margin: 0px 36px 0px 21px;
  background: #ffffff;
  /* grayscale / divider */
  width: 1080px;

  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin-bottom: 30px;
`;
export const CompanyInfo = styled.div`
  width: 250px;
`;
export const EmailInfo = styled.div`
  width: 200px;
`;
export const DistanceInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;
export const Company = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  margin: 0;

  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
`;
export const Info = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  margin: 0;

  letter-spacing: 0.1px;

  /* grayscale / gray light */

  color: #c5c7cd;
`;

export const Email = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  margin: 0;

  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
`;

export const LinkUser = styled.a`
  display: contents;
  text-decoration: none;
`;

export const TR = styled.li`
  padding: 0;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f7f8ff;
  }
`;

export const ImgInfo = styled.img`
  margin-right: 20px;
`;
export const Ul = styled.ul`
  padding: 0px;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 1097px;
  margin-left: 30px;
  margin-right: 30px;
`;
export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 336px;
  background: #ffffff;
  /* grayscale / divider */

  border: 1px solid #dfe0eb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-right: 35px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 336px;
  background: #ffffff;
  /* grayscale / divider */

  border: 1px solid #dfe0eb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
`;

export const SpanTicket = styled.span`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: right;
  letter-spacing: 0.2px;

  /* grayscale / gray */

  color: #9fa2b4;
`;

export const PTicket = styled.p`
  align-items: center;
  display: flex;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
`;
