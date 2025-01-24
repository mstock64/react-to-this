import { useState } from "react"
export function DescriptionComponent({paramValue, callbackSetter}) {
    return (
        <div>
            <label className="font-bold">Detailed description of the problem</label>
            <textarea class="w-full h-full mb-4 rounded-md p-2 text-black mx-auto  m-1 border-2 border-gray-300 shadow-large shadow-gray-200"
            
            value={paramValue} 
            onSubmit={ (event) => {
                callbackSetter(event.target.value)
                alert(event.target.value)
            }}/>
        </div>
    )
}