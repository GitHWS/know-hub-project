import { css } from 'styled-components';

// 기존 pixel을
const pxToRem = (size: number) => `${size / 10}rem`;

const font = {
  size: {
    h1: pxToRem(60),
    h2: pxToRem(30),
    h3: pxToRem(28),
    h4: pxToRem(14),
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
    centerRow: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    centerColumn: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
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
