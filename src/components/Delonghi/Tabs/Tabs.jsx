import React, { useState } from 'react';
import { eventTracker } from '../../../utils/helpers';
import { Tab, TabsWrapper } from './Tabs.styled';

const Tabs = ({ tabs, tabIndex }) => {
  const [currentTab, setCurrentTab] = useState(tabIndex);

  const handleTabClick = (e) => {
    const tabId = +e.target.id;
    if (tabId === 2) eventTracker('configuration_summary');
    setCurrentTab(tabId);
  };

  return (
    <TabsWrapper>
      <div>
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            id={tab.id}
            active={currentTab === tab.id}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </Tab>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div key={i}>{currentTab === tab.id && <div>{tab.content}</div>}</div>
        ))}
      </div>
    </TabsWrapper>
  );
};

export default Tabs;
