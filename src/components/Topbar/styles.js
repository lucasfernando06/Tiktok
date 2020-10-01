import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 70px;
  background: var(--white);
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);
  padding: 0 20px;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  display: block;
`;

export const LogoIcon = styled.img`
  width: 28px;
`;

export const Logo = styled.img`
  width: 97px;
  margin-left: 4px;
  position: relative;
  top: -2px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 37px;
  height: 37px;
`;

export const ButtonContainer = styled.div`
  margin-left: 35px;
  min-width: 164px;
  height: 48px;
`;
