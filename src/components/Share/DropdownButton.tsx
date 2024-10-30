'use client';

import React, { useState } from 'react';
import { IconArrowRight } from "@/icons/IconArrowRight";

interface DropdownOption {
    id: string;
    label: string;
    value: string;
}

interface DropdownButtonProps {
    buttonText: string;
    options: DropdownOption[];
    onSelect: (value: string) => void;
    className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
    buttonText,
    options,
    onSelect,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value: string) => {
        setIsOpen(false);
        onSelect(value);
    };

    return (
        <div className={`relative inline-block text-left ${className}`}>
            <button
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="group flex h-full w-full items-center justify-center gap-[10px] rounded-full bg-gradient-btn px-[20px] py-[12px] shadow-button-shadow transition duration-300 ease-in-out hover:scale-[1.05] focus:scale-[1.05] group-hover:text-violet group-focus:text-violet desktop:px-[32px] desktop:py-[16px]"
            >
                {buttonText}
                <IconArrowRight className="size-4 fill-dark transition duration-300 ease-in-out desktop:ml-1 desktop:size-5" />
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option.value)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;