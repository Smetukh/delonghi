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

const NonSwatchComponent = ({ label, value }) => {
  return (
    <SummaryItem>
      <SummaryLabel>{`${label}:`}</SummaryLabel>
      <span></span>
      <Value>{value}</Value>
    </SummaryItem>
  );
};

const SpecialistaSummary = ({
  bodyAttribute,
  chromeDetailsAttribute,
  woodKitAttribute,
  textAttribute,
  tagAttribute,
}) => {
  // const bodyAttribute = attributes['Body Metal Wrapping'] || {};
  // const chromeDetailsAttribute = attributes['Chrome Details'] || {};
  // const woodKitAttribute = attributes['Wood Kit'] || {};
  // const textAttribute = attributes['text'] || {};
  // const tagAttribute = attributes['Write Text'] || {};

  return (
    <SummaryPageWrapper>
      <SummaryItem>
        <SummaryLabel>{bodyAttribute.label}</SummaryLabel>
        <ColorButton selected={true}>
          <InnerColorBlock
            backgroundImage={SWATCH_COLOR_CODES[bodyAttribute.value]}
          />
        </ColorButton>
        <Value>{SWATCH_COLOR_NAMES[bodyAttribute.value]}</Value>
      </SummaryItem>
      <SummaryItem>
        <SummaryLabel>{chromeDetailsAttribute.label}</SummaryLabel>
        <ColorButton selected={true}>
          <InnerColorBlock
            backgroundImage={SWATCH_COLOR_CODES[chromeDetailsAttribute.value]}
          />
        </ColorButton>
        <Value>{SWATCH_COLOR_NAMES[chromeDetailsAttribute.value]}</Value>
      </SummaryItem>
      <SummaryItem>
        <SummaryLabel>{woodKitAttribute.label}</SummaryLabel>
        <ColorButton selected={true}>
          <InnerColorBlock
            backgroundImage={SWATCH_COLOR_CODES[woodKitAttribute.value]}
          />
        </ColorButton>
        <Value>{SWATCH_COLOR_NAMES[woodKitAttribute.value]}</Value>
      </SummaryItem>
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <NonSwatchComponent
          label={'Metal Tag'}
          value={`"${textAttribute.value}"`}
        />
      )}
    </SummaryPageWrapper>
  );
};

export default SpecialistaSummary;
