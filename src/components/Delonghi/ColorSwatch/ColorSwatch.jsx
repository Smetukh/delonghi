import {
  SWATCH_COLOR_CODES,
  SWATCH_COLOR_NAMES,
} from '../../../constants/colors';
import {
  ColorButton,
  ColorButtonsTitle,
  Container,
  SelectedColor,
  ColorsWrapper,
  InnerColorBlock,
} from './ColorSwatch.styled';

export const ColorSwatch = ({ title, attribute }) => {
  if (!attribute) return <></>;

  return (
    <Container>
      <ColorButtonsTitle>
        {title || attribute?.label}:
        <SelectedColor>
          {' '}
          {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper>
        {attribute?.values.map((item, i) => (
          <ColorButton key={i} selected={item.selected}>
            <InnerColorBlock
              backgroundImage={SWATCH_COLOR_CODES[item.value]}
              onClick={item.handleSelect}
            ></InnerColorBlock>
          </ColorButton>
        ))}
      </ColorsWrapper>
    </Container>
  );
};
