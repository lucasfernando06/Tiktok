import styled from 'styled-components';

export const Container = styled.div`
  width: 592px;
  max-width: 592px;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PersonContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const ButtonContainer = styled.div`
  width: 118px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
`;

export const InfoLink = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  :hover {
    text-decoration: underline;
  }
  > span {
    margin-top: 1px;
    margin-left: 4px;
    font-weight: 400;
    font-size: 14px;
    color: var(--black);
  }
`;

export const DescriptionContainer = styled.div`
  display: inline;
`;

export const Tag = styled.a`
  cursor: pointer;
  font-weight: bold;
  margin-left: 4px;
  font-size: 16px;
  :hover {
    text-decoration: underline;
  }
`;

export const SongContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;
`;

export const SongLink = styled.a`
  :hover {
    text-decoration: underline;
  }
  font-weight: 600;
  cursor: pointer;
`;

export const SongIcon = styled.img`
  width: 18px;
  height: 25px;
  margin-right: 5px;
`;

export const Content = styled.div`
  margin-left: 68px;
`;

export const ActionContainer = styled.div`
  visibility: hidden;
  width: 40px;
  height: 40px;
  bottom: 15px;
  left: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const VideoContainer = styled.div`
  cursor: pointer;
  width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));
  position: relative;
  margin-top: 15px;
  :hover {
    ${ActionContainer} {
      visibility: visible;
    }
  }
`;

export const Video = styled.video`
  max-width: 100%;
  border-radius: 9px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 12px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-right: 25px;
  cursor: pointer;
`;

export const ActionIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;
