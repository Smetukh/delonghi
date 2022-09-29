import React from 'react';
import { ColorSwatch } from '../components/Delonghi/ColorSwatch/ColorSwatch';
import { Switch } from '../components/Delonghi/Switch1/Switch';
import { FormPageWrapper } from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble';
import DotPattern from '../components/Delonghi/DotPattern/DotPattern';

const MaestosaPage = ({ titleList, attributes }) => {
  const [topCoverAttribute, setTopCoverAttribute] = useAttribute(
    'Glossy Stainless Steel Top cover'
  );

  const setTopCover = (isSelected) => {
    const newAttribute = isSelected ? 'Color' : 'Metal';
    setTopCoverAttribute(newAttribute);
  };
  return (
    <FormPageWrapper>
      <Switch
        isSelected={topCoverAttribute.value === 'Color'}
        setValue={setTopCover}
        title={'Glossy Stainless Steel Top Cover:'}
      />
      <ColorSwatch
        attribute={attributes['Chrome Details']}
        titleList={titleList}
      />
      <DotPattern attribute={attributes['Dot Pattern']} titleList={titleList} />
    </FormPageWrapper>
  );
};

export default MaestosaPage;
