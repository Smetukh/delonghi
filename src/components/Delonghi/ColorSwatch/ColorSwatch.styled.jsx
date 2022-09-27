import styled from 'styled-components';

export const ColorButton = styled.button`
  box-sizing: border-box;
  width: ${({ isSquare }) => (isSquare ? '40px' : '32px')};
  height: ${({ isSquare }) => (isSquare ? '40px' : '32px')};
  border-radius: ${({ isSquare }) => (isSquare ? '7px' : '50%')};
  border: ${({ selected }) =>
    selected ? '2px solid #0C2340' : '1px solid #00000020'};
  padding: ${({ selected, isSquare }) =>
    selected && !isSquare ? '2px' : '0px'};
  margin-right: 12px;
  margin-bottom: 4px;
  padding: ${({ selected }) => (selected ? '2px' : '0')};
  &:hover {
    padding: 2px;
  }
`;

export const InnerImageBlock = styled.div`
  cursor: pointer;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
  width: 100%;
  height: 112px;
  background-size: cover;
  background-position: bottom;
`;

export const ImageButton = styled.button`
  width: 83px;
  height: 118px;
  box-sizing: border-box;
  border: ${({ selected }) => (selected ? '2px solid #0C2340' : 'none')};
  padding: ${({ selected }) => (selected ? '1px' : '0px')};
  margin-right: 12px;
  margin-top: 20px;
`;

export const Image = styled.img``;

export const InnerColorBlock = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: ${({ isSquare }) => (isSquare ? '5px' : '50%')};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ selected }) => (selected ? '1px solid #0C2340' : 'none')};
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
  flex-wrap: wrap;
  max-width: ${({ hasDotPattern }) => (hasDotPattern ? '100%' : '270px')};
`;

export const Line = styled.div`
  width: 45px;
  height: 2px;
  background-color: black;
`;

export const DotPattern = styled.div``;
