import React, {useEffect, useState} from 'react';
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {equipmentItem} from "./interfaces/equipmentItem";
import TopMenu from "./TopMenu";
import Container from "./Container";
import TabBar from "./TabBar";
import {tabType} from "./types/tabType";

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
                },
                clothes:{
                    id:2,
                    type:'clothes',
                    rarity:'common',
                    name:'Clothes_0000s_0008_kostjum',
                }
            }

        },
    }
    const [bunny,setBunny]=useState(initialBunny);

    const attachItemToBunny = (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>{
        const newBunny={...bunny};
        newBunny.bunny.equipment[place]=item;
        setBunny(newBunny);
    }

    const updateStats =(new_stats: {str:number,dex:number,vit:number,krm:number,int:number})=>{
        const newBunny={...bunny};
        newBunny.bunny.stats=new_stats;
        console.log(newBunny);
        setBunny(newBunny);
    }

    const refreshStats=()=>{
        const total_stats:{title:"str"|"dex"|"krm"|"vit"|"int",value:number}[]=[
            {
                title:'str',
                value:bunny.bunny.stats.str,
            },
            {
                title:'dex',
                value:bunny.bunny.stats.dex,
            },
            {
                title:'int',
                value:bunny.bunny.stats.int,
            },
            {
                title:'krm',
                value:bunny.bunny.stats.krm,
            },
            {
                title:'vit',
                value:bunny.bunny.stats.vit,
            },
        ]

        const summStat=(title:string,value:number)=>{
            total_stats.map(item=>{
                if(item.title==title){
                    item.value+=value;
                }
            })
        }

        const equip=Object.entries(bunny.bunny.equipment)
        equip.map(item=>{
            // console.log(item[1].increase)
            if(item[1].increase){
                const item_stats=Object.entries(item[1].increase)
                // item_stats[1].map(stat=>{
                //     console.log(stat)
                // })
                // console.log(item_stats);
                item_stats.map(suka=>{
                    // console.log(suka[0]+suka[1])
                    summStat(suka[0],suka[1])
                })
            }
        })
        console.log(total_stats)
        let new_stat:{stats:{str:number,dex:number,vit:number,krm:number,int:number}}={stats:{str:0,dex:0,vit:0,krm:0,int:0}}
        total_stats.map(item=>{
            new_stat.stats[item.title]=item.value
        })
        console.log(new_stat);
        updateStats(new_stat.stats);
        // const newBunny={...bunny};
        // // newBunny.bunny.stats.str+1;
        // total_stats.map(item=>{
        //     newBunny.bunny.stats[item.title]=item.value;
        // })
        // console.log(newBunny)
        // setBunny({...newBunny});
    }
    return (
        <div className={'flex relative'}>
            <div className={'w-full h-full pt-14 pb-20'}>
                <Container refreshStats={refreshStats} attachItemToBunny={attachItemToBunny} bunny={bunny} currentTab={currentTab}></Container>
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