import React from 'react';
import {
  Container,
  Option,
  HomeIcon,
  PeopleIcon,
  InfoContainer,
  InfoLoginText,
  ButtonContainer,
  Links,
  Link,
} from './styles';
import Button from '../Button';

const Sidebar = () => {
  return (
    <Container>
      <Option active>
        <HomeIcon src="/images/homeIcon.svg" />
        <span>Para você</span>
      </Option>
      <Option>
        <PeopleIcon src="/images/peopleIcon.svg" />
        <span>Seguindo</span>
      </Option>
      <InfoContainer>
        <InfoLoginText>
          Faça login para seguir criadores, curtir vídeos e ver comentários.
        </InfoLoginText>
        <ButtonContainer>
          <Button outlined>Logon</Button>
        </ButtonContainer>
        <Links margin>
          <Link>Início</Link>
          <Link>Sobre</Link>
          <Link>Sala de imprensa</Link>
          <Link>Carreira</Link>
          <Link>ByteDance</Link>
        </Links>
        <Links>
          <Link>Ajuda</Link>
          <Link>Segurança</Link>
        </Links>
        <Links>
          <Link>Diretrizes da Comunidade</Link>
          <Link>Termos</Link>
        </Links>
        <Links margin>
          <Link>Privacidade</Link>
        </Links>
        <Links margin>
          <Link>© 2020 TikTok</Link>
        </Links>
      </InfoContainer>
    </Container>
  );
};

export default Sidebar;
