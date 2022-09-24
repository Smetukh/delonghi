import CloseConfigurator from './CloseConfigurator/CloseConfigurator';
import HelpModal from '../modals/Help/HelpModal';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';

export const modals = (props) => {
  return {
    CLOSE_CONFIGURATOR: <CloseConfigurator {...props} />,
    PLAYER_HELP_MODAL: <HelpModal {...props} />,
    TERMS_AND_CONDITIONS: <TermsAndConditions {...props} />,
  };
};
