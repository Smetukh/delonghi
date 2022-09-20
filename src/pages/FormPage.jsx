import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { TextInput } from '../components/Delonghi/TextInput/TextInput';
import { FormPageWrapper } from './Pages.styled';

const FormPage = ({ swatches, titleList, inputAttributes, obsceneList }) => {
  return (
    <FormPageWrapper>
      {swatches.map((item) => (
        <ColorSwatch attribute={item} key={item.name} titleList={titleList} />
      ))}
      {/* <Switch attribute={attributes['Caraffa Latte']} /> */}
      <TextInput
        attribute={inputAttributes}
        obsceneList={obsceneList}
        title="Metal Tag"
      />
    </FormPageWrapper>
  );
};

export default FormPage;
