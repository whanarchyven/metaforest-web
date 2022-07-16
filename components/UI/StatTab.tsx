import styled from "styled-components";

interface statTabInterface{
    stat_value:number,
    stat_name:string,
}

const whichStat:any=(stat:any)=>{
    switch (stat) {
        case 'str':
            return 'linear-gradient(90deg, #C74A54 0%, #FF3F4E 100%);'
        case 'dex':
            return 'linear-gradient(90deg, #A34EDF 0%, #EE87FF 100%);'
        case 'vit':
            return 'linear-gradient(90deg, #5F61FF 0%, #49B3FF 100%);'
        case 'int':
            return 'linear-gradient(90deg, #5FD9FF 0%, #7CFFF7 100%);'
        case 'krm':
            return 'linear-gradient(90deg, #65D6CB 0%, #5FFFCF 100%);'
    }
}

const StatBar = styled.div<{width: number,color:string}>`
  width: ${props => props.width*10}%;
  background: ${props => props.color};
`

export const StatTab = ({stat_value,stat_name}:statTabInterface) => (
    <div className={'w-full h-5 deactive-gradient rounded-full'}>
        <StatBar width={stat_value} color={whichStat(stat_name)} className={'h-full rounded-full flex justify-end items-center'}>
            <div className={'w-4 h-4 rounded-full bg-white mr-0.5 flex justify-center items-center'}>
                <p className={'font-bold text-xs'}>{stat_value}</p>
            </div>
        </StatBar>
    </div>
)