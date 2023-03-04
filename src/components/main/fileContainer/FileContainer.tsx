import styled from 'styled-components';
import { useUploadFile } from '../../contexts/ContextWrapper';
import DeleteButton from './button/DeleteButton';
import UploadButton from './button/UploadButton';

const FileContainer = () => {
  const { fileUrl } = useUploadFile();

  return (
    <Layout>
      <Visitor href="https://hits.seeyoufarm.com">
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcatbow.github.io%2Fcatbow-photo-converter%2F&count_bg=%23000000&title_bg=%23050505&icon=&icon_color=%23FFFFFF&title=Visits&edge_flat=false"
          alt="visitor"
        />
      </Visitor>
      <Title> 🗂 Upload your Files! </Title>
      <DeleteButton />
      <ShowingFile
        src={fileUrl}
        // poster="https://st3.depositphotos.com/15827064/18746/v/450/depositphotos_187463916-stock-illustration-camera-icon-with-question-mark.jpg"
        autoPlay
        controls
        width="100%"
        height="100%"
      />
      <UploadButton />
    </Layout>
  );
};

export default FileContainer;

export const Layout = styled.article`
  ${({ theme }) => theme.variables.flex('column')};
  min-width: 400px;
  min-height: 600px;
  padding: 5%;
  border: 2px dashed white;
  border-radius: 7px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  padding-top: 5%;
`;

export const ShowingFile = styled.video`
  width: 50%;
  height: 70%;
  min-width: 450px;
  min-width: 450px;
  background-size: cover;
  object-fit: cover;
  padding-top: 5%;
`;

export const Visitor = styled.a`
  position: absolute;
  right: 0;
  top: 1px;
`;
