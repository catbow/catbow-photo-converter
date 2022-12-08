import React from 'react';
import styled from 'styled-components';

import MainContainer from '../components/main/MainContainer';
// import Sider from '../components/common/adContainer/Sider';
import { Loading } from '../components/common/page/Loading';

const Home = () => {
  return (
    <Layout>
      {/* <Sider /> */}
      <Loading />

      <MainContainer />
      {/* <Sider /> */}
    </Layout>
  );
};

export default Home;

export const Layout = styled.div`
  ${props => props.theme.variables.flex('row', 'space-evenly', 'stretch')};
  background: linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66));
`;
