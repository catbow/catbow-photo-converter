import React from 'react';
import styled from 'styled-components';
import Modal from '../common/modal/\bModal';
import FileContainer from './fileContainer/FileContainer';

const MainContainer = () => {
  return (
    <Layout>
      <div>🌈</div>
      <Title>Catbow😼</Title>
      <Modal />
      <FileContainer />
    </Layout>
  );
};

export default MainContainer;

export const Layout = styled.div`
  ${props => props.theme.variables.flex('column')};
  color: white;
  min-height: 100vh;
  margin-bottom: 10px;
  padding-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  ${props => props.theme.variables.rainBowColor};
  -webkit-background-clip: text;
  color: transparent;
`;
