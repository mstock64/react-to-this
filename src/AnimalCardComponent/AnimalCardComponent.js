import React, { useState, useEffect, useCallback } from 'react';
import FetchData from './AnimalCardComponentUtils';


function AnimalCardComponent({ name = 'cat', state = false }) {

  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([])
  const [forwardData, setForwardData] = useState([])

  const changePhoto = useCallback(async () => {
    let payload = await FetchData(name)
    
    let previous = previousData
    previous.push(payload)

    setPreviousData(previous)
    setData(payload);

    console.log(previousData.length)
    logIt()
  });

  useEffect(() => {
    changePhoto();

  }, [state])

  const logIt = () => {
    console.log(previousData)
    console.log(forwardData)
  }
  const goBack = useCallback(() => {

    let previous = previousData
    let forward = forwardData
    if(previous.length < 1)
      return;
    let curr = previous.pop()
    forward.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)
    logIt()
    
  });
  const goForward = useCallback(() => {
    let previous = previousData
    let forward = forwardData
    
    if(forward.length < 1)
      return;
    
    let curr = forward.pop()
    previous.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)
    logIt() 
  });
  const transformstate = () => {
    if(forwardData.length > 0)
      goForward()
    else
      changePhoto()
  }
  return (
    <div>
      {data !== undefined && data.length > 0 ? (
        <span>
          {data.map(item => (
            <>
              
              <div class='mx-auto ml-2 mr-2'>
                <img src={item.url} class='rounded-lg mx-auto shadow-xl' alt={name} />
              </div>

              <br /><p class='text-sm'>
                Source: {item.url}
              </p>

              {previousData.length > 1 ? (
                
                <div class='m-3 inline-flex'> 
                  <button onClick={goBack} class='rounded-md bg-gray-800 text-white text-xl p-2'> Back</button> 
                  </div>) : ('')}

              <button onClick={transformstate} class='rounded-md bg-gray-800 text-white text-xl p-2'>Next</button>
              
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
