"use client";
import React from 'react';
import LinkArrow from "@/assets/icons/link_arrow.svg";
import Image from 'next/image';

import { useState } from 'react';

const LargeButton = ({ title, description, dest, hoverBgImage, whenHover, target }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (whenHover) whenHover();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a
            className="w-full h-24 flex items-center justify-between hover:cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={dest}
            target={target}
        >
            <div
                className={`absolute top-0 left-0 w-full h-full transition-transform transform origin-center ${isHovered? "scale-y-100" : "scale-y-0 "}`}
                style={{
                    backgroundImage: hoverBgImage,
                    transformOrigin: 'center',
                    transition: 'transform 0.34s ease-out',
                    zIndex: '-1',
                }}

                
            />
            <span className="grid-gutter-pl items-left flex flex-col text-text-color">
                <p className='link-title'>{title}</p>
                <p className='link-description text-text-color/50'>{description}</p>
            </span>
            <span className="grid-gutter-pr">
                <Image src={LinkArrow} alt="Link Arrow" height={73}/>
            </span>
        </a>
    );
};

export default LargeButton;
