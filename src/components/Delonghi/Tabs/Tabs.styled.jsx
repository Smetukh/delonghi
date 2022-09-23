import styled from 'styled-components';

export const TabsWrapper = styled.div`
  margin-top: 48px;
`;

export const Tab = styled.div`
  display: inline-block;
  font-weight: ${({ active }) => (active ? 'bold' : '500')};
  font-size: 20px;
  letter-spacing: 0.01em;
  font-family: DeLonghi;
  border-bottom: ${({ active }) => (active ? '1px solid #266BBF' : 'none')};
  margin-right: 20px;
  cursor: pointer;
  line-height: 30px;
`;
