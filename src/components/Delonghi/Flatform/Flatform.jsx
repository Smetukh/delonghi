import React from 'react';
import { useConfigurator } from '@threekit-tools/treble/dist';
import FormComponent from '../FormComponent/FormComponent';

const Flatform = (props) => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;
  console.log('qqq attributes ===', attributes);
  return Object.values(attributes).map((attr) => {
    console.log(`%cqqq attr = `, 'font-weight: bold;color: #90ee90', attr);
    return (
      <FormComponent
        attribute={attr.name}
        includeNestedConfigurator={props.includeNestedConfigurator}
      />
    );
  });
};

export default Flatform;
