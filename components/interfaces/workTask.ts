export interface workTask{
    workItem:{
        id:number,
        type:string|'m2e'|'social',
        name:string,
        description:string,
        profit:number,
        goal:number,
        color:string,
        requirements?: {
            str?:number,
            dex?:number,
            vit?:number,
            int?:number,
            krm?:number,
        },
    }
}