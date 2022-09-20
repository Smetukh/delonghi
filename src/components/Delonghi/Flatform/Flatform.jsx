import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { OBSCENE_DATA_API, TITLE_DATA_API } from '../../../constants';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { TextInput } from '../TextInput/TextInput';
import { FlatFormTitle, FlatFormWrapper } from './FlatForm.styled';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';

const Flatform = () => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const [titleList, setTitleList] = useState({});
  const [obsceneList, setObsceneList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataTables = await Promise.all(
        [TITLE_DATA_API, OBSCENE_DATA_API].map(async (url) => {
          const resp = await fetch(url);
          return resp.json();
        })
      );
      // map swatch titles from data table
      let titleRes = {};
      dataTables[0].rows.forEach(({ value = {} }) => {
        titleRes = { ...titleRes, [value.Key]: value.Value };
      });
      setTitleList(titleRes);

      // map obscene language
      const obscene = dataTables[1].rows.map(({ value: { phrase } }) => phrase);
      setObsceneList(obscene);
    };

    fetchData();
  }, []);

  if (!Object.keys(attributes).length) return <></>;

  const swatches = Object.values(attributes).filter((item) => {
    return item.type === 'String' && !item.label.toLowerCase().includes('text');
  });
  return (
    <FlatFormWrapper>
      <FlatFormTitle>La Specialista Maestro Tailor-Made</FlatFormTitle>
      <Tabs></Tabs>
      {swatches.map((item) => (
        <ColorSwatch attribute={item} key={item.name} titleList={titleList} />
      ))}
      {/* <Switch attribute={attributes['Caraffa Latte']} /> */}
      <TextInput
        attribute={attributes['text']}
        obsceneList={obsceneList}
        title="Metal Tag"
      />
      <Footer />
    </FlatFormWrapper>
  );
};

export default Flatform;
