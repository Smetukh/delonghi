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

const SummaryPage = ({ swatches }) => {
  const [textAttribute, setAttribute] = useAttribute('text');
  const [tagAttribute, setTagAttribute] = useAttribute('Write Text');

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
          </SummaryItem>
        );
      })}
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <SummaryItem>
          <SummaryLabel>Metal Tag:</SummaryLabel>
          <span></span>
          <Value>{`"${textAttribute.value}"`}</Value>
        </SummaryItem>
      )}
    </SummaryPageWrapper>
  );
};

export default SummaryPage;
