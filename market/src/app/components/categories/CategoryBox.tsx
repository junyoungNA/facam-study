import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface CategoryBoxProps {
    icon : IconType,
    label : string;
    selected? : boolean,
    path : string;
}

const CategoryBox = ({
    label,
    path,
    selected,
    icon: Icon,
} : CategoryBoxProps) => {
    return (
        <Link className={`
                flex
                flex-col
                items-center
                jusfify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
            href={`/?category=${path}`}>
            <Icon size={26}/>
            <div >
                {label}
            </div>
        </Link>
        
    )
}

export default CategoryBox
