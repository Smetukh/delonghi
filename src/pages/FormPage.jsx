// import { Switch } from '@threekit-tools/treble/dist';
import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { Switch } from '../components/Delonghi/Switch/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';

const FormPage = ({ swatches, titleList, attributes, obsceneList }) => {
  // const switchAttribute = attributes['Write Text'];
  const [switchAttribute, setValue] = useAttribute(
    attributes['Write Text'].name
  );
  return (
    <FormPageWrapper>
      {swatches.map((item) => {
        return (
          <ColorSwatch
            isSquare={item.name === 'Wood Kit'}
            attribute={item}
            key={item.name}
            titleList={titleList}
          />
        );
      })}
      <Switch value={switchAttribute.value} setValue={setValue} />
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
