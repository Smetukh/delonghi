import styled from 'styled-components';
import { Player } from '@threekit-tools/treble';
import Flatform from './components/Delonghi/Flatform/Flatform';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
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
    grid-template-columns: 50% 50%;
    grid-template-areas: 'player form';
  }
`;

export const PlayerWrapper = styled(Player)`
  grid-area: player;
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

export const FormWrapper = styled(Flatform)`
  grid-area: form;
`;
