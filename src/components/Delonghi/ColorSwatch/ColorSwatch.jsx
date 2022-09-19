import { swatchColors } from '../../../constants/colors';
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
        <SelectedColor> {attribute?.value}</SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper>
        {attribute?.values.map((item, i) => (
          <ColorButton key={i} type="button" selected={item.selected}>
            <div
              className="rounded-full h-full w-full cursor-pointer"
              style={{
                backgroundColor:
                  swatchColors[item.value] ||
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
