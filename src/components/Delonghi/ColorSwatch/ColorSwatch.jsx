import {
  SWATCH_COLOR_CODES,
  SWATCH_COLOR_NAMES,
} from '../../../constants/colors';
import { Switch } from '../Switch/Switch';
import {
  ColorButton,
  ColorButtonsTitle,
  Container,
  SelectedColor,
  ColorsWrapper,
  InnerColorBlock,
  ImageButton,
  InnerImageBlock,
} from './ColorSwatch.styled';
import DiagonalLine from '../../../assets/svg/DiagonalLine';

export const ColorSwatch = ({
  title,
  attribute = { values: [] },
  isSquare,
}) => {
  if (!attribute) return <></>;

  // separate Dot pattern name 'Off' and set it as a switcher (On/Off)
  const hasDotPattern = attribute.name === 'Dot Pattern';
  const attributeValues = hasDotPattern
    ? attribute.values.filter((i) => i.value !== 'Off')
    : attribute.values;
  const isNoneSquareItem = isSquare; // attribute.name === 'Wood Kit';
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
            <Switch
              isDotPattern={true}
              setValue={switchDotPattern}
              value={dotPatternOffValue}
            />
          )}
          {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper hasDotPattern={hasDotPattern}>
        {attributeValues.map((item, i) => {
          return hasDotPattern ? (
            <ImageButton key={i} selected={item.selected}>
              <InnerImageBlock
                backgroundImage={SWATCH_COLOR_CODES[item.value]}
                onClick={item.handleSelect}
              ></InnerImageBlock>
            </ImageButton>
          ) : (
            <ColorButton isSquare={isSquare} key={i} selected={item.selected}>
              <InnerColorBlock
                isSquare={isSquare}
                backgroundImage={SWATCH_COLOR_CODES[item.value]}
                selected={item.selected}
                onClick={item.handleSelect}
              >
                {isNoneSquareItem && item.value === 'Off' && <DiagonalLine />}
              </InnerColorBlock>
            </ColorButton>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};
