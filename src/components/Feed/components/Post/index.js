import React, { useState, useRef } from 'react';
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  ButtonContainer,
  InfoLink,
  DescriptionContainer,
  SongContainer,
  Tag,
  SongIcon,
  SongLink,
  Content,
  VideoContainer,
  Video,
  PlayerIcon,
  ActionIcon,
  ActionContainer,
  Actions,
  Action,
} from './styles';
import Button from '../../../Button';

const Post = ({ post }) => {
  const videoRef = useRef();
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play();
      else videoRef.current.pause();

      setRunning(!running);
    }
  };

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar} />
          <Info>
            <InfoLink>
              {post?.author?.userName}
              <span>{post?.author?.name}</span>
            </InfoLink>
            <DescriptionContainer>
              <span>{post?.description}</span>
              {post?.tags?.map((tag) => (
                <Tag key={tag?.title}>{tag?.title}</Tag>
              ))}
            </DescriptionContainer>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>
            Seguir
          </Button>
        </ButtonContainer>
      </Header>
      <Content>
        <SongContainer>
          <SongIcon src="/images/songIcon.svg" />
          <SongLink>{post?.songName}</SongLink>
        </SongContainer>
        <VideoContainer>
          <Video
            ref={videoRef}
            webkit-playsinline="true"
            playsinline=""
            loop="true"
            preload="metadata"
            src={post?.videoUrl}
          />
          <ActionContainer onClick={() => toggleAction()}>
            <PlayerIcon
              src={running ? '/images/pauseIcon.svg' : '/images/playIcon.svg'}
            />
          </ActionContainer>
        </VideoContainer>
        <Actions>
          <Action>
            <ActionIcon src="/images/heartIcon.svg" />
            <span>{post?.likes}</span>
          </Action>
          <Action>
            <ActionIcon src="/images/bubbleIcon.svg" />
            <span>{post?.comments}</span>
          </Action>
          <Action>
            <ActionIcon src="/images/arrowIcon.svg" />
            <span>{post?.replies}</span>
          </Action>
        </Actions>
      </Content>
    </Container>
  );
};

export default Post;
