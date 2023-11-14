import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";

export default function Home() {
    return (
        <div className="h-screen grid place-items-center bg-gradient-to-r from-blue-950 to-slate-700">
            <DropdownMenu/>
        </div>
        // <div className="bg-neutral-500 h-screen flex justify-center items-center">
        //
        //     <div className="h-[800px] bg-blue-900 w-[500px]">
        //         <div className="border-2 border-orange-600 h-1/2 flex justify-center">
        //             <div className="">
        //                 <img className="h-[200px] w-[200px]" src="/img.png" alt="logo"/>
        //             </div>
        //         </div>
        //         <div className="border-2 border-orange-600 h-1/2 flex items-center flex-col   ">
        //             <div className="flex flex-col justify-around w-3/5  h-2/6">
        //                 <input className="text-2xl" type="text" defaultValue={100}/>
        //                 <input className="text-2xl" type="text" defaultValue={100}/>
        //             </div>
        //             <div className="pt-[30px] w-3/5">
        //                 <ConnectWalletButton/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

