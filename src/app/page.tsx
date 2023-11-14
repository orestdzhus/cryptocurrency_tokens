import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";

export default function Home() {
    return (
        <div className="bg-neutral-500 h-screen flex justify-center items-center">
            <div className="h-[800px] bg-blue-900 w-[500px]">
                <div className="border-2 border-orange-600 h-1/2 flex justify-center">
                    <div className="">
                        <img className="h-[200px] w-[200px]" src="/img.png" alt="logo"/>
                    </div>
                </div>
                <div className="border-2 border-orange-600 h-1/2 flex items-center flex-col   ">
                    <div className="flex flex-col justify-around w-3/5  h-2/6">
                        <input className="text-2xl" type="text" defaultValue={100}/>
                        <input className="text-2xl" type="text" defaultValue={100}/>
                    </div>
                    <div className="pt-[30px] w-3/5">
                        <button
                            className="bg-gray-200 w-full hover:bg-gray-400 active:bg-gray-600 text-gray-800 font-bold py-2 px-4 ">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

