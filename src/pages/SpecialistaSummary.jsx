import React from 'react';
import {
  SummaryLabel,
  Value,
  SummaryPageWrapper,
  SummaryItemContainer,
} from './Pages.styled';
import SummarySwatch from './SummarySwatch';

const NonSwatchComponent = ({ label, value }) => {
  return (
    <SummaryItemContainer>
      <SummaryLabel>{`${label}:`}</SummaryLabel>
      <span></span>
      <Value>{value}</Value>
    </SummaryItemContainer>
  );
};

const SpecialistaSummary = ({
  productData,
  bodyAttribute,
  chromeDetailsAttribute,
  woodKitAttribute,
  textAttribute,
  tagAttribute,
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
      <SummarySwatch
        label={chromeDetailsAttribute.name}
        value={chromeDetailsAttribute.value}
        colorName={
          productData[chromeDetailsAttribute.name][chromeDetailsAttribute.value]
            .finalColorName
        }
      />
      <SummarySwatch
        label={woodKitAttribute.name}
        value={woodKitAttribute.value}
        colorName={
          productData[woodKitAttribute.name][woodKitAttribute.value]
            .finalColorName
        }
      />
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
