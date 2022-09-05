import React, { useState } from 'react';
import { useAttribute } from '@threekit-tools/treble';

export function Switch(props) {
  const [attribute, setAttribute] = useAttribute(props.attribute.name);
  if (!attribute) return <></>;
  console.log(
    `%cqqq window.threekit.services = `,
    'font-weight: bold;color: #90ee90',
    window?.threekit?.services
  );
  const [configId, setConfigId] = useState('');
  const saveConfig = async () => {
    const result = await window?.threekit?.services?.configurations.save({
      assetId: '0b79a8d9-cfb4-4020-841a-ec649006a796',
      configuration: {},
    });
    console.log(`%cqqq result = `, 'font-weight: bold;color: #90ee90', result);
    setConfigId(result);
  };
  const getConfig = async () => {
    const config = await window?.threekit?.services.configurations.fetch(
      '4270d4dd-d8ed-4d5e-a05e-0775ce6948d4'
      // configId
    );
    console.log(`%cqqq config = `, 'font-weight: bold;color: #90ee90', config);
  };
  return (
    <div>
      <h2>{props.attribute.label}</h2>
      <input
        type="checkbox"
        checked={props.attribute.value}
        onChange={() => {
          setAttribute(!props.attribute.value);
        }}
      />
      {props.attribute.value}
      <button onClick={saveConfig}>SAVE</button>
      <button onClick={getConfig}>GET</button>
    </div>
  );
}
