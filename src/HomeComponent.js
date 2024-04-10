import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AnimalCardComponent from './AnimalCardComponent';
function HomeComponent() {
    return (
        <div>
            <Tabs isFitted variant='enclosed-colored' colorScheme='teal'>
                <TabList>
                    <Tab>Sneaky Fuss</Tab>
                    <Tab>Good Boys</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AnimalCardComponent name='cat' />
                    </TabPanel>
                    <TabPanel>
                        <AnimalCardComponent name='dog' />
                    </TabPanel> 
                </TabPanels>
            </Tabs>  
        </div>
    );
}

export default HomeComponent;