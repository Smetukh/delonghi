import CloseConfigurator from './CloseConfigurator/CloseConfigurator';

export const modals = (props) => {
  return {
    CLOSE_CONFIGURATOR: <CloseConfigurator {...props} />,
  };
};
