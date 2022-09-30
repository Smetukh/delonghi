import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import { colorRules } from '../constants/color-rules';

const ProductPage = ({
  titleList,
  attributes,
  obsceneList,
  ProductComponent,
}) => {
  const [textSwitchAttribute, setTextSwitchAttribute] = useAttribute(
    attributes['Write Text'].name
  );

  const setTextSwitch = (isSelected) => {
    const newAttribute = isSelected ? 'On' : 'Off';
    setTextSwitchAttribute(newAttribute);
  };

  // maestosa body color filtering
  let disabledBodyColors = [];
  const chromeDetailsColors =
    colorRules[attributes?.['Chrome Details']?.value] || [];
  const dotPatternValue = attributes?.['Dot Pattern']?.value;
  Object.keys(chromeDetailsColors).forEach((bodyColor) => {
    // check if 'Body' color has mismatching 'dot pattern' colors
    if (chromeDetailsColors[bodyColor].includes(dotPatternValue))
      disabledBodyColors = [...disabledBodyColors, bodyColor];
  });

  return (
    <FormPageWrapper>
      <ColorSwatch
        disabledColors={disabledBodyColors}
        attribute={attributes['Body Metal Wrapping']}
        titleList={titleList}
      />
      <ProductComponent titleList={titleList} attributes={attributes} />
      <Switch
        isSelected={textSwitchAttribute.value === 'On'}
        setValue={setTextSwitch}
        title={'Metal Tag'}
      />
      {textSwitchAttribute.value === 'On' && (
        <TextInput
          attribute={attributes['text']}
          obsceneList={obsceneList}
          title="Add text"
        />
      )}
    </FormPageWrapper>
  );
};

export default ProductPage;
