import React, {useEffect} from 'react';
interface tabSwitcherInterface{
    tabs:string[],
    rows?:number,
    activeTab:string,
    switchTab:(item:string)=>any
}
const TabSwitcher = ({tabs,rows,activeTab,switchTab}:tabSwitcherInterface) => {
    let gridClass='';
    const gridCalculate=()=>{
        if(rows){
            gridClass='grid-cols-'+Math.ceil(tabs.length/rows)+' grid-rows-'+rows+' ';
        }
        else{
            gridClass='grid-cols-'+tabs.length+' grid-rows-'+1+' ';
        }
    }
    const ucFirst=(item:string)=> {
        if (!item) return item;

        return item[0].toUpperCase() + item.slice(1);
    }
    gridCalculate();
    useEffect(()=>{
        gridCalculate();
    })
    return (
        <div className={'w-full h-full bg-white rounded-full grid gap-2 '+gridClass}>
            {tabs.map(item=>{
                if(item==activeTab){
                    return <div className={'green-gradient rounded-full flex justify-center items-center'} key={item}><p>{ucFirst(item)}</p></div>
                }
                else{
                    return <div className={'bg-transparent rounded-full flex justify-center items-center'} onClick={()=>{switchTab(item)}} key={item}><p>{ucFirst(item)}</p></div>
                }
            })}
        </div>
    );
};

export default TabSwitcher;