import React from 'react';
import styled from 'styled-components';

import MainContainer from '../components/main/MainContainer';
import SiderLeft from '../components/common/adContainer/SiderLeft';
import Loading from '../components/common/page/Loading';
import SiderRight from '../components/common/adContainer/SiderRight';
import HeaderAd from '../components/common/Header';

const Home = () => {
  return (
    <>
      <HeaderAd />
      <Layout>
        <SiderLeft />
        <Loading />
        <MainContainer />
        <SiderRight />
      </Layout>
    </>
  );
};

export default Home;

export const Layout = styled.div`
  ${props => props.theme.variables.flex()};
  height: 90vh;
`;
