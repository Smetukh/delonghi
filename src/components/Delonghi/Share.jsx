import {
  useShare,
  ShareIcon,
  // ArrowLeft,
  useThreekitInitStatus,
} from '@threekit-tools/treble';
import CaretLeft from '@threekit-tools/treble/dist/icons/ArrowLeft';

const COPIED_MESSAGE = 'Current configuration URL is Copied!';

export default function Share(props) {
  const handleShare = useShare();
  const hasLoaded = useThreekitInitStatus();

  const handleClick = () => {
    handleShare(props.message || COPIED_MESSAGE);
  };

  if (!hasLoaded) return null;

  return (
    <button type="button" onClick={handleClick} className="trbl-wgt-btn">
      <CaretLeft />
    </button>
  );
}
