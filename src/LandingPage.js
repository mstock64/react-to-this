import { InquiryComponent } from "./InquiryComponent";

import { BusinessComponent } from "./BusinessComponent";

export function LandingPage() {
    return (
        <>
            <div className="font-mono w-fit text-left ">
                <div className="mx-auto p-3 text-white bg-transparent ">
                    <BusinessComponent/>
                    </div>
                    <InquiryComponent></InquiryComponent>
                </div>
        </>
    )
}