import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ResumeTabs extends Component {
    render() {
        if (this.props) {
            const { tabs, panels } = this.props
            var tabsComponents = tabs && tabs.map((tab) => <Tab>{tab}</Tab>)
            var panelsComponents = panels && panels.map((panel) => <TabPanel>{panel}</TabPanel>)
        }
        return (
            <Tabs>
                <TabList className="react-tabs__tab-list tab-list">
                    {tabsComponents}
                </TabList>
                {panelsComponents}
            </Tabs>
        )
    }
}

export default ResumeTabs
