import React from 'react';
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {marketplaceItem} from "./interfaces/marketplaceItem";
import {LootBox} from "../graphql/sdk/graphql";
interface ItemCardInterface{
    lootbox:LootBox,
    togglePop:()=>any,
}


const LootboxPop = ({lootbox,togglePop}:ItemCardInterface) => {
    return (
        <div className={'fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center'}>
            <p className={'w-full text-4xl pt-16 text-center font-bold'}>Open the lootbox<br/><span className={'font-medium text-2xl'}>to get new NFT!</span></p>
            <div className={'flex justify-center flex-wrap'}>
                <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={()=>{togglePop()}}>
                    <div className={'w-5 h-5 relative'}>
                        <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                    </div>
                </div>
                <div className={'w-8/12 flex justify-center flex-wrap relative'}>
                    <div className={'w-full h-72 mt-5'} key={lootbox.id}>
                        <div className={'w-72 h-72 relative'}>
                            <div className={'absolute top-0 w-full h-full'}>
                                <Image src={'/images/bg_sprite.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'absolute top-0 w-full h-full'}>
                                <Image src={'/images/lootbox.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                        <p
                            className={'w-full text-3xl mt-3 text-[#A731FF] text-center font-bold'}>opens
                            in <br/><span className={'text-5xl'}>00:59:59</span>
                        </p>
                        <div className={'grid grid-cols-2 gap-3 h-9 mt-3'}>
                            <button className={'rounded-full bg-black text-white'}>Open</button>
                            <button className={'rounded-full bg-black text-white'}>Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LootboxPop;