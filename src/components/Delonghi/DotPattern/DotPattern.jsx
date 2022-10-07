import { useThreekitSelector } from '@threekit-tools/treble/dist/store';
import { colorRules } from '../../../constants/color-rules';
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

const DotPattern = ({
  productData,
  attribute = { values: [] },
  disabledColors,
}) => {
  if (!attribute) return <></>;

  // const attributes = useThreekitSelector((s) => s.attributes);

  // separate Dot pattern name 'NO PATTERN' and set it as a switcher (On/Off)
  const attributeName = attribute.name;
  const attributeValue = attribute.value;
  const hasDotPattern = attributeName === 'Dot Pattern';
  const attributeValues = hasDotPattern
    ? attribute.values.filter((i) => {
        // filter out No color and colors which are not allowed from pdf
        return i.value !== 'NO PATTERN';
      })
    : attribute.values;
  const dotPatternOffObj =
    (hasDotPattern &&
      attribute.values.find((item) => item.value === 'NO PATTERN')) ||
    {};

  const switchDotPattern = (isSelected) => {
    if (isSelected) attributeValues[0].handleSelect();
    else dotPatternOffObj.handleSelect();
  };

  return (
    <Container>
      <SelectedColor>
        {' '}
        <SwitchWrapper>
          <Switch
            title={attributeName}
            setValue={switchDotPattern}
            isSelected={!dotPatternOffObj.selected}
            disabled={disabledColors.length === attributeValues.length}
          />
        </SwitchWrapper>
        <SelectedValue>
          {productData[attributeName]?.[attributeValue]?.finalColorName ||
            attributeValue}
        </SelectedValue>
      </SelectedColor>
      <ColorsWrapper hasDotPattern={hasDotPattern}>
        {attributeValues.map((item, i) => {
          const disabled = disabledColors.includes(item.value);
          return (
            <ImageButton key={i} selected={item.selected} disabled={disabled}>
              <InnerImageBlock
                disabled={disabled}
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
