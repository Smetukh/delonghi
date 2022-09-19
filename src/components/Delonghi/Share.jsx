import { useShare, useThreekitInitStatus } from '@threekit-tools/treble';
import { ShareIcon } from './icons';

export default function Share(props) {
  const handleShare = useShare();
  const hasLoaded = useThreekitInitStatus();

  const handleClick = () => {
    handleShare(props.message || COPIED_MESSAGE);
  };

  if (!hasLoaded) return null;

  return (
    <button type="button" onClick={handleClick} className="trbl-wgt-btn">
      <ShareIcon />
    </button>
  );
}
