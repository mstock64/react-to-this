export function DropdownComponent({ label, options, callbackSetter }) {
    return (
        <div>
            <label className="m-3 font-bold">{label}</label>
            <select onChange={(event) => {
                event.target.value != "" ? callbackSetter(event.target.value) : callbackSetter("")
            }} className="p-3 rounded-md text-black border-2 border-gray-300">
                <option value="" selected disabled hidden>Select an option</option>
                {options.map(element => {
                    return <option value={element}>{element}</option>
                })}
            </select>

        </div>
    )
}