import styled from 'styled-components';
import HelperImage from '../../assets/png/Helper.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 384px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(126, 124, 124, 0.5);
  @media (min-width: 747px) {
    height: 521px;
  }
  @media (min-width: 900px) {
    height: 100vh;
  }
`;

export const Image = styled.div`
  background-image: url(${HelperImage});
  background-size: contain;
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 747px) {
    height: 521px;
  }
  @media (min-width: 900px) {
    height: 100vh;
  }
`;

export const InnerImage = styled.img`
  display: block;
  margin: 14px auto 0;
`;
