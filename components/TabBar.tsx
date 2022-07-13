import React, {useEffect, useRef, useState} from 'react';
import {tabType} from "./types/tabType";
import Image from "next/image";

interface tabBarInterface{
    currentTab:tabType,
    UpdateTab:(newTab:tabType)=>any,
}

const TabBar = ({currentTab,UpdateTab}:tabBarInterface) => {

    const [isVisible,setIsVisible]=useState('visible-true');
    const [currentOffset,setCurrentOffset]=useState(0);
    const tabs=[
        'activity',
        'equipment',
        'home',
        'marketplace',
        'work',
    ]

    useEffect(()=>{
        window.addEventListener('scroll',ev => {
            if(window.pageYOffset>currentOffset){
                setIsVisible('visible-false');
                setCurrentOffset(window.pageYOffset);
            }
            else{
                setIsVisible('visible-true');
                setCurrentOffset(window.pageYOffset);
            }
        })
    })

    return (
        <div className={'w-full h-full bg-white grid grid-cols-5 gap-10 grid-rows-1 p-5 '+isVisible}>
            {tabs.map(item=>{
                let active='';
                if(item!=currentTab){
                    active='_active'
                }
                return(
                    <div className={'relative'} key={item} onClick={()=>{UpdateTab(item)}}>
                        <Image src={'/images/tabs/'+item+active+'.svg'} layout={'fill'}></Image>
                    </div>
                );
            })}
        </div>
    );
};

export default TabBar;