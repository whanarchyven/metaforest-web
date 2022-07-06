import {equipmentItem} from "./equipmentItem";
import {activeTask} from "./activeTask";

export interface bunnyInterface{
    bunny:{
        id:number,
        name:string,
        lvl:number,
        vitality:number,
        carrots_limit:number,
        energy:number,

        stats:{
            str:number,
            dex:number,
            vit:number,
            int:number,
            krm:number,
        },

        base:{
            rabbit:string,
            overhead?:string,
            mouth?:string,
            eyes?:string,
            bg?:string,
            faces?:string,
        },

        equipment?:{
            rightHand?:equipmentItem,
            leftHand?:equipmentItem,
            hat?:equipmentItem,
            clothes?:equipmentItem,
            neck?:equipmentItem,
            hears?:equipmentItem,
        },
        inventory?:Array<equipmentItem>,
        activeTask?:activeTask,
    },


}
