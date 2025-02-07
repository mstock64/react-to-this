import React, { useState } from 'react';
import FetchData from './AnimalCardComponentUtils';


function AnimalCardComponent({ name = 'cat', state = false }) {

  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([])
  const [forwardData, setForwardData] = useState([])

  const changePhoto = async () => {
    let payload = await FetchData(name)

    let previous = previousData
    previous.push(payload)

    setPreviousData(previous)
    setData(payload);

  };



  const goBack = () => {

    let previous = previousData
    let forward = forwardData
    if (previous.length < 1)
      return;
    let curr = previous.pop()
    forward.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)

  };
  const goForward = () => {
    let previous = previousData
    let forward = forwardData

    if (forward.length < 1)
      return;

    let curr = forward.pop()
    previous.push(data)

    setData(curr)
    setPreviousData(previous)
    setForwardData(forward)
  };
  const transformstate = () => {
    if (forwardData.length > 0)
      goForward()
    else
      changePhoto()
  }

  return (
    <div class="">
      {data !== undefined && data.length > 0 ? (
        <span>
          {data.map(item => (
            <div class="flex justify-center">
              <div class="relative w-fit">
                <div class=' ml-2 mr-2'>
                  <img src={item.url} class='rounded-lg  shadow-xl' alt={name} />
                </div>


                <div class="">
                  {previousData.length > 1 ?
                    (
                      <button onClick={goBack} class='rounded-md bg-gray-800 text-white text-xl p-2 left-0 absolute top-0 w-1/2 h-full bg-transparent'/> 
                    ) : ('')}

                  <button onClick={transformstate} class='rounded-md absolute right-0 top-0 w-1/2 bg-gray-800 text-white text-xl h-full p-2 bg-transparent'/>
                </div>
              </div>
            </div>

          ))}

        </span>
      ) : (
        <div>
          <p>Loading data...</p>
          {setTimeout(() => {
            changePhoto()
          }, 30)}
        </div>

      )}
    </div>
  );
}


export default AnimalCardComponent;