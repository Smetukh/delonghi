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
  t,
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
        label={t(bodyAttribute.name)}
        value={bodyAttribute.value}
        colorName={t(bodyAttribute.value)}
      />
      <SummarySwatch
        label={t(chromeDetailsAttribute.name)}
        value={chromeDetailsAttribute.value}
        colorName={t(chromeDetailsAttribute.value)}
      />
      <SummarySwatch
        label={t(woodKitAttribute.name)}
        value={woodKitAttribute.value}
        colorName={t(woodKitAttribute.value)}
      />
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <NonSwatchComponent
          label={t('writeYourText')}
          value={`"${textAttribute.value}"`}
        />
      )}
    </SummaryPageWrapper>
  );
};

export default SpecialistaSummary;
