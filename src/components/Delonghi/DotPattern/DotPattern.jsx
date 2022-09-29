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

const DotPattern = ({ title, attribute = { values: [] }, isSquare }) => {
  if (!attribute) return <></>;

  const attributes = useThreekitSelector((s) => s.attributes);

  // for metal glossy top cover we may have some not allowed colors
  const disallowedDotPatterns =
    attributes['Glossy Stainless Steel Top cover'].value === 'Metal'
      ? colorRules[attributes['Chrome Details'].value][
          attributes['Body Metal Wrapping'].value
        ] || []
      : [];

  // separate Dot pattern name 'Off' and set it as a switcher (On/Off)
  const hasDotPattern = attribute.name === 'Dot Pattern';
  const attributeValues = hasDotPattern
    ? attribute.values.filter((i) => {
        // filter out No color and colors which are not allowed from pdf
        return i.value !== 'Off' && !disallowedDotPatterns.includes(i.value);
      })
    : attribute.values;
  const dotPatternOffObj =
    (hasDotPattern && attribute.values.find((item) => item.value === 'Off')) ||
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
            title={title || attribute?.label}
            setValue={switchDotPattern}
            isSelected={!dotPatternOffObj.selected}
          />
        </SwitchWrapper>
        <SelectedValue>
          {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
        </SelectedValue>
      </SelectedColor>
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
