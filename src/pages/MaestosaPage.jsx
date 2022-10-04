import React, { useEffect } from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import DotPattern from '../components/Delonghi/DotPattern/DotPattern';
import { colorRules } from '../constants/color-rules';

const MaestosaPage = ({ titleList, attributes }) => {
  const [topCoverAttribute, setTopCoverAttribute] = useAttribute(
    'Glossy Stainless Steel Top cover'
  );
  const bodyColorValue = attributes['Body Metal Wrapping'].value;
  const dotPatternValue = attributes['Dot Pattern'].value;
  const chromeDetailsAttribute = attributes['Chrome Details'];
  useEffect(() => {
    // update top cover on specific body color
    if (bodyColorValue === 'Brushed Stainless Steel')
      setTopCoverAttribute('Metal');
  }, [bodyColorValue]);
  const setTopCover = (isSelected) => {
    const newAttribute = isSelected ? 'Metal' : 'Color';
    setTopCoverAttribute(newAttribute);
  };

  // maestosa chrome color filtering
  let disabledChromeColors = [];

  Object.keys(colorRules).forEach((chromeColor) => {
    // build an array of disabled Chrome Colors
    if (colorRules[chromeColor][bodyColorValue].includes(dotPatternValue))
      disabledChromeColors = [...disabledChromeColors, chromeColor];
  });

  const disabledDotPatterns =
    colorRules[chromeDetailsAttribute.value][bodyColorValue] || [];
  return (
    <FormPageWrapper>
      <Switch
        isSelected={topCoverAttribute.value === 'Metal'}
        setValue={setTopCover}
        title={'Glossy Stainless Steel Top Cover:'}
      />
      <ColorSwatch
        disabledColors={disabledChromeColors}
        attribute={chromeDetailsAttribute}
        titleList={titleList}
      />
      <DotPattern
        attribute={attributes['Dot Pattern']}
        titleList={titleList}
        disabledColors={disabledDotPatterns}
      />
    </FormPageWrapper>
  );
};

export default MaestosaPage;
