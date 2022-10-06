import { SWATCH_COLOR_CODES } from '../../../constants/colors';
import {
  ColorButton,
  ColorButtonsTitle,
  Container,
  SelectedColor,
  ColorsWrapper,
  InnerColorBlock,
  SelectedValue,
  ColorContainer,
} from './ColorSwatch.styled';
import DiagonalLine from '../../../assets/svg/DiagonalLine';

export const ColorSwatch = ({
  disabledColors = [],
  title,
  attribute = { values: [] },
  isSquare,
  productData,
}) => {
  if (!attribute) return <></>;

  const attributeValues = attribute.values;
  const attributeName = attribute.name;
  const attributeValue = attribute.value;

  return (
    <Container>
      <ColorButtonsTitle>
        {title || attributeName}:
        <SelectedColor>
          {' '}
          <SelectedValue>
            {productData[attributeName]?.[attributeValue]?.finalColorName ||
              attributeValue}
          </SelectedValue>
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper>
        {attributeValues.map((item, i) => {
          const disabled = disabledColors.includes(item.value);
          return (
            <ColorContainer key={i} disabled={disabled}>
              <ColorButton
                isSquare={isSquare}
                selected={item.selected}
                disabled={disabled}
              >
                <InnerColorBlock
                  isSquare={isSquare}
                  backgroundImage={SWATCH_COLOR_CODES[item.value]}
                  selected={item.selected}
                  onClick={item.handleSelect}
                >
                  {isSquare && item.value === 'NO WOOD' && <DiagonalLine />}
                </InnerColorBlock>
              </ColorButton>
            </ColorContainer>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};
