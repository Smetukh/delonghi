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
import { OBSCENE_DATA_API, PRODUCTS_DATA_API } from '../../../constants/api';
import { THREEKIT_PREVIEW_PUBLIC_TOKEN } from '../../../constants';

const Flatform = () => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const product = useThreekitSelector((s) => s.product);
  const productName = product.name;

  const [obsceneList, setObsceneList] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataTables = await Promise.all(
        [PRODUCTS_DATA_API, OBSCENE_DATA_API].map(async (url) => {
          const resp = await fetch(url);
          return resp.json();
        })
      );
      const obscene = dataTables[1].rows.map(({ value: { phrase } }) => phrase);
      setObsceneList(obscene);

      let productsData = {};
      dataTables[0].rows.forEach(
        ({
          value: {
            Product,
            'Section (Design name)': attributeName,
            'Section (final)': attributeKey,
            'Finish code (Design name)': designColorCode,
            'Attribute (final)': finalColorCode,
            'Attribute (name)': finalColorName,
          },
        }) => {
          if (!(Product in productsData)) productsData[Product] = {};
          if (!(attributeName in productsData[Product]))
            productsData[Product][attributeName] = {};
          let productAttribute = productsData[Product][attributeName];
          productAttribute.key = attributeKey;
          productAttribute[designColorCode] = {
            finalColorCode,
            finalColorName,
          };
        }
      );

      if (!!THREEKIT_PREVIEW_PUBLIC_TOKEN) setProductsData(productsData);
    };

    fetchData();
  }, [THREEKIT_PREVIEW_PUBLIC_TOKEN]);
  if (!Object.keys(attributes).length) return <></>;

  const productData = productsData[productName] || {};
  const commonSummaryProps = {
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
      tabTitle: 'Configurator',
      content: (
        <ProductPage
          ProductComponent={ProductComponent}
          productName={productName}
          attributes={attributes}
          obsceneList={obsceneList}
          productData={productData}
        />
      ),
    },
    {
      id: 2,
      tabTitle: 'Configuration Summary',
      content: <ProductSummary {...products[productName].summaryProps} />,
    },
  ];

  return (
    <FlatFormWrapper>
      <FlatFormTitle>{productName}</FlatFormTitle>
      <Tabs tabs={tabs} tabIndex={1} />
      <Footer
        {...{
          ...products[productName].summaryProps,
          productData,
        }}
      />
    </FlatFormWrapper>
  );
};

export default Flatform;
