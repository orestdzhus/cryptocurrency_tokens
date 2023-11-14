"use client";
import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {list} from "postcss";

export default function DropdownMenu() {

    const list = [
        {city: "NEW YORK"},
        {city: "NEW YORK"},
        {city: "NEW YORK"},
        {city: "NEW YORK"},
        {city: "NEW YORK"},
        {city: "NEW YORK"},
    ];

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen);


    return (
        <div className="relative flex flex-col items-center w-[340px] h-[340px]">
            <button onClick={() => setIsOpen((prev) => !prev)}
                    className="bg-blue-300 p-4 w-full flex items-center justify-between font-bold text-lg tracking-wider border-4
                    border-transparent active:border-white duration-300 active:text-white"
            >
                Dropdown
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8"/>
                ) : (
                    <AiOutlineCaretUp className="h-8"/>
                )}
            </button>

            {isOpen && (
                <div className="bg-blue-400 absolute top-20 w-full">
                    {list.map((item, index) => (
                        <div>
                            <h3>
                                {item.city}
                            </h3>
                        </div>
                    ))
                    }
                </div>
            )}
        </div>
    );
};