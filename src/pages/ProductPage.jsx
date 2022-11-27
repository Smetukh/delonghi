import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import { colorRules } from '../constants/color-rules';

const ProductPage = ({
  productData,
  attributes,
  obsceneList,
  ProductComponent,
  t,
}) => {
  const [textSwitchAttribute, setTextSwitchAttribute] = useAttribute(
    attributes['Write Text'].name
  );

  const setTextSwitch = (isSelected) => {
    const newAttribute = isSelected ? 'On' : 'Off';
    setTextSwitchAttribute(newAttribute);
  };

  // maestosa body color filtering
  const chromeDetailsValue = attributes?.['Chrome Details']?.value;
  let disabledBodyColors = [];
  const chromeDetailsColors = colorRules[chromeDetailsValue] || [];
  const dotPatternValue = attributes?.['Dot Pattern']?.value;
  Object.keys(chromeDetailsColors).forEach((bodyColor) => {
    if (
      // check if 'Body' color has mismatching 'dot pattern' colors
      (chromeDetailsColors[bodyColor] || []).includes(dotPatternValue) ||
      // case: gold chrome does not match yellow body colors
      (bodyColor === 'YELLOW DL YE 78/PE' &&
        chromeDetailsValue === 'GOLD CHROME')
    )
      disabledBodyColors = [...disabledBodyColors, bodyColor];
  });

  return (
    <FormPageWrapper>
      <ColorSwatch
        disabledColors={disabledBodyColors}
        attribute={attributes['Body Metal Wrapping']}
        productData={productData}
        t={t}
      />
      <ProductComponent
        productData={productData}
        attributes={attributes}
        t={t}
      />
      <Switch
        isSelected={textSwitchAttribute.value === 'On'}
        setValue={setTextSwitch}
        title={t('writeYourText')}
        t={t}
      />
      {textSwitchAttribute.value === 'On' && (
        <TextInput
          t={t}
          attribute={attributes['text']}
          obsceneList={obsceneList}
          title="Add text"
        />
      )}
    </FormPageWrapper>
  );
};

export default ProductPage;
