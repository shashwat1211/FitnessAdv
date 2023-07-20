import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
            id:1
        },
        {
            icon: TargetImage,
            name: target,
            id:2
        },
        {
            icon: EquipmentImage,
            name: equipment,
            id:3
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-[60px] p-[20px] items-center">
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image rounded-lg w-[50%] ml-3" />
            <div className="gap-[20px] lg:gap[35px]">
                <h1 className="capitalize text-[30px] lg:test-[64px] font-bold">{name}</h1>
                
                <p className="text-[18px] lg:text[24px]">
                    Exercises keep you strong.{' '}
                    <span className="capitalize">{name}</span> is one
                    of the best exercises to target your {target}.<br />  It will help you improve your 
                    mood and gain energy.
                </p>
                {extraDetail?.map((item) => (
                    <div className='flex items-center gap-[20px] my-4' key = { item.id }>
                        <button className="bg-[#f4e5e5] rounded-full w-[100px] h-[100px] p-0 disabled:true text-center" >
                            <img src={item.icon} alt={bodyPart} className="w-[50px] h-[50px] ml-[25px] relative" />
                        </button>
                        <h2 className="capitalize text-[20px] lg:text-[30px]">
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;