import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export enum BunnySlotsEnum {
  Costume = 'Costume',
  EarsAccessories = 'EarsAccessories',
  EarsNHorns = 'Ears_n_Horns',
  Face = 'Face',
  HandLeft = 'HandLeft',
  HandRight = 'HandRight',
  Hat = 'Hat',
  Necklace = 'Necklace',
  Overhead = 'Overhead'
}

export type CarrotsEarnLogElement = {
  __typename?: 'CarrotsEarnLogElement';
  amount: Scalars['Int'];
  timestamp: Scalars['String'];
};

export type CurrentJobProgress = {
  __typename?: 'CurrentJobProgress';
  carrotsEarned?: Maybe<Scalars['Int']>;
  jobStartTime?: Maybe<Scalars['String']>;
  metersPassed?: Maybe<Scalars['Int']>;
};

export type EarnLogElement = {
  __typename?: 'EarnLogElement';
  amount?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
};

export enum FieldTypeEnum {
  Dictionary = 'DICTIONARY',
  ExternalObject = 'EXTERNAL_OBJECT',
  FileUrl = 'FILE_URL',
  FileUrls = 'FILE_URLS',
  Markdown = 'MARKDOWN',
  MarkdownLine = 'MARKDOWN_LINE'
}

export type Idea_MetaforestGlobalGameSettings = {
  __typename?: 'Idea_MetaforestGlobalGameSettings';
  maxSpeedKmH?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  horizontalAccuracy?: Maybe<Scalars['Float']>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  timestamp?: Maybe<Scalars['Date']>;
};

export type LootBox = {
  __typename?: 'LootBox';
  id?: Maybe<Scalars['String']>;
  openAfterDate?: Maybe<Scalars['String']>;
  probabilityOfLoot?: Maybe<Scalars['Int']>;
  slugEnum?: Maybe<Scalars['String']>;
};

