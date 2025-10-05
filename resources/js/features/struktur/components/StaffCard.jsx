import React from 'react';

const StaffCard = ({ name, division, image }) => {
    return (
        <div className="flex flex-col items-center w-[20vw] text-center ">
                <img src={image} alt={name} className="w-[20vw] h-[24vw]  " loading="lazy" decoding="async" />
            
            <h3 className="arialBold text-white text-[clamp(0.8vw,2vw,3vw)] mt-3 leading-tight">
                {name}
            </h3>
            <p className="arialBold text-white  text-[clamp(0.6vw,1.2vw,3vw)] leading-tight">
                {division}
            </p>
        </div>
    );
};

export default StaffCard;