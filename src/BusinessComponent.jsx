import { useState } from "react";
import { IconComponent } from "./IconComponent/IconComponent";
export function BusinessComponent({callbackSetter}) {
    
    const toggleShow = () => {
        callbackSetter("animals")
    }
    return (

        <>
            <div className="p-3 rounded-md  mx-auto bg-white text-black font-thin w-fit shadow-black shadow-sm"> 
            <button onClick={toggleShow} className="">
            <div className="flex w-fit opacity-100 mx-auto ">
                <span className=" p-3 rounded-xl w-fit font-bold text-4xl mx-auto m-3 sticky top-2">
                    Stock System
                </span>
                <IconComponent />
            </div>
            </button>
            </div>
        </>
    )
}