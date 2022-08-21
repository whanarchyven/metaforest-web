import { useUserGameFullState } from "../data/data-hooks";
import { AuthConnector } from "../components/auth-connector";
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import moment from "moment";
import Layout from "../components/Layout";
import { useState } from "react";
import { sdk } from "../graphql/sdk";

const StatsPage = () => {
  const [data] = useUserGameFullState();

  if (!data)
    return (
      <div>
        <AuthConnector />
      </div>
    );

  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);

  const send = () => {
    sdk()
      .metaforestUserSendLink({ text })
      .then((d) => {
        setSuccess(true);
        setText("");
      });
  };
  return (
    <Layout>
      <div
        className={
          "bg-slate-600 flex font-roboto justify-center items-center w-[100vw] h-[100vh]"
        }
      >
        <AuthConnector />
        <div
          className={
            "w-96 h-[300px] rounded-2xl walk-gradient flex flex-wrap justify-center p-6"
          }
        >
          <p className={"text-3xl mt-5 font-bold w-full text-center"}>
            Enter publication link:
          </p>
          <input
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={"w-full text-center p-2 h-9 rounded-full"}
          />
          {text.length > 0 && (
            <button
              onClick={send}
              className={
                "w-4/5 h-9 bg-black text-white rounded-full font-bold text-xl"
              }
            >
              Send
            </button>
          )}
          {success && (
            <p
              className={
                "w-4/5 h-9 bg-black text-white rounded-full font-bold text-xl"
              }
            >
              Success
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StatsPage;
