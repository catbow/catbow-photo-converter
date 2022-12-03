import { css } from 'styled-components';

const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  fixedCenter: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,

  rainBowColor: css`
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      purple
    );
  `,
};

export default variables;