export type MessageLocalized = {
  __typename?: 'MessageLocalized';
  en?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export enum MetaforestAbiEnum {
  Config = 'CONFIG',
  Functions = 'FUNCTIONS',
  State = 'STATE'
}

export type MetaforestBaseParams = {
  __typename?: 'MetaforestBaseParams';
  dex: Scalars['Int'];
  int: Scalars['Int'];
  krm: Scalars['Int'];
  level?: Maybe<Scalars['Int']>;
  rarityInt?: Maybe<Scalars['Int']>;
  str: Scalars['Int'];
  vit: Scalars['Int'];
};

export type MetaforestBunnyGens = {
  __typename?: 'MetaforestBunnyGens';
  bg: Scalars['String'];
  body: Scalars['String'];
  ears: Scalars['String'];
  eyes: Scalars['String'];
  mouth: Scalars['String'];
  rarity: Scalars['String'];
  scar: Scalars['String'];
  texture: Scalars['String'];
};

export type MetaforestCurrentJob = {
  __typename?: 'MetaforestCurrentJob';
  avgSpeed?: Maybe<Scalars['Float']>;
  carrotsEarned: Scalars['Float'];
  isActive: Scalars['Boolean'];
  job?: Maybe<MetaforestJob>;
  jobStartTime?: Maybe<Scalars['String']>;
  metersPassed: Scalars['Float'];
};

export type MetaforestGameConfig = {
  __typename?: 'MetaforestGameConfig';
  payload?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['String']>;
};

export enum MetaforestInventorySlotEnum {
  Costume = 'Costume',
  EarsAccessories = 'EarsAccessories',
  EarsNHorns = 'Ears_n_Horns',
  Face = 'Face',
  HandLeft = 'HandLeft',
  HandRight = 'HandRight',
  Hat = 'Hat',
  Necklace = 'Necklace',
  Overhead = 'Overhead'
}

export type MetaforestJob = {
  __typename?: 'MetaforestJob';
  approxMeters?: Maybe<Scalars['Int']>;
  carrotsForApproxMeters?: Maybe<Scalars['Int']>;
  conditionsGTE?: Maybe<MetaforestBaseParams>;
  description: Scalars['String'];
  freeEnergyApproxMetersC0?: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: MetaforestJobTypeEnum;
  vitalitySpend?: Maybe<Scalars['Int']>;
};

export enum MetaforestJobTypeEnum {
  Publication = 'PUBLICATION',
  Referral = 'REFERRAL',
  Steps = 'STEPS'
}

export enum MetaforestNftCollectionsEnum {
  Bunnies = 'BUNNIES',
  Items = 'ITEMS'
}

export type MetaforestNftGrantJob = {
  __typename?: 'MetaforestNftGrantJob';
  isGranted?: Maybe<Scalars['Boolean']>;
  nftCollectionName: MetaforestNftCollectionsEnum;
  nftIdx: Scalars['String'];
  queueIdx?: Maybe<Scalars['Int']>;
  queueName: Scalars['String'];
  userTelegramId: Scalars['String'];
  userTelegramUsername?: Maybe<Scalars['String']>;
  userTonWalletAddress: Scalars['String'];
};

export type MetaforestNftInfo = {
  __typename?: 'MetaforestNftInfo';
  baseParams?: Maybe<MetaforestBaseParams>;
  bodyLayers?: Maybe<Array<Scalars['String']>>;
  bunnyGens?: Maybe<MetaforestBunnyGens>;
  deployedNftWithTrait?: Maybe<NftWithTrait>;
  idx: Scalars['Int'];
  images?: Maybe<NftImages>;
  itemSlot?: Maybe<BunnySlotsEnum>;
  itemWornOnBunnyIdx?: Maybe<Scalars['Int']>;
  layers?: Maybe<Array<Scalars['String']>>;
  nftCollection?: Maybe<MetaforestNftCollectionsEnum>;
  ownerUserUri?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type MetaforestPushNotification = {
  __typename?: 'MetaforestPushNotification';
  _id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  emotion?: Maybe<Scalars['Int']>;
  textEn?: Maybe<Scalars['String']>;
  textRu?: Maybe<Scalars['String']>;
  userUri: Scalars['String'];
};

export type MetaforestUserGameFullState = {
  __typename?: 'MetaforestUserGameFullState';
  payload?: Maybe<Scalars['JSON']>;
  userUri?: Maybe<Scalars['String']>;
};

export type MetaforestUserGameFullStatePayload = {
  __typename?: 'MetaforestUserGameFullStatePayload';
  activeBunny?: Maybe<MetaforestNftInfo>;
  activeDays?: Maybe<Scalars['Int']>;
  bunnies?: Maybe<Array<Maybe<MetaforestNftInfo>>>;
  calculatedBaseParams?: Maybe<MetaforestBaseParams>;
  carrotsBalance?: Maybe<Scalars['Int']>;
  carrotsEarnLog?: Maybe<Array<Maybe<EarnLogElement>>>;
  carrotsPerLast24Hours?: Maybe<Scalars['Float']>;
  currentJob?: Maybe<MetaforestCurrentJob>;
  energy?: Maybe<Scalars['Int']>;
  freeEnergyPercent?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Array<MetaforestNftInfo>>;
  jobEnergy?: Maybe<Scalars['Float']>;
  lastJobEnergyBoost?: Maybe<Scalars['String']>;
  lastTimeTick?: Maybe<Scalars['String']>;
  maxCarrotsFor24Hours?: Maybe<Scalars['Float']>;
  maxJobEnergy?: Maybe<Scalars['Float']>;
  referral?: Maybe<Scalars['String']>;
  referralOwn?: Maybe<Scalars['String']>;
  skillPoints?: Maybe<Scalars['Int']>;
  unopenedLootBoxes: Array<LootBox>;
  unopenedLootBoxesCount?: Maybe<Scalars['Int']>;
  userUri: Scalars['String'];
  vitalityPercent?: Maybe<Scalars['Int']>;
  wornInventory?: Maybe<Array<Maybe<MetaforestNftInfo>>>;
};

export type MetaforestUserSharedLink = {
  __typename?: 'MetaforestUserSharedLink';
  fileUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  userUri: Scalars['String'];
};

export type MetaforestUserStepsCounter = {
  __typename?: 'MetaforestUserStepsCounter';
  avgSpeed?: Maybe<Scalars['Float']>;
  botChatId?: Maybe<Scalars['Float']>;
  botMessageId?: Maybe<Scalars['Float']>;
  horizontalAccuracy?: Maybe<Scalars['Float']>;
  lastAcceptedLat?: Maybe<Scalars['Float']>;
  lastAcceptedLon?: Maybe<Scalars['Float']>;
  lastMeasuredTime?: Maybe<Scalars['Date']>;
  metersPassed?: Maybe<Scalars['Float']>;
  rawLocations: Array<Location>;
  timestamp?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrFindUserViaTelegramInitData: Scalars['String'];
  metaforestAdminEditConfigSingleParam: Scalars['String'];
  metaforestAdminGrantNfts?: Maybe<Scalars['String']>;
  metaforestAdminInitCarrotsForAllZeroBalances?: Maybe<Scalars['String']>;
  metaforestAdminInitConfig?: Maybe<Scalars['String']>;
  metaforestAdminInitJobs?: Maybe<Scalars['String']>;
  metaforestInitStateForUser: Scalars['String'];
  metaforestPerformAbiFunction: Scalars['String'];
  metaforestPerformMyAbiFunction: Scalars['String'];
  metaforestUserClearPush?: Maybe<Scalars['String']>;
  metaforestUserSendLink?: Maybe<Scalars['String']>;
  metaforestUserTakeJob: Scalars['String'];
};


export type MutationCreateOrFindUserViaTelegramInitDataArgs = {
  telegramInitData: Scalars['String'];
};


export type MutationMetaforestAdminEditConfigSingleParamArgs = {
  path: Scalars['String'];
  valueObject: Scalars['JSON'];
  version: Scalars['String'];
};


export type MutationMetaforestAdminInitConfigArgs = {
  version: Scalars['String'];
};


export type MutationMetaforestInitStateForUserArgs = {
  userUri: Scalars['String'];
};


export type MutationMetaforestPerformAbiFunctionArgs = {
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
  userUri: Scalars['String'];
};


export type MutationMetaforestPerformMyAbiFunctionArgs = {
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
};


export type MutationMetaforestUserClearPushArgs = {
  userUri: Scalars['String'];
};


export type MutationMetaforestUserSendLinkArgs = {
  text?: InputMaybe<Scalars['String']>;
};


export type MutationMetaforestUserTakeJobArgs = {
  jobSlug: Scalars['String'];
};

export type MutationIdeas = {
  __typename?: 'MutationIdeas';
  telegramSaidUserPassedDistance?: Maybe<Scalars['String']>;
  timeTick?: Maybe<Scalars['String']>;
  userFeedCurrentBunny?: Maybe<Scalars['String']>;
  userOpenLootBoxFree?: Maybe<Scalars['String']>;
  userOpenLootBoxPaid?: Maybe<Scalars['String']>;
  userWearInventoryElement?: Maybe<Scalars['String']>;
};


export type MutationIdeasTelegramSaidUserPassedDistanceArgs = {
  meters?: InputMaybe<Scalars['Float']>;
  time?: InputMaybe<Scalars['Float']>;
};


export type MutationIdeasUserFeedCurrentBunnyArgs = {
  carrotAmount?: InputMaybe<Scalars['Float']>;
};


export type MutationIdeasUserOpenLootBoxFreeArgs = {
  lootBoxId?: InputMaybe<Scalars['String']>;
};


export type MutationIdeasUserOpenLootBoxPaidArgs = {
  lootBoxId?: InputMaybe<Scalars['String']>;
};


export type MutationIdeasUserWearInventoryElementArgs = {
  elementId?: InputMaybe<Scalars['String']>;
};

export enum MutationStatus {
  Error = 'ERROR',
  Ok = 'OK'
}

export type NftImages = {
  __typename?: 'NftImages';
  original?: Maybe<Scalars['String']>;
  thumb?: Maybe<Scalars['String']>;
  transparentBg?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type NftTraitAttribute = {
  __typename?: 'NftTraitAttribute';
  trait_type: Scalars['String'];
  value: Scalars['String'];
};

export type NftWithTrait = {
  __typename?: 'NftWithTrait';
  attributes: Array<NftTraitAttribute>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getMe?: Maybe<UserJwtPayload>;
  metaforestAdminGetConfig: Scalars['JSON'];
  metaforestGetInternalContractAbi?: Maybe<Array<Scalars['JSON']>>;
  metaforestJobsList: Array<MetaforestJob>;
  metaforestUserGetMyPush: Array<MetaforestPushNotification>;
  metaforestUserGetMyState: Scalars['JSON'];
  metaforestUserGetPush: Array<MetaforestPushNotification>;
  metaforestUserGetState: Scalars['JSON'];
};


export type QueryMetaforestAdminGetConfigArgs = {
  version: Scalars['String'];
};


export type QueryMetaforestGetInternalContractAbiArgs = {
  name?: InputMaybe<MetaforestAbiEnum>;
};


export type QueryMetaforestUserGetPushArgs = {
  userUri: Scalars['String'];
};


export type QueryMetaforestUserGetStateArgs = {
  userUri: Scalars['String'];
};

export enum RandomizerEnum {
  UserId = 'USER_ID'
}

export type TelegramMessage = {
  __typename?: 'TelegramMessage';
  _id?: Maybe<Scalars['ID']>;
  rawData?: Maybe<Scalars['JSON']>;
  telegramBotName?: Maybe<Scalars['String']>;
  telegramChatId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Scalars['String']>>;
  passwordHash?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Scalars['String']>>;
  roles?: Maybe<Array<Scalars['String']>>;
  rolesJwt?: Maybe<Array<Scalars['String']>>;
  scope?: Maybe<Scalars['String']>;
  telegramId?: Maybe<Scalars['String']>;
  telegramIds?: Maybe<Scalars['String']>;
};

export type UserJwtPayload = {
  __typename?: 'UserJWTPayload';
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  rolesJWT?: Maybe<Array<Scalars['String']>>;
  userUri: Scalars['String'];
};

export type CreateOrFindUserViaTelegramInitDataMutationVariables = Exact<{
  telegramInitData: Scalars['String'];
}>;


export type CreateOrFindUserViaTelegramInitDataMutation = { __typename?: 'Mutation', createOrFindUserViaTelegramInitData: string };

export type MetaforestAdminEditConfigSingleParamMutationVariables = Exact<{
  path: Scalars['String'];
  valueObject: Scalars['JSON'];
  version: Scalars['String'];
}>;


export type MetaforestAdminEditConfigSingleParamMutation = { __typename?: 'Mutation', metaforestAdminEditConfigSingleParam: string };

export type MetaforestAdminGrantNftsMutationVariables = Exact<{ [key: string]: never; }>;


export type MetaforestAdminGrantNftsMutation = { __typename?: 'Mutation', metaforestAdminGrantNfts?: string | null };

export type MetaforestAdminInitCarrotsForAllZeroBalancesMutationVariables = Exact<{ [key: string]: never; }>;


export type MetaforestAdminInitCarrotsForAllZeroBalancesMutation = { __typename?: 'Mutation', metaforestAdminInitCarrotsForAllZeroBalances?: string | null };

export type MetaforestAdminInitConfigMutationVariables = Exact<{
  version: Scalars['String'];
}>;


export type MetaforestAdminInitConfigMutation = { __typename?: 'Mutation', metaforestAdminInitConfig?: string | null };

export type MetaforestAdminInitJobsMutationVariables = Exact<{ [key: string]: never; }>;


export type MetaforestAdminInitJobsMutation = { __typename?: 'Mutation', metaforestAdminInitJobs?: string | null };

export type MetaforestInitStateForUserMutationVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type MetaforestInitStateForUserMutation = { __typename?: 'Mutation', metaforestInitStateForUser: string };

export type MetaforestPerformAbiFunctionMutationVariables = Exact<{
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
  userUri: Scalars['String'];
}>;


export type MetaforestPerformAbiFunctionMutation = { __typename?: 'Mutation', metaforestPerformAbiFunction: string };

export type MetaforestPerformMyAbiFunctionMutationVariables = Exact<{
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
}>;


export type MetaforestPerformMyAbiFunctionMutation = { __typename?: 'Mutation', metaforestPerformMyAbiFunction: string };

export type MetaforestUserClearPushMutationVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type MetaforestUserClearPushMutation = { __typename?: 'Mutation', metaforestUserClearPush?: string | null };

export type MetaforestUserSendLinkMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']>;
}>;


export type MetaforestUserSendLinkMutation = { __typename?: 'Mutation', metaforestUserSendLink?: string | null };

export type MetaforestUserTakeJobMutationVariables = Exact<{
  jobSlug: Scalars['String'];
}>;


export type MetaforestUserTakeJobMutation = { __typename?: 'Mutation', metaforestUserTakeJob: string };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'UserJWTPayload', displayName: string, email?: string | null, rolesJWT?: Array<string> | null, userUri: string } | null };

