import {
  usePlayerLoadingStatus,
  useShare,
  useThreekitInitStatus,
} from '@threekit-tools/treble';
import { useContext, useEffect } from 'react';
import { COPIED_MESSAGE } from '../../constants';
import { ModalContext } from '../../context/modalContext';
import { FullScreenIcon } from './icons';

export default function FullScreen(props) {
  const hasInitLoaded = useThreekitInitStatus();

  if (!hasInitLoaded) return null;
  return (
    <button
      type="button"
      onClick={() =>
        document.querySelector('.buttons___nbnVG :nth-child(1)').click()
      }
      className="trbl-wgt-btn"
    >
      <FullScreenIcon />
    </button>
  );
}
