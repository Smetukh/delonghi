import styled from 'styled-components';
import MOUSE_EN from '../../assets/png/HelperMouse_en.png';
import TOUCH_EN from '../../assets/png/HelperTouch_en.png';
import MOUSE_AT from '../../assets/png/Helper_AT_Mouse.png';
import TOUCH_AT from '../../assets/png/Helper_AT_Touch.png';
import MOUSE_ES from '../../assets/png/Helper_ES_Mouse.png';
import TOUCH_ES from '../../assets/png/Helper_ES_Touch.png';
import MOUSE_IT from '../../assets/png/Helper_IT_Mouse.png';
import TOUCH_IT from '../../assets/png/Helper_IT_Touch.png';
import MOUSE_FR from '../../assets/png/Helper_FR_Mouse.png';
import TOUCH_FR from '../../assets/png/Helper_FR_Touch.png';
import MOUSE_NL from '../../assets/png/Helper_NL_Mouse.png';
import TOUCH_NL from '../../assets/png/Helper_NL_Touch.png';
import MOUSE_PT from '../../assets/png/Helper_PT_Mouse.png';
import TOUCH_PT from '../../assets/png/Helper_PT_Touch.png';
import MOUSE_PL from '../../assets/png/Helper_PL_Mouse.png';
import TOUCH_PL from '../../assets/png/Helper_PL_Touch.png';
import MOUSE_CS from '../../assets/png/Helper_CZ_Mouse.png';
import TOUCH_CS from '../../assets/png/Helper_CZ_Touch.png';
import MOUSE_SK from '../../assets/png/Helper_SK_Mouse.png';
import TOUCH_SK from '../../assets/png/Helper_SK_Touch.png';
import MOUSE_SV from '../../assets/png/Helper_SV_Mouse.png';
import TOUCH_SV from '../../assets/png/Helper_SV_Touch.png';
import MOUSE_DA from '../../assets/png/Helper_DA_Mouse.png';
import TOUCH_DA from '../../assets/png/Helper_DA_Touch.png';
import MOUSE_HU from '../../assets/png/Helper_HU_Mouse.png';
import TOUCH_HU from '../../assets/png/Helper_HU_Touch.png';
import MOUSE_RO from '../../assets/png/Helper_RO_Mouse.png';
import TOUCH_RO from '../../assets/png/Helper_RO_Touch.png';
import MOUSE_SL from '../../assets/png/Helper_SL_Mouse.png';
import TOUCH_SL from '../../assets/png/Helper_SL_Touch.png';
import MOUSE_HR from '../../assets/png/Helper_HR_Mouse.png';
import TOUCH_HR from '../../assets/png/Helper_HR_Touch.png';
import MOUSE_NL_BE from '../../assets/png/Helper_NL-BE_Mouse.png';
import TOUCH_NL_BE from '../../assets/png/Helper_NL-BE_Touch.png';
import MOUSE_FR_BE from '../../assets/png/Helper_FR-BE_Mouse.png';
import TOUCH_FR_BE from '../../assets/png/Helper_FR-BE_Touch.png';
import MOUSE_GR from '../../assets/png/Helper_GR_Mouse.png';
import TOUCH_GR from '../../assets/png/Helper_GR_Touch.png';
import MOUSE_DE_CH from '../../assets/png/Helper_DE-CH_MOUSE.png';
import TOUCH_DE_CH from '../../assets/png/Helper_DE-CH_TOUCH.png';

import { createTheme } from '@mui/material/styles';

