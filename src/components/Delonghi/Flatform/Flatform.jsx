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
import {
  TITLE_DATA_API,
  OBSCENE_DATA_API,
  PRODUCTS_DATA_API,
} from '../../../constants/api';

const Flatform = () => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const product = useThreekitSelector((s) => s.product);
  const productName = product.name;

  const [titleList, setTitleList] = useState({});
  const [obsceneList, setObsceneList] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataTables = await Promise.all(
        [TITLE_DATA_API, OBSCENE_DATA_API, PRODUCTS_DATA_API].map(
          async (url) => {
            const resp = await fetch(url);
            return resp.json();
          }
        )
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

      console.log(
        `%cqqq dataTables[2] = `,
        'font-weight: bold;color: #90ee90',
        dataTables[2]
      );
      let productData = {};
      dataTables[2].rows.forEach(
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
          if (!(Product in productData)) productData[Product] = {};
          if (!(attributeName in productData[Product]))
            productData[Product][attributeName] = {};
          let productAttribute = productData[Product][attributeName];
          productAttribute.key = attributeKey;
          productAttribute[designColorCode] = {
            finalColorCode,
            finalColorName,
          };
          console.log(
            `%cqqq productAttribute = `,
            'font-weight: bold;color: #90ee90',
            productAttribute
          );
        }
      );
      console.log(
        `%cqqq productData = `,
        'font-weight: bold;color: #90ee90',
        productData
      );
      setProductData(productData);
    };

    fetchData();
  }, []);
  if (!Object.keys(attributes).length) return <></>;

  const commonSummaryProps = {
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
          titleList={titleList}
          attributes={attributes}
          obsceneList={obsceneList}
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
      {/* <CloseIcon
        onClick={() => openModal('CLOSE_CONFIGURATOR', { closeModal })}
      /> */}
      <FlatFormTitle>{productName}</FlatFormTitle>
      <Tabs tabs={tabs} tabIndex={1} />
      <Footer {...{ ...products[productName].summaryProps, productData }} />
    </FlatFormWrapper>
  );
};

export default Flatform;
