import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import FormComponent from '../FormComponent/FormComponent';
import { obsceneDataApi, titleDataApi } from '../../../constants';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';

const Flatform = (props) => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  const [titleList, setTitleList] = useState({});
  const [obsceneList, setObsceneList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataTables = await Promise.all(
        [titleDataApi, obsceneDataApi].map(async (url) => {
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

  return Object.values(attributes).map((attr) => {
    switch (attr.name) {
      case 'Body metal wrappings  colors Specialista':
      case 'Chrome plated Specialista':
      case 'Wood kit':
        return (
          <ColorSwatch
            title={attr.name}
            attribute={attr}
            titleList={titleList}
          />
        );
      default:
        return (
          <FormComponent
            obsceneList={obsceneList}
            titleList={titleList}
            attribute={attr.name}
            includeNestedConfigurator={props.includeNestedConfigurator}
          />
        );
    }
  });
};

export default Flatform;
