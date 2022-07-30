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
import {sdk} from "../graphql/sdk";
import {useRouter} from "next/router";





const Layout = (props:any) => {
    const needUrl=useRouter();

    const [routerUrl,setRouterUrl]=useState(needUrl)

    // console.log(needUrl);

    // useEffect(()=>{
    //     setRouterUrl(useRouter())
    //     console.log(routerUrl);
    // },[])

    return (
        <div className={'flex relative'}>
            <div className={'w-full h-full pt-14 pb-20'}>
                {/*<Container attachItemToBunny={attachItemToBunny} bunny={bunny} currentTab={currentTab} getNewActiveTask={getNewActiveTask} pushItemToInventory={pushItemToInventory} balance={balance} changeBalance={changeBalance} increaseCharacteristics={increaseCharacteristics}></Container>*/}
                {/*{...props}*/}
                {props.children}
            </div>
            {/*<div className={'w-full h-14 fixed top-0'}>*/}
            {/*    <TopMenu balance={balance}></TopMenu>*/}
            {/*</div>*/}
            <div className={'w-full h-20 fixed bottom-0'}>
                <TabBar currentTab={needUrl.pathname}></TabBar>
            </div>
        </div>
    );
};

export default Layout;