import {equipmentItem} from "./equipmentItem";
import {activeTask} from "./activeTask";

export interface bunnyInterface{
    activeBunny: {
        idx: number,
        uid: string,
        baseParams: {
            int: number,
            dex: number,
            vit: number,
            str: number,
            krm: number,
            level: number
        },
        images: {
            original: string,
            thumb: string,
            web: string,
            transparentBg: string
        }
    },


}
