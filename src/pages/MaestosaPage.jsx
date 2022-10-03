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
  useEffect(() => {
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
    if (!colorRules[chromeColor][bodyColorValue])
      disabledChromeColors = [...disabledChromeColors, chromeColor];
  });

  return (
    <FormPageWrapper>
      <Switch
        isSelected={topCoverAttribute.value === 'Metal'}
        setValue={setTopCover}
        title={'Glossy Stainless Steel Top Cover:'}
      />
      <ColorSwatch
        disabledColors={disabledChromeColors}
        attribute={attributes['Chrome Details']}
        titleList={titleList}
      />
      <DotPattern attribute={attributes['Dot Pattern']} titleList={titleList} />
    </FormPageWrapper>
  );
};

export default MaestosaPage;
