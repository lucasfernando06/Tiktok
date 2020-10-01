import styled from 'styled-components';

export default styled.button`
  width: 100%;
  font-size: ${(props) =>
    props.fontSize != null ? `${props.fontSize}px` : '18px'};
  font-weight: 700;
  height: 100%;
  background-color: var(--pink);
  border: none;
  background: ${(props) => (props.outlined ? 'var(--white)' : 'var(--pink)')};
  border: ${(props) => (props.outlined ? '1px solid var(--pink)' : 'none')};
  color: ${(props) => (props.outlined ? 'var(--pink)' : 'var(--white)')};
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.outlined ? 'rgba(22,24,35,0.03)' : 'var(--pink)'};
  }
`;
