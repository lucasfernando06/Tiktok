import React from 'react';
import {
  Container,
  IconsContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ButtonContainer,
  Item,
  Avatar,
  Info,
  InfoName,
  InfoUserName,
  ItemContainer,
  ArrowIcon,
  DownloadImage,
} from './styles';
import Button from '../Button';

const people = [
  {
    name: 'Neymar Jr',
    userName: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    userName: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    userName: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1601060400&x-signature=0BJMY2wAdqI8V0XXEqnZMNBqmMU%3D',
  },
  {
    name: 'Isis Valverde',
    userName: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    userName: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    userName: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    userName: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1601060400&x-signature=0BJMY2wAdqI8V0XXEqnZMNBqmMU%3D',
  },
  {
    name: 'Isis Valverde',
    userName: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    userName: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    userName: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    userName: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1601060400&x-signature=0BJMY2wAdqI8V0XXEqnZMNBqmMU%3D',
  },
  {
    name: 'Isis Valverde',
    userName: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    userName: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    userName: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    userName: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1601060400&x-signature=0BJMY2wAdqI8V0XXEqnZMNBqmMU%3D',
  },
  {
    name: 'Isis Valverde',
    userName: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
];

const itens = [
  {
    title: 'Woah',
    views: '12.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
  },
  {
    title: 'Dance Monkey',
    views: '7.4M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
  },
  {
    title: '#youhaveto',
    views: '2.5B views',
    avatar:
      'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
  },
  {
    title: 'Can we Kiss Forever?',
    views: '8.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
  },
  {
    title: 'Woah',
    views: '12.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
  },
  {
    title: 'Dance Monkey',
    views: '7.4M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
  },
  {
    title: '#youhaveto',
    views: '2.5B views',
    avatar:
      'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
  },
  {
    title: 'Can we Kiss Forever?',
    views: '8.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
  },
];

const Layout = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/images/facebookIcon.svg" />
        <Icon src="/images/pinterestIcon.svg" />
        <Icon src="/images/twitterIcon.svg" />
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people?.map((person) => (
            <Item key={person?.userName}>
              <Avatar round src={person?.avatar} />
              <Info>
                <InfoName>{person?.name}</InfoName>
                <InfoUserName>{person?.userName}</InfoUserName>
              </Info>
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens?.map((item) => (
            <Item key={item?.title}>
              <Avatar src={item?.avatar} />
              <Info>
                <InfoName>{item?.title}</InfoName>
                <InfoUserName>{item?.views}</InfoUserName>
              </Info>
              <ArrowIcon />
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/appstore.png" />
      <DownloadImage src="/images/playstore.png" />
      <DownloadImage src="/images/amazon.png" />
    </Container>
  );
};

export default Layout;
