import React, { useState } from 'react';
import styled from 'styled-components';
import FileContainer from './fileContainer/FileContainer';

const MainContainer = () => {
  const [hover, setHover] = useState(false);

  return (
    <Layout>
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
        <Tooltip hover={hover}>
          Click here to use the converted images to the scrollview
        </Tooltip>
      </Title>
      <FileContainer />
    </Layout>
  );
};

export default MainContainer;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.variables.flex('column')};
  color: white;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  padding-bottom: 20px;
  ${({ theme }) => theme.variables.rainBowColor};
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
  left: -13px;
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
