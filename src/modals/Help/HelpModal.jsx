import React from 'react';
import { Wrapper, Image, TabsContainer, theme } from './HelpModal.styled';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const HelpModal = (props) => {
  const [currentTab, setCurrentTab] = React.useState('mouse');
  const { t } = useTranslation();

  const handleChange = (event, tab) => {
    setCurrentTab(tab);
  };

  const lang = window.DLG?.config.currentLanguageIsocode;

  const imageType = `${currentTab}_${lang.replace('-', '_')}`.toUpperCase();

  return (
    <Wrapper onClick={props.closeModal}>
      <Image imageType={imageType}>
        <TabsContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ThemeProvider theme={theme}>
            <TabContext value={currentTab}>
              <TabList onChange={handleChange}>
                <Tab label={t('mouse')} value="mouse" />
                <Tab label={t('touch')} value="touch" />
              </TabList>
            </TabContext>
          </ThemeProvider>
        </TabsContainer>
      </Image>
    </Wrapper>
  );
};

export default HelpModal;
