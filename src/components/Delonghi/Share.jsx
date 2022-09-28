import { useState, useEffect } from 'react';
import { useThreekitInitStatus } from '@threekit-tools/treble';
import { COPIED_MESSAGE } from '../../constants';
import ShareIcon from '../../assets/svg/Share';
import { ShareMessage } from './Share.styled';

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

  const handleClick = () => {
    const copiedLink = window.location.href;
    navigator.clipboard.writeText(copiedLink);
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
