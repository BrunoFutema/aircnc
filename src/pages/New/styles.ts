import styled, { css } from 'styled-components';

export const Container = styled.div``;

interface FileInputProps {
  preview: string | null;
}

export const FileInput = styled.label<FileInputProps>`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 260px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${props => `url(${props.preview})`};
  background-size: cover;
  background-position: center;

  input {
    display: none;
  }

  ${props =>
    !!props.preview &&
    css`
      border: 0;

      img {
        display: none;
      }
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;

  span {
    font-weight: normal;
    color: #999;
    font-size: 12px;
  }
`;