export type MetaforestAdminGetConfigQueryVariables = Exact<{
  version: Scalars['String'];
}>;


export type MetaforestAdminGetConfigQuery = { __typename?: 'Query', metaforestAdminGetConfig: any };

export type MetaforestGetInternalContractAbiQueryVariables = Exact<{
  name?: InputMaybe<MetaforestAbiEnum>;
}>;


export type MetaforestGetInternalContractAbiQuery = { __typename?: 'Query', metaforestGetInternalContractAbi?: Array<any> | null };

export type MetaforestJobsListQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaforestJobsListQuery = { __typename?: 'Query', metaforestJobsList: Array<{ __typename?: 'MetaforestJob', approxMeters?: number | null, carrotsForApproxMeters?: number | null, description: string, freeEnergyApproxMetersC0?: number | null, slug: string, title: string, type: MetaforestJobTypeEnum, vitalitySpend?: number | null, conditionsGTE?: { __typename?: 'MetaforestBaseParams', dex: number, int: number, krm: number, level?: number | null, rarityInt?: number | null, str: number, vit: number } | null }> };

export type MetaforestUserGetMyPushQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaforestUserGetMyPushQuery = { __typename?: 'Query', metaforestUserGetMyPush: Array<{ __typename?: 'MetaforestPushNotification', _id?: string | null, createdAt?: any | null, emotion?: number | null, textEn?: string | null, textRu?: string | null, userUri: string }> };

export type MetaforestUserGetMyStateQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaforestUserGetMyStateQuery = { __typename?: 'Query', metaforestUserGetMyState: any };

export type MetaforestUserGetPushQueryVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type MetaforestUserGetPushQuery = { __typename?: 'Query', metaforestUserGetPush: Array<{ __typename?: 'MetaforestPushNotification', _id?: string | null, createdAt?: any | null, emotion?: number | null, textEn?: string | null, textRu?: string | null, userUri: string }> };

export type MetaforestUserGetStateQueryVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type MetaforestUserGetStateQuery = { __typename?: 'Query', metaforestUserGetState: any };


export const CreateOrFindUserViaTelegramInitDataDocument = gql`
    mutation createOrFindUserViaTelegramInitData($telegramInitData: String!) {
  createOrFindUserViaTelegramInitData(telegramInitData: $telegramInitData)
}
    `;
export const MetaforestAdminEditConfigSingleParamDocument = gql`
    mutation metaforestAdminEditConfigSingleParam($path: String!, $valueObject: JSON!, $version: String!) {
  metaforestAdminEditConfigSingleParam(
    path: $path
    valueObject: $valueObject
    version: $version
  )
}
    `;
export const MetaforestAdminGrantNftsDocument = gql`
    mutation metaforestAdminGrantNfts {
  metaforestAdminGrantNfts
}
    `;
