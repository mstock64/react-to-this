import React, { useState, useEffect } from 'react';
import { Button, Image } from '@chakra-ui/react'
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
            <><span key={item.id}>
                  <Image boxSize='540px' src={item.url} alt='cat' margin-left='auto' margin-right='auto' />
            </span><br/><p>
                Source: {item.url}
              </p>
              
              <Button onClick={result}>New Cat</Button>
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

