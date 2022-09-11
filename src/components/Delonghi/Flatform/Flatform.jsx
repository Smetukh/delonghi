import React, { useEffect, useState } from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import FormComponent from '../FormComponent/FormComponent';
import { obsceneDataApi, titleDataApi } from '../../../constants';

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

      // map oscene language
      const obscene = dataTables[1].rows.map(({ value: { phrase } }) => phrase);
      setObsceneList(obscene);
    };

    fetchData();
  }, []);
  return Object.values(attributes).map((attr) => {
    return (
      <FormComponent
        obsceneList={obsceneList}
        titleList={titleList}
        attribute={attr.name}
        includeNestedConfigurator={props.includeNestedConfigurator}
      />
    );
  });
};

export default Flatform;
