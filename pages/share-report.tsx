import {useUserGameFullState} from "../data/data-hooks";
import {AuthConnector} from "../components/auth-connector";
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import moment from "moment";
import Layout from "../components/Layout";

const StatsPage = () => {
    const [data] = useUserGameFullState();

    if (!data)
        return (
            <div>
                <AuthConnector/>
            </div>
        );
    const hoursElapsed = moment().diff(data.currentJob?.jobStartTime, "hours");
    const avgSpeed =
        hoursElapsed > 0
            ? ((data?.currentJob?.metersPassed ?? 0) / hoursElapsed).toFixed(1)
            : 0;

    return (
        <Layout>
            <div
                className={
                    "bg-slate-600 flex font-roboto justify-center items-center w-[100vw] h-[100vh]"
                }
            >
                <AuthConnector/>
                <div
                    className={
                        "w-96 h-[300px] rounded-2xl walk-gradient flex flex-wrap justify-center p-6"
                    }
                >
                    <p className={"text-3xl mt-5 font-bold w-full text-center"}>Введите ссылку на публикацию:</p>
                    <input type={'text'} className={'w-full text-center p-2 h-9 rounded-full'}/>
                    <button className={'w-4/5 h-9 bg-black text-white rounded-full font-bold text-xl'}>Отправить</button>
                </div>
            </div>
        </Layout>
    );
};

export default StatsPage;
