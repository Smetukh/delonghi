import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { FlatFormTitle, FlatFormWrapper } from './FlatForm.styled';
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';
import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import ProductPage from '../../../pages/ProductPage';
import MaestosaPage from '../../../pages/MaestosaPage';
import SpecialistaPage from '../../../pages/SpecialistaPage';
import MaestosaSummary from '../../../pages/MaestosaSummary';
import SpecialistaSummary from '../../../pages/SpecialistaSummary';
import { BEARER_TOKEN } from '../../../constants';
import { onFetchDataTables } from '../../../utils/helpers';

const Flatform = ({ t = (phrase) => phrase }) => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const product = useThreekitSelector((s) => s.product);
  const productName = product.name;

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // get initial table data
    const fetchData = async () => {
      if (BEARER_TOKEN) {
        const data = await onFetchDataTables();
        const { productsData } = data;
        setProductsData(productsData);
      }
    };
    fetchData();
  }, [BEARER_TOKEN]);

  if (!Object.keys(attributes).length) return <></>;

  const productData = productsData?.[productName] || {};
  const commonSummaryProps = {
    t,
    productData,
    bodyAttribute: attributes['Body Metal Wrapping'],
    chromeDetailsAttribute: attributes['Chrome Details'],
    textAttribute: attributes['text'],
    tagAttribute: attributes['Write Text'],
  };
  const maestosaSummaryProps = {
    topCoverAttribute: attributes['Glossy Stainless Steel Top cover'],
    dotPatternAttribute: attributes['Dot Pattern'],
  };
  const products = {
    'Maestosa Tailor-Made': {
      configurator: MaestosaPage,
      summary: MaestosaSummary,
      summaryProps: { ...commonSummaryProps, ...maestosaSummaryProps },
    },
    'La Specialista Maestro Tailor-Made': {
      configurator: SpecialistaPage,
      summary: SpecialistaSummary,
      summaryProps: {
        ...commonSummaryProps,
        woodKitAttribute: attributes['Wood Kit'],
      },
    },
  };
  const ProductComponent = products[productName].configurator;
  const ProductSummary = products[productName].summary;
  const tabs = [
    {
      id: 1,
      tabTitle: t('configurator'),
      content: (
        <ProductPage
          ProductComponent={ProductComponent}
          productName={productName}
          attributes={attributes}
          productData={productData}
          t={t}
        />
      ),
    },
    {
      id: 2,
      tabTitle: t('configurationSummary'),
      content: <ProductSummary {...products[productName].summaryProps} />,
    },
  ];

  return (
    <FlatFormWrapper>
      <FlatFormTitle>{t(productName)}</FlatFormTitle>
      <Tabs tabs={tabs} tabIndex={1} />
      <Footer
        {...{
          ...products[productName].summaryProps,
          productData,
          t,
        }}
      />
    </FlatFormWrapper>
  );
};

export default Flatform;
