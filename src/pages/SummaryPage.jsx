import React from 'react';
import { SWATCH_COLOR_CODES, SWATCH_COLOR_NAMES } from '../constants/colors';
import {
  ColorButton,
  InnerColorBlock,
} from '../components/Delonghi/ColorSwatch/ColorSwatch.styled';
import {
  SummaryLabel,
  Value,
  SummaryItem,
  SummaryPageWrapper,
} from './Pages.styled';
import { useAttribute } from '@threekit-tools/treble/dist';

const NonSwatchComponent = ({ label, value }) => {
  return (
    <SummaryItem>
      <SummaryLabel>{`${label}:`}</SummaryLabel>
      <span></span>
      <Value>{value}</Value>
    </SummaryItem>
  );
};

const SummaryPage = ({ swatches }) => {
  const [textAttribute, setAttribute] = useAttribute('text');
  const [tagAttribute, setTagAttribute] = useAttribute('Write Text');
  const [glossyAttribute, setGlossyAttribute] = useAttribute(
    'Glossy Stainless Steel Top cover'
  );

  return (
    <SummaryPageWrapper>
      {swatches.map((swatch, i) => {
        return (
          <SummaryItem key={i}>
            <SummaryLabel>{swatch.label}</SummaryLabel>
            <ColorButton selected={true}>
              <InnerColorBlock
                backgroundImage={SWATCH_COLOR_CODES[swatch.value]}
              />
            </ColorButton>
            <Value>{SWATCH_COLOR_NAMES[swatch.value]}</Value>
            {/* </>
            )} */}
          </SummaryItem>
        );
      })}

      {!!glossyAttribute?.value && (
        <NonSwatchComponent
          label={glossyAttribute.label}
          value={SWATCH_COLOR_NAMES[glossyAttribute.value]}
        />
      )}
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <NonSwatchComponent
          label={'Metal Tag'}
          value={`"${textAttribute.value}"`}
        />
      )}
    </SummaryPageWrapper>
  );
};

export default SummaryPage;
