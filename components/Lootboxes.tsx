import React, { useEffect, useState } from 'react';
import ItemCard from "./ItemCard";
import Image from "next/image";
import { useTime } from "react-timer-hook";
import { useUserGameFullState } from "../data/data-hooks";
import { LootBox, Maybe, Scalars } from "../graphql/sdk/graphql";
import LootboxPop from "./LootboxPop";

interface lootboxesInterface {
  togglePop: () => any
  lootboxes: LootBox[];
}

const Lootboxes = ({ togglePop }: lootboxesInterface) => {

  const lootboxes: LootBox[] = [
    {
      id: '32',
      openAfterDate: '19:08:2022',
      probabilityOfLoot: 1,
      slugEnum: '12',
    },
    {
      id: '22',
      openAfterDate: '19:08:2022',
      probabilityOfLoot: 1,
      slugEnum: '12',
    },

  ]

  const [choosenLootBox, setChoosenLootBox] = useState(lootboxes[0]);

  const [lootBoxPopOpen, setLootBoxPopOpen] = useState(false)

  const toogleLootBoxPop = () => {
    setLootBoxPopOpen(!lootBoxPopOpen)
  }

  return (
    <div
      className={'fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll flex flex-wrap justify-around pt-14'}>
      <p className={'w-full text-5xl text-center font-bold'}>Lootboxes</p>
      <div
        className={'w-12 h-12 z-[999] absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'}
        onClick={() => {
          togglePop()
        }}>
        <div className={'w-5 h-5 relative'}>
          <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
        </div>
      </div>
      <div
        className={'gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-2 h-full pb-24'}>
        {lootboxes.map(item => {
          return <div className={'w-full h-72 mt-5'} key={item.id}>
            {item.id ? <p className={'font-bold w-full text-2xl opacity-50 text-center'}>№ {item.id.toString().padStart(6, '0')}</p> : null}
            <div className={'w-48 h-48 relative'}>
              <div className={'absolute top-0 w-full h-full'}>
                <Image src={'/images/bg_sprite.svg'} layout={'fill'}></Image>
              </div>
              <div className={'absolute top-0 w-full h-full'}>
                <Image src={'/images/lootbox.png'} layout={'fill'}></Image>
              </div>
            </div>
            <button
              className={'w-full h-9 mt-3 text-[#A731FF] text-center font-bold rounded-full bg-white'}>opens
              in 00:59:59
            </button>
            <div className={'grid grid-cols-2 gap-3 h-9 mt-3'}>
              <button className={'rounded-full bg-black text-white'} onClick={() => { setChoosenLootBox(item); toogleLootBoxPop() }}>Open</button>
              <button className={'rounded-full bg-black text-white'}>Sell</button>
            </div>
          </div>
        })}
      </div>
      {lootBoxPopOpen ? <LootboxPop lootbox={choosenLootBox} togglePop={toogleLootBoxPop}></LootboxPop> : null}
    </div>
  );
};

export default Lootboxes;
