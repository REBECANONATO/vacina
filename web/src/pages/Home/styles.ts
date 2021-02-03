import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 190px auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  span { color: #1567E2; font-size: 1.5em; }
  h1 { color: #1567E2; font-size: 2em; }
  p { color: #5C6167; margin-top: 15px; font-size: .9em; text-align: justify; }
`;
