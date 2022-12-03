import React from 'react';
import styled from 'styled-components';
import { useUploadFile } from '../../contexts/ContextWrapper';
import DeleteButton from './button/DeleteButton';
import UploadButton from './button/UploadButton';

const FileContainer = () => {
  const { fileUrl } = useUploadFile();

  return (
    <Layout>
      <Title> 🗂 Upload your Files! </Title>
      {fileUrl.length !== 0 ? <DeleteButton /> : ''}
      <ShowingFile
        src={fileUrl}
        // poster="https://st3.depositphotos.com/15827064/18746/v/450/depositphotos_187463916-stock-illustration-camera-icon-with-question-mark.jpg"
        autoPlay
        controls
        height="300px"
      />
      <UploadButton />
    </Layout>
  );
};

export default FileContainer;

export const Layout = styled.div`
  ${props => props.theme.variables.flex('column')}
  width: 600px;
  min-height: 600px;
  border: 2px dashed white;
  margin-top: 30px;
  border-radius: 7px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 50px;
`;

export const ShowingFile = styled.video`
  width: 450px;
  background-size: cover;
`;
