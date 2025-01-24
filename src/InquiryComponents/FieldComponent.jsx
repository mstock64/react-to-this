import { useState } from "react"

const error = "border-red-300"
const natural = "border-gray-300"
const success = "border-green-600 border-2"

export function FieldComponent({ name, value, callbackSetter, validatorRegex }) {
    const [status, setStatus] = useState(natural)
    const eventHandler = (event) => {
        if (validatorRegex.test(event.target.value)) {
            callbackSetter(event.target.value)
            setStatus(success)
        } else {
            setStatus(error)
        }

    }
    return (
        <div className="w-fit">
            <div className="relative p-1">
                <label className="m-3 font-bold" >{name}</label>
                <input type="text" className={`p-2 rounded-md text-black border-2 ${status}`} value={value} onChange={eventHandler} />
                {status === error ? (
                    <div className="absolute top-0 right-0">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>) : ('')}

            </div>
        </div>
    )
}