import styled from 'styled-components';

export const FormPageWrapper = styled.div``;

export const SummaryLabel = styled.div`
  font-family: DeLonghi;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 132.4%;
  letter-spacing: 0.01em;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  font-family: DeLonghi;
  font-weight: 400;
  font-size: 16px;
  line-height: 132.4%;
  letter-spacing: 0.01em;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const SummaryItemContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  padding-bottom: 14px;
  margin-top: 14px;
  border-bottom: 1px solid #c2c2c2;
`;

export const SummaryDotItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  padding-bottom: 4px;
  margin-top: 4px;
  border-bottom: 1px solid #c2c2c2;
  height: 64px;
`;

export const SummaryPageWrapper = styled.div`
  margin-top: 72px;
`;

export const InnerImageBlock = styled.div`
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'none'};
  width: 41px;
  height: 58px;
  background-size: cover;
  background-position: bottom;
`;
