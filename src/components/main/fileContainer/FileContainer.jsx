import React from 'react';
import styled from 'styled-components';
import { useUploadFile } from '../../contexts/ContextWrapper';
import DeleteButton from './button/DeleteButton';
import UploadButton from './button/UploadButton';

const FileContainer = () => {
  const { fileUrl } = useUploadFile();

  return (
    <Layout>
      <Visitor href="https://hits.seeyoufarm.com">
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcatbow.github.io%2Fcatbow-photo-converter%2F&count_bg=%23000000&title_bg=%23050505&icon=&icon_color=%23FFFFFF&title=Visits&edge_flat=false"
          alt="visitor"
        />
      </Visitor>
      <Title> 🗂 Upload your Files! </Title>
      <DeleteButton />
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

export const Layout = styled.article`
  ${props => props.theme.variables.flex('column')}
  width: 600px;
  min-height: 600px;
  border: 2px dashed white;
  margin-top: 30px;
  border-radius: 7px;
  position: relative;
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

export const Visitor = styled.a`
  position: absolute;
  right: 0;
  top: 1px;
`;
