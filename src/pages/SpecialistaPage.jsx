import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { FormPageWrapper } from './Pages.styled';

const SpecialistaPage = ({ titleList, attributes }) => {
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
          isSquare={item.name === 'Wood Kit'}
          attribute={item}
          key={item.name}
          titleList={titleList}
        />
      ))}
    </FormPageWrapper>
  );
};

export default SpecialistaPage;
