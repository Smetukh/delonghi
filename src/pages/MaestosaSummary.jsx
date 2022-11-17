import React from 'react';
import { SUMMARY_COLOR_NAMES } from '../constants/colors';
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
  t,
  bodyAttribute,
  topCoverAttribute,
  chromeDetailsAttribute,
  dotPatternAttribute,
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
      {topCoverAttribute?.value === 'Metal' && (
        <NonSwatchComponent
          label={t(topCoverAttribute.label)}
          value={t(SUMMARY_COLOR_NAMES[topCoverAttribute.value])}
        />
      )}
      <SummarySwatch
        label={t(chromeDetailsAttribute.name)}
        value={chromeDetailsAttribute.value}
        colorName={t(chromeDetailsAttribute.value)}
      />
      {dotPatternAttribute.value !== 'NO PATTERN' && (
        <SummarySwatch
          label={t(dotPatternAttribute.name)}
          value={dotPatternAttribute.value}
          colorName={t(dotPatternAttribute.value)}
        />
      )}
      {!!textAttribute.value && tagAttribute.value === 'On' && (
        <NonSwatchComponent
          label={t('writeYourText')}
          value={`"${textAttribute.value}"`}
        />
      )}
    </SummaryPageWrapper>
  );
};

export default MaestosaSummary;
