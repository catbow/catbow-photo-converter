import React from 'react';

// import Sider from '../../components/common/adContainer/Sider';
import MainContainer from '../components/main/MainContainer';
import styled from 'styled-components';
import { Loading } from '../components/common/Loading';

const Home = () => {
  return (
    <Layout>
      {/* <Sider /> */}
      <MainContainer />
      {/* <Sider /> */}
      <Loading />
    </Layout>
  );
};

export default Home;

export const Layout = styled.div`
  ${props => props.theme.variables.flex('row', 'space-evenly', 'stretch')};
  background: linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66));
`;
