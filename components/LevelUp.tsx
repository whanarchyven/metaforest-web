import React from 'react';
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {workTask} from "./interfaces/workTask";
import {statKeys} from "./types/statKeys";
import StatRequirementBar from "./UI/StatRequirementBar";
import TaskChecker from "./UI/TaskChecker";
import BunnyGeneration from "./BunnyGeneration";
interface LevelUpInterface {
    bunny:bunnyInterface,
    togglePop:()=>any,

}


const LevelUp = ({bunny}:LevelUpInterface) => {
    return (
        <div className={'fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll'}>
            <div className={'grid grid-cols-2'}>
                <div className={'col-start-1 flex justify-center items-center'}>
                    <div className={'w-[308px] h-[445px] mx-auto'}>
                        <BunnyGeneration bunny={bunny}></BunnyGeneration>
                    </div>
                </div>
                <div className={'col-start-2 flex justify-center'}>
                    <p>Level up!</p>
                </div>
            </div>
        </div>
    );
};

export default LevelUp;