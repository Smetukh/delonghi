import React from 'react';
import { useAttribute } from '@threekit-tools/treble';

export function Switch(props) {
  const [attribute, setAttribute] = useAttribute(props.attribute.name);
  if (!attribute) return <></>;
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
    </div>
  );
}
