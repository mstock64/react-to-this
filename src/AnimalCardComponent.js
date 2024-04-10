import React, { useState, useEffect } from 'react';
import { Button, Center, Image } from '@chakra-ui/react'
import FetchData  from './AnimalCardComponentUtils';



function AnimalCardComponent({name}) {
  const [data, setData] = useState([FetchData()]); 
  
  let result = async () => {
    let dataum = await FetchData(name)
    setData(dataum);
    return dataum;
  }
  useEffect( () => {
    setData(result());
  }, []); 

  

  return (
    <div>
      {data.length > 0 ? (
        <span>
          {data.map(item => (
            <>
                <Center>
                  <Image borderRadius='lg' boxSize='540px' src={item.url} alt='cat' />
                  </Center>
            <br/><p>
                Source: {item.url}
              </p>
              <Button onClick={result}>New {name}</Button>
              
            </>
            
          ))}

        </span>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default AnimalCardComponent;

