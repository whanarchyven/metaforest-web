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
                    "grey-gradient  font-roboto  w-[100vw] h-[100vh]"
                }
            >
                <AuthConnector/>
                <p className={'w-full pt-20 text-center font-bold text-3xl'}>Доступ ограничен на время бета-теста!</p>
                <div
                    className={
                        "w-full mt-40 h-[300px] rounded-2xl flex flex-wrap relative justify-center p-6"
                    }
                >
                    <Image src={'/images/sad_bunny.svg'} layout={'fill'}></Image>
                </div>
            </div>
        </Layout>
    );
};

export default StatsPage;
