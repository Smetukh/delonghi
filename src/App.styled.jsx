import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'player'
    'form'
    'footer';
  @media (min-width: 900px) {
    grid-template-columns: 50% 50%;
    grid-template-areas:
      'player form'
      'footer footer';
  }
`;

export const PlayerWrapper = styled.div`
  grid-area: player;
  @media (min-width: 900px) {
    height: calc(100vh - 127px);
  }
`;

export const FormWrapper = styled.div`
  grid-area: form;
  @media (min-width: 900px) {
    height: calc(100vh - 127px);
    overflow-y: scroll;
    padding: 50px 64px 0;
  }
`;

export const FooterWrapper = styled.div`
  grid-area: footer;
  position: sticky;
  bottom: 0;
  background-color: #fff;
`;
