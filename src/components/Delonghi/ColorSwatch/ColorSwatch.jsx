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
  ImageButton,
  InnerImageBlock,
  SelectedValue,
  ColorContainer,
} from './ColorSwatch.styled';
import DiagonalLine from '../../../assets/svg/DiagonalLine';

export const ColorSwatch = ({
  disabledColors = [],
  title,
  attribute = { values: [] },
  isSquare,
}) => {
  if (!attribute) return <></>;
  // const hasTopCover = attribute.name === 'Glossy Stainless Steel Top cover';

  // const hasTopCoverObj =
  //   (hasTopCover && attribute.values.find((item) => item.value === 'Off')) ||
  //   {};

  // const hasTopCoverOffValue =
  //   hasTopCover && hasTopCoverObj.value === 'Metal' ? 'Off' : 'On';

  // separate Dot pattern name 'Off' and set it as a switcher (On/Off)
  // const hasDotPattern = attribute.name === 'Dot Pattern';
  const attributeValues = attribute.values;
  // hasDotPattern
  //   ? attribute.values.filter((i) => i.value !== 'Off')
  //   : attribute.values;

  return (
    <Container>
      <ColorButtonsTitle>
        {title || attribute?.label}:
        <SelectedColor>
          {' '}
          <SelectedValue>
            {SWATCH_COLOR_NAMES[attribute?.value] || attribute?.value}
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
                  {isSquare && item.value === 'Off' && <DiagonalLine />}
                </InnerColorBlock>
              </ColorButton>
            </ColorContainer>
          );
        })}
      </ColorsWrapper>
    </Container>
  );
};
