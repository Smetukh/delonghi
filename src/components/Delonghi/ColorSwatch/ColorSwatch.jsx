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
  t,
}) => {
  if (!attribute) return <></>;

  const attributeValues = attribute.values;
  const attributeName = attribute.name;
  const attributeValue = attribute.value;

  return (
    <Container>
      <ColorButtonsTitle>
        {t(`${title || attributeName}`)}:
        <SelectedColor>
          {' '}
          <SelectedValue>
            {t(
              attributeValue
              // `${
              //   productData[attributeName]?.[attributeValue]?.finalColorName ||
              //   attributeValue
              // }`
            )}
          </SelectedValue>
        </SelectedColor>
      </ColorButtonsTitle>
      <ColorsWrapper>
        {attributeValues.map((item, i) => {
          const disabled = disabledColors.includes(item.value);
          const bgImage = SWATCH_COLOR_CODES[item.value];

          return (
            <ColorContainer key={i} disabled={disabled}>
              <ColorButton selected={item.selected} disabled={disabled}>
                <InnerColorBlock
                  backgroundImage={bgImage ? bgImage : ''}
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
