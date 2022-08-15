import { sdk } from "../graphql/sdk";
import {
  MetaforestJob,
  MetaforestPushNotification,
  MetaforestUserGameFullStatePayload,
} from "../graphql/sdk/graphql";
const state = {
  bunnyLevel: 1,
  bunnyRarityInt: 1,
  carrotsBalance: 1000,
  carrotsEarnLog: [],
  currentJob: {
    carrotsC1: {
      dex: 1,
      int: 1,
      vit: 1,
      str: 1,
      krm: 1,
    },
    conditionsGTE: {
      dex: 1,
      int: 1,
      vit: 1,
      str: 1,
      krm: 1,
    },
    description: "Хождение",
    imageUrl: "картинка",
    jobEnergyC1: {
      dex: 1,
      int: 1,
      vit: 1,
      str: 1,
      krm: 1,
    },
    slug: "job1",
    title: "Поход",
  },
  currentJobEarnedCarrots: 1,
  currentJobInProgress: true,
  currentJobStepsProgress: {
    carrotsEarned: 0,
    jobStartTime: new Date().toISOString(),
    metersPassed: 0,
  },
  dex: 1,
  freeEnergyPercent: 100,
  int: 1,
  inventory: [],
  jobEnergy: 100,
  krm: 1,
  lastTimeTick: new Date().toISOString(),
  maxJobEnergy: 1,
  skillPoints: 1,
  str: 1,
  unopenedLootBoxes: [],
  userUri: "telegram://test",
  vit: 1,
};
export const useUserGameFullState = () => {
  const { data, mutate } = sdk().useMetaforestUserGetMyState();

  return [data?.metaforestUserGetMyState, mutate] as [
    MetaforestUserGameFullStatePayload,
    any
  ];
};

export const useJobsList = () => {
  const { data, mutate } = sdk().useMetaforestJobsList();

  return [data?.metaforestJobsList ?? [], mutate] as [MetaforestJob[], any];
};

export const usePush = () => {
  const { data, mutate } = sdk().useMetaforestUserGetMyPush({});

  return [data?.metaforestUserGetMyPush ?? [], mutate] as [
    MetaforestPushNotification[],
    any
  ];
};
