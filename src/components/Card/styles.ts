import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  width: 100%;

  margin: 80px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;

  margin-top: 50px;
  padding: 30px;

  background: #fff;
  border-radius: 4px;

  > p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
`;
