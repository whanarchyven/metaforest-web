import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";
import { firstLetterUpperCase } from "./firstLetterUpperCase";
import { bunnyInterface } from "./interfaces/bunnyInterface";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";
import {useUserGameFullState} from "../data/data-hooks";
import {sdk} from "../graphql/sdk";

interface ItemCardInterface {
  choosenType: "Costume" | "EarsAccessories" | "Ears_n_Horns" | "Face" | "HandLeft" | "HandRight" | "Hat" | "Necklace"|'Overhead',
  togglePop: () => any,
}

const EquipmentPopUp = ({togglePop, choosenType }: ItemCardInterface) => {

  const [state,mutate]=useUserGameFullState();

  return (
    <div className={'fixed z-[999] pt-16 w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll'}>
      <div className={'w-full flex over flex-wrap justify-center relative p-4'}>
        <div className={'flex mb-8'}>
          <div className={'w-10 h-10 inline-flex justify-center items-center rounded-full bg-white align-middle'}>
            <div className={'w-3/5 h-3/5 relative'}>
              <Image
                alt=""
                src={'/images/tab_icons/' + choosenType + '.svg'}
                layout={'fill'}
              ></Image>
            </div>
          </div>
          <p className={'text-center text-3xl ml-4 font-bold inline-block align-middle'}>{firstLetterUpperCase(choosenType)}</p>
        </div>
        <div className={'w-full gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}>
          {state.inventory?state.inventory?.map(item => {
            if ((item&&item.itemSlot == choosenType)) {
              if (state?.wornInventory?.find(item => item?.itemSlot == choosenType)?.idx != item.idx) {
                return <div onClick={() => { sdk().metaforestPerformMyAbiFunction({
                  params: {itemIdx:item.idx},
                  fn: "wearInventoryElementOnCurrentBunny",
                });console.log('equiped');togglePop() }} key={Math.random()} className={'cursor-pointer'}><ItemCard item={item}/></div>
              }
            }
            else {
              return null
            }
          }):null}
        </div>
      </div>
      <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer'} onClick={() => { togglePop() }}>
        <div className={'w-5 h-5 relative'}>
          <Image
            alt=""
            src={'/images/popup_arrow.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPopUp;
