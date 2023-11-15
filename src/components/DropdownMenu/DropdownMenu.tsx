"use client";
import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import {ICoin} from "@/types/coin.interface";

interface IProps {
    coinList: ICoin[];
}

export default function DropdownMenu({coinList}: IProps) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="absolute top-[468px]">
            <div className="relative flex flex-col items-center w-[340px] h-[440px] top-8">
                <button onClick={() => setIsOpen((prev) => !prev)}
                        className="  border-gray-800
                        p-3 w-full flex items-center justify-between font-bold text-lg text-amber-50 tracking-wider border-2
                    border-transparent active:border-white duration-100 active:text-white"
                >
                    Tokens list
                    {!isOpen ? (
                        <AiOutlineCaretDown className="h-8"/>
                    ) : (
                        <AiOutlineCaretUp className="h-8"/>
                    )}
                </button>

                {isOpen && (
                    <div className=" absolute h-[310px] top-20 w-full overflow-auto">
                        {coinList.map((item, index) => {

                            return (
                                <div className="flex h-[102px] pl-4 border-1">
                                    <div className="w-1/4">
                                        <strong className="pb-4 text-zinc-300 text-lg">{item.symbol}</strong>
                                        <div className="w-[50px] pl-3">
                                            <img className="h-[45px] w-[60px]" src={item.image} alt="coin"/>
                                        </div>
                                    </div>
                                    <div className="h-[40-px] w-3/4 flex items-center text-orange-300 font-mono text-2xl">{item.name}</div>
                                </div>
                            );
                        })
                        }
                    </div>
                )}
            </div>
        </div>
    );
};