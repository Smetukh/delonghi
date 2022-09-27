import styled from 'styled-components';

export const FlatFormTitle = styled.h1`
  font-family: DeLonghi;
  font-weight: bold;
  font-size: 25px;
  line-height: 128.4%;
  letter-spacing: 0.01em;
`;

export const FlatFormWrapper = styled.div`
  padding: 12px 18px 20px;
  grid-area: form;
  @media (min-width: 700px) {
    padding: 21px 39px 10px;
  }
  @media (min-width: 900px) {
    height: calc(100vh - 47px);
    overflow-y: scroll;
  }
`;
