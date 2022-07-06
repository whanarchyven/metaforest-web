import React from 'react';
import Image from "next/image";

interface topMenuInterface{
    balance:number,
}

const TopMenu = ({balance}:topMenuInterface) => {
    return (
        <div className={'w-full h-full grid grid-cols-6 grid-rows-1 gap-2'}>
            <div className={'col-start-1 col-end-4 grid grid-cols-3 grid-rows-1'}>
                <div className={'relative col-start-1 col-end-1'}>
                    <Image src={'/images/burger_icon.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'col-start-4 col-end-6'}>
                <div className={'h-full w-4 relative inline-block align-middle mr-2'}>
                    <Image src={'/images/carrot_icon.svg'} layout={'fill'}></Image>
                </div>
                <p className={'inline-block align-middle text-3xl font-semibold'}>
                    {balance}
                </p>

            </div>
            <div className={'col-start-6 col-end-6'}>
                <div className={'w-full h-full relative'}>
                    <Image src={'/images/wallet_icon.svg'} layout={'fill'}></Image>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;