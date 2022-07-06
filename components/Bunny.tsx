import React, {useState} from 'react';
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
                str:0,
                dex:0,
                vit:0,
                int:0,
                krm:0,
            },

            base:{
                rabbit:'0000s_0012_belyj',
                eyes:'Eyes_0000s_0000s_0001_rozovaja-kraska'
            },
            equipment:{
                hat:{
                    id:1,
                    type:'hats',
                    rarity:'common',
                    name:'_0000s_0001s_0001_zolotaja-korona',
                }
            }

        },
    }
    const [bunny,setBunny]=useState(initialBunny);

    return (
        <div className={'w-full h-[100vh] relative'}>
            <div className={'w-full h-full pt-20 pb-32'}>
                <Container bunny={bunny} currentTab={currentTab}></Container>
            </div>
            <div className={'w-full h-20 fixed top-0'}>
                <TopMenu balance={balance}></TopMenu>
            </div>
            <div className={'w-full h-32 fixed bottom-0'}>
                <TabBar currentTab={currentTab} UpdateTab={UpdateTab}></TabBar>
            </div>
        </div>
    );
};

export default Bunny;