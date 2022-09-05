import React from 'react';
import { useAttribute } from '@threekit-tools/treble';

export function TextInput(props) {
  const [attribute, setAttribute] = useAttribute('text');
  if (!attribute) return <></>;
  return (
    <div>
      <h2>{attribute.label}</h2>
        <input onChange={(e) => setAttribute(e.target.value)} />
    </div>

  );
}
