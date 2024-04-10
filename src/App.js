import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import HomeComponent from './HomeComponent';
function App() {
  
  return (

    <div className="App">
      <ChakraProvider>
        <HomeComponent />
      </ChakraProvider>
    </div>
  );
}

export default App;
