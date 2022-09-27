import { useShare, useThreekitInitStatus } from '@threekit-tools/treble';
import { COPIED_MESSAGE } from '../../constants';
import ShareIcon from '../../assets/svg/Share';

export default function Share(props) {
  const handleShare = useShare();
  const hasLoaded = useThreekitInitStatus();

  const handleClick = () => {
    handleShare(props.message || COPIED_MESSAGE);
  };

  if (!hasLoaded) return null;

  return (
    <button type="button" onClick={handleClick} className="trbl-wgt-btn">
      <ShareIcon style={{ width: '24px', height: '24px' }} />
    </button>
  );
}