const images = {
  MOUSE_EN: MOUSE_EN,
  TOUCH_EN: TOUCH_EN,
  MOUSE_DE: MOUSE_EN,
  TOUCH_DE: TOUCH_EN,
  MOUSE_DE_AT: MOUSE_AT,
  TOUCH_DE_AT: TOUCH_AT,
  MOUSE_ES: MOUSE_ES,
  TOUCH_ES: TOUCH_ES,
  MOUSE_FR_BE: MOUSE_FR_BE,
  TOUCH_FR_BE: TOUCH_FR_BE,
  MOUSE_EL: MOUSE_GR,
  TOUCH_EL: TOUCH_GR,
  MOUSE_IT: MOUSE_IT,
  TOUCH_IT: TOUCH_IT,
  MOUSE_FR: MOUSE_FR,
  TOUCH_FR: TOUCH_FR,
  MOUSE_NL: MOUSE_NL,
  TOUCH_NL: TOUCH_NL,
  MOUSE_NL_BE: MOUSE_NL_BE,
  TOUCH_NL_BE: TOUCH_NL_BE,
  MOUSE_FR_CH: MOUSE_FR,
  TOUCH_FR_CH: TOUCH_FR,
  MOUSE_EN_MY: MOUSE_EN,
  TOUCH_EN_MY: TOUCH_EN,
  MOUSE_ES_MY: MOUSE_ES,
  TOUCH_ES_MY: TOUCH_ES,
  MOUSE_MS_MY: MOUSE_ES,
  TOUCH_MS_MY: TOUCH_ES,
  MOUSE_EN_SG: MOUSE_EN,
  TOUCH_EN_SG: TOUCH_EN,
  MOUSE_EN_GB: MOUSE_EN,
  TOUCH_EN_GB: TOUCH_EN,
  MOUSE_EN_AU: MOUSE_EN,
  TOUCH_EN_AU: MOUSE_EN,
  MOUSE_EN_NZ: MOUSE_EN,
  TOUCH_EN_NZ: TOUCH_EN,
  MOUSE_EN_US: MOUSE_EN,
  TOUCH_EN_US: TOUCH_EN,
  MOUSE_EN_CA: MOUSE_EN,
  TOUCH_EN_CA: TOUCH_EN,
  MOUSE_FR_CA: MOUSE_FR,
  TOUCH_FR_CA: TOUCH_FR,
  MOUSE_ES_MX: MOUSE_ES,
  TOUCH_ES_MX: TOUCH_ES,
  MOUSE_PT: MOUSE_PT,
  TOUCH_PT: TOUCH_PT,
  MOUSE_PL: MOUSE_PL,
  TOUCH_PL: TOUCH_PL,
  MOUSE_CS: MOUSE_CS,
  TOUCH_CS: TOUCH_CS,
  MOUSE_SK: MOUSE_SK,
  TOUCH_SK: TOUCH_SK,
  MOUSE_SV: MOUSE_SV,
  TOUCH_SV: TOUCH_SV,
  MOUSE_DA: MOUSE_DA,
  TOUCH_DA: TOUCH_DA,
  MOUSE_HU: MOUSE_HU,
  TOUCH_HU: TOUCH_HU,
  MOUSE_RO: MOUSE_RO,
  TOUCH_RO: TOUCH_RO,
  MOUSE_SL: MOUSE_SL,
  TOUCH_SL: TOUCH_SL,
  MOUSE_HR: MOUSE_HR,
  TOUCH_HR: TOUCH_HR,
  MOUSE_AT: MOUSE_AT,
  TOUCH_AT: TOUCH_AT,
  MOUSE_DE_CH: MOUSE_DE_CH,
  TOUCH_DE_CH: TOUCH_DE_CH,
  // do not have translation texts for these languages
  MOUSE_NB: MOUSE_EN,
  TOUCH_NB: TOUCH_EN,
  MOUSE_FI: MOUSE_EN,
  TOUCH_FI: TOUCH_EN,
  MOUSE_LT: MOUSE_EN,
  TOUCH_LT: TOUCH_EN,
  MOUSE_ET: MOUSE_EN,
  TOUCH_ET: TOUCH_EN,
  MOUSE_LV: MOUSE_EN,
  TOUCH_LV: TOUCH_EN,
  MOUSE_JA: MOUSE_EN,
  TOUCH_JA: TOUCH_EN,
  MOUSE_ZH: MOUSE_EN,
  TOUCH_ZH: TOUCH_EN,
  MOUSE_KO: MOUSE_EN,
  TOUCH_KO: TOUCH_EN,
};

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
  background-image: ${({ imageType }) => `url(${images[imageType]})`};
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
