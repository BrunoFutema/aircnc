import styled from 'styled-components';

export const Container = styled.div``;

export const Notifications = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const Notification = styled.li`
  font-size: 16px;
  line-height: 24px;

  button {
    margin-right: 10px;
    border: 0;
    background: none;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const Spots = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const Spot = styled.li`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
  }

  span {
    font-size: 15px;
    color: #999;
  }
`;

interface ThumbnailProps {
  thumb: string;
}

export const Thumbnail = styled.header<ThumbnailProps>`
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  background-image: ${props =>
    `url(${process.env.REACT_APP_API_URL}/air-cnc-files/${props.thumb})`};
`;
