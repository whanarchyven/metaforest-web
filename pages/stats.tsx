import { useUserGameFullState } from "../data/data-hooks";
import { AuthConnector } from "../components/auth-connector";
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import moment from "moment";
const StatsPage = () => {
  const [data] = useUserGameFullState();

  if (!data)
    return (
      <div>
        <AuthConnector />
      </div>
    );
  const hoursElapsed = moment().diff(data.currentJob?.jobStartTime, "hours");
  const avgSpeed =
    hoursElapsed > 0
      ? ((data?.currentJob?.metersPassed ?? 0) / hoursElapsed).toFixed(1)
      : 0;

  return (
    <div
      className={
        "bg-slate-600 flex font-roboto justify-center items-center w-[100vw] h-[100vh]"
      }
    >
      <AuthConnector />
      <div
        className={
          "w-96 h-[600px] rounded-2xl walk-gradient flex flex-wrap justify-center p-6"
        }
      >
        <p className={"text-3xl mt-5 font-bold w-full text-center"}>Walking</p>
        <div className={"w-40 h-40 flex justify-center items-center relative"}>
          <div className={"w-full h-full absolute top-0 left-0"}>
            <Image alt="" src={"/images/bg_sprite.svg"} layout={"fill"}></Image>
          </div>
          <div className={"w-3/5 h-3/5 absolute"}>
            <Image
              alt="steps"
              src={"/images/work_module/icons/STEPS_black.svg"}
              layout={"fill"}
            ></Image>
          </div>
        </div>
        <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
          <div className={"col-start-1 col-end-3"}>
            {data.currentJob && data.currentJob.job?.approxMeters ? (
              <ProgressBar
                progress={Math.round(data.currentJob?.metersPassed)}
                limit={data.currentJob?.job?.approxMeters}
              />
            ) : null}
          </div>
          {data.currentJob ? (
            <p className={"font-bold text-white"}>
              {Math.round(data.currentJob?.metersPassed)}/
              {data.currentJob?.job?.approxMeters} m
            </p>
          ) : null}
        </div>
        <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
          <div className={"col-start-1 col-end-3"}>
            <ProgressBar
              progress={data.jobEnergy ?? 0}
              limit={data.maxJobEnergy ?? 1}
            />
          </div>
          <div>
            <p className={"font-bold text-white inline-block"}>2.1/3</p>
            <div className={"w-5 h-5 relative ml-2 inline-block"}>
              <Image
                alt=""
                src={"/images/stats_icons/vit_white.svg"}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        </div>
        <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
          <p className={"col-start-1 col-end-3 text-white font-bold text-xl "}>
            Average speed:
          </p>
          <div>
            <p className={"font-bold text-white inline-block text-xl"}>
              {avgSpeed} km/h
            </p>
          </div>
        </div>
        <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
          <p
            className={
              "col-start-1 col-end-3 text-white font-bold text-xl align-bottom "
            }
          >
            You earned:
          </p>
          <div>
            {data.currentJob ? (
              <p
                className={
                  "font-bold text-white inline-block text-xl align-bottom"
                }
              >
                {data.currentJob?.carrotsEarned.toFixed(2)}
              </p>
            ) : null}
            <div className={"w-5 h-5 relative ml-2 inline-block"}>
              <Image
                alt="carrot"
                src={"/images/carrot_icon_white.svg"}
                layout={"fill"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
