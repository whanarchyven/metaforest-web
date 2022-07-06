import React from 'react';
import Image from "next/image";
interface vitalityBarInterface{
    vitality:number
}

const VitalityBar = ({vitality}:vitalityBarInterface) => {
    return (
        <div className={'w-full h-full relative'}>
            <Image src={'/images/vitality_levels/'+vitality+'.svg'} layout={'fill'}></Image>
        </div>
    );
};

export default VitalityBar;