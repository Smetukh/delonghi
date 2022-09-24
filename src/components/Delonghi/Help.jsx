import { useShare, useThreekitInitStatus } from '@threekit-tools/treble';
import { useContext } from 'react';
import { COPIED_MESSAGE } from '../../constants';
import { ModalContext } from '../../context/modalContext';
import { QuestionIcon } from './icons';

export default function Help(props) {
  // const handleShare = useShare();
  const hasLoaded = useThreekitInitStatus();
  const { openModal, closeModal } = useContext(ModalContext);
  const handleClick = () => {
    openModal('PLAYER_HELP_MODAL', { closeModal });
  };

  if (!hasLoaded) return null;

  return (
    <button type="button" onClick={handleClick} className="trbl-wgt-btn">
      <QuestionIcon />
    </button>
  );
}
