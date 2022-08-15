import React from 'react';
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {marketplaceItem} from "./interfaces/marketplaceItem";
interface ItemCardInterface{
    item:marketplaceItem,
    togglePop:()=>any,
    bunny:bunnyInterface;
    balance:number;
}


const LootboxPop = ({item,togglePop,bunny,balance}:ItemCardInterface) => {
    return (
        <div className={'flex flex-wrap fixed w-full h-full top-0 left-0 grey-gradient justify-center items-center'}>
            <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={()=>{togglePop()}}>
                <div className={'w-5 h-5 relative'}>
                    <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-8/12 flex justify-center flex-wrap relative'}>
                <p className={'text-center text-3xl mb-3 font-bold'}>Open the lootbox</p>
                <div className={'w-full h-96'}>
                    <ItemCard item={item}></ItemCard>
                </div>
                <div className={'relative w-4/5 mt-5 grid h-12 grid-cols-2 gap-2'}>
                    <button className={'rounded-full bg-black text-white'} onClick={()=>{if(balance>item.price){togglePop();}else {alert("Seems like you do not have enough carrots to buy this item!")}}}>Buy</button>
                    <div className={'rounded-full flex items-center justify-around bg-black'}>
                        <p className={'text-white'}>{item.price}</p>
                        <div className={'w-7 h-7 relative bg-white rounded-full p-1'}>
                            <Image src={'/images/carrot_icon.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LootboxPop;