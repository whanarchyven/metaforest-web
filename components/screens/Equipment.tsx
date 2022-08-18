import React, { useState } from "react";
import Image from "next/image";
import BunnyGeneration from "../BunnyGeneration";
import { bunnyInterface } from "../interfaces/bunnyInterface";
import { StatTab } from "../UI/StatTab";
import EquipmentPopUp from "../EquipmentPopUp";
import { equipmentItem } from "../interfaces/equipmentItem";
import StatPop from "../StatPop";
import { useUserGameFullState } from "../../data/data-hooks";

interface equipmentInterface {
  bunny: bunnyInterface;
  // attachItemToBunny : (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>any
}

interface keyTab {
  id:
    | "hats"
    | "faces"
    | "necklace"
    | "left"
    | "overhead"
    | "ears"
    | "clothes"
    | "right"; // <-- "id" | "filter1" | "filter2"
}

interface keyStat {
  id: "str" | "dex" | "vit" | "int" | "krm";
}

const Equipment = ({ bunny }: equipmentInterface) => {
  const leftTabs: keyTab[] = [
    { id: "hats" },
    { id: "faces" },
    { id: "necklace" },
    { id: "left" },
  ];
  const rightTabs: keyTab[] = [
    { id: "overhead" },
    { id: "ears" },
    { id: "clothes" },
    { id: "right" },
  ];
  const stats: keyStat[] = [
    { id: "str" },
    { id: "dex" },
    { id: "vit" },
    { id: "int" },
    { id: "krm" },
  ];

  const [choosenType, setChoosenType] = useState<
    | "left"
    | "right"
    | "necklace"
    | "faces"
    | "clothes"
    | "hats"
    | "overhead"
    | "ears"
  >("hats");
  const [popOpen, setPopOpen] = useState(false);
  const [statOpen, setStatOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(stats[0].id);
  const togglePop = () => {
    setPopOpen(!popOpen);
  };

  const toggleStat = () => {
    setStatOpen(!statOpen);
  };

  const [state, mutate] = useUserGameFullState();

  return (
    <div
      className={"grid grid-cols-1 grid-rows-2 auto-rows-max w-full h-[100vh]"}
    >
      <div className={" grid grid-cols-7"}>
        <div className={"grid gap-4 col-start-1 grid-rows-4 col-end-3 "}>
          {leftTabs.map((tab) => {
            return (
              <div
                className={
                  "relative flex justify-start items-center cursor-pointer"
                }
                key={tab.id}
                onClick={() => {
                  setChoosenType(tab.id);
                  togglePop();
                }}
              >
                {bunny?.bunny?.equipment?.[tab.id] != undefined ? (
                  <div
                    className={
                      " green-gradient rounded-r-full w-full h-16 flex items-center justify-end"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 mr-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={
                            "/images/miniatures/" +
                            tab.id +
                            "/" +
                            bunny.bunny.equipment[tab.id]?.name +
                            ".png"
                          }
                          layout={"fill"}
                        ></Image>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      "opacity-40 green-gradient rounded-r-full w-2/3 h-16 flex items-center justify-end"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 mr-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={"/images/tab_icons/" + tab.id + ".svg"}
                          layout={"fill"}
                        ></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          className={"col-start-3 col-end-6 flex justify-center items-center "}
        >
          <div
            className={
              "h-52 w-36 absolute sm:w-48 scale-[1.6] sm:scale-100 sm:w-72 sm:top-0 sm:h-96"
            }
          >
            {state?.activeBunny?.images?.transparentBg ? (
              <BunnyGeneration
                base_image={state.activeBunny?.images?.transparentBg}
              ></BunnyGeneration>
            ) : null}
          </div>
        </div>
        <div className={"grid gap-4 col-start-6 grid-rows-4 col-end-8 "}>
          {rightTabs.map((tab) => {
            return (
              <div
                className={
                  "relative flex justify-end items-center cursor-pointer"
                }
                key={tab.id}
                onClick={() => {
                  setChoosenType(tab.id);
                  togglePop();
                }}
              >
                {bunny?.bunny?.equipment?.[tab.id] != undefined ? (
                  <div
                    className={
                      " green-gradient rounded-l-full w-full h-16 flex items-center justify-start"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 ml-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={
                            "/images/miniatures/" +
                            tab.id +
                            "/" +
                            bunny.bunny.equipment[tab.id]?.name +
                            ".png"
                          }
                          layout={"fill"}
                        ></Image>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      "opacity-40 green-gradient rounded-l-full w-2/3 h-16 flex items-center justify-start"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 ml-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={"/images/tab_icons/" + tab.id + ".svg"}
                          layout={"fill"}
                        ></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={"flex mt-9 flex-wrap justify-center"}>
        <div className={""}>
          <p
            className={"text-4xl font-bold inline-block align-middle mt-0 mb-2"}
          >
            Test Bunny
          </p>
          <div
            className={
              "w-12 ml-3 h-12 green-gradient rounded-full inline-flex flex-wrap justify-center items-center align-middle"
            }
          >
            <p
              className={
                "text-black leading-[60%] w-full text-xl text-center font-bold"
              }
            >
              {bunny.bunny.lvl}
              <br />
              <span className={"text-sm"}>level</span>
            </p>
            {/*<p className={'text-white text-sm leading-[1%] font-bold'}>level</p>*/}
          </div>
        </div>
        <div className={"grid w-full gap-4 grid-cols-1 grid-rows-6 p-2"}>
          {stats.map((stat) => {
            return (
              <div
                className={"grid grid-cols-5 gap-4 items-center"}
                key={stat.id}
              >
                <div className={"col-start-1 col-end-2"}>
                  <div className={"w-5 h-5 relative inline-block align-middle"}>
                    <Image
                      src={"/images/stats_icons/" + stat.id + ".svg"}
                      layout={"fill"}
                    ></Image>
                  </div>
                  <p
                    className={
                      "ml-2 inline-block text-black text-sm align-middle"
                    }
                  >
                    {stat.id.toUpperCase()}
                  </p>
                </div>
                <div className={"col-start-2 col-end-5 rounded-full"}>
                  {state?.activeBunny?.baseParams &&
                  state.activeBunny?.baseParams[stat.id] ? (
                    <StatTab
                      stat_name={stat.id}
                      stat_value={state.activeBunny?.baseParams[stat.id]}
                    />
                  ) : null}
                </div>
                <div
                  className={
                    "col-start-5 col-end-6 bg-black rounded-full h-full flex justify-center items-center cursor-pointer"
                  }
                  onClick={() => {
                    setCurrentStat(stat.id);
                    toggleStat();
                  }}
                >
                  <p className={"text-white font-bold text-[0.7em]"}>More</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {popOpen ? (
        <EquipmentPopUp
          bunny={bunny}
          choosenType={choosenType}
          items={bunny?.bunny?.inventory}
          togglePop={togglePop}
        />
      ) : null}
      {statOpen ? (
        <StatPop
          togglePop={toggleStat}
          stat_name={currentStat}
          stat_value={bunny?.bunny?.stats?.[currentStat]}
        />
      ) : null}
    </div>
  );
};

export default Equipment;
