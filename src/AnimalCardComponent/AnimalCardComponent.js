import React, { useState, useEffect, useCallback } from 'react';
import FetchData from './AnimalCardComponentUtils';

function AnimalCardComponent({ name = 'cat', state = false }) {

  const [previousData, setPreviousData] = useState([])
  const [forwardData, setForwardData] = useState([])
  const changePhoto = useCallback(async () => {
    let payload = await FetchData(name)

    let previous = previousData
    previous.push(payload)

    setPreviousData(previous)
    setData(payload);
  });

  const [data, setData] = useState(changePhoto);


  const goBack = useCallback(() => {

    let previous = previousData
    let forward = forwardData
    if (previous.length < 1)
      return;
    let curr = previous.pop()
    forward.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)

  });
  const goForward = useCallback(() => {
    let previous = previousData
    let forward = forwardData

    if (forward.length < 1)
      return;

    let curr = forward.pop()
    previous.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)

  });
  const transformstate = () => {
    if (forwardData.length > 0)
      goForward()
    else
      changePhoto()
  }
  return (
    <div className=' '>
      {data !== undefined && data.length > 0 ? (
        <>
          {data.map(item => (
            <>
              <div className='grid grid-cols-1 gap-y-4 fixed'>
                <div class='mx-auto ml-2 mr-2 '>
                <div className='w-screen h-screen overflow-hidden overflow-x-hidden'>
                  <div className='w-fit mx-auto relative'>
                    <img src={item.url} class='rounded-lg mx-auto shadow-xl' alt={name} />
                    <div className='opacity-0'>
                      {previousData.length > 1 ? (
                        <>
                        <button onClick={transformstate} class='rounded-r-md bg-blue-400  text-white text-xl p-2 z-50 absolute top-0 right-0 h-full w-1/2'></button>

                      < button onClick={goBack} class='rounded-l-md bg-blue-400 text-white text-xl border-r-2 border-black  p-2 z-50 absolute top-0 left-0 h-full w-1/2 '>  </button>
                      </>
                      ) : (
                        < button onClick={transformstate} class='rounded-l-md bg-blue-400 text-white text-xl border-r-2 border-black  p-2 z-50 absolute top-0 left-0 h-full w-full'>  </button>)}
                        
                  </div>

                  </div>
                </div>


              </div>

            </div >
            </>

      ))}
    </>

  ) : (
    <p>Loading data...</p>
  )
}
    </div >
  );
}

export default AnimalCardComponent;


