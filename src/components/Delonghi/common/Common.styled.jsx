import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  text-align: center;
  color: #fff;
  background-color: ${({ isDisabled }) => (isDisabled ? '#266BBF' : '#0C2340')};
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 132.4%;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
`;
