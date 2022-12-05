import styled, { keyframes } from 'styled-components';
import { useLoading } from '../../contexts/ContextWrapper';

const Loading = () => {
  const { mode } = useLoading();

  return (
    mode === 'loading' && (
      <div>
        <StyledLoading>
          <StyledSvg>
            <circle cx="50%" cy="50%" r="25%" />
          </StyledSvg>
        </StyledLoading>
      </div>
    )
  );
};

export default Loading;

const StyledLoading = styled.div`
  ${props => props.theme.variables.flex()};
  ${props => props.theme.variables.fixedCenter};
  background: ${props => props.theme.style.mainColor};
  z-index: 100;
  transition: 0.7s;
`;

const LoadingCircleAnimation = keyframes`
  0% {
    stroke-dashoffset: 157;
  }
  75% {
    stroke-dashoffset: -147;
  }
  100% {
    stroke-dashoffset: 157;
  }
`;

const LoadingSpin = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;

const StyledSvg = styled.svg`
  width: 54px;
  height: 54px;
  animation: ${LoadingSpin} 3s infinite;
  circle {
    stroke: white;
    stroke-width: 4;
    stroke-dasharray: 157 157;
    stroke-dashoffset: 0;
    fill: none;
    animation: ${LoadingCircleAnimation} 1s infinite;
  }
`;
