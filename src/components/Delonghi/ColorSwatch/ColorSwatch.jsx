import {
  SWATCH_COLOR_CODES,
  SWATCH_COLOR_NAMES,
  SWATCH_IMAGE_NAMES,
} from '../../../constants/colors';
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

export const ColorSwatch = ({ title, attribute }) => {
  if (!attribute) return <></>;
  const hasDotPattern = attribute.name === 'Dot Pattern';
  return (
    <Container>
      <ColorButtonsTitle>
        {title || attribute?.label}:
        <SelectedColor>
          {' '}
          {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper hasDotPattern={hasDotPattern}>
        {attribute?.values.map((item, i) => {
          return hasDotPattern ? (
            <ImageButton key={i} selected={item.selected}>
              <InnerImageBlock
                backgroundImage={SWATCH_COLOR_CODES[item.value]}
                onClick={item.handleSelect}
              ></InnerImageBlock>
            </ImageButton>
          ) : (
            <ColorButton key={i} selected={item.selected}>
              <InnerColorBlock
                backgroundImage={SWATCH_COLOR_CODES[item.value]}
                onClick={item.handleSelect}
              ></InnerColorBlock>
            </ColorButton>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};
