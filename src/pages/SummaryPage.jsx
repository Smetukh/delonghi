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

const SummaryPage = ({ swatches }) => {
  return (
    <SummaryPageWrapper>
      {swatches.map((swatch, i) => {
        return (
          <SummaryItem key={i}>
            <SummaryLabel>{swatch.label}</SummaryLabel>
            <ColorButton selected={true}>
              <InnerColorBlock
                backgroundColor={SWATCH_COLOR_CODES[swatch.value]}
              />
            </ColorButton>
            <Value>{SWATCH_COLOR_NAMES[swatch.value]}</Value>
          </SummaryItem>
        );
      })}
    </SummaryPageWrapper>
  );
};

export default SummaryPage;
