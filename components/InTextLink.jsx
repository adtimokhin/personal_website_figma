import React from 'react';
import LinkArrow from "@/assets/icons/link_arrow.svg";
import Image from 'next/image';

const InTextLink = ({text, dest}) => {
    return (
     <a href={dest} aria-label={text} className='transition-colors link-in-text inline-block hover:text-text-color/50' target='_blank'>
        <span className='flex-row flex justify-between items-center'>
        <div/>
        <Image src={LinkArrow} alt="Link Arrow" height={37} style={{ transform: 'translateX(37px)' }}/>
        </span>
        {text}
        </a>
    );
};

export default InTextLink;
