import React from 'react';
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";

interface ItemCardInterface {
  stat_name: string,
  stat_value: number,
  togglePop: () => any
}

const getStatDescription = (stat: string) => {
  switch (stat) {
    case 'str': return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
    case 'dex': return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
    case 'int': return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
    case 'krm': return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
    case 'vit': return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
  }
}

const getStatFullName = (stat: string) => {
  switch (stat) {
    case 'str': return 'Strength'
    case 'dex': return 'Dexterity'
    case 'int': return 'Intelligence'
    case 'krm': return 'Karma'
    case 'vit': return 'Vitality'
  }
}

const getStatColor = (stat: string) => {
  switch (stat) {
    case 'str': return 'bg-[#FF3F4E]'
    case 'dex': return 'bg-[#CA6CF0]'
    case 'int': return 'bg-[#6EEDFB]'
    case 'krm': return 'bg-[#0CE2CA]'
    case 'vit': return 'bg-[#538DFF]'
  }
}

const StatPop = ({ stat_name, stat_value, togglePop }: ItemCardInterface) => {
  return (
    <div className={'flex fixed z-[999] pt-16 w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll p-6 flex-wrap fixed w-full h-full top-0 left-0 grey-gradient justify-center items-center'}>
      <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={() => { togglePop() }}>
        <div className={'w-5 h-5 relative'}>
          <Image
            alt=""
            src={'/images/popup_arrow.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
      <div className={'w-72 h-72 flex justify-center items-center relative'}>
        <div
          className={'w-full h-full absolute'}>
          <Image
            alt=""
            src={'/images/card_generation/item_bg.svg'}
            layout={'fill'}
          ></Image>
        </div>
        <div className={'w-[80%] h-[80%] absolute'}>
          <Image
            alt=""
            src={'/images/stats_icons/' + stat_name + '.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
      <div className={'flex justify-center items-center'}>
        <p className={'text-5xl mr-5 text-center font-bold'}>{getStatFullName(stat_name)}</p>
        <div className={'w-16 h-16 flex justify-center items-center rounded-full ' + getStatColor(stat_name)}>
          <p className={'text-white text-3xl font-bold'}>{stat_value}</p>
        </div>
      </div>
      <div className={'flex justify-center items-center'}>
        <p className={'text-xl text-center font-medium'}>{getStatDescription(stat_name)}</p>
      </div>
    </div>
  );
};

export default StatPop;
