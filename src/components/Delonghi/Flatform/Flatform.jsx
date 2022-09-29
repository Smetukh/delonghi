import React, { useEffect, useState, useContext } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { OBSCENE_DATA_API, SKU_DATA, TITLE_DATA_API } from '../../../constants';
import { FlatFormTitle, FlatFormWrapper } from './FlatForm.styled';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import SummaryPage from '../../../pages/SummaryPage';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import ProductPage from '../../../pages/ProductPage';

const Flatform = () => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const product = useThreekitSelector((s) => s.product);
  const productName = product.name;

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
    return item.type === 'String' && item.name !== 'Body Metal Wrapping';
  });
  const tabs = [
    {
      id: 1,
      tabTitle: 'Configurator',
      content: (
        <ProductPage
          productName={productName}
          titleList={titleList}
          attributes={attributes}
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
      {/* <CloseIcon
        onClick={() => openModal('CLOSE_CONFIGURATOR', { closeModal })}
      /> */}
      <FlatFormTitle>{productName}</FlatFormTitle>
      <Tabs tabs={tabs} tabIndex={1} />
      <Footer />
    </FlatFormWrapper>
  );
};

export default Flatform;
