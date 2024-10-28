'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight } from "@/icons/IconArrowRight";

interface ServiceOption {
    id: string;
    label: string;
    path: string;
}

interface DropdownButtonProps {
    buttonText: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ buttonText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const serviceOptions: ServiceOption[] = [
        { id: 'hygiene', label: 'Usługi higienizacyjne', path: '/hygiene-services' },
        { id: 'care', label: 'Usługi pielęgnacyjne', path: '/care-services' },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (path: string) => {
        setIsOpen(false);
        router.push(path);
    };

    return (
        <div className="relative inline-block text-left">
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
                        {serviceOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option.path)}
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
