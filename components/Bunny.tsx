import React, {useEffect, useState} from 'react';
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {equipmentItem} from "./interfaces/equipmentItem";
import TopMenu from "./TopMenu";
import Container from "./Container";
import TabBar from "./TabBar";
import {tabType} from "./types/tabType";
import {workTask} from "./interfaces/workTask";
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;
import {activeTask} from "./interfaces/activeTask";
import {statKeys} from "./types/statKeys";

const Bunny = () => {

    const [balance,setBalance]=useState(1488);

    const initialTab:tabType="home"
    const [currentTab,setCurrentTab]=useState(initialTab);

    const UpdateTab=(newTab:tabType)=>{
        return setCurrentTab(newTab);
    }

    const initialBunny:bunnyInterface={
        bunny:{
            id:0,
            name:'Test Bunny',
            lvl:1,
            vitality:6,
            carrots_limit:0,
            energy:1,

            stats:{
                str:2,
                dex:3,
                vit:6,
                int:4,
                krm:1,
            },

            base:{
                rabbit:'0000s_0012_belyj',
                eyes:'Eyes_0000s_0000s_0001_rozovaja-kraska'
            },
            equipment:{
                hats:{
                    id:1,
                    type:'hats',
                    rarity:'common',
                    name:'_0000s_0001s_0001_zolotaja-korona',
                    increase:{
                        str:1
                    }
                },
                clothes:{
                    id:2,
                    type:'clothes',
                    rarity:'common',
                    name:'Clothes_0000s_0008_kostjum',
                    increase:{
                        int:1
                    }
                }
            },
            workHistory:[],

        },
    }
    const [bunny,setBunny]=useState(initialBunny);

    const attachItemToBunny = (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>{

        const characteristics:{id:'str'|'dex'|'vit'|'int'|'krm'}[]=[
            {id:'int'},
            {id:'dex'},
            {id:'vit'},
            {id:'krm'},
            {id:'str'},
        ]

        let canWear=true;

        characteristics.map(characteristic=>{
            if(item.requirements){
               const temp = item.requirements[characteristic.id];
                if(temp!=undefined&&temp>bunny.bunny.stats[characteristic.id]){
                    alert('It seems like your stats are not enough to wear this item! Increase your '+characteristic.id+' !')
                    canWear=false;
                    // console.log('Require '+[characteristic.id]+' '+item.requirements[characteristic.id]);
                    // console.log('Bunny: '+characteristic.id+' '+bunny.bunny.stats[characteristic.id]);
                }
            }
        })

        if(!canWear){
            return 0
        }

        const newBunny={...bunny};
        const inventoryCategories:{id:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears"}[]=[
            {id:"left"},{id:"right"},{id:"necklace"},{id:"faces"},{id:"clothes"},{id:"hats"},{id:"overhead"}, {id:"ears"}
        ]

        inventoryCategories.map(category=>{
            if(newBunny.bunny.equipment[category.id]!=undefined){
                const category_item=newBunny.bunny.equipment[category.id]
                //
                if(category_item?.increase){
                    const category_item_stat=Object.entries(category_item.increase);
                    //
                    const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
                    const getStat=(stat_string:string)=>{
                        switch (stat_string) {
                            case 'str':return stats[0]
                            case 'dex':return stats[1]
                            case 'int':return stats[2]
                            case 'vit':return stats[3]
                            case 'krm':return stats[4]
                            default:return stats[0]
                        }
                    }

                    category_item_stat.map(stat=>{
                        newBunny.bunny.stats[getStat(stat[0]).id]-=stat[1];
                    })
                }
            }
        })
        newBunny.bunny.equipment[place]=item;
        inventoryCategories.map(category=>{
            if(newBunny.bunny.equipment[category.id]!=undefined){
                const category_item=newBunny.bunny.equipment[category.id]
                if(category_item?.increase){
                    const category_item_stat=Object.entries(category_item.increase);
                    const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
                    const getStat=(stat_string:string)=>{
                        switch (stat_string) {
                            case 'str':return stats[0]
                            case 'dex':return stats[1]
                            case 'int':return stats[2]
                            case 'vit':return stats[3]
                            case 'krm':return stats[4]
                            default:return stats[0]
                        }
                    }

                    category_item_stat.map(stat=>{
                        newBunny.bunny.stats[getStat(stat[0]).id]+=stat[1];
                    })
                }
            }
        })
        setBunny(newBunny);
    }


    const getNewActiveTask=(task:workTask)=>{
        let canTake=true;
        statKeys.map(stat=>{
            if(task.workItem.requirements){
                const temp=task.workItem.requirements[stat.stat_name]
                if(temp!=undefined&&bunny.bunny.stats[stat.stat_name]<temp){
                    alert('You can not take this job, looks like you are do not have much '+stat.stat_name+'!')
                    canTake=false;
                    return 0
                }
            }
        })
        if(canTake){
            const new_task:activeTask={...task,progress:0};
            const newBunny={...bunny}
            newBunny.bunny.activeTask=new_task;
            // if(bunny.bunny.workHistory==undefined){
            //     newBunny.bunny.workHistory=[];
            // }
            if(bunny.bunny.activeTask!=undefined&&bunny.bunny.workHistory?.findIndex(function (history){return history.workItem.id==new_task.workItem.id})==-1){
                newBunny.bunny.workHistory?.push(bunny.bunny.activeTask);
            }

            setBunny({...newBunny});
            alert("You successfully taked this job!");
        }
    }

    return (
        <div className={'flex relative'}>
            <div className={'w-full h-full pt-14 pb-20'}>
                <Container attachItemToBunny={attachItemToBunny} bunny={bunny} currentTab={currentTab} getNewActiveTask={getNewActiveTask}></Container>
            </div>
            <div className={'w-full h-14 fixed top-0'}>
                <TopMenu balance={balance}></TopMenu>
            </div>
            <div className={'w-full h-20 fixed bottom-0'}>
                <TabBar currentTab={currentTab} UpdateTab={UpdateTab}></TabBar>
            </div>
        </div>
    );
};

export default Bunny;