import React, { useState } from 'react';
import { bunnyInterface } from "../interfaces/bunnyInterface";
import BunnyGeneration from "../BunnyGeneration";
import Image from "next/image";
import VitalityBar from "../VitalityBar";
import ProgressBar from "../UI/ProgressBar";
import LevelUp from "../LevelUp";
import { sdk } from "../../graphql/sdk";
interface homeInterface {
  // bunny:bunnyInterface
  // increaseCharacteristics:(chars:{id:'str'|'dex'|'vit'|'int'|'krm',increase:number}[])=>any
}

const Dashboard = (bunny: bunnyInterface) => {

  // const { data:profileData, mutate } = sdk().useGetMe()
    const { data, mutate } = sdk().useUserGetMyState()

  const [levelPopOpen, setLevelPopOpen] = useState(false);
  const toggleLevelPop = () => {
    setLevelPopOpen(!levelPopOpen);
  }

  return (
    <div className={'w-full h-full flex justify-center flex-wrap'}>
      <div className={'w-full h-fit absolute top-0 bunny-generation-outside'}>
        <div className={'w-full h-full bunny-generation-inside'}>
          <div className={'w-[308px] h-[445px] mx-auto'}>
            <BunnyGeneration bunny={bunny}></BunnyGeneration>
          </div>
        </div>
      </div>
      <div className={'w-[336px] h-full left-auto absolute top-0'}>
        <div className={'w-16 h-16 -right-0 top-28 absolute green-gradient rounded-full flex flex-wrap justify-center content-center'}>
          {data != undefined ? <p className={'w-full text-center font-bold text-white text-2xl'}>{data.userGetMyState.bunnyLevel}</p> : null}
          <p className={'text-white font-normal text-lg'}>level</p>
          {bunny.bunny.isLevelUp ? <div className={'absolute -right-0 -top-1 w-6 h-6 bg-white rounded-full flex justify-center content-center'} onClick={() => { sdk().performAbiFunction({ "userUri": "telegram://test", "fn": "lvlUpRabbit", params: {} }).then(d=>mutate()) }}>
            <p className={'text-center text-md text-green-500 font-bold'}>+</p>
          </div> : null}
        </div>
        <div className={'w-16 h-16 -right-0 top-72 absolute green-gradient rounded-full flex flex-wrap justify-center content-center p-4'}>
          <div className={'w-full h-full relative'}>
            <Image src={'/images/lootbox_icon.svg'} layout={'fill'}></Image>
          </div>
          <div className={'absolute -right-0 -top-2 w-6 h-6 bg-white rounded-full flex justify-center content-center'}>
            <p className={'text-center text-xl text-green-500'}>3</p>
          </div>
        </div>
        <div className={'w-20 h-32 absolute -left-3 top-44'}>
          {data != undefined ? <VitalityBar vitality={data.userGetMyState.vit}></VitalityBar> : null}
          <div className={'w-3/4 mt-4 h-10 rounded-full green-gradient flex justify-center items-center'}>
            <p className={'text-center text-xl font-semibold text-white'}>Feed</p>
          </div>
        </div>
      </div>
      {data != undefined ? <p className={'text-center w-full text-4xl font-semibold text-black relative -mt-10 mb-5'}>{data.userGetMyState.userUri}</p> : null}
      <div className={'w-40 h-12 green-gradient rounded-full relative flex justify-center items-center'}>
        <p className={'text-center text-xl font-semibold text-white'}>Change</p>
      </div>
      <div className={'relative w-full gap-4 px-6 py-4 mt-3 grid grid-cols-10'}>
        <p className={'col-start-1 col-end-4 justify-self-center'}>Max/day</p>
        <div className={'col-start-4 col-end-9'}>
          <ProgressBar progress={3} limit={12}></ProgressBar>
        </div>
        <p className={'col-start-9 col-end-11 justify-self-center'}>3/12</p>
      </div>
      <div className={'relative w-full gap-4 px-6 py-4 mt-3 grid grid-cols-10'}>
        <p className={'col-start-1 col-end-4 justify-self-center'}>Energy</p>
        <div className={'col-start-4 col-end-9'}>
          {data != undefined ? <ProgressBar progress={data.userGetMyState.jobEnergy} limit={data.userGetMyState.maxJobEnergy}></ProgressBar> : null}
        </div>
        {data != undefined ? <p className={'col-start-9 col-end-11 justify-self-center'}>{data.userGetMyState.jobEnergy}/{data.userGetMyState.maxJobEnergy}</p> : null}
      </div>
      {levelPopOpen ? <LevelUp bunny={bunny} togglePop={toggleLevelPop} /> : null}
    </div>
  );
};

export default Dashboard;