export const MetaforestAdminInitCarrotsForAllZeroBalancesDocument = gql`
    mutation metaforestAdminInitCarrotsForAllZeroBalances {
  metaforestAdminInitCarrotsForAllZeroBalances
}
    `;
export const MetaforestAdminInitConfigDocument = gql`
    mutation metaforestAdminInitConfig($version: String!) {
  metaforestAdminInitConfig(version: $version)
}
    `;
export const MetaforestAdminInitJobsDocument = gql`
    mutation metaforestAdminInitJobs {
  metaforestAdminInitJobs
}
    `;
export const MetaforestInitStateForUserDocument = gql`
    mutation metaforestInitStateForUser($userUri: String!) {
  metaforestInitStateForUser(userUri: $userUri)
}
    `;
export const MetaforestPerformAbiFunctionDocument = gql`
    mutation metaforestPerformAbiFunction($fn: String, $params: JSON, $userUri: String!) {
  metaforestPerformAbiFunction(fn: $fn, params: $params, userUri: $userUri)
}
    `;
export const MetaforestPerformMyAbiFunctionDocument = gql`
    mutation metaforestPerformMyAbiFunction($fn: String, $params: JSON) {
  metaforestPerformMyAbiFunction(fn: $fn, params: $params)
}
    `;
export const MetaforestUserClearPushDocument = gql`
    mutation metaforestUserClearPush($userUri: String!) {
  metaforestUserClearPush(userUri: $userUri)
}
    `;
