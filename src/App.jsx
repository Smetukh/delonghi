import {
  ThreekitProvider,
  Player,
  PortalToElement,
  Share,
  // FlatForm,
} from '@threekit-tools/treble';
import FlatForm from './components/Delonghi/Flatform/Flatform';

const App = () => (
  <ThreekitProvider>
    <div className="tk-treble-player">
      <Player>
        <Player.TopRightWidgets>
          <Share />
        </Player.TopRightWidgets>
      </Player>
    </div>
    <PortalToElement to="tk-treble-form" strict={true}>
      <FlatForm />
    </PortalToElement>
  </ThreekitProvider>
);

export default App;
