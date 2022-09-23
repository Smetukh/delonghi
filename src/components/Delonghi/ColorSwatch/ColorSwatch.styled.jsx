import styled from 'styled-components';

export const ColorButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: ${({ selected }) =>
    selected ? '2px solid #0C2340' : '1px solid #00000020'};
  padding: ${({ selected }) => (selected ? '2px' : '0px')};
  margin-right: 12px;
  &:hover {
    padding: 2px;
  }
`;

export const InnerColorBlock = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

export const ColorButtonsTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 132.4%;
  font-family: DeLonghi;
`;

export const SelectedColor = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 132.4%;
`;

export const Container = styled.div`
  margin-top: 30px;
`;

export const ColorsWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 45px;
  height: 2px;
  background-color: black;
`;
