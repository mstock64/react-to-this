import React, { useState, useEffect, useCallback } from 'react';
import { Button, Center, Image } from '@chakra-ui/react'
import FetchData  from './AnimalCardComponentUtils';

function AnimalCardComponent({name}) {
  const [data, setData] = useState([]); 
  
  const changePhoto = useCallback( async () => {
      let payload = await FetchData(name)
      setData(payload);      
      return payload;
  }, [name]);

  useEffect( () => {
     changePhoto()
  }, [changePhoto]); 


  return (
    <div>
      {data.length > 0 ? (
        <span>
          {data.map(item => (
            <>
                <Center>
                  <Image borderRadius='lg' boxSize='640px' src={item.url} alt='cat' />
                  </Center>
            <br/><p>
                Source: {item.url}
              </p>
              <Button onClick={changePhoto}>New {name}</Button>
              
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

