import React from 'react';
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {firstLetterUpperCase} from "./firstLetterUpperCase";
interface ItemCardInterface {
    choosenType: string,
    items: equipmentItem[],
    togglePop: () => any,
    attachItemToBunny: (place: string | "left" | "right" | "necklace" | "face" | "clothes" | "hat" | "overhead" | "ears", item: equipmentItem) => any
}


const EquipmentPopUp = ({items,togglePop,choosenType,attachItemToBunny}:ItemCardInterface) => {
    return (
        <div className={'fixed pt-16 w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll overscroll-y-auto'}>
            <div className={'w-full flex over flex-wrap justify-center relative p-4'}>
                <div className={'flex mb-8'}>
                    <div className={'w-10 h-10 inline-flex justify-center items-center rounded-full bg-white align-middle'}>
                        <div className={'w-3/5 h-3/5 relative'}>
                            <Image src={'/images/tab_icons/'+choosenType+'.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                    <p className={'text-center text-3xl ml-4 font-bold inline-block align-middle'}>{firstLetterUpperCase(choosenType)}</p>
                </div>
                <div className={'w-full gap-4 grid grid-cols-2'}>
                    {items.map(item=>{
                        if(item.type==choosenType){
                            return <div onClick={()=>{attachItemToBunny(choosenType,item)}}><ItemCard item={item}></ItemCard></div>
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </div>
            <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={()=>{togglePop()}}>
                <div className={'w-5 h-5 relative'}>
                    <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                </div>
            </div>
        </div>
    );
};

export default EquipmentPopUp;