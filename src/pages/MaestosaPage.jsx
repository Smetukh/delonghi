import React, { useEffect } from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import DotPattern from '../components/Delonghi/DotPattern/DotPattern';
import { colorRules } from '../constants/color-rules';

const MaestosaPage = ({ productData, attributes, t }) => {
  const [topCoverAttribute, setTopCoverAttribute] = useAttribute(
    'Glossy Stainless Steel Top cover'
  );
  const topCoverAttributeValue = topCoverAttribute.value;
  const bodyColorValue = attributes['Body Metal Wrapping'].value;
  const dotPatternValue = attributes['Dot Pattern'].value;
  const chromeDetailsAttribute = attributes['Chrome Details'];
  useEffect(() => {
    // update top cover on specific body color
    if (bodyColorValue === 'STAINLESS STEEL') setTopCoverAttribute('Metal');
  }, [bodyColorValue]);
  const setTopCover = (isSelected) => {
    const newAttribute = isSelected ? 'Metal' : 'Color';
    setTopCoverAttribute(newAttribute);
  };

  // maestosa chrome color filtering
  let disabledChromeColors = [];

  Object.keys(colorRules).forEach((chromeColor) => {
    // build an array of disabled Chrome Colors
    if (
      colorRules[chromeColor][bodyColorValue].includes(dotPatternValue) ||
      // case: gold chrome does not match yellow body colors
      (bodyColorValue === 'YELLOW DL YE 78/PE' && chromeColor === 'GOLD CHROME')
    )
      disabledChromeColors = [...disabledChromeColors, chromeColor];
  });

  const disabledDotPatterns =
    colorRules[chromeDetailsAttribute.value][bodyColorValue] || [];
  return (
    <FormPageWrapper>
      <Switch
        disabled={
          bodyColorValue === 'STAINLESS STEEL' &&
          topCoverAttributeValue === 'Metal'
        }
        isSelected={topCoverAttributeValue === 'Metal'}
        setValue={setTopCover}
        title={t(topCoverAttribute.label)}
        t={t}
      />
      <ColorSwatch
        disabledColors={disabledChromeColors}
        attribute={chromeDetailsAttribute}
        productData={productData}
        t={t}
      />
      <DotPattern
        bodyColorValue={bodyColorValue}
        attribute={attributes['Dot Pattern']}
        productData={productData}
        disabledColors={disabledDotPatterns}
        t={t}
      />
    </FormPageWrapper>
  );
};

export default MaestosaPage;
