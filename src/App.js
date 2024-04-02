import './App.css';
import RandomCat from './RandomCat';  
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RandomDog from './RandomDog';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  
  return (

    <div className="App">
    <ChakraProvider>
    <Tabs variant='enclosed' colorScheme='green'>
      <TabList>
        <Tab>Beaks</Tab>
        <Tab>Cheeks</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <RandomDog />
          </TabPanel>
      <TabPanel>
      <RandomCat />
        </TabPanel>

        </TabPanels>
      </Tabs>  
      </ChakraProvider>
    </div>
  );
}

export default App;
