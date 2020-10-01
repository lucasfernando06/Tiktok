import React from 'react';
import {
  Container,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  ButtonContainer,
} from './styles';
import Button from '../Button';

const Topbar = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon src="/images/logoIcon.svg" />
        <Logo src="/images/logo.svg" />
      </LogoContainer>
      <OptionsContainer>
        <Icon src="/images/uploadIcon.svg" />
        <ButtonContainer>
          <Button>Logon</Button>
        </ButtonContainer>
      </OptionsContainer>
    </Container>
  );
};

export default Topbar;
