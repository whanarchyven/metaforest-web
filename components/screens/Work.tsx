import React, { useState } from 'react';
import ActiveTask from "../ActiveTask";
import WorkCard from "../WorkCard";
import { workTask } from "../interfaces/workTask";
import TabSwitcher from "../TabSwitcher";
import { bunnyInterface } from "../interfaces/bunnyInterface";
import { useJobsList, useUserGameFullState } from "../../data/data-hooks";

const Work = () => {
  const worktabs = ['daily', 'work']
  const [workTab, setWorkTab] = useState('daily');
  const [state, mutate] = useUserGameFullState()
  const [works] = useJobsList();
  console.log(works)
  let active_type_height = ''
  if (state?.currentJob?.job?.type == 'REFERRAL') {
    active_type_height = 'h-32'
  }
  else {
    active_type_height = 'h-24'
  }
  return (
    <div className={'w-full h-full grid grid-cols-1 gap-2  sm:grid-cols-2 xl:gap-8 xl:grid-cols-4 pb-0 p-4'}>
      <div className={'xl:col-start-4 row-start-1 row-end-1'}>
        <p className={'w-full text-center mb-0 font-bold text-2xl'}>Work in progress</p>
        <div className={'w-full bg-white p-2 rounded-xl ' + active_type_height}>
          {state?.currentJob ? <ActiveTask active_task={state.currentJob}></ActiveTask> : null}
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
        <div className={'grid grid-cols-1 content-start gap-4 overflow-y-scroll h-full pb-20 lg:grid-cols-2'}>
          {works.map(item => {
            if ((state.currentJob?.job?.title != item.title)) {
              // console.log('Item ID: '+item.workItem.id)
              // // console.log(bunny.bunny.workHistory?.map(suka=>{
              // //     console.log(suka.workItem.id);
              // // }));
              // console.log();

              return <div className={'h-36'} key={item.title}>
                <WorkCard workItem={item}></WorkCard>
              </div>
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
