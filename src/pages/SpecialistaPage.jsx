import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { FormPageWrapper } from './Pages.styled';

const SpecialistaPage = ({ titleList, attributes, productData }) => {
  const swatches = Object.values(attributes).filter((item) => {
    return (
      item.type === 'String' &&
      item.name !== 'Body Metal Wrapping' &&
      !item.label.toLowerCase().includes('text')
    );
  });
  return (
    <FormPageWrapper>
      {swatches.map((item) => (
        <ColorSwatch
          attribute={item}
          key={item.name}
          titleList={titleList}
          productData={productData}
        />
      ))}
    </FormPageWrapper>
  );
};

export default SpecialistaPage;
