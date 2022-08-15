import { useJobsList, usePush, useUserGameFullState } from "../data/data-hooks";
import { sdk } from "../graphql/sdk";

const PageDebug = () => {
  const [state, mutate] = useUserGameFullState();
  const [jobs] = useJobsList();
  const [pushes] = usePush();
  const takeJob = (jobSlug: string) => {
    return sdk().metaforestUserTakeJob({ jobSlug });
  };
  const canApplyToJob = (jobSlug: string) => {
    return sdk().metaforestPerformMyAbiFunction({
      params: { jobSlug },
      fn: "getCanApplyToJobSlug",
    });
  };

  return (
    <div className={"p-10"}>
      <p>UserUri: {state?.userUri}</p>
      <p>Текущее задание: {state?.currentJob?.job?.title}</p>
      <p>
        Текущая стата: <BaseParamsView params={state?.calculatedBaseParams} />
      </p>
      <p>Задания</p>
      {jobs.map((job) => (
        <div key={job.slug} className={"my-1"}>
          <p>{job.title}</p>
          <p className={"text-xs"}>{job.description}</p>
          <button
            className={"text-white bg-gray-500 px-1 px-1 text-xs rounded-sm"}
            onClick={() => takeJob(job.slug)}
          >
            Взять задание
          </button>
          <button
            className={"text-white bg-gray-500 px-1 px-1 text-xs rounded-sm"}
            onClick={() => canApplyToJob(job.slug)}
          >
            Можно ли взять задание?
          </button>
        </div>
      ))}
      <p>
        {pushes.map((p) => (
          <div>{p.textRu}</div>
        ))}
      </p>
    </div>
  );
};

const BaseParamsView = ({ params }: any) => {
  if (!params) return null;
  return (
    <div>
      <div>Str: {params.str}</div>
      <div>Dex: {params.dex}</div>
      <div>Vit: {params.vit}</div>
      <div>Int: {params.int}</div>
      <div>Krm: {params.krm}</div>
    </div>
  );
};
export default PageDebug;
