import React from 'react';
import { Container } from './styles';
import Post from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatar:
        'https://p16-sign-sg.tiktokcdn.com/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg?x-expires=1601060400&x-signature=ws79b4DBverIkFleAimZngAKT%2B0%3D',
      userName: 'neymarjr',
      name: 'Neymar Jr',
    },
    description:
      'Brincando ⚽️... obs: música o Davi que escolheu 🤣🤪',
    tags: [],
    songName: 'Count on me - Bruno Mars',
    videoUrl:
      'https://v16-web-newkey.tiktokcdn.com/fe564981c1c76b4345e9a91e04f43be6/5f6d47a9/video/tos/alisg/tos-alisg-pve-0037/545cced87d624738b518dd0d6163e225/?a=1988&br=2478&bt=1239&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009241927560101901860362901C092&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajdxM3U6bHRzdzMzNzczM0ApaGZpNDNlNDs6NzxpODxpZGdgMHJvMm80aGFfLS0wMTRzc2IxMmItXmIwNGMzNTYuMmE6Yw%3D%3D&vl=&vr=',
    likes: 20000,
    comments: 1000,
    replies: 500,
  },
  {
    id: 2,
    author: {
      avatar:
        'https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/79662f601cba71e461e5909c3485ed32~c5_100x100.jpeg?x-expires=1601060400&x-signature=jdQGshT0h9J8lmVIptoviJyGYM8%3D',
      userName: 'whinderssonnunes',
      name: 'Whindersson Nunes',
    },
    description: 'Oia o choooque cumade 😂😂😂⚡️⚡️⚡️⚡️',
    tags: [
      {
        title: '#WhinderssonNunes',
      },     
    ],
    songName: 'som original - Whindersson Nunes',
    videoUrl:
      'https://v16-web-newkey.tiktokcdn.com/3f49fff628e57a982d90461fda7c49bc/5f6d4871/video/tos/alisg/tos-alisg-pve-0037c001/6d7b3c539f9e4b6ea594b38953a823fc/?a=1988&br=3538&bt=1769&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009241931190101890722165701C420&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzU5PDd1b21ydzMzODczM0ApOzkzOWg3aDtoNzo5aWhkNGdoYGhtZWhmbGdfLS0wMTRzc2M2MjNeMzFjMWFhMGE1L2I6Yw%3D%3D&vl=&vr=',
    likes: 9700,
    comments: 68,
    replies: 450,
  },
];

const Feed = () => {
  return (
    <Container>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Feed;
