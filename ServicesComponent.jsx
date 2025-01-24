export function ServicesComponent(){
    return (
        

        <div className="grid grid-cols-2 gap-1  p-1">

            <div className="relative opacity-90">
                <p className="absolute text-white p-3 top-0 font-bold">
                    We Fix Windows Machines (Servers, Desktop, Laptop, Phone), Apple Products (iPhones/iPad), Macbooks, and iMacs.
                </p>
                <img src={bluescreen} className="w-full rounded-md" />
            </div>
            
            <div className="relative opacity-90">
                <p className="absolute p-3  bottom-0 text-white font-bold">
                    Have a faulty Xbox, or Playstation we will fix them quickly and cheaply. iPhone cracked we will fix it. Our goal is provide quick, cheap and realible repairs to Westchester and Hudson Valley Region.
                </p>
                <img src={brokenConsole} className="w-fit h-fit rounded-md" />
            </div>

        </div> 
    )
}