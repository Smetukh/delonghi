import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import DotPattern from '../components/Delonghi/DotPattern/DotPattern';
import MaestosaPage from './MaestosaPage';
import SpecialistaPage from './SpecialistaPage';

const ProductPage = ({ titleList, attributes, obsceneList, productName }) => {
  const [textSwitchAttribute, setTextSwitchAttribute] = useAttribute(
    attributes['Write Text'].name
  );

  const components = {
    'Maestosa Tailor-Made': MaestosaPage,
    'La Specialista Maestro Tailor-Made': SpecialistaPage,
  };
  const ProductComponent = components[productName] || FormPage;

  const setTextSwitch = (isSelected) => {
    const newAttribute = isSelected ? 'On' : 'Off';
    setTextSwitchAttribute(newAttribute);
  };
  return (
    <FormPageWrapper>
      <ColorSwatch
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
