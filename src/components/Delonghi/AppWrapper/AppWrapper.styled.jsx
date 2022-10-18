import styled from 'styled-components';
import { Player } from '@threekit-tools/treble';
// import Flatform from './components/Delonghi/Flatform/Flatform';
import Close from '../../../assets/svg/Close';
import Flatform from '../Flatform/Flatform';
// import Close from './assets/svg/Close';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'closeIcon'
    'player'
    'form';
  [class*='tk-player'] {
    min-height: 384px;
    @media (min-width: 747px) {
      min-height: 521px;
    }
    @media (min-width: 900px) {
      min-height: 100vh;
    }
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.02fr 0.98fr;
    grid-template-areas:
      'player closeIcon'
      'player form';
  }
`;

export const CloseIconBlock = styled.div`
  cursor: pointer;
  grid-area: closeIcon;
  display: flex;
  justify-content: flex-end;
  padding: 14px 16px;
`;

export const CloseIcon = styled(Close)``;

export const PlayerWrapper = styled(Player)`
  height: 384px;
  min-height: 384px;
  @media (min-width: 747px) {
    min-height: 521px;
    height: 521px;
  }
  @media (min-width: 900px) {
    min-height: 100%;
    height: 100%;
  }
`;

export const PlayerModalProvider = styled.div`
  position: relative;
  grid-area: player;
`;

export const HelperButtonWrapper = styled(Player.BottomRightWidgets)``;

export const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: -10px;
  right: 20px;
`;

export const InnerImage = styled.img`
  display: block;
  margin: 5px auto 0;
  width: 200px;
`;
