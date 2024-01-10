import React from 'react';
import Image from 'next/image';

import Icon from "@/assets/in_site_logo.svg";

const NavBar = () => {

    return (
        <nav className='w-full grid-margin-px h-fit bg-transparent flex-row flex justify-between items-center fixed top-0 mt-3' style={{zIndex: '100' }}>
           <a href='/' aria-label='Link to adtimokhin portfolio website' className='flex items-center'><Image src={Icon} alt='Link to adtimokhin portfolio website'/></a>
           <div id='nav-bar-links' className='link-in-text space-x-8'>
            {/* Links to different parts of the page */}
            <a href='/#projects' aria-label='projects link' className='transition-colors hover:text-text-color/50'>Projects</a>
            <a href='/#skills' aria-label='skills link' className='transition-colors hover:text-text-color/50'>Skills</a>
            <a href='/#contacts' aria-label='contacts link' className='border-text-color border-[1px] rounded-[23px] py-2 px-5 transition-colors hover:text-text-color/50 hover:border-text-color/50' id='main_nav_button'>Contacts</a>
           </div>
        </nav>
    );
};

export default NavBar;