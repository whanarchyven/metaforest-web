import React from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css'
const ActiveTask = () => {
    return (
        <div className={'w-full h-full grid grid-cols-9 grid-rows-3 gap-2'}>
            <div className={'col-start-1 col-end-8'}>
                <p className={'w-full font-semibold text-2xl'}>Seed carrot</p>
            </div>
            <div className={'col-start-8 col-end-10 bg-black rounded-full flex justify-center items-center'}>
                <p className={'text-white inline-block font-semibold'}>+75</p>
                <div className={'inline-block ml-2 relative w-2 h-6'}>
                    <Image src={'/images/carrot_icon_white.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'row-start-2 col-start-1 col-end-10 rangebar'} style={styles}>
                {/*<input type={'range'} className={'w-full h-full bg-black form-range appearance-none w-full h-6 p-0 bg-transparent '} disabled={false}/>*/}
                <div className={'w-full h-full relative'}>
                    <div className={'w-full absolute left-0 h-full rounded-full bg-[#c7c7c7]'}></div>
                    <div className={'w-7/12 absolute left-0 h-full rounded-full green-gradient'}></div>
                </div>
            </div>
            <div className={'col-start-1 col-end-8 row-start-3'}>
                <p className={'w-full font-semibold text-l text-[#898994]'}>Progress: <strong>7,4/10 km</strong></p>
            </div>
            <div className={'col-start-8 col-end-10 row-start-3'}>
                <p className={'w-full text-center font-semibold text-l text-[#898994]'}>M-2-E</p>
            </div>
        </div>
    );
};

export default ActiveTask;