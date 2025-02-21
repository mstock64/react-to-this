import { useState } from "react"
import {DescriptionComponent} from './DescriptionComponent'
import { FieldComponent } from "./FieldComponent"
import { DropdownComponent } from "./DropdownComponent"
const nameReg = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export function InquiryComponent() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [requestType, setRequestType] = useState("")
    const clearData = () => {
        setEmail("")
        setName("")
        setDescription("")
        setRequestType("")
    }
    return (
        <div className=" m-3 p-4 rounded-md text-black bg-white shadow-sm shadow-black">
            <p className="mb-3">
            Please feel free to reach out to us! We’re here to offer friendly consultations on all your technology and gadget inquiries let’s solve your tech challenges together!
            </p>
            <form method="post" class="" action="" >
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-3">
                    <FieldComponent name={"Full Name"} paramValue={name} validatorRegex={nameReg} callbackSetter={setName}/>
                    <FieldComponent name={"Email"} paramValue={email} callbackSetter={setEmail} validatorRegex={emailReg}/>
                    <DropdownComponent options={["Apple Product", "Gaming Console", "Windows Computer"]} label={"Inquiry Type"} callbackSetter={setRequestType}/>
                {requestType !== "" ? (
                    <div className="col-span-3 p-3 ">
                        <DescriptionComponent callbackSetter={setDescription} paramValue={description}/>
                        <div className="flex justify-end gap-6">
                        <input type="submit" className="w-fit p-3 bg-blue-400 hover:bg-blue-650 hover:scale-125 text-white font-bold text-xl rounded-md  ring-2 ring-gray-300 " />
                        <input type="button" className="w-fit p-3 bg-orange-500 hover:bg-blue-650 hover:scale-125 text-white font-bold text-xl rounded-md  ring-2 ring-gray-300 " value={"Clear"} onClick={clearData}/>
                        </div>
                    </div>
                ) : ('')}
                </div>
            </form>
        </div>
    )
}