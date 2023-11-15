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
                        className="bg-gray-400 p-2 w-full flex items-center justify-between font-bold text-lg text-neutral-800 tracking-wider border-2
                    border-transparent active:border-white duration-300 active:text-white"
                >
                    Tokens list
                    {!isOpen ? (
                        <AiOutlineCaretDown className="h-8"/>
                    ) : (
                        <AiOutlineCaretUp className="h-8"/>
                    )}
                </button>

                {isOpen && (
                    <div className=" absolute h-[310px] top-[67px] w-full overflow-auto">
                        {coinList.map((item, index) => {

                            const {symbol} = item;

                            const upperCaseSymbol = symbol.charAt(0).toUpperCase() + symbol.slice(1);

                            return (
                                <div key={item.id} className="flex h-[80px] pl-4 items-center">
                                    <div
                                        className="text-slate-200 font-bold pr-4 text-lg w-1/4">{upperCaseSymbol}
                                    </div>
                                    <img className="h-[50px] w-[50px]" src={item.image} alt="coin"/>
                                    <div className="pl-8 w-2/5 text-orange-300 font-mono text-xl">{item.name}</div>
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