import React from 'react';
import styled from 'styled-components';
import FileContainer from './fileContainer/FileContainer';
import Modal from '../common/modal/\bModal';

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
  // box-shadow: rgb(0 0 0 / 17%) 0px 2px 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  ${props => props.theme.variables.rainBowColor};
  -webkit-background-clip: text;
  color: transparent;
`;
