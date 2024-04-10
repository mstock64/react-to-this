import React, { useState, useEffect } from 'react';
import { Button, Image, Stack } from '@chakra-ui/react'
import FetchData  from './AnimalCardComponentUtils';

function AnimalCardComponent({name}) {
  let forward = [];
  let backward = [];
  const [data, setData] = useState([]); 
  
  
  
  let result = async () => {
    let dataum = await FetchData(name)
    setData(dataum);
    return dataum;
  }
  
  async function goForward() {
    if(forward.length > 0){
      let tmpDt = forward.pop();
      backward.push(tmpDt);
      setData(tmpDt);
    }
    else{
      let tmpDt = await result();
      backward.push(tmpDt);
    }
  }

  function goBackward(){
    alert(backward.length);
    if(backward.length > 0){

      let tmpDt = backward.pop();
      alert(tmpDt.url);
      forward.push(tmpDt);
      setData(tmpDt);
    }
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
              
              <div>
                <Stack direction='row' spacing={4} >
                  <Button onClick={goBackward}>Backward</Button>
                  <Button onClick={goForward}>Forward</Button>
                </Stack>
              </div>
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

