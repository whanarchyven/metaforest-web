import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {random} from "nanoid";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {useUserGameFullState} from "../data/data-hooks";

interface bunnyGenerationInterface {
    base_image: string
}


const BunnyGeneration = ({base_image}: bunnyGenerationInterface) => {
    //
    // const baseList = Object.entries(bunny.bunny.base);
    // const equipmentList=Object.entries(bunny.bunny.equipment);
    // return <div className={'w-full h-full flex justify-center relative'}>
    //     {baseList.map((item, counter) => {
    //         if (item[1]!='') {
    //             return <div key={random(4).toString()} className={'w-full absolute top-0 left-0 h-full'}>
    //                 <img src={'/images/bunny_generation/' + item[0] + '/' + item[1] + '.png'}
    //                      className={'rounded-xl'}/>
    //             </div>
    //         } else {
    //             return null
    //         }
    //     })}
    //     {equipmentList.map((item, counter) => {
    //         // console.log(item);
    //         if (item[1].name!='') {
    //             return <div key={random(4).toString()} className={'w-full absolute top-0 left-0 h-full'}>
    //                 <img src={'/images/bunny_generation/' + item[1].type + '/' + item[1].name + '.png'}
    //                      className={'rounded-xl'}/>
    //             </div>
    //         } else {
    //             return null
    //         }
    //     })}
    // </div>
    return <div className={'w-full h-full flex justify-center relative'}>
        <div  className={'w-full absolute top-0 left-0 h-full'}>
            <img src={base_image}></img>
        </div>
    </div>


};

export default BunnyGeneration;
