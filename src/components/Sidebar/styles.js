import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  padding-top: 26px;
`;

export const Option = styled.div`
  cursor: pointer;
  color: #161823;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  height: 60px;
  :hover {
    background: rgba(22, 24, 35, 0.03);
  }
  > span {
    font-weight: ${(props) => (props.active ? '700' : '400')};
    margin-left: 13px;
    font-size: 24px;
    line-height: 60px;
    color: ${(props) => (props.active ? 'var(--pink)' : 'black')};
  }
`;

export const HomeIcon = styled.img`
  width: 40px;
  height: 40px;
  color: var(--pink);
`;

export const PeopleIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const InfoContainer = styled.div`
  padding: 0 16px;
  margin-top: 48px;
`;

export const InfoLoginText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(22, 24, 35, 0.5);
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  height: 48px;
`;

export const Links = styled.div`
  margin-bottom: ${(props) => (props.margin ? '8px' : '0px')};
`;

export const Link = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px;
  font-weight: 600;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: rgba(22, 24, 35, 0.5);
  :hover {
    text-decoration: underline;
  }
`;
