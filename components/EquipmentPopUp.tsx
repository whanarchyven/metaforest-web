import React from 'react';
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {firstLetterUpperCase} from "./firstLetterUpperCase";
import {bunnyInterface} from "./interfaces/bunnyInterface";
interface ItemCardInterface {
    choosenType: "left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",
    items: equipmentItem[],
    togglePop: () => any,
    attachItemToBunny : (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>any,
    bunny:bunnyInterface
}


const EquipmentPopUp = ({items,togglePop,choosenType,attachItemToBunny,bunny}:ItemCardInterface) => {
    return (
        <div className={'fixed z-[999] pt-16 w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll'}>
            <div className={'w-full flex over flex-wrap justify-center relative p-4'}>
                <div className={'flex mb-8'}>
                    <div className={'w-10 h-10 inline-flex justify-center items-center rounded-full bg-white align-middle'}>
                        <div className={'w-3/5 h-3/5 relative'}>
                            <Image src={'/images/tab_icons/'+choosenType+'.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                    <p className={'text-center text-3xl ml-4 font-bold inline-block align-middle'}>{firstLetterUpperCase(choosenType)}</p>
                </div>
                <div className={'w-full gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}>
                    {items.map(item=>{
                        if((item.type==choosenType)){
                            if(bunny.bunny.equipment[choosenType]?.name!=item.name){
                                return <div onClick={()=>{attachItemToBunny(choosenType,item);togglePop()}} key={item.name} className={'cursor-pointer'}><ItemCard item={item} key={item.id}></ItemCard></div>
                            }
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </div>
            <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer'} onClick={()=>{togglePop()}}>
                <div className={'w-5 h-5 relative'}>
                    <Image src={'/images/popup_arrow.svg'} layout={'fill'}></Image>
                </div>
            </div>
        </div>
    );
};

export default EquipmentPopUp;