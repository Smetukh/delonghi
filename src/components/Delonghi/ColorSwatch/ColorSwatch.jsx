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
            <div
              className="rounded-full h-full w-full cursor-pointer"
              style={{
                background:
                  SWATCH_COLOR_CODES[item.value] ||
                  item.value.split(' ')[0].toLowerCase(), // TODO: remove this split case
              }}
              onClick={item.handleSelect}
            ></div>
          </ColorButton>
        ))}
      </ColorsWrapper>
    </Container>
  );
};
