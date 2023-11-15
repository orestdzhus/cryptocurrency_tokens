"use client";

import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import {useEffect, useState} from "react";

export default function Home() {

    const [coinList, setCoinList] = useState([]);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
            .then(res => res.json())
            .then(value => setCoinList(value));
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-900 to-neutral-900 h-screen flex justify-center items-center">

            <div className="h-[800px] w-[500px]">
                <div className="h-1/2 flex justify-center pt-32">
                    <div className="">
                        <img className="h-[200px] w-[200px]" src="/img.png" alt="logo"/>
                    </div>
                </div>

                <div className="h-1/2 flex items-center flex-col   ">
                    <div className="flex flex-col justify-around w-3/5  h-2/6">
                        <input className="text-2xl" type="text" defaultValue={100}/>
                        <input className="text-2xl" type="text" defaultValue={100}/>
                    </div>
                    <div className="pt-[30px] w-3/5">
                        <ConnectWalletButton/>
                    </div>
                </div>

            </div>

            <div>
                <DropdownMenu coinList={coinList}/>
            </div>

        </div>
    );
};

