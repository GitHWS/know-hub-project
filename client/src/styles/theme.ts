import { css } from 'styled-components';

const pxToRem = (size: number) => `${size / 10}rem`;

const font = {
  size: {
    lg: pxToRem(60),
    md: pxToRem(30),
    sm: pxToRem(14),
  },
  weight: {
    bold: 900,
  },
};

const colors = {
  common: {
    black: '#191919',
    grey: '#262626',
  },
  bg: {
    primary: '#0073fa',
    highlight: '#f34e4e',
  },
  font: {
    lightGrey: '#8c8c8c',
    white: '#ffffff',
  },
};

const layout = {
  flex: {
    row: css`
      display: flex;
    `,
    col: css`
      display: flex;
      flex-direction: column;
    `,
    center: css`
      justify-content: center;
      align-items: center;
    `,
    between: css`
      justify-content: space-between;
      align-items: center;
    `,
  },

  grid: {
    center: css`
      height: 100vh;
      display: grid;
      place-items: center;
    `,
  },
};

export const theme = {
  font,
  colors,
  layout,
};
