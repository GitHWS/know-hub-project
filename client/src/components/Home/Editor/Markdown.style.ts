import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export const Editor = styled.textarea`
  padding: 2rem;
`;

export const Preview = styled(ReactMarkdown)`
  height: 100vh;
  overflow: auto;
  padding: 2rem;
  font-size: 1.6rem;
`;

export const HR = styled.hr`
  margin-bottom: 1.7rem;
`;

export const H1 = styled.h1`
  font-size: 3.2rem;
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  margin-bottom: 1.4rem;
`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1.1rem;
`;

export const H4 = styled.h4`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const H5 = styled.h5`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const H6 = styled.h6`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.3;

  & a {
    color: ${theme.colors.primary};
  }

  & img {
    display: block;
    margin: auto;
    width: 40rem;
  }
`;

export const Italic = styled.em`
  font-style: italic;
`;

export const Bold = styled.strong`
  font-weight: 900;
`;

export const InlineCodeBlock = styled.code`
  /* display: inline-block; */
  margin: 0.7rem 0;
  padding: 0.5rem 0.7rem;
  border-radius: 0.2rem;
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 1;
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.grey};
`;

export const Blockquote = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 1.5rem;
  line-height: 1.4;
  border-radius: 0.5rem;
  background-color: rgb(45, 45, 45);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: inline-block;
    width: 0.3rem;
    height: 100%;
    background-color: ${theme.colors.secondary};
  }

  & p {
    margin-bottom: 0;
    word-wrap: break-word;
  }
`;

export const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;

  & li {
    display: flex;
    padding: 0.3rem 0;
    height: 2rem;
    align-items: center;
    gap: 0.7rem;
  }

  & li::before {
    content: '';
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: white;
  }
`;

export const OrderList = styled.ol`
  list-style: decimal;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;

  & li {
    list-style-position: inside;
  }

  & li::marker {
    display: block;
    margin-left: 0.7rem;
  }
`;
