import { InquiryComponent } from "./InquiryComponents/InquiryComponent";
import { BusinessComponent } from "./BusinessComponent";
import { useState } from "react";
import {HomeComponent} from "./HomeComponent"
export function LandingPage() {
    const [state, setState] = useState("business")
    return (
        <>
            <div className="font-mono w-fit text-left mx-auto h-max">
                
                <div className="mx-auto p-3 text-white bg-transparent ">
                    <BusinessComponent callbackSetter={setState} state={state} />
                </div>

                {state === "business" ? (<InquiryComponent/>) : ('')}

                {state === "animals" ? (<HomeComponent />) : ('') }
                </div>
        </>
    )
}