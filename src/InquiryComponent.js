import { useState } from "react"

export function InquiryComponent() {
    const [isSelected, setSelected] = useState(false)
    return (
        <div className=" m-3  p-2 rounded-md text-white">
            <p className="mb-3">
                Please feel free to reach out we offer for consituation on all Technology and gaget Inquries.
            </p>
            <form class="grid lg:grid-cols-3 sm:grid-cols-1 ">
                <div>
                    <label className="m-3 font-bold" >Full Name</label>
                    <input type="text" name="name" className="p-2 rounded-sm text-black " />
                </div>
                <div>
                    <label className="m-3 font-bold">Email</label>
                    <input type="email" name="email" className="p-2 rounded-sm text-black" />
                </div>
                <div>
                    <label className="m-3 font-bold">Inquiry Type</label>

                    <select onChange={(event) => {
                        event.target.value != "" ? setSelected(true) : setSelected(false)
                    }} className="rounded-sm text-black">
                        <option value="" selected disabled hidden>Select an option</option>
                        <option>Apple Product</option>
                        <option>Gaming Console</option>
                        <option>Windows Computer</option>
                    </select>
                </div>
                <br />
                {isSelected ? (
                    <div className="col-span-3">
                       

                            <label className="font-bold">Detailed description of the problem</label>
                            <br />
                            <textarea class="w-11/12 h-full mb-4  rounded-md p-2 text-black mx-auto" />

                      
                        <input type="submit" className="w-fit p-3 bg-blue-500 hover:bg-blue-650 hover:scale-125 text-white font-bold text-xl rounded-md m-1" />
                        
                    </div>


                ) : ('')}
            </form>
        </div>
    )
}