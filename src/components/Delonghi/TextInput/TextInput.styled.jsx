import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  border: 1px solid '#00000020';
  font-size: 18px;
  padding: 10px 16px;
  width: 100%;
  color: ${({ error }) => (error ? 'red' : 'inherit')};
`;

export const SubmitButton = styled.button`
  font-family: DeLonghi;
  height: 40px;
  background-color: #0c2340;
  font-weight: bold;
  font-size: 16px;
  line-height: 132.4%;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 3px;
  letter-spacing: 1px;
  &:disabled {
    background-color: #dadada;
  }
`;

// export const InputTitle = styled.div`
//   font-family: DeLonghi;
//   font-weight: bold;
//   font-size: 18px;
//   line-height: 132.4%;
//   letter-spacing: 0.01em;
// `;

export const InputWrapper = styled.div`
  @media (min-width: 900px) {
    width: 70%;
  }
  margin-top: 50px;
`;

export const InputTitle = styled.div`
  font-family: DeLonghi;
  font-weight: 400;
  font-size: 14.4px;
  line-height: 132.4%;
  margin-top: 15px;
`;

export const InputButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0.7fr;
  grid-column-gap: 10px;
`;

export const SubTitle = styled.div`
  font-family: DeLonghi;
  font-weight: 200;
  color: red;
  font-size: 10px;
  line-height: 132.4%;
  margin-top: 4px;
`;
