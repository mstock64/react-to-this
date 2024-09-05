import React, {useState } from "react"
import HomeComponent from "../HomeComponent"
export default function Navbar() {
    const [state, setComp] =  useState('')
    const func =  () => {
        console.log("hi")
    }
    const setStateToAnimal = () => {
        setComp("Animals")
    }
    const setSttaeToAbout = () => {
        setComp("About Me")
    }
    const setStateToProjects = () => {
        setComp("Projects")
    }
    return (
        <>
            <div className="sticky">
                <div className="grid grid-cols-3 bg-orange-600 p-4 rounded-xl shadow-md m-2 w-auto text-white">
                    <div>
                        <button onClick={setStateToAnimal}>
                            Animals
                        </button>
                        
                    </div>
                    <div>
                        <button onClick={setStateToProjects}>
                            About Me
                        </button>
                    </div>
                    <div>
                        <button onClick={setStateToProjects}>
                            Projects
                        </button>
                    </div>
                </div>
            </div>
            { state === 'Animals' ? (<><HomeComponent/></>) : ('')}
            { state === 'About Me' ? (<><HomeComponent/></>) : ('')}
            { state === 'Projects' ? (<><HomeComponent/></>) : ('')}
        </>
    )
}