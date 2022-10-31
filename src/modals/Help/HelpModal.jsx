import React from 'react';
import { Wrapper, Image, TabsContainer, theme } from './HelpModal.styled';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ThemeProvider } from '@mui/material/styles';

const HelpModal = ({ closeModal }) => {
  const [currentTab, setCurrentTab] = React.useState('touch');

  const handleChange = (event, tab) => {
    setCurrentTab(tab);
  };
  return (
    <Wrapper onClick={closeModal}>
      <Image imageType={currentTab}>
        <TabsContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ThemeProvider theme={theme}>
            <TabContext value={currentTab}>
              <TabList onChange={handleChange}>
                <Tab label="Touch" value="touch" />
                <Tab label="Mouse" value="mouse" />
              </TabList>
            </TabContext>
          </ThemeProvider>
        </TabsContainer>
      </Image>
    </Wrapper>
  );
};

export default HelpModal;
