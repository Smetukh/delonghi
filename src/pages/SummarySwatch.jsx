import React from 'react';
import { SWATCH_COLOR_CODES } from '../constants/colors';
import {
  ColorButton,
  InnerColorBlock,
} from '../components/Delonghi/ColorSwatch/ColorSwatch.styled';
import { SummaryItemContainer, SummaryLabel, Value } from './Pages.styled';

const SummarySwatch = ({ label, value, colorName }) => {
  return (
    <SummaryItemContainer>
      <SummaryLabel>{label}</SummaryLabel>
      <ColorButton selected={true}>
        <InnerColorBlock backgroundImage={SWATCH_COLOR_CODES[value]} />
      </ColorButton>
      <Value>{colorName}</Value>
    </SummaryItemContainer>
  );
};

export default SummarySwatch;
