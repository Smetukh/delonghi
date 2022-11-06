import { useState, useEffect } from 'react';
import { useThreekitInitStatus } from '@threekit-tools/treble';
import ShareIcon from '../../assets/svg/Share';
import { ShareMessage } from './Share.styled';
import { eventTracker } from '../../utils/helpers';

export default function Share(props) {
  const hasLoaded = useThreekitInitStatus();
  const [messageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (messageVisible) {
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 5000);
    }
  }, [messageVisible]);

  const handleClick = async () => {
    eventTracker('share');
    const configuration = await window.threekit.treble.saveConfiguration();
    navigator.clipboard.writeText(configuration?.resumableUrl);
    setIsMessageVisible(true);
  };

  if (!hasLoaded) return null;

  return (
    <>
      <button type="button" onClick={handleClick} className="trbl-wgt-btn">
        <ShareIcon style={{ width: '20px', height: '20px' }} />
      </button>
      {messageVisible && <ShareMessage>Link Copied</ShareMessage>}
    </>
  );
}
