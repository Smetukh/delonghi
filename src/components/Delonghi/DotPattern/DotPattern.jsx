import {
  SWATCH_COLOR_CODES,
  SWATCH_COLOR_NAMES,
} from '../../../constants/colors';
import { Switch } from '../Switch1/Switch';
import {
  ColorButtonsTitle,
  Container,
  SelectedColor,
  ColorsWrapper,
  ImageButton,
  InnerImageBlock,
  SelectedValue,
  SwitchWrapper,
} from './DotPattern.styled';

const DotPattern = ({ title, attribute = { values: [] }, isSquare }) => {
  if (!attribute) return <></>;

  // separate Dot pattern name 'Off' and set it as a switcher (On/Off)
  const hasDotPattern = attribute.name === 'Dot Pattern';
  const attributeValues = hasDotPattern
    ? attribute.values.filter((i) => i.value !== 'Off')
    : attribute.values;
  const dotPatternOffObj =
    (hasDotPattern && attribute.values.find((item) => item.value === 'Off')) ||
    {};

  const dotPatternOffValue =
    hasDotPattern && dotPatternOffObj.selected ? 'Off' : 'On';

  const switchDotPattern = (value) => {
    if (value === 'Off') dotPatternOffObj.handleSelect();
    else attributeValues[0].handleSelect();
  };
  return (
    <Container>
      <ColorButtonsTitle>
        {title || attribute?.label}:
        <SelectedColor>
          {' '}
          {hasDotPattern && (
            <SwitchWrapper>
              <Switch
                isDotPattern={true}
                setValue={switchDotPattern}
                value={dotPatternOffValue}
              />
            </SwitchWrapper>
          )}
          <SelectedValue>
            {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
          </SelectedValue>
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper hasDotPattern={hasDotPattern}>
        {attributeValues.map((item, i) => {
          return (
            <ImageButton key={i} selected={item.selected}>
              <InnerImageBlock
                backgroundImage={SWATCH_COLOR_CODES[item.value]}
                onClick={item.handleSelect}
              ></InnerImageBlock>
            </ImageButton>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};

export default DotPattern;
