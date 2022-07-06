import React from 'react';
import {bunnyInterface} from "./interfaces/bunnyInterface";
import BunnyGeneration from "./BunnyGeneration";

interface homeInterface{
    bunny:bunnyInterface
}

const Home = (bunny:bunnyInterface) => {
    return (
        <div className={'w-full h-full'}>
            <div className={'w-full h-full rounded-full bunny-generation-outside'}>
                <div className={'w-full h-full rounded-full bunny-generation-inside'}>
                    <BunnyGeneration bunny={bunny}></BunnyGeneration>
                </div>
            </div>
        </div>
    );
};

export default Home;