import React, { useState, useCallback } from 'react';
import AnimalCardComponent from './AnimalCardComponent/AnimalCardComponent'
let showDog = false
let showCat = false

const toggleDog = () => {
    showDog = !showDog
    return showDog
}

const toggleCat = () => {
    showCat = !showCat
    return showCat
}

 
function HomeComponent() {
    const [catState, setCatState ] = useState(false)
    const [dogState, setDogState ] = useState(false)



    return (
        
        <div class=''>
             {!dogState && !catState ? (<>
                <div className='m-2 mb-10 p-3 bg-gray-200 rounded-xl w-fit mx-auto shadow-md'>
                    <p class='text-2xl text-center'> Weclome to the Random Dog and Cat Photo Generator</p> <br/>
                    <p  class='text-lg text-center'> Please select type of animal you would like to see photos of on the nav above</p>
                </div>
            
            </>) : ('')}
            <div class="grid grid-cols-2 m-3 p-2 sticky top-2 bg-gray-100 rounded-lg shadow-md w-44 mx-auto">
                <div class="border-r-2 border-black">
                    <a onClick={() => {
                        setCatState(toggleCat())    
                        if(showDog)
                            setDogState(toggleDog())
                    }}  > Cats </a>
                </div>
                <div>
                    <a onClick={() => {
                        setDogState(toggleDog())
                        if(showCat)
                            setCatState(toggleCat())
                    }}> Dogs </a> 
                </div>
            </div>
           
            {dogState ? (<> <AnimalCardComponent name='dog' state={catState}  /> </>): ('')}
            {catState ? (<> <AnimalCardComponent name='cat' state={dogState} /> </>): ('')}
          
        </div>
    );
}

export default HomeComponent;

