import React, {useRef, useState} from "react";
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {workTask} from "./interfaces/workTask";
import {statKeys} from "./types/statKeys";
import StatRequirementBar from "./UI/StatRequirementBar";
import TaskChecker from "./UI/TaskChecker";
import BunnyGeneration from "./BunnyGeneration";
import ProgressBar from "./UI/ProgressBar";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";

interface LevelUpInterface {
    bunny: MetaforestNftInfo;
    togglePop: () => any;
    skillpoints: number;
}

const LevelUp = ({bunny, togglePop}: LevelUpInterface) => {
    const [skillPoints, setSkillPoints] = useState(2);
    const stats: {
        stat_name: "str" | "dex" | "vit" | "int" | "krm";
        stat_value: number;
    }[] = [
        {
            stat_name: "str",
            stat_value: 0,
        },
        {stat_name: "dex", stat_value: 0},
        {stat_name: "vit", stat_value: 0},
        {
            stat_name: "int",
            stat_value: 0,
        },
        {stat_name: "krm", stat_value: 0},
    ];
    const [upStats, setUpStats] = useState(stats);

    const decreaseStat = (stat: "str" | "dex" | "vit" | "int" | "krm") => {
        let tempstat = [...upStats];
        switch (stat) {
            case "str":
                if (tempstat[0].stat_value > 0) {
                    tempstat[0].stat_value -= 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints + 1);
                }
                break;
            case "dex":
                if (tempstat[1].stat_value > 0) {
                    tempstat[1].stat_value -= 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints + 1);
                }
                break;
            case "vit":
                if (tempstat[2].stat_value > 0) {
                    tempstat[2].stat_value -= 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints + 1);
                }
                break;
            case "int":
                if (tempstat[3].stat_value > 0) {
                    tempstat[3].stat_value -= 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints + 1);
                }
                break;
            case "krm":
                if (tempstat[4].stat_value > 0) {
                    tempstat[4].stat_value -= 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints + 1);
                }
                break;
        }
    };


    const increaseStat = (stat: "str" | "dex" | "vit" | "int" | "krm") => {
        let tempstat = [...upStats];
        switch (stat) {
            case "str":
                console.log('suka');
                if (tempstat[0].stat_value <10) {
                    tempstat[0].stat_value += 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints - 1);
                }
                break;
            case "dex":
                if (tempstat[1].stat_value <10) {
                    tempstat[1].stat_value += 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints - 1);
                }
                break;
            case "vit":
                if (tempstat[2].stat_value <10) {
                    tempstat[2].stat_value += 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints - 1);
                }
                break;
            case "int":
                if (tempstat[3].stat_value <10) {
                    tempstat[3].stat_value += 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints - 1);
                }
                break;
            case "krm":
                if (tempstat[4].stat_value <10) {
                    tempstat[4].stat_value += 1;
                    setUpStats(tempstat);
                    setSkillPoints(skillPoints - 1);
                }
                break;
        }
    };


    return (
        <div
            className={
                "fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll flex flex-wrap justify-around"
            }
        >
            <div
                className={
                    "w-12 h-12 z-[999] absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
                }
                onClick={() => {
                    togglePop();
                }}
            >
                <div className={"w-5 h-5 relative"}>
                    <Image src={"/images/popup_arrow.svg"} layout={"fill"}></Image>
                </div>
            </div>
            <div className={"grid grid-cols-2 pt-14 px-4"}>
                <div className={"col-start-1 flex justify-center items-center"}>
                    <div className={"w-[308px] scale-125 pt-0 h-[300px] mx-auto"}>
                        {bunny.images?.transparentBg?<BunnyGeneration base_image={bunny.images?.transparentBg}></BunnyGeneration>:null}
                    </div>
                </div>
                <div className={"col-start-2"}>
                    <p className={"font-bold text-4xl"}>Level up!</p>
                    <p className={"font-bold text-2xl"}>BUNNY NAME</p>
                    <div className={"col-start-2"}>
                        {bunny.baseParams?.level ? (
                            <div
                                className={"w-full flex justify-around items-center mt-5"}
                            >
                                <div
                                    className={
                                        "w-16 h-16 flex justify-center items-center rounded-full green-gradient"
                                    }
                                >
                                    <p
                                        className={
                                            "text-3xl font-bold text-center leading-[50%] text-white"
                                        }
                                    >
                                        {bunny.baseParams?.level}
                                        <br/>
                                        <span className={"text-lg text-center"}>level</span>
                                    </p>
                                </div>
                                <div className={"relative w-10 h-10"}>
                                    <Image
                                        src={"/images/level_up_arrow.svg"}
                                        layout={"fill"}
                                    ></Image>
                                </div>
                                <div
                                    className={
                                        "w-16 h-16 flex justify-center items-center rounded-full green-gradient"
                                    }
                                >
                                    <p
                                        className={
                                            "text-3xl font-bold text-center leading-[50%] text-white"
                                        }
                                    >
                                        {bunny.baseParams?.level + 1}
                                        <br/>
                                        <span className={"text-lg text-center"}>level</span>
                                    </p>
                                </div>
                            </div>
                        ) : null}
                        <p className={"font-bold text-xl mt-5"}>You have:</p>
                        <div
                            className={
                                "w-full h-14 rounded-full green-gradient p-1 flex items-center"
                            }
                        >
                            <div
                                className={
                                    "w-12 h-12 rounded-full bg-white flex justify-center items-center font-bold text-4xl"
                                }
                            >
                                {skillPoints}
                            </div>
                            <p
                                className={
                                    "font-bold text-black leading-[100%] text-xl ml-4"
                                }
                            >
                                skill
                                <br/>
                                points
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full"}>
                {upStats.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={"w-full h-6 flex justify-around items-center mt-5"}
                        >
                            <div
                                className={
                                    "w-7 h-7 rounded-full bg-black text-white flex justify-center items-center font-bold"
                                }
                                onClick={() => {
                                    decreaseStat(item.stat_name);

                                }}
                            >
                                -
                            </div>
                            <div className={"flex items-center"}>
                                <div className={"w-7 h-7 flex justify-center items-center"}>
                                    <div className={"w-5 h-5 relative"}>
                                        <Image
                                            src={"/images/stats_icons/" + item.stat_name + ".svg"}
                                            layout={"fill"}
                                        ></Image>
                                    </div>
                                </div>
                                <p className={"ml-3 w-12"}>{item.stat_name.toUpperCase()}</p>
                            </div>
                            <div className={"w-52 h-full"}>
                                {bunny.baseParams!=undefined&&bunny.baseParams[item.stat_name]!=undefined?<ProgressBar
                                    progress={
                                        bunny?.baseParams?.[item.stat_name] + item.stat_value
                                    }
                                    limit={10}
                                ></ProgressBar>:null}
                            </div>
                            <div
                                className={
                                    "w-7 h-7 rounded-full bg-black text-white flex justify-center items-center font-bold"
                                }
                                onClick={() => {
                                    if (skillPoints > 0) {
                                        increaseStat(item.stat_name);
                                        console.log(item.stat_name)
                                    }
                                }}
                            >
                                +
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                className={
                    "w-72 rounded-full text-black font-bold text-3xl h-20 green-gradient"
                }
            >
                Confirm
            </button>
        </div>
    );
};

export default LevelUp;
