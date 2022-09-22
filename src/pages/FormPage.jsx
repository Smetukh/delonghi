// import { Switch } from '@threekit-tools/treble/dist';
import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { Switch } from '../components/Delonghi/Switch/Switch';
import { FormPageWrapper } from './Pages.styled';

const FormPage = ({ swatches, titleList, attributes, obsceneList }) => {
  const switchAttribute = attributes['Write Text'];
  return (
    <FormPageWrapper>
      {swatches.map((item) => (
        <ColorSwatch attribute={item} key={item.name} titleList={titleList} />
      ))}
      <Switch attribute={switchAttribute} />
      {switchAttribute.value === 'On' && (
        <TextInput
          attribute={attributes['text']}
          obsceneList={obsceneList}
          title="Add text"
        />
      )}
    </FormPageWrapper>
  );
};

export default FormPage;
