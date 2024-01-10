import React from 'react';
import Image from 'next/image';

const IconRow = ({ icons, subtexts }) => {
    return (
        <div className="flex justify-between items-center align-middle w-full">
            {icons.map((icon, index) => (
                <div className="flex items-center flex-col mx-auto" key={`icon_${subtexts[index]}`}>
                    <Image src={icon} alt={`${subtexts[index]} icon`} draggable="false"/>
                    <h4 className="mt-2 icon-subtext">{subtexts[index]}</h4>
                </div>
            ))}
        </div>
    );
};

export default IconRow;
