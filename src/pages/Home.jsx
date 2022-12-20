import React from 'react';
import styled from 'styled-components';
import Modal from '../components/common/modal/Modal';
import MainContainer from '../components/main/MainContainer';
import SiderLeft from '../components/common/adContainer/SiderLeft';
import Loading from '../components/common/page/Loading';
import SiderRight from '../components/common/adContainer/SiderRight';
import HeaderAd from '../components/common/adContainer/Header';

const Home = () => {
  return (
    <>
      <Modal />
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
  ${({ theme }) => theme.variables.flex()};
  ${({ theme }) => theme.variables.fixedCenter};\
  padding-top: 12%;
`;
