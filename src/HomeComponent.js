import React, { useState } from 'react';
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

 
export function HomeComponent() {
    const [catState, setCatState ] = useState(false)
    const [dogState, setDogState ] = useState(false)



    return (
        
        <div class=''>
             {!dogState && !catState ? (<>
                <div className='m-2 mb-10 p-3 bg-white rounded-xl  w-fit mx-auto font-sans  shadow-sm shadow-slate-500'>
                    <p class='text-4xl text-center'> Welcome to the Random Dog and Cat Photo Generator</p> <br/>
                    <p  class='text-xl text-center'> Please select type of animal you would like to see photos of on the nav above</p>
                </div>
            
            </>) : ('')}
            <div class="grid grid-cols-2 m-3 p-2 gap-8 sticky top-2 bg-gray-100 rounded-lg shadow-sm shadow-slate-500 font-bold text-xl w-44 mx-auto">
                <div class="mx-auto">
                    <button onClick={() => {
                        setCatState(toggleCat())    
                        if(showDog)
                            setDogState(toggleDog())
                    }} > Cats </button>
                </div>
                <div>
                    <button  onClick={() => {
                        setDogState(toggleDog())
                        if(showCat)
                            setCatState(toggleCat())
                    }}> Dogs </button> 
                </div>
            </div>
           
            {dogState ? (<> <AnimalCardComponent name='dog' state={catState}  /> </>): ('')}
            {catState ? (<> <AnimalCardComponent name='cat' state={dogState} /> </>): ('')}
        </div>
    );
}