export const MetaforestUserSendLinkDocument = gql`
    mutation metaforestUserSendLink($text: String) {
  metaforestUserSendLink(text: $text)
}
    `;
export const MetaforestUserTakeJobDocument = gql`
    mutation metaforestUserTakeJob($jobSlug: String!) {
  metaforestUserTakeJob(jobSlug: $jobSlug)
}
    `;
export const GetMeDocument = gql`
    query getMe {
  getMe {
    displayName
    email
    rolesJWT
    userUri
  }
}
    `;
export const MetaforestAdminGetConfigDocument = gql`
    query metaforestAdminGetConfig($version: String!) {
  metaforestAdminGetConfig(version: $version)
}
    `;
export const MetaforestGetInternalContractAbiDocument = gql`
    query metaforestGetInternalContractAbi($name: MetaforestAbiEnum) {
  metaforestGetInternalContractAbi(name: $name)
}
    `;
export const MetaforestJobsListDocument = gql`
    query metaforestJobsList {
  metaforestJobsList {
    approxMeters
    carrotsForApproxMeters
    conditionsGTE {
      dex
      int
      krm
      level
      rarityInt
      str
      vit
    }
    description
    freeEnergyApproxMetersC0
    slug
    title
    type
    vitalitySpend
  }
}
    `;
export const MetaforestUserGetMyPushDocument = gql`
    query metaforestUserGetMyPush {
  metaforestUserGetMyPush {
    _id
    createdAt
    emotion
    textEn
    textRu
    userUri
  }
}
    `;
export const MetaforestUserGetMyStateDocument = gql`
    query metaforestUserGetMyState {
  metaforestUserGetMyState
}
    `;
export const MetaforestUserGetPushDocument = gql`
    query metaforestUserGetPush($userUri: String!) {
  metaforestUserGetPush(userUri: $userUri) {
    _id
    createdAt
    emotion
    textEn
    textRu
    userUri
  }
}
    `;
