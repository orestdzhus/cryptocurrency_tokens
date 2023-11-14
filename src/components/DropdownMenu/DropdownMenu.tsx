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
            <div className="relative flex flex-col items-center w-[340px] h-[340px] top-8">
                <button onClick={() => setIsOpen((prev) => !prev)}
                        className="bg-blue-300 p-4 w-full flex items-center justify-between font-bold text-lg tracking-wider border-2
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
                        <div className=" absolute h-[240px] top-20 w-full overflow-auto">
                            {coinList.map((item, index) => (
                                <div key={index}>
                                    <img className="h-[40px] w-[40px]"
                                         src={item.image}
                                         alt=""/>
                                </div>
                            ))
                            }
                        </div>
                    )}
            </div>
        </div>
    );
};