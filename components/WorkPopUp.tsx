import React from 'react';
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {workTask} from "./interfaces/workTask";
import {statKeys} from "./types/statKeys";
import StatRequirementBar from "./UI/StatRequirementBar";
import TaskChecker from "./UI/TaskChecker";
interface WorkPopUpInterface {
    workItem:workTask
    togglePop: () => any,
    bunny:bunnyInterface,
}


const WorkPopUp = ({bunny, workItem, togglePop}:WorkPopUpInterface) => {
    return (
        <div className={'fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll'}>
            <div className={'w-full h-60 relative rounded-b-2xl'}>
                <div className={'w-full h-full absolute top-0'}>
                    <Image src={'/images/work_module/backgrounds/'+workItem.workItem.type+'.png'} layout={'fill'} className={'rounded-b-3xl'}></Image>
                </div>
                <div className={'w-28 h-10 bg-white absolute bottom-5 right-5 rounded-full flex items-center justify-around'}>
                    <p className={'font-bold'}>{workItem.workItem.type.toUpperCase()}</p>
                    <div className={'w-8 h-8 rounded-full flex justify-center items-center bg-black'}>
                        <div className={'w-3/5 h-3/5 relative'}>
                            <Image src={'/images/work_module/icons/'+workItem.workItem.type+'.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-full flex flex-wrap justify-center relative p-8'}>
                <div className={'flex items-center'}>
                    <div className={'w-12 h-12 mr-3 rounded-full flex justify-center items-center bg-white'}>
                        <div className={'w-3/5 h-3/5 relative'}>
                            <Image src={'/images/work_module/icons/'+workItem.workItem.type+'_black.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                    <p className={'font-bold text-4xl'}>{workItem.workItem.name}</p>
                </div>
                <p className={'font-medium mt-5'}>{workItem.workItem.description}</p>
                <div className={'grid grid-cols-2 gap-2 w-full'}>
                    <p className={'opacity-50 font-bold text-xl'}>Requirements:</p>
                    <p className={'justify-self-end w-1/2 text-center opacity-50 font-bold text-xl'}>Profit:</p>
                    <div className={'grid grid-cols-3 gap-4'}>
                        {statKeys.map(stat=>{
                            if(workItem.workItem.requirements?.[stat.stat_name]){
                                return <div className={'h-6 w-full'} key={stat.stat_name}><StatRequirementBar key={stat.stat_name} stat_value={workItem.workItem.requirements[stat.stat_name]} stat_name={stat.stat_name}></StatRequirementBar></div>
                            }
                        })}
                    </div>
                    <div className={'justify-self-end flex justify-center items-center rounded-full green-gradient w-1/2 h-10'}>
                        <p className={'font-bold opacity-50'}>{workItem.workItem.profit}</p>
                        <div className={'w-6 h-6 relative opacity-50 ml-2'}>
                            <Image src={'/images/carrot_icon.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
                <div className={'h-16 relative w-full mt-3 rounded-full'}>
                    <TaskChecker workItem={workItem.workItem}/>
                </div>
                <button className={'w-3/4 bg-black rounded-full h-16 mt-8 text-white text-center text-2xl font-bold'} onClick={()=>{togglePop();}}>
                    Take job!
                </button>
            </div>
            <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer'} onClick={()=>{togglePop();}}>
                <div className={'w-5 h-5 relative'}>
                    <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                </div>
            </div>
        </div>
    );
};

export default WorkPopUp;