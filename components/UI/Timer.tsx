import React, {useEffect} from 'react';
import { useTimer } from 'react-timer-hook';

interface myTimerInterface{
    timer:number
    expiryTimestamp:any
}

export default function MyTimer({ expiryTimestamp }:myTimerInterface) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    useEffect(()=>{
        start();
    },[])

    return (
        <span className={'text-[#A731FF] font-bold'}>
            {days}:{hours}:{minutes}:{seconds}
        </span>
    );
}

