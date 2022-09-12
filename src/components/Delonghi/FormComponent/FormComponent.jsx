import { useAttribute } from '@threekit-tools/treble';
import { Cards } from '../Cards/Cards';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { Strips } from '../Strips/Strips';
import { Tiles } from '../Tiles/Tiles';
import { TilesGroup } from '../TilesGroup/TilesGroup';
import { TextInput } from '../TextInput/TextInput';
import { Switch } from '../Switch/Switch';

const FORM_COMPONENTS = {
  cards: Cards,
  'color-swatch': ColorSwatch,
  strips: Strips,
  tiles: Tiles,
  'tiles-group': TilesGroup,
  input: TextInput,
  switch: Switch,
};

const ATTRIBUTE_TYPE_DEFAULTS = {
  Asset: FORM_COMPONENTS.tiles,
  String: FORM_COMPONENTS.tiles,
  text: FORM_COMPONENTS.input,
  Boolean: FORM_COMPONENTS.switch,
};

function RootFormComponent(props) {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;

  let Component =
    attribute.name === 'text'
      ? ATTRIBUTE_TYPE_DEFAULTS[attribute.name]
      : ATTRIBUTE_TYPE_DEFAULTS[attribute.type];

  if (!Component) return <></>;

  return <Component attribute={attribute} />;
}

export default function FormComponent(props) {
  if (!props.attribute?.length && !props.address?.length) return <></>;
  return (
    <RootFormComponent
      attribute={props.attribute}
      includeNestedConfigurator={props.includeNestedConfigurator}
    />
  );
}
