import React from 'react';
import {bunnyInterface} from "../interfaces/bunnyInterface";
import BunnyGeneration from "../BunnyGeneration";
import Image from "next/image";
import VitalityBar from "../VitalityBar";
interface homeInterface{
    bunny:bunnyInterface
}

const Home = (bunny:bunnyInterface) => {
    return (
        <div className={'w-full h-full flex justify-center flex-wrap'}>
            <div className={'w-full h-fit absolute top-12 bunny-generation-outside'}>
                <div className={'w-full h-full bunny-generation-inside'}>
                    <div className={'w-[336px] h-[486px] mx-auto'}>
                        <BunnyGeneration bunny={bunny}></BunnyGeneration>
                    </div>
                </div>
            </div>
            <div className={'w-[336px] h-full left-auto absolute top-0'}>
                <div className={'w-20 h-20 -right-6 top-44 absolute green-gradient rounded-full flex flex-wrap justify-center content-center'}>
                    <p className={'w-full text-center font-bold text-white text-4xl'}>{bunny.bunny.lvl}</p>
                    <p className={'text-white font-normal text-xl'}>level</p>
                    <div className={'absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full flex justify-center content-center'}>
                        <p className={'text-center text-2xl text-green-500'}>+</p>
                    </div>
                </div>
                <div className={'w-20 h-20 -right-6 top-96 absolute green-gradient rounded-full flex flex-wrap justify-center content-center p-4'}>
                    <div className={'w-full h-full relative'}>
                        <Image src={'/images/lootbox_icon.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full flex justify-center content-center'}>
                        <p className={'text-center text-2xl text-green-500'}>3</p>
                    </div>
                </div>
                <div className={'w-32 h-48 absolute -left-8 top-60'}>
                    <VitalityBar vitality={bunny.bunny.vitality}></VitalityBar>
                    <div className={'w-3/4 mt-4 h-10 rounded-full green-gradient flex justify-center items-center'}>
                        <p className={'text-center text-xl font-semibold text-white'}>Feed</p>
                    </div>
                </div>
            </div>
            <p className={'text-center w-full text-4xl font-semibold text-black absolute bottom-80'}>{bunny.bunny.name}</p>
            <div className={'w-40 h-12 green-gradient rounded-full absolute bottom-64 flex justify-center items-center'}>
                <p className={'text-center text-xl font-semibold text-white'}>Change</p>
            </div>
            <div className={'w-11/12 h-20 absolute bottom-40'}>
                <Image src={'/images/template.svg'} layout={'fill'}></Image>
            </div>

        </div>
    );
};

export default Home;