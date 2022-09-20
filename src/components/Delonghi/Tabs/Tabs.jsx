import React, { useState } from 'react';
import { Tab, TabsWrapper } from './Tabs.styled';

const Tabs = ({ tabs, tabIndex }) => {
  const [currentTab, setCurrentTab] = useState(tabIndex);

  const handleTabClick = (e) => {
    setCurrentTab(+e.target.id);
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
