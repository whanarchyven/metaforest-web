import React, {useState} from 'react';
import ActiveTask from "../ActiveTask";
import WorkCard from "../WorkCard";
import {workTask} from "../interfaces/workTask";
import TabSwitcher from "../TabSwitcher";
import {bunnyInterface} from "../interfaces/bunnyInterface";
const Work = (bunny:bunnyInterface) => {
    const worktabs=['daily','work']
    const [workTab,setWorkTab]=useState('daily');
    const works:workTask[]=[
        {
            workItem:{
                id:0,
                type:"m2e",
                name:'Seed carrot',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ',
                profit:23,
                goal:10,
                color:'white',
                requirements: {
                    str:2,
                    dex:3,
                    vit:4,
                    int:1,
                    krm:4,
                },
            }
        },
        {
            workItem:{
                id:1,
                type:"social",
                name:'Invite Friends',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ',
                profit:13,
                goal:'Share your bunny on Twitter',
                color:'white',
                requirements: {
                    str:2,
                    int:1,
                },
            }
        },
        {
            workItem:{
                id:2,
                type:"social",
                name:'Help me to',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ',
                profit:33,
                goal:'Share your bunny on Twitter',
                color:'white',
            }
        },
        {
            workItem:{
                id:3,
                type:"social",
                name:'Develop this',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ',
                profit:33,
                goal:'Help me to develop all of his quickly',
                color:'white',
                requirements: {
                    vit:1,
                    dex:4,
                },
            }
        },
        {
            workItem:{
                id:4,
                type:"m2e",
                name:'All quickly',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ',
                profit:33,
                goal:6,
                color:'white',
                requirements: {
                    str:2,
                    int:1,
                    krm:1,
                },
            }
        },
    ]


    return (
        <div className={'w-full h-full grid grid-cols-1 gap-2 grid-rows-6 sm:grid-cols-2 xl:gap-8 xl:grid-cols-4 pb-0 p-4'}>
            <div className={'xl:col-start-4 row-start-1 row-end-1'}>
                <p className={'w-full text-center mb-0 font-bold text-2xl'}>Work in progress</p>
                <div className={'w-full h-24 bg-white p-2 rounded-xl'}>
                    <ActiveTask></ActiveTask>
                </div>
            </div>
            <div className={'sm:col-start-1 sm:col-end-3 sm:row-start-1 row-start-2 mt-0 sm:mt-0 row-end-7 pt-0'}>
                <p className={'w-full text-center font-bold text-2xl'}>Billboard</p>
                <div className={'grid grid-cols-5 grid-rows-1 h-12 sm:p-6 p-3 gap-4'}>
                    <div className={'col-start-1 col-end-3 bg-white text-[#898994] rounded-full h-full'}>
                        <TabSwitcher tabs={worktabs} activeTab={workTab} switchTab={setWorkTab}></TabSwitcher>
                    </div>
                    <div className={'col-start-4 col-end-6'}>
                        <select className={'w-full h-full rounded-full font-bold text-center text-[#898994]'}>
                            <option className={'rounded-full text-[#898994]'}>Available now</option>
                            <option className={'rounded-full text-[#898994]'}>Option 1</option>
                            <option className={'rounded-full text-[#898994]'}>Option 2</option>
                            <option className={'rounded-full text-[#898994]'}>Option 3</option>
                            <option className={'rounded-full text-[#898994]'}>Option 4</option>
                        </select>
                    </div>
                </div>
                <div className={'grid grid-cols-1 gap-4 overflow-y-scroll h-full pb-20 lg:grid-cols-2'}>
                    {works.map(item=>{
                        return <div className={'h-32'} key={item.workItem.id}>
                            <WorkCard workItem={item} bunny={bunny}></WorkCard>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Work;