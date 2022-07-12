import React from 'react';
import Image from "next/image";
import {equipmentItem} from "./interfaces/equipmentItem";
interface ItemCardInterface{
    item:equipmentItem
}
const ItemCard = ({item}:ItemCardInterface) => {
    let increase:any;
    if(item.increase){
        increase=Object.entries(item.increase);
    }
    let requirements:any;
    if(item.requirements){
        requirements=Object.entries(item.requirements);
    }
    let color:any;
    switch (item.rarity){
            case'common':
                color='#B8B8B8';
            case'uncommon':
                color='#9BCA15';
            case'epic':
                color='#9600FF';
            case'legendary':
                color='#FF8F00';
    }
    let bg=' bg-['+color+']'
    return (
        <div className={'w-full h-full p-2 rounded-xl border-4 relative bg-uncommon-weak'}>
            <div className={'w-28 h-28 relative mx-auto'}>
                <div className={'w-full h-full absolute'}>
                    <Image src={'/images/card_generation/item_bg.svg'} layout={'fill'}></Image>
                </div>
                <div className={'w-full h-full absolute'}>
                    <Image src={'/images/miniatures/'+item.type+'/'+item.name+'.png'} layout={'fill'}></Image>
                </div>
            </div>
            <p className={'text-center text-xl font-bold mb-4'}>{item.type}</p>
            <div className={'grid grid-cols-2 gap-2'}>
                <div className={'grid grid-cols-1 grid-rows-3 gap-2 h-28'}>
                    {increase.map((incr:any)=>{
                        console.log(incr[0]+incr[1]);
                        return (<div className={'w-full h-full rounded-full flex justify-center items-center relative'} key={incr[0]}>
                            <div className={'w-full h-full bg-white opacity-30 rounded-full absolute top-0 left-0'}></div>
                            <div className={'w-8 h-8 rounded-full bg-white absolute left-0 p-2'}>
                                <div className={'w-full h-full relative'}>
                                    <Image src={'/images/card_generation/'+item.rarity+'/'+incr[0]+'.svg'} layout={'fill'}></Image>
                                </div>
                            </div>
                            <p className={'absolute text-lg font-bold left-10'}>+{incr[1]}</p>
                        </div>)
                    })}
                </div>
                <div className={'grid grid-cols-1 grid-rows-3 h-4/5'}>
                    <p className={'text-left text-xs font-bold'}>Require:</p>
                    <div className={'grid grid-cols-2 gap-1'}>
                        {requirements!=undefined? requirements.map((requirements:any)=>{
                            return (<div className={'w-full h-5 rounded-full flex justify-center items-center relative'} key={requirements[0]}>
                                <div className={'w-full h-full bg-white opacity-30 rounded-full absolute top-0 left-0'}></div>
                                <div className={'w-5 h-5 rounded-full bg-white absolute left-0 p-1'}>
                                    <div className={'w-full h-full relative'}>
                                        <Image src={'/images/card_generation/'+item.rarity+'/'+requirements[0]+'.svg'} layout={'fill'}></Image>
                                    </div>
                                </div>
                                <p className={'absolute text-xs font-bold left-6'}>{requirements[1]}</p>
                            </div>)
                        }): null}
                    </div>
                    {item.rarity=='legendary'?<p className={'text-left text-xs font-medium'}>Status <strong>Elite</strong></p>:null}
                </div>
            </div>
            <div className={'w-5 h-5 left-1 top-1 absolute'}>
                <Image src={'/images/card_generation/'+item.type+'.svg'} layout={'fill'}></Image>
            </div>
            <p className={'h-5 right-2 w-20 text-right top-1 absolute text-sm'}>{item.id}</p>

        </div>
    );
};

export default ItemCard;