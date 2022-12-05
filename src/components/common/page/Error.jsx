import React from 'react';
import styled from 'styled-components';
import { useLoading } from '../../contexts/ContextWrapper';

const Error = () => {
  const { errorToogle, setErrorToogle } = useLoading();

  const goBack = () => setErrorToogle(pre => !pre);

  return (
    errorToogle && (
      <Layout>
        sorry, Try again 😞
        <BacktoHome onClick={goBack}>Go Back</BacktoHome>
      </Layout>
    )
  );
};

export default Error;

export const Layout = styled.div`
  ${props => props.theme.variables.flex('column')};
  ${props => props.theme.variables.fixedCenter};
  background: ${props => props.theme.style.mainColor};
  z-index: 200;
  font-size: 40px;
  font-weight: 900;
  color: white;
`;

export const BacktoHome = styled.button`
  font-size: 17px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  margin: 50px;
  &:hover {
    color: red;
  }
`;
