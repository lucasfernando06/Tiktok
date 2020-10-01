import React from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Suggestions from '../Suggestions';
import { Container, SidebarContainer, FeedContainer } from './styles';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <FeedContainer>
          <Feed />
          <Suggestions />
        </FeedContainer>
      </Container>
    </>
  );
};

export default Layout;
