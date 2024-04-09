import React, { useState, useEffect } from 'react';
import { Button, Image } from '@chakra-ui/react'
function RandomCat() {
  const [data, setData] = useState([]); 
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }}

  useEffect(() => {
    fetchData();
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
              
              <Button onClick={fetchData}>New Cat</Button>
            </>
            
          ))}

        </span>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default RandomCat;