export const MetaforestUserGetStateDocument = gql`
    query metaforestUserGetState($userUri: String!) {
  metaforestUserGetState(userUri: $userUri)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createOrFindUserViaTelegramInitData(variables: CreateOrFindUserViaTelegramInitDataMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOrFindUserViaTelegramInitDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrFindUserViaTelegramInitDataMutation>(CreateOrFindUserViaTelegramInitDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrFindUserViaTelegramInitData', 'mutation');
    },
    metaforestAdminEditConfigSingleParam(variables: MetaforestAdminEditConfigSingleParamMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminEditConfigSingleParamMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminEditConfigSingleParamMutation>(MetaforestAdminEditConfigSingleParamDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminEditConfigSingleParam', 'mutation');
    },
    metaforestAdminGrantNfts(variables?: MetaforestAdminGrantNftsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminGrantNftsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminGrantNftsMutation>(MetaforestAdminGrantNftsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminGrantNfts', 'mutation');
    },
    metaforestAdminInitCarrotsForAllZeroBalances(variables?: MetaforestAdminInitCarrotsForAllZeroBalancesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminInitCarrotsForAllZeroBalancesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminInitCarrotsForAllZeroBalancesMutation>(MetaforestAdminInitCarrotsForAllZeroBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminInitCarrotsForAllZeroBalances', 'mutation');
    },
    metaforestAdminInitConfig(variables: MetaforestAdminInitConfigMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminInitConfigMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminInitConfigMutation>(MetaforestAdminInitConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminInitConfig', 'mutation');
    },
    metaforestAdminInitJobs(variables?: MetaforestAdminInitJobsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminInitJobsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminInitJobsMutation>(MetaforestAdminInitJobsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminInitJobs', 'mutation');
    },
    metaforestInitStateForUser(variables: MetaforestInitStateForUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestInitStateForUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestInitStateForUserMutation>(MetaforestInitStateForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestInitStateForUser', 'mutation');
    },
    metaforestPerformAbiFunction(variables: MetaforestPerformAbiFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestPerformAbiFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestPerformAbiFunctionMutation>(MetaforestPerformAbiFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestPerformAbiFunction', 'mutation');
    },
    metaforestPerformMyAbiFunction(variables?: MetaforestPerformMyAbiFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestPerformMyAbiFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestPerformMyAbiFunctionMutation>(MetaforestPerformMyAbiFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestPerformMyAbiFunction', 'mutation');
    },
    metaforestUserClearPush(variables: MetaforestUserClearPushMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserClearPushMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserClearPushMutation>(MetaforestUserClearPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserClearPush', 'mutation');
    },
    metaforestUserSendLink(variables?: MetaforestUserSendLinkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserSendLinkMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserSendLinkMutation>(MetaforestUserSendLinkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserSendLink', 'mutation');
    },
    metaforestUserTakeJob(variables: MetaforestUserTakeJobMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserTakeJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserTakeJobMutation>(MetaforestUserTakeJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserTakeJob', 'mutation');
    },
    getMe(variables?: GetMeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMe', 'query');
    },
    metaforestAdminGetConfig(variables: MetaforestAdminGetConfigQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminGetConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminGetConfigQuery>(MetaforestAdminGetConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminGetConfig', 'query');
    },
    metaforestGetInternalContractAbi(variables?: MetaforestGetInternalContractAbiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestGetInternalContractAbiQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestGetInternalContractAbiQuery>(MetaforestGetInternalContractAbiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestGetInternalContractAbi', 'query');
    },
    metaforestJobsList(variables?: MetaforestJobsListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestJobsListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestJobsListQuery>(MetaforestJobsListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestJobsList', 'query');
    },
    metaforestUserGetMyPush(variables?: MetaforestUserGetMyPushQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetMyPushQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetMyPushQuery>(MetaforestUserGetMyPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetMyPush', 'query');
    },
    metaforestUserGetMyState(variables?: MetaforestUserGetMyStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetMyStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetMyStateQuery>(MetaforestUserGetMyStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetMyState', 'query');
    },
    metaforestUserGetPush(variables: MetaforestUserGetPushQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetPushQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetPushQuery>(MetaforestUserGetPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetPush', 'query');
    },
    metaforestUserGetState(variables: MetaforestUserGetStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetStateQuery>(MetaforestUserGetStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetState', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(name: string, object: V = {} as V): SWRKeyInterface => [name, ...Object.keys(object).sort().map(key => object[key])];
  return {
    ...sdk,
    useGetMe(variables?: GetMeQueryVariables, config?: SWRConfigInterface<GetMeQuery, ClientError>) {
      return useSWR<GetMeQuery, ClientError>(genKey<GetMeQueryVariables>('GetMe', variables), () => sdk.getMe(variables), config);
    },
    useMetaforestAdminGetConfig(variables: MetaforestAdminGetConfigQueryVariables, config?: SWRConfigInterface<MetaforestAdminGetConfigQuery, ClientError>) {
      return useSWR<MetaforestAdminGetConfigQuery, ClientError>(genKey<MetaforestAdminGetConfigQueryVariables>('MetaforestAdminGetConfig', variables), () => sdk.metaforestAdminGetConfig(variables), config);
    },
    useMetaforestGetInternalContractAbi(variables?: MetaforestGetInternalContractAbiQueryVariables, config?: SWRConfigInterface<MetaforestGetInternalContractAbiQuery, ClientError>) {
      return useSWR<MetaforestGetInternalContractAbiQuery, ClientError>(genKey<MetaforestGetInternalContractAbiQueryVariables>('MetaforestGetInternalContractAbi', variables), () => sdk.metaforestGetInternalContractAbi(variables), config);
    },
    useMetaforestJobsList(variables?: MetaforestJobsListQueryVariables, config?: SWRConfigInterface<MetaforestJobsListQuery, ClientError>) {
      return useSWR<MetaforestJobsListQuery, ClientError>(genKey<MetaforestJobsListQueryVariables>('MetaforestJobsList', variables), () => sdk.metaforestJobsList(variables), config);
    },
    useMetaforestUserGetMyPush(variables?: MetaforestUserGetMyPushQueryVariables, config?: SWRConfigInterface<MetaforestUserGetMyPushQuery, ClientError>) {
      return useSWR<MetaforestUserGetMyPushQuery, ClientError>(genKey<MetaforestUserGetMyPushQueryVariables>('MetaforestUserGetMyPush', variables), () => sdk.metaforestUserGetMyPush(variables), config);
    },
    useMetaforestUserGetMyState(variables?: MetaforestUserGetMyStateQueryVariables, config?: SWRConfigInterface<MetaforestUserGetMyStateQuery, ClientError>) {
      return useSWR<MetaforestUserGetMyStateQuery, ClientError>(genKey<MetaforestUserGetMyStateQueryVariables>('MetaforestUserGetMyState', variables), () => sdk.metaforestUserGetMyState(variables), config);
    },
    useMetaforestUserGetPush(variables: MetaforestUserGetPushQueryVariables, config?: SWRConfigInterface<MetaforestUserGetPushQuery, ClientError>) {
      return useSWR<MetaforestUserGetPushQuery, ClientError>(genKey<MetaforestUserGetPushQueryVariables>('MetaforestUserGetPush', variables), () => sdk.metaforestUserGetPush(variables), config);
    },
    useMetaforestUserGetState(variables: MetaforestUserGetStateQueryVariables, config?: SWRConfigInterface<MetaforestUserGetStateQuery, ClientError>) {
      return useSWR<MetaforestUserGetStateQuery, ClientError>(genKey<MetaforestUserGetStateQueryVariables>('MetaforestUserGetState', variables), () => sdk.metaforestUserGetState(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;