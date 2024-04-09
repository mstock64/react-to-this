import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import AnimalCardComponent from './AnimalCardComponent';
function App() {
  
  return (

    <div className="App">
    <ChakraProvider>
    <Tabs variant='enclosed' colorScheme='green'>
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
      </ChakraProvider>
    </div>
  );
}

export default App;
