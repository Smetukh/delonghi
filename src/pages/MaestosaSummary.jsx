import React from 'react';
import { SWATCH_COLOR_CODES, SWATCH_COLOR_NAMES } from '../constants/colors';
import SummarySwatch from './SummarySwatch';
import {
  SummaryLabel,
  Value,
  SummaryItemContainer,
  SummaryDotItem,
  SummaryPageWrapper,
  InnerImageBlock,
} from './Pages.styled';

const NonSwatchComponent = ({ label, value }) => {
  return (
    <SummaryItemContainer>
      <SummaryLabel>{`${label}:`}</SummaryLabel>
      <span></span>
      <Value>{value}</Value>
    </SummaryItemContainer>
  );
};

const MaestosaSummary = ({
  bodyAttribute,
  topCoverAttribute,
  chromeDetailsAttribute,
  dotPatternAttribute,
  textAttribute,
  tagAttribute,
  productData,
}) => {
  return (
    <SummaryPageWrapper>
      <SummarySwatch
        label={bodyAttribute.name}
        value={bodyAttribute.value}
        colorName={
          productData[bodyAttribute.name][bodyAttribute.value].finalColorName
        }
      />
      {topCoverAttribute?.value === 'Metal' && (
        <NonSwatchComponent
          label={topCoverAttribute.label}
          value={SWATCH_COLOR_NAMES[topCoverAttribute.value]}
        />
      )}
      <SummarySwatch
        label={chromeDetailsAttribute.name}
        value={chromeDetailsAttribute.value}
        colorName={
          productData[chromeDetailsAttribute.name][chromeDetailsAttribute.value]
            .finalColorName
        }
      />
      {dotPatternAttribute.value !== 'NO PATTERN' && (
        <SummarySwatch
          label={dotPatternAttribute.name}
          value={dotPatternAttribute.value}
          colorName={
            productData[dotPatternAttribute.name][dotPatternAttribute.value]
              .finalColorName
          }
        />
        // <SummaryDotItem>
        //   <SummaryLabel>{dotPatternAttribute.label}</SummaryLabel>
        //   <InnerImageBlock
        //     backgroundImage={SWATCH_COLOR_CODES[dotPatternAttribute.value]}
        //   ></InnerImageBlock>
        //   <Value>
        //     {
        //       productData[dotPatternAttribute.name]?.[dotPatternAttribute.value]
        //         ?.finalColorName
        //     }
        //   </Value>
        // </SummaryDotItem>
      )}
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <NonSwatchComponent
          label={'Write your text'}
          value={`"${textAttribute.value}"`}
        />
      )}
    </SummaryPageWrapper>
  );
};

export default MaestosaSummary;
