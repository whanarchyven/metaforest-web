import React, {useState} from 'react';
import Image from "next/image";
import {workTask} from "./interfaces/workTask";
import {statKeys} from "./types/statKeys";
import {StatTab} from "./UI/StatTab";
import StatRequirementBar from "./UI/StatRequirementBar";
import WorkPopUp from "./WorkPopUp";
import bunny from "./Bunny";
import {bunnyInterface} from "./interfaces/bunnyInterface";

interface WorkCardInterface{
    workItem:workTask,
    bunny:bunnyInterface,
    getNewActiveTask:(task:workTask)=>any
}

const WorkCard = ({workItem,bunny,getNewActiveTask}:WorkCardInterface) => {

    const [workPopOpen,setWorkPopOpen]=useState(false)
    const toggleWorkPop=()=>{
        setWorkPopOpen(!workPopOpen)
    }

    return (
        <div className={'w-full h-full relative'}>
            <div className={'w-full h-full relative'} onClick={()=>{toggleWorkPop()}}>
                <div className={'w-full h-full absolute -top-1 -left-2 rounded-full'}>
                    <Image src={'/images/work_module/backgrounds/'+workItem.workItem.type+'.png'} layout={'fill'} className={'rounded-3xl'}></Image>
                </div>
                <div className={'w-full h-[110%] rounded-full absolute -top-2 -left-4'}>
                    <Image src={'/images/card_overlay.png'} layout={'fill'} className={'rounded-2xl'}></Image>
                </div>
                {/*<svg width="" height="103%" viewBox="0 0 548 224" fill="none" xmlns="http://www.w3.org/2000/svg" className={'absolute top-0 left-0 '}>*/}
                {/*    <path transform="translate(-30,-5)" fillRule="evenodd" clipRule="evenodd" d="M360.662 78.5864C322.333 130.374 275.151 194.124 155 224H35.5417C15.9125 224 0 208.092 0 188.469V36.5311C0 16.9078 15.9125 1 35.5417 1H464.473C415.021 5.13988 390.529 38.2313 360.662 78.5864ZM548 36.5311V36.4892C548 27.0637 544.263 18.0242 537.612 11.3594C530.96 4.69451 521.939 0.950242 512.533 0.950242C502.236 0.950172 493.413 0.950195 484.198 0.950219L465.087 0.950242C464.882 0.966334 464.677 0.982921 464.473 1H512.458C532.088 1 548 16.9078 548 36.5311ZM548 188.461C548 194.607 546.411 200.588 543.462 205.854C537.373 216.684 525.77 224 512.458 224H155C155 224 155 224 155 224H512.573C521.973 223.989 530.983 220.24 537.626 213.577C539.934 211.261 541.891 208.659 543.462 205.854C546.352 200.715 548 194.784 548 188.469V188.461Z" fill="white"/>*/}
                {/*</svg>*/}
                <div className={'w-full h-full p-4 absolute top-0'}>
                    <div className={'w-full h-full relative'}>
                        <div className={'absolute left-0 top-0'}>
                            <div className={'w-12 h-12 green-gradient rounded-full inline-block align-top'}></div>
                            <div className={'inline-block align-top'}>
                                <p className={'inline-block ml-4 font-bold w-full text-xl'}>{workItem.workItem.name}</p>
                                <p className={'inline-block ml-4 font-bold w-3/5 text-sm opacity-50'}>{workItem.workItem.type=='m2e'?'M-2-E':'Social'}</p>
                            </div>
                        </div>
                        <div className={'grid grid-cols-5 gap-2 grid-rows-1 absolute bottom-0 '}>
                            {statKeys.map(stat=>{
                                if(workItem.workItem.requirements?.[stat.stat_name]!=undefined){
                                    return <div className={'w-10'} key={stat.stat_name}><StatRequirementBar stat_value={workItem.workItem.requirements[stat.stat_name]} stat_name={stat.stat_name}></StatRequirementBar></div>
                                }
                            })}
                        </div>
                        <div className={'w-16 h-8 rounded-full bottom-0 right-0 absolute bg-black rounded-full flex justify-center items-center'}>
                            <p className={'text-white inline-block text-xl font-medium'}>+{workItem.workItem.profit}</p>
                            <div className={'inline-block ml-2 relative w-3 h-6'}>
                                <Image src={'/images/carrot_icon_white.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        {/*<div className={'w-16 h-8 rounded-full top-0 right-0 absolute bg-black rounded-full flex justify-center items-center'}>*/}
                        {/*    <p className={'text-white inline-block text-xl font-medium'}>{workItem.workItem.type}</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {workPopOpen?<WorkPopUp workItem={workItem} togglePop={toggleWorkPop} bunny={bunny} getNewActiveTask={getNewActiveTask}/>:null}
        </div>
    );
};

export default WorkCard;