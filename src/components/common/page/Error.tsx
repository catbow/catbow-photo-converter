import styled from 'styled-components';
import {
  useLoading,
  useUploadFile,
  useVisibleModal,
} from '../../contexts/ContextWrapper';

const Error = () => {
  const { mode, setMode } = useLoading();
  const { setOnModal } = useVisibleModal();
  const { setFileUrl } = useUploadFile();

  const goBack = () => {
    setMode('show');
    setOnModal(false);
    setFileUrl('');
  };

  return (
    mode === 'error' && (
      <Layout>
        🌈 sorry, Try again 🌈
        <br />
        <br />
        <BacktoHome onClick={goBack}>Go Back</BacktoHome>
      </Layout>
    )
  );
};

export default Error;

export const Layout = styled.div`
  ${({ theme }) => theme.variables.flex('column')};
  ${({ theme }) => theme.variables.fixedCenter};
  background: ${({ theme }) => theme.colors.mainColor};
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
