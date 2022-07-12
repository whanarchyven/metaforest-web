import React, {useState} from 'react';
import TabSwitcher from "../TabSwitcher";
import ItemCard from "../ItemCard";

const Marketplace = () => {
    const tabs=[
        'looks','instruments','houses'
    ]
    const [activeTab,setActiveTab]=useState('looks')

    const payment=[
        'buy','rent',
    ]
    const [activePayment, setActivePayment]=useState('buy')


    const items=[
        {
            id:1,
            type:'ears',
            rarity:'uncommon',
            name:'Ears_0000s_0004_rozovye-mehovye-ushi',
            increase:{
                vit:2,
                int:3,
            },
        },
        {
            id:2,
            type:'left',
            rarity:'common',
            name:'L-hand_0000s_0001_bita',
            increase:{
                vit:2,
            },
        },
        {
            id:3,
            type:'faces',
            rarity:'epic',
            name:'Face_0000s_0002_krolik-v-golove',
            increase:{
                vit:2,dex:2,krm:2,
            },
            requirements:{
                int:2,
            }
        },
        {
            id:4,
            type:'necklace',
            rarity:'legendary',
            name:'ton-serebro-1',
            increase:{
                vit:2,dex:2,krm:2,
            },
            requirements:{
                int:2,str:4,
            }
        },
    ]


    return (
        <div className={'w-full h-full pb-0 p-4'}>
            <p className={'text-center text-black text-5xl font-bold mb-5'}>Market</p>
            <div className={'grid grid-cols-5 grid-rows-2 gap-2 h-20 mb-2'}>
                <div className={'col-start-1 col-end-6 row-start-1'}>
                    <TabSwitcher tabs={tabs} activeTab={activeTab} switchTab={setActiveTab}></TabSwitcher>
                </div>
                <div className={'col-start-1 col-end-3 row-start-2'}>
                    <TabSwitcher tabs={payment} activeTab={activePayment} switchTab={setActivePayment}></TabSwitcher>
                </div>
                <div className={'col-start-4 col-end-6'}>
                    <select className={'w-full h-full rounded-full font-bold text-center text-[#898994]'}>
                        <option className={'rounded-full text-[#898994]'}>Available now</option>
                        <option className={'rounded-full text-[#898994]'}>Option 1</option>
                        <option className={'rounded-full text-[#898994]'}>Option 2</option>
                        <option className={'rounded-full text-[#898994]'}>Option 3</option>
                        <option className={'rounded-full text-[#898994]'}>Option 4</option>
                    </select>
                </div>
            </div>
            <div className={'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-4 h-[76%] border-black border-2'}>
                {items.map(item=>{
                    return <ItemCard item={item} key={item.id}></ItemCard>
                })}
            </div>
        </div>
    );
};

export default Marketplace;