"use client";
import React from 'react';
import Image from 'next/image';


const Card = ({ title, description, previewImage, tags}) => {
    return(
        <div className='w-[80%] h-full border-text-color border-[1px] rounded-3xl px-4 py-2 space-y-3 bg-bg-color relative'>
            <p className='secondary-title'>{title}</p>
            <Image src={previewImage} alt={`${title} preview image`} className='w-full rounded-[23px]' draggable="false"/>
            <ul className='flex-row flex space-x-3 tag-text'>
                {tags.map((tag) => (
                    <li className='border-text-color border-[1px] rounded-[23px] py-2 px-5' id={`${title}_${tag}_tag`} key={`${title}_${tag}_tag`}>{tag}</li>
                ))}
            </ul>
            <p className='body w-[80%]'>{description}</p>
            <div className='border-text-color border-[1px] rounded-3xl px-4 py-2 space-y-3 absolute top-0 left-3 w-full h-full -z-10'/>
        </div>
    )

}

export default Card