import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {marketplaceItem} from "./interfaces/marketplaceItem";
import SellingPop from "./SellingPop";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";
import {useUserGameFullState} from "../data/data-hooks";
import {sdk} from "../graphql/sdk";
interface ItemCardInterface{
    item:MetaforestNftInfo,
    togglePop:()=>any,
}

const InventoryPopUp = ({item,togglePop}:ItemCardInterface) => {
    const [openSellingPop,setOpenSellingPop]=useState(false);
    const toggleSellingPop=()=>{
        setOpenSellingPop(!openSellingPop)
    }
    const [state,mutate]=useUserGameFullState()

    return (
        <div className={'flex flex-wrap fixed w-full h-full top-0 left-0 grey-gradient justify-center items-center'}>
            <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={()=>{togglePop()}}>
                <div className={'w-5 h-5 relative'}>
                    <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-8/12 flex justify-center flex-wrap relative'}>
                <div className={'w-4/5 h-80 mb-8'}>
                    <ItemCard item={item}></ItemCard>
                </div>
                <div className={'relative w-full mt-5 grid grid-cols-2 grid-rows-2 gap-4'}>
                    {state?.wornInventory?.find(equiped=>equiped?.idx==item.idx)?<button className={'rounded-full border-2 border-black h-9 bg-transparent font-bold text-black'}>Equiped</button>:<button className={'rounded-full h-9 bg-black font-bold text-white'} onClick={()=>{sdk().metaforestPerformMyAbiFunction({
                        fn:'wearInventoryElementOnCurrentBunny',
                        params:{itemIdx:item.idx}
                    });}}>Equip</button>}
                    {/*<button className={'rounded-full h-9 bg-black font-bold text-white'}>Mint</button>*/}
                    <button className={'rounded-full h-9 bg-black font-bold text-white'} onClick={()=>{toggleSellingPop()}}>Sell</button>
                    {/*<button className={'rounded-full h-9 bg-black font-bold text-white'}>Give</button>*/}
                </div>
            </div>
            {openSellingPop?<SellingPop togglePop={toggleSellingPop}/>:null}
        </div>
    );
};

export default InventoryPopUp;