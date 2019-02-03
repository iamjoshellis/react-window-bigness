import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }
  #root {
    background: linear-gradient(to bottom right, #4286f4, #373B44);
    font-family: monospace;
    color: #fff;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  button {
    appearance: none;
    outline: none;
    border: 0;
    padding: 1em;
    font-family: monospace;
    color: #fff;
    background: #373B44;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const Wrap = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 1em;
  padding: 1em;
`;
