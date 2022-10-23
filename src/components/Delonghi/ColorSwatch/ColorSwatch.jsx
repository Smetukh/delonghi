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
          console.log(
            `%cqqq disabled [${SWATCH_COLOR_CODES[item.value]}]= `,
            'font-weight: bold;color: #90ee90',
            disabled
          );
          return (
            <ColorContainer key={i} disabled={disabled}>
              <ColorButton selected={item.selected} disabled={disabled}>
                <InnerColorBlock
                  backgroundImage={SWATCH_COLOR_CODES[item.value]}
                  selected={item.selected}
                  onClick={item.handleSelect}
                >
                  {(item.value === 'NO WOOD' || disabled) && <DiagonalLine />}
                </InnerColorBlock>
              </ColorButton>
            </ColorContainer>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};
