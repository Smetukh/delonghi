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
  SummaryDotItem,
  SummaryPageWrapper,
  InnerImageBlock,
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

const MaestosaSummary = ({ attributes }) => {
  const bodyAttribute = attributes['Body Metal Wrapping'];
  const topCoverAttribute = attributes['Glossy Stainless Steel Top cover'];
  const chromeDetailsAttribute = attributes['Chrome Details'];
  const dotPatternAttribute = attributes['Dot Pattern'];
  const textAttribute = attributes['text'];
  const tagAttribute = attributes['Write Text'];

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
      {topCoverAttribute?.value === 'Metal' && (
        <NonSwatchComponent
          label={topCoverAttribute.label}
          value={SWATCH_COLOR_NAMES[topCoverAttribute.value]}
        />
      )}
      <SummaryItem>
        <SummaryLabel>{chromeDetailsAttribute.label}</SummaryLabel>
        <ColorButton selected={true}>
          <InnerColorBlock
            backgroundImage={SWATCH_COLOR_CODES[chromeDetailsAttribute.value]}
          />
        </ColorButton>
        <Value>{SWATCH_COLOR_NAMES[chromeDetailsAttribute.value]}</Value>
      </SummaryItem>
      {dotPatternAttribute.value !== 'Off' && (
        <SummaryDotItem>
          <SummaryLabel>{dotPatternAttribute.label}</SummaryLabel>
          <InnerImageBlock
            backgroundImage={SWATCH_COLOR_CODES[dotPatternAttribute.value]}
          ></InnerImageBlock>
          <Value>{SWATCH_COLOR_NAMES[dotPatternAttribute.value]}</Value>
        </SummaryDotItem>
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

export default MaestosaSummary;
