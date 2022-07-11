import React, {useState} from 'react';
import ActiveTask from "../ActiveTask";
import WorkCard from "../WorkCard";
import {workTask} from "../interfaces/workTask";
const Work = () => {

    const [workTab,setWorkTab]=useState('daily');
    const works:workTask[]=[
        {
            workItem:{
                id:0,
                type:"m2e",
                name:'Seed carrot',
                description:'LOrem ipsum',
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
                description:'LOrem ipsum',
                profit:13,
                goal:13,
                color:'white',
                requirements: {
                    str:2,
                },
            }
        },
        {
            workItem:{
                id:0,
                type:"social",
                name:'Explore metaverse',
                description:'LOrem ipsum',
                profit:33,
                goal:10,
                color:'white',
            }
        },
    ]


    return (
        <div className={'w-full h-full grid grid-cols-1 gap-2 grid-rows-6 pb-0 p-4'}>
            <div className={'row-start-1 row-end-3'}>
                <p className={'w-full text-center mb-4 font-bold text-4xl'}>Work in progress</p>
                <div className={'w-full h-4/6 bg-white p-4 rounded-xl'}>
                    <ActiveTask></ActiveTask>
                </div>
            </div>
            <div className={'row-start-3 mt-4 row-end-7'}>
                <p className={'w-full text-center font-bold text-4xl'}>Billboard</p>
                <div className={'grid grid-cols-5 grid-rows-1 h-1/6 p-4 gap-4'}>
                    <div className={'col-start-1 col-end-3 bg-white rounded-full h-full'}>
                        {workTab=='daily'?
                            <div className={'w-1/2 green-gradient rounded-full h-full inline-flex items-center justify-center'}>
                                <p className={'font-bold'}>Daily</p>
                            </div>
                            :
                            <div className={'w-1/2 bg-transparent rounded-full h-full inline-flex items-center justify-center'} onClick={()=>{setWorkTab('daily')}}>
                                <p className={'font-bold'}>Daily</p>
                            </div>}
                        {workTab=='work'?
                            <div className={'w-1/2 green-gradient rounded-full h-full inline-flex items-center justify-center'}>
                                <p className={'font-bold'}>Work</p>
                            </div>
                            :
                            <div className={'w-1/2 bg-transparent rounded-full h-full inline-flex items-center justify-center'} onClick={()=>{setWorkTab('work')}}>
                                <p className={'font-bold'}>Work</p>
                            </div>}

                    </div>
                    <div>
                        {/*Filter*/}
                    </div>
                </div>
                <div className={'grid grid-cols-1 gap-4 overflow-y-scroll h-[73%]'}>
                    {works.map(item=>{
                        return <div className={'h-36'}>
                            <WorkCard workItem={item.workItem} key={item.workItem.id}></WorkCard>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default Work;