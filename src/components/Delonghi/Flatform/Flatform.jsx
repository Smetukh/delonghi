import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { OBSCENE_DATA_API, TITLE_DATA_API } from '../../../constants';
import { FlatFormTitle, FlatFormWrapper } from './FlatForm.styled';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import ProductPage from '../../../pages/ProductPage';
import MaestosaPage from '../../../pages/MaestosaPage';
import SpecialistaPage from '../../../pages/SpecialistaPage';
import MaestosaSummary from '../../../pages/MaestosaSummary';
import SpecialistaSummary from '../../../pages/SpecialistaSummary';

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
    return (
      item.type === 'String' &&
      // item.name !== 'Body Metal Wrapping' &&
      item.name !== 'Write Text' &&
      item.name !== 'Camera Text' &&
      item.name !== 'text' &&
      item.name !== 'Glossy Stainless Steel Top cover'
    );
  });
  const components = {
    'Maestosa Tailor-Made': {
      configurator: MaestosaPage,
      summary: MaestosaSummary,
    },
    'La Specialista Maestro Tailor-Made': {
      configurator: SpecialistaPage,
      summary: SpecialistaSummary,
    },
  };

  console.log(
    `%cqqq productName = `,
    'font-weight: bold;color: #90ee90',
    productName
  );
  const ProductComponent = components[productName].configurator;
  const ProductSummary = components[productName].summary;

  const tabs = [
    {
      id: 1,
      tabTitle: 'Configurator',
      content: (
        <ProductPage
          ProductComponent={ProductComponent}
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
      content: <ProductSummary attributes={attributes} />,
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
