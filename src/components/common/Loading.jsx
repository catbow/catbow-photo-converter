import styled, { keyframes } from 'styled-components';

export const Loading = () => {
  return (
    <div>
      <StyledLoading>
        <StyledSvg>
          <circle cx="50%" cy="50%" r="25%" />
        </StyledSvg>
      </StyledLoading>
    </div>
  );
};

const LoadingSpin = keyframes`
 100% {
    transform: rotate(360deg);
  }
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

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: ${props => props.theme.style.mainColor};
  transition: 0.7s;
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
