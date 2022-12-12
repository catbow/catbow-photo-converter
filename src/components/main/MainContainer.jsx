import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal/\bModal';
import FileContainer from './fileContainer/FileContainer';

const MainContainer = () => {
  const [hover, setHover] = useState(false);

  return (
    <Layout>
      <div>🌈</div>
      <Title
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <a
          href="https://github.com/catbow/react-catbow-scrollview"
          target="_blank"
          rel="noreferrer"
        >
          Catbow😼
        </a>
      </Title>
      <Tooltip hover={hover}>
        Click here to use the converted images to the scrollview
      </Tooltip>
      <Visitor href="https://hits.seeyoufarm.com">
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcatbow.github.io%2Fcatbow-photo-converter%2F&count_bg=%23000000&title_bg=%23050505&icon=&icon_color=%23FFFFFF&title=Visits&edge_flat=false"
          alt="visitor"
        />
      </Visitor>
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
  padding: 10px 0;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  ${props => props.theme.variables.rainBowColor};
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  visibility: ${({ hover }) => !hover && 'hidden'};
  width: 190%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -25px;
  left: -23px;
  font-size: 0.9rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`;

export const Visitor = styled.a`
  position: absolute;
  top: 110px;
  right: 0;
`;
