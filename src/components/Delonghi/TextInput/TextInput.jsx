import React, { useState } from 'react';
import { useAttribute } from '@threekit-tools/treble';

export function TextInput(props) {
  const [attribute, setAttribute] = useAttribute('text');
  if (!attribute) return <></>;
  const [hasWarning, setWarning] = useState(false);

  return (
    <div>
      <h2>{attribute.label}</h2>
      {hasWarning && <h4>WARNING!!!</h4>}
      <input
        onChange={(e) => {
          const sentence = e.target.value;
          setWarning(false);
          sentence.split(' ').forEach((word) => {
            if (props.obsceneList.includes(word.toLowerCase()))
              setWarning(true);
          });
          return setAttribute(sentence);
        }}
      />
    </div>
  );
}
