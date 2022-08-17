import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { activeTask } from "./interfaces/activeTask";
import ProgressBar from "./UI/ProgressBar";
import TaskChecker from "./UI/TaskChecker";
import {sdk} from "../graphql/sdk";
import {MetaforestCurrentJob} from "../graphql/sdk/graphql";
interface activeTaskModule{
    active_task?:MetaforestCurrentJob
}
const ActiveTask = ({active_task}:activeTaskModule) => {


    if(active_task?.job){
        let h_bar='h-3';
        let h_tab='';
        // if(active_task.workItem.type=='m2e'){
        //     h_bar='h-3'
        // }
        // else{
        //     h_bar='h-10'
        // }
        return (
            <div className={'w-full h-full grid grid-cols-9 grid-rows-3 gap-2'}>
                <div className={'col-start-1 col-end-8'}>
                    {active_task!=undefined?<p className={'w-full font-semibold text-lg'}>{active_task.job?.title}</p>:null}
                </div>
                <div className={'col-start-8 col-end-10 bg-black rounded-full flex justify-center items-center'}>
                    <p className={'text-white inline-block font-semibold'}>+{active_task.job.carrotsForApproxMeters}</p>
                    <div className={'inline-block ml-2 relative w-2 h-6'}>
                        <Image src={'/images/carrot_icon_white.svg'} layout={'fill'}></Image>
                    </div>
                </div>
                <div className={'row-start-2 col-start-1 col-end-10 '+h_bar} style={styles}>
                    {/*{active_task.workItem.type=='m2e'&&typeof active_task.workItem.goal=='number'?:<TaskChecker workItem={active_task.workItem}/>}*/}
                    {active_task.job.approxMeters?<ProgressBar progress={Math.floor(active_task.metersPassed)} limit={active_task.job?.approxMeters}/>:null}
                </div>
                {/*{active_task.workItem.type=='m2e'?<div className={'col-start-1 col-end-8 row-start-3 flex items-end'}>*/}
                {/*    <p className={'w-full font-semibold text-xs text-[#898994]'}>Progress: <strong>{active_task.progress}/{active_task.workItem.goal} km</strong>*/}
                {/*    </p>*/}
                {/*</div>:null}*/}
                <div className={'col-start-1 col-end-8 row-start-3 flex items-end'}>
                    <p className={'w-full font-semibold text-xs text-[#898994]'}>Progress: <strong>{Math.floor(active_task.metersPassed)}/{active_task.job.approxMeters} m</strong>
                    </p>
                </div>
                <div className={'col-start-8 col-end-10 row-start-3 flex items-end'}>
                    {/*<p className={'w-full text-center font-semibold text-xs text-[#898994]'}>{active_task.workItem.type.toUpperCase()}</p>*/}
                    <p className={'w-full text-center font-semibold text-xs text-[#898994]'}>{active_task.job.type}</p>
                </div>
            </div>
        );
    }
    else{
        return <div className={'w-full h-full flex justify-center items-center rounded-[inherit] border-green-500 border-2'}>
            <p className={'text-2xl'}>No active task yet</p>
        </div>
    }
};

export default ActiveTask;