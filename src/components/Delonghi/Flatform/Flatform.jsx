import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { OBSCENE_DATA_API, SKU_DATA, TITLE_DATA_API } from '../../../constants';
import { FlatFormTitle, FlatFormWrapper } from './FlatForm.styled';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import FormPage from '../../../pages/FormPage';
import SummaryPage from '../../../pages/SummaryPage';

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

  const tabs = [
    {
      id: 1,
      tabTitle: 'Configurator',
      content: (
        <FormPage
          swatches={swatches}
          titleList={titleList}
          inputAttributes={attributes['text']}
          obsceneList={obsceneList}
        />
      ),
    },
    {
      id: 2,
      tabTitle: 'Configuration Summary',
      content: <SummaryPage swatches={swatches} />,
    },
  ];

  return (
    <FlatFormWrapper>
      <FlatFormTitle>{SKU_DATA[window.DLG.config.skuCode].title}</FlatFormTitle>
      <Tabs tabs={tabs} tabIndex={1} />
      <Footer />
    </FlatFormWrapper>
  );
};

export default Flatform;
