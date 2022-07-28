import React from 'react';
import {tabType} from "./types/tabType";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";
import Activity from "./screens/Activity";
import Equipment from "./screens/Equipment";
import Work from "./screens/Work";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {equipmentItem} from "./interfaces/equipmentItem";
import {workTask} from "./interfaces/workTask";

interface containerInterface {
    currentTab: tabType;
    bunny: bunnyInterface;
    attachItemToBunny :(place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=> any;
    getNewActiveTask:(task:workTask)=>any;
    pushItemToInventory:(item:equipmentItem)=>any;
    balance:number;
    changeBalance:(new_balance:number)=>any;
    increaseCharacteristics:(chars:{id:'str'|'dex'|'vit'|'int'|'krm',increase:number}[])=>any
}

const Container = ({currentTab,bunny,attachItemToBunny,getNewActiveTask,pushItemToInventory,balance,changeBalance}:containerInterface) => {
    switch (currentTab){
        case 'home':{
            return (
                <div className={'w-full h-full'}>
                    <Home bunny={bunny.bunny}></Home>
                </div>
            );
        }
        case 'marketplace':{
            return (
                <div className={'w-full h-full'}>
                    <Marketplace changeBalance={changeBalance} balance={balance} bunny={bunny} pushItemToInventory={pushItemToInventory}></Marketplace>
                </div>
            );
        }
        case 'activity':{
            return (
                <div className={'w-full h-full'}>
                    <Activity></Activity>
                </div>
            );
        }
        case 'equipment':{
            return (
                <div className={'w-full h-full'}>
                    <Equipment bunny={bunny} attachItemToBunny={attachItemToBunny}></Equipment>
                </div>
            );
        }
        case 'work':{
            return (
                <div className={'w-full h-full'}>
                    <Work bunny={bunny} getNewActiveTask={getNewActiveTask}></Work>
                </div>
            );
        }
        default:{
            return <></>
        }
    }
};

export default Container;