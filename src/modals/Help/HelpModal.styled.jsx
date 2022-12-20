import styled from 'styled-components';
import HelperTouchImage from '../../assets/png/HelperTouch.png';
import HelperMouseImage from '../../assets/png/HelperMouse.png';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black',
          padding: '8px 16px',
          fontSize: '20px',
          fontFamily: 'DeLonghi',
          textTransform: 'none',
          '&.Mui-selected': { color: 'black', fontFamily: 'DeLonghi-medium' },
        },
      },
    },
  },
});

export const Wrapper = styled.div`
  width: 100%;
  height: 384px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
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
  background-image: ${({ imageType }) =>
    imageType === 'mouse'
      ? `url(${HelperMouseImage})`
      : `url(${HelperTouchImage})`};
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

export const TabsContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
