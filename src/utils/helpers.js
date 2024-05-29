import i18next from 'i18next';
import { eventName, eventCategory, eventLabel } from '../constants/analytics';
import {
  PRODUCTS_DATA_API,
  TRANSLATIONS_DATA_API,
  SKU_DATA_API,
} from '../constants/api';

const eventTracker = (eventAction) => {
  console.log(
    `EventTracker action "${eventAction}" valid status = `,
    Array.isArray(window.dataLayer)
  ); // TODO: remove after testing

  if (Array.isArray(window.dataLayer))
    dataLayer.push({
      event: eventName,
      eventCategory,
      eventAction,
      eventLabel,
    });
};

const onFetchDataTables = async () => {
  const dataTables = await Promise.all(
    [PRODUCTS_DATA_API, TRANSLATIONS_DATA_API].map(async (url) => {
      const resp = await fetch(url);
      return resp.json();
    })
  );
  const obscene = dataTables[1].rows.map(({ value: { phrase } }) => phrase);

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

  const rawTranslations = dataTables[1].rows;

  const translations = rawTranslations.reduce(
    (acc, { value: { key, en, it, de } }) => {
      return {
        en: { ...acc.en, [key]: en },
        it: { ...acc.it, [key]: it },
        de: { ...acc.de, [key]: de },
      };
    },
    { en: {}, it: {}, de: {} }
  );
  Object.keys(translations).forEach((lang) => {
    i18next.addResourceBundle(lang, 'translation', translations[lang]);
  });

  return { productsData, obscene };
};

const resolveSku = async () => {
  const res = await fetch(SKU_DATA_API);

  const table = await res.json();
  const passedSKU = window.DLG?.pdp?.sku?.toString();

  const assetID = table.rows.find((el) => el.value.SKU === passedSKU);

  if (!assetID) {
    const fallBack = table.rows.find((sku) => sku.value.SKU === 'fallBack')
      .value.assetID;
    return fallBack;
  }

  return assetID.value.assetID;
};

export { eventTracker, onFetchDataTables, resolveSku };
