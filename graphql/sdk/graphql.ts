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

export type ActiveJob = {
  __typename?: 'ActiveJob';
  bunny?: Maybe<Bunny>;
};

export type Bunny = {
  __typename?: 'Bunny';
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
};

export type CalculatedStats = {
  __typename?: 'CalculatedStats';
  bunny?: Maybe<Bunny>;
};

export enum FieldTypeEnum {
  Dictionary = 'DICTIONARY',
  ExternalObject = 'EXTERNAL_OBJECT',
  Markdown = 'MARKDOWN',
  MarkdownLine = 'MARKDOWN_LINE'
}

export type GlobalGameSettings = {
  __typename?: 'GlobalGameSettings';
  maxSpeedKmH?: Maybe<Scalars['Int']>;
};

export type InventoryElement = {
  __typename?: 'InventoryElement';
  id?: Maybe<Scalars['String']>;
  slot?: Maybe<InventorySlotEnum>;
  stats?: Maybe<InventoryStats>;
  wornOnBunnyId?: Maybe<Scalars['String']>;
};

export enum InventorySlotEnum {
  HandLeft = 'HAND_LEFT',
  HandRight = 'HAND_RIGHT',
  Hat = 'HAT',
  Rabbit = 'RABBIT'
}

export type InventoryStats = {
  __typename?: 'InventoryStats';
  stamina?: Maybe<Scalars['Float']>;
};

export type LootBox = {
  __typename?: 'LootBox';
  canOpenAfter?: Maybe<Scalars['Date']>;
  issuedAt?: Maybe<Scalars['Date']>;
  localId?: Maybe<Scalars['String']>;
};

export type MessageLocalized = {
  __typename?: 'MessageLocalized';
  en?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export enum MfAbiEnum {
  Config = 'CONFIG',
  Functions = 'FUNCTIONS',
  State = 'STATE'
}

export type MfActionJobProgressInput = {
  metersPassed?: InputMaybe<Scalars['Float']>;
};

export type MfActionOpenLootbox = {
  lootboxLocalId?: InputMaybe<Scalars['String']>;
};

export type MfActionResult = {
  __typename?: 'MfActionResult';
  errorMessageRus?: Maybe<MessageLocalized>;
  gameFullState: MfUserGameFullState;
  isError: Scalars['Boolean'];
  isSuccessful: Scalars['Boolean'];
  successMessageRus?: Maybe<MessageLocalized>;
};

export type MfActionTakeJobInput = {
  jobId?: InputMaybe<Scalars['String']>;
};

export type MfActionTimeTickInput = {
  minutesElapsed?: InputMaybe<Scalars['Float']>;
};

export type MfActionWearInventoryElementAction = {
  inventoryElementId?: InputMaybe<Scalars['String']>;
};

export type MfGameConfig = {
  __typename?: 'MfGameConfig';
  payload?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['String']>;
};

export type MfPushNotification = {
  __typename?: 'MfPushNotification';
  _id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  emotion?: Maybe<Scalars['Int']>;
  textEn?: Maybe<Scalars['String']>;
  textRu?: Maybe<Scalars['String']>;
  userUri: Scalars['String'];
};

export type MfUserGameFullState = {
  __typename?: 'MfUserGameFullState';
  payload?: Maybe<Scalars['JSON']>;
  userUri?: Maybe<Scalars['String']>;
};

export type MfUserGameFullStatePayload = {
  __typename?: 'MfUserGameFullStatePayload';
  activeDays?: Maybe<Scalars['Int']>;
  activeJob?: Maybe<ActiveJob>;
  bunnyEnergy?: Maybe<Scalars['Int']>;
  bunnyLevel?: Maybe<Scalars['Int']>;
  bunnyVitalityPercent?: Maybe<Scalars['Int']>;
  calculatedStats?: Maybe<CalculatedStats>;
  carrotsPerLast24Hours?: Maybe<Scalars['Float']>;
  currentCarrotsBalance?: Maybe<Scalars['Int']>;
  inventory?: Maybe<Array<Maybe<InventoryElement>>>;
  maxCarrotsFor24Hours?: Maybe<Scalars['Float']>;
  referral?: Maybe<Scalars['String']>;
  referralOwn?: Maybe<Scalars['String']>;
  unopenedLootBoxes: Array<LootBox>;
  unopenedLootBoxesCount?: Maybe<Scalars['Int']>;
  userUri?: Maybe<Scalars['String']>;
  wornInventory?: Maybe<WornInventory>;
};

export type MfUserStepsCounter = {
  __typename?: 'MfUserStepsCounter';
  botChatId?: Maybe<Scalars['Float']>;
  botMessageId?: Maybe<Scalars['Float']>;
  delta?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  latitudeAvg?: Maybe<Scalars['Float']>;
  latitudeLast10?: Maybe<Array<Scalars['Float']>>;
  longitude?: Maybe<Scalars['Float']>;
  longitudeAvg?: Maybe<Scalars['Float']>;
  longitudeLast10?: Maybe<Array<Scalars['Float']>>;
  secondsElapsed?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminEditConfigSingleParam: Scalars['String'];
  adminInitConfig?: Maybe<Scalars['String']>;
  initStateForUser: Scalars['String'];
  mfActionFeedRabbit?: Maybe<MfActionResult>;
  mfActionInitState?: Maybe<MfActionResult>;
  mfActionJobProgress?: Maybe<MfActionResult>;
  mfActionLvlUp?: Maybe<MfActionResult>;
  mfActionOpenLootbox?: Maybe<MfActionResult>;
  mfActionSetCurrentJob?: Maybe<MfActionResult>;
  mfActionTimeTick?: Maybe<MfActionResult>;
  performAbiFunction: Scalars['String'];
  telegramSaidUserPassedDistance?: Maybe<Scalars['String']>;
  timeTick?: Maybe<Scalars['String']>;
  userClearPush?: Maybe<Scalars['String']>;
  userFeedCurrentBunny?: Maybe<Scalars['String']>;
  userOpenLootBoxFree?: Maybe<Scalars['String']>;
  userOpenLootBoxPaid?: Maybe<Scalars['String']>;
  userWearInventoryElement?: Maybe<Scalars['String']>;
};


export type MutationAdminEditConfigSingleParamArgs = {
  path: Scalars['String'];
  valueObject: Scalars['JSON'];
  version: Scalars['String'];
};


export type MutationAdminInitConfigArgs = {
  version: Scalars['String'];
};


export type MutationInitStateForUserArgs = {
  userUri: Scalars['String'];
};


export type MutationMfActionJobProgressArgs = {
  action?: InputMaybe<MfActionJobProgressInput>;
};


export type MutationMfActionOpenLootboxArgs = {
  action?: InputMaybe<MfActionOpenLootbox>;
};


export type MutationMfActionSetCurrentJobArgs = {
  action?: InputMaybe<MfActionTakeJobInput>;
};


export type MutationMfActionTimeTickArgs = {
  action?: InputMaybe<MfActionTimeTickInput>;
};


export type MutationPerformAbiFunctionArgs = {
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
  userUri: Scalars['String'];
};


export type MutationTelegramSaidUserPassedDistanceArgs = {
  meters?: InputMaybe<Scalars['Float']>;
  time?: InputMaybe<Scalars['Float']>;
};


export type MutationUserClearPushArgs = {
  userUri: Scalars['String'];
};


export type MutationUserFeedCurrentBunnyArgs = {
  carrotAmount?: InputMaybe<Scalars['Float']>;
};


export type MutationUserOpenLootBoxFreeArgs = {
  lootBoxId?: InputMaybe<Scalars['String']>;
};


export type MutationUserOpenLootBoxPaidArgs = {
  lootBoxId?: InputMaybe<Scalars['String']>;
};


export type MutationUserWearInventoryElementArgs = {
  elementId?: InputMaybe<Scalars['String']>;
};

export enum MutationStatus {
  Error = 'ERROR',
  Ok = 'OK'
}

export type Query = {
  __typename?: 'Query';
  abs?: Maybe<Scalars['String']>;
  adminGetConfig: Scalars['JSON'];
  getInternalContractAbi?: Maybe<Scalars['JSON']>;
  mfGetMyUserGameFullState?: Maybe<MfUserGameFullState>;
  mfUserGetGameFullState?: Maybe<MfUserGameFullState>;
  test?: Maybe<Scalars['String']>;
  userGetPush: Array<MfPushNotification>;
  userGetState: Scalars['JSON'];
};


export type QueryAdminGetConfigArgs = {
  version: Scalars['String'];
};


export type QueryGetInternalContractAbiArgs = {
  name?: InputMaybe<MfAbiEnum>;
};


export type QueryUserGetPushArgs = {
  userUri: Scalars['String'];
};


export type QueryUserGetStateArgs = {
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

export type WornInventory = {
  __typename?: 'WornInventory';
  bunny?: Maybe<InventoryElement>;
};

export type AdminEditConfigSingleParamMutationVariables = Exact<{
  path: Scalars['String'];
  valueObject: Scalars['JSON'];
  version: Scalars['String'];
}>;


export type AdminEditConfigSingleParamMutation = { __typename?: 'Mutation', adminEditConfigSingleParam: string };

export type AdminInitConfigMutationVariables = Exact<{
  version: Scalars['String'];
}>;


export type AdminInitConfigMutation = { __typename?: 'Mutation', adminInitConfig?: string | null };

export type InitStateForUserMutationVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type InitStateForUserMutation = { __typename?: 'Mutation', initStateForUser: string };

export type MfActionFeedRabbitMutationVariables = Exact<{ [key: string]: never; }>;


export type MfActionFeedRabbitMutation = { __typename?: 'Mutation', mfActionFeedRabbit?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionInitStateMutationVariables = Exact<{ [key: string]: never; }>;


export type MfActionInitStateMutation = { __typename?: 'Mutation', mfActionInitState?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionJobProgressMutationVariables = Exact<{
  action?: InputMaybe<MfActionJobProgressInput>;
}>;


export type MfActionJobProgressMutation = { __typename?: 'Mutation', mfActionJobProgress?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionLvlUpMutationVariables = Exact<{ [key: string]: never; }>;


export type MfActionLvlUpMutation = { __typename?: 'Mutation', mfActionLvlUp?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionOpenLootboxMutationVariables = Exact<{
  action?: InputMaybe<MfActionOpenLootbox>;
}>;


export type MfActionOpenLootboxMutation = { __typename?: 'Mutation', mfActionOpenLootbox?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionSetCurrentJobMutationVariables = Exact<{
  action?: InputMaybe<MfActionTakeJobInput>;
}>;


export type MfActionSetCurrentJobMutation = { __typename?: 'Mutation', mfActionSetCurrentJob?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type MfActionTimeTickMutationVariables = Exact<{
  action?: InputMaybe<MfActionTimeTickInput>;
}>;


export type MfActionTimeTickMutation = { __typename?: 'Mutation', mfActionTimeTick?: { __typename?: 'MfActionResult', isError: boolean, isSuccessful: boolean, errorMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null, gameFullState: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null }, successMessageRus?: { __typename?: 'MessageLocalized', en?: string | null, ru?: string | null } | null } | null };

export type PerformAbiFunctionMutationVariables = Exact<{
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
  userUri: Scalars['String'];
}>;


export type PerformAbiFunctionMutation = { __typename?: 'Mutation', performAbiFunction: string };

export type TelegramSaidUserPassedDistanceMutationVariables = Exact<{
  meters?: InputMaybe<Scalars['Float']>;
  time?: InputMaybe<Scalars['Float']>;
}>;


export type TelegramSaidUserPassedDistanceMutation = { __typename?: 'Mutation', telegramSaidUserPassedDistance?: string | null };

export type TimeTickMutationVariables = Exact<{ [key: string]: never; }>;


export type TimeTickMutation = { __typename?: 'Mutation', timeTick?: string | null };

export type UserClearPushMutationVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type UserClearPushMutation = { __typename?: 'Mutation', userClearPush?: string | null };

export type UserFeedCurrentBunnyMutationVariables = Exact<{
  carrotAmount?: InputMaybe<Scalars['Float']>;
}>;


export type UserFeedCurrentBunnyMutation = { __typename?: 'Mutation', userFeedCurrentBunny?: string | null };

export type UserOpenLootBoxFreeMutationVariables = Exact<{
  lootBoxId?: InputMaybe<Scalars['String']>;
}>;


export type UserOpenLootBoxFreeMutation = { __typename?: 'Mutation', userOpenLootBoxFree?: string | null };

export type UserOpenLootBoxPaidMutationVariables = Exact<{
  lootBoxId?: InputMaybe<Scalars['String']>;
}>;


export type UserOpenLootBoxPaidMutation = { __typename?: 'Mutation', userOpenLootBoxPaid?: string | null };

export type UserWearInventoryElementMutationVariables = Exact<{
  elementId?: InputMaybe<Scalars['String']>;
}>;


export type UserWearInventoryElementMutation = { __typename?: 'Mutation', userWearInventoryElement?: string | null };

export type AbsQueryVariables = Exact<{ [key: string]: never; }>;


export type AbsQuery = { __typename?: 'Query', abs?: string | null };

export type AdminGetConfigQueryVariables = Exact<{
  version: Scalars['String'];
}>;


export type AdminGetConfigQuery = { __typename?: 'Query', adminGetConfig: any };

export type GetInternalContractAbiQueryVariables = Exact<{
  name?: InputMaybe<MfAbiEnum>;
}>;


export type GetInternalContractAbiQuery = { __typename?: 'Query', getInternalContractAbi?: any | null };

export type MfGetMyUserGameFullStateQueryVariables = Exact<{ [key: string]: never; }>;


export type MfGetMyUserGameFullStateQuery = { __typename?: 'Query', mfGetMyUserGameFullState?: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null } | null };

export type MfUserGetGameFullStateQueryVariables = Exact<{ [key: string]: never; }>;


export type MfUserGetGameFullStateQuery = { __typename?: 'Query', mfUserGetGameFullState?: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null } | null };

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', test?: string | null };

export type UserGetPushQueryVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type UserGetPushQuery = { __typename?: 'Query', userGetPush: Array<{ __typename?: 'MfPushNotification', _id?: string | null, createdAt?: any | null, emotion?: number | null, textEn?: string | null, textRu?: string | null, userUri: string }> };

export type UserGetStateQueryVariables = Exact<{
  userUri: Scalars['String'];
}>;


export type UserGetStateQuery = { __typename?: 'Query', userGetState: any };


export const AdminEditConfigSingleParamDocument = gql`
    mutation adminEditConfigSingleParam($path: String!, $valueObject: JSON!, $version: String!) {
  adminEditConfigSingleParam(
    path: $path
    valueObject: $valueObject
    version: $version
  )
}
    `;
export const AdminInitConfigDocument = gql`
    mutation adminInitConfig($version: String!) {
  adminInitConfig(version: $version)
}
    `;
export const InitStateForUserDocument = gql`
    mutation initStateForUser($userUri: String!) {
  initStateForUser(userUri: $userUri)
}
    `;
export const MfActionFeedRabbitDocument = gql`
    mutation mfActionFeedRabbit {
  mfActionFeedRabbit {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionInitStateDocument = gql`
    mutation mfActionInitState {
  mfActionInitState {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionJobProgressDocument = gql`
    mutation mfActionJobProgress($action: MfActionJobProgressInput) {
  mfActionJobProgress(action: $action) {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionLvlUpDocument = gql`
    mutation mfActionLvlUp {
  mfActionLvlUp {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionOpenLootboxDocument = gql`
    mutation mfActionOpenLootbox($action: MfActionOpenLootbox) {
  mfActionOpenLootbox(action: $action) {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionSetCurrentJobDocument = gql`
    mutation mfActionSetCurrentJob($action: MfActionTakeJobInput) {
  mfActionSetCurrentJob(action: $action) {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const MfActionTimeTickDocument = gql`
    mutation mfActionTimeTick($action: MfActionTimeTickInput) {
  mfActionTimeTick(action: $action) {
    errorMessageRus {
      en
      ru
    }
    gameFullState {
      payload
      userUri
    }
    isError
    isSuccessful
    successMessageRus {
      en
      ru
    }
  }
}
    `;
export const PerformAbiFunctionDocument = gql`
    mutation performAbiFunction($fn: String, $params: JSON, $userUri: String!) {
  performAbiFunction(fn: $fn, params: $params, userUri: $userUri)
}
    `;
export const TelegramSaidUserPassedDistanceDocument = gql`
    mutation telegramSaidUserPassedDistance($meters: Float, $time: Float) {
  telegramSaidUserPassedDistance(meters: $meters, time: $time)
}
    `;
export const TimeTickDocument = gql`
    mutation timeTick {
  timeTick
}
    `;
export const UserClearPushDocument = gql`
    mutation userClearPush($userUri: String!) {
  userClearPush(userUri: $userUri)
}
    `;
export const UserFeedCurrentBunnyDocument = gql`
    mutation userFeedCurrentBunny($carrotAmount: Float) {
  userFeedCurrentBunny(carrotAmount: $carrotAmount)
}
    `;
export const UserOpenLootBoxFreeDocument = gql`
    mutation userOpenLootBoxFree($lootBoxId: String) {
  userOpenLootBoxFree(lootBoxId: $lootBoxId)
}
    `;
export const UserOpenLootBoxPaidDocument = gql`
    mutation userOpenLootBoxPaid($lootBoxId: String) {
  userOpenLootBoxPaid(lootBoxId: $lootBoxId)
}
    `;
export const UserWearInventoryElementDocument = gql`
    mutation userWearInventoryElement($elementId: String) {
  userWearInventoryElement(elementId: $elementId)
}
    `;
export const AbsDocument = gql`
    query abs {
  abs
}
    `;
export const AdminGetConfigDocument = gql`
    query adminGetConfig($version: String!) {
  adminGetConfig(version: $version)
}
    `;
export const GetInternalContractAbiDocument = gql`
    query getInternalContractAbi($name: MfAbiEnum) {
  getInternalContractAbi(name: $name)
}
    `;
export const MfGetMyUserGameFullStateDocument = gql`
    query mfGetMyUserGameFullState {
  mfGetMyUserGameFullState {
    payload
    userUri
  }
}
    `;
export const MfUserGetGameFullStateDocument = gql`
    query mfUserGetGameFullState {
  mfUserGetGameFullState {
    payload
    userUri
  }
}
    `;
export const TestDocument = gql`
    query test {
  test
}
    `;
export const UserGetPushDocument = gql`
    query userGetPush($userUri: String!) {
  userGetPush(userUri: $userUri) {
    _id
    createdAt
    emotion
    textEn
    textRu
    userUri
  }
}
    `;
export const UserGetStateDocument = gql`
    query userGetState($userUri: String!) {
  userGetState(userUri: $userUri)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    adminEditConfigSingleParam(variables: AdminEditConfigSingleParamMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminEditConfigSingleParamMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminEditConfigSingleParamMutation>(AdminEditConfigSingleParamDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminEditConfigSingleParam', 'mutation');
    },
    adminInitConfig(variables: AdminInitConfigMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminInitConfigMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminInitConfigMutation>(AdminInitConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminInitConfig', 'mutation');
    },
    initStateForUser(variables: InitStateForUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InitStateForUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InitStateForUserMutation>(InitStateForUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'initStateForUser', 'mutation');
    },
    mfActionFeedRabbit(variables?: MfActionFeedRabbitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionFeedRabbitMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionFeedRabbitMutation>(MfActionFeedRabbitDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionFeedRabbit', 'mutation');
    },
    mfActionInitState(variables?: MfActionInitStateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionInitStateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionInitStateMutation>(MfActionInitStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionInitState', 'mutation');
    },
    mfActionJobProgress(variables?: MfActionJobProgressMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionJobProgressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionJobProgressMutation>(MfActionJobProgressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionJobProgress', 'mutation');
    },
    mfActionLvlUp(variables?: MfActionLvlUpMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionLvlUpMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionLvlUpMutation>(MfActionLvlUpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionLvlUp', 'mutation');
    },
    mfActionOpenLootbox(variables?: MfActionOpenLootboxMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionOpenLootboxMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionOpenLootboxMutation>(MfActionOpenLootboxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionOpenLootbox', 'mutation');
    },
    mfActionSetCurrentJob(variables?: MfActionSetCurrentJobMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionSetCurrentJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionSetCurrentJobMutation>(MfActionSetCurrentJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionSetCurrentJob', 'mutation');
    },
    mfActionTimeTick(variables?: MfActionTimeTickMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfActionTimeTickMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfActionTimeTickMutation>(MfActionTimeTickDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfActionTimeTick', 'mutation');
    },
    performAbiFunction(variables: PerformAbiFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PerformAbiFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PerformAbiFunctionMutation>(PerformAbiFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'performAbiFunction', 'mutation');
    },
    telegramSaidUserPassedDistance(variables?: TelegramSaidUserPassedDistanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TelegramSaidUserPassedDistanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TelegramSaidUserPassedDistanceMutation>(TelegramSaidUserPassedDistanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'telegramSaidUserPassedDistance', 'mutation');
    },
    timeTick(variables?: TimeTickMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TimeTickMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TimeTickMutation>(TimeTickDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'timeTick', 'mutation');
    },
    userClearPush(variables: UserClearPushMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserClearPushMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserClearPushMutation>(UserClearPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userClearPush', 'mutation');
    },
    userFeedCurrentBunny(variables?: UserFeedCurrentBunnyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserFeedCurrentBunnyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserFeedCurrentBunnyMutation>(UserFeedCurrentBunnyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userFeedCurrentBunny', 'mutation');
    },
    userOpenLootBoxFree(variables?: UserOpenLootBoxFreeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserOpenLootBoxFreeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserOpenLootBoxFreeMutation>(UserOpenLootBoxFreeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userOpenLootBoxFree', 'mutation');
    },
    userOpenLootBoxPaid(variables?: UserOpenLootBoxPaidMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserOpenLootBoxPaidMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserOpenLootBoxPaidMutation>(UserOpenLootBoxPaidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userOpenLootBoxPaid', 'mutation');
    },
    userWearInventoryElement(variables?: UserWearInventoryElementMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserWearInventoryElementMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserWearInventoryElementMutation>(UserWearInventoryElementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userWearInventoryElement', 'mutation');
    },
    abs(variables?: AbsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AbsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AbsQuery>(AbsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'abs', 'query');
    },
    adminGetConfig(variables: AdminGetConfigQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdminGetConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminGetConfigQuery>(AdminGetConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminGetConfig', 'query');
    },
    getInternalContractAbi(variables?: GetInternalContractAbiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInternalContractAbiQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInternalContractAbiQuery>(GetInternalContractAbiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getInternalContractAbi', 'query');
    },
    mfGetMyUserGameFullState(variables?: MfGetMyUserGameFullStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfGetMyUserGameFullStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfGetMyUserGameFullStateQuery>(MfGetMyUserGameFullStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfGetMyUserGameFullState', 'query');
    },
    mfUserGetGameFullState(variables?: MfUserGetGameFullStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MfUserGetGameFullStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MfUserGetGameFullStateQuery>(MfUserGetGameFullStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mfUserGetGameFullState', 'query');
    },
    test(variables?: TestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestQuery>(TestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'test', 'query');
    },
    userGetPush(variables: UserGetPushQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserGetPushQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserGetPushQuery>(UserGetPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userGetPush', 'query');
    },
    userGetState(variables: UserGetStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserGetStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserGetStateQuery>(UserGetStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userGetState', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(name: string, object: V = {} as V): SWRKeyInterface => [name, ...Object.keys(object).sort().map(key => object[key])];
  return {
    ...sdk,
    useAbs(variables?: AbsQueryVariables, config?: SWRConfigInterface<AbsQuery, ClientError>) {
      return useSWR<AbsQuery, ClientError>(genKey<AbsQueryVariables>('Abs', variables), () => sdk.abs(variables), config);
    },
    useAdminGetConfig(variables: AdminGetConfigQueryVariables, config?: SWRConfigInterface<AdminGetConfigQuery, ClientError>) {
      return useSWR<AdminGetConfigQuery, ClientError>(genKey<AdminGetConfigQueryVariables>('AdminGetConfig', variables), () => sdk.adminGetConfig(variables), config);
    },
    useGetInternalContractAbi(variables?: GetInternalContractAbiQueryVariables, config?: SWRConfigInterface<GetInternalContractAbiQuery, ClientError>) {
      return useSWR<GetInternalContractAbiQuery, ClientError>(genKey<GetInternalContractAbiQueryVariables>('GetInternalContractAbi', variables), () => sdk.getInternalContractAbi(variables), config);
    },
    useMfGetMyUserGameFullState(variables?: MfGetMyUserGameFullStateQueryVariables, config?: SWRConfigInterface<MfGetMyUserGameFullStateQuery, ClientError>) {
      return useSWR<MfGetMyUserGameFullStateQuery, ClientError>(genKey<MfGetMyUserGameFullStateQueryVariables>('MfGetMyUserGameFullState', variables), () => sdk.mfGetMyUserGameFullState(variables), config);
    },
    useMfUserGetGameFullState(variables?: MfUserGetGameFullStateQueryVariables, config?: SWRConfigInterface<MfUserGetGameFullStateQuery, ClientError>) {
      return useSWR<MfUserGetGameFullStateQuery, ClientError>(genKey<MfUserGetGameFullStateQueryVariables>('MfUserGetGameFullState', variables), () => sdk.mfUserGetGameFullState(variables), config);
    },
    useTest(variables?: TestQueryVariables, config?: SWRConfigInterface<TestQuery, ClientError>) {
      return useSWR<TestQuery, ClientError>(genKey<TestQueryVariables>('Test', variables), () => sdk.test(variables), config);
    },
    useUserGetPush(variables: UserGetPushQueryVariables, config?: SWRConfigInterface<UserGetPushQuery, ClientError>) {
      return useSWR<UserGetPushQuery, ClientError>(genKey<UserGetPushQueryVariables>('UserGetPush', variables), () => sdk.userGetPush(variables), config);
    },
    useUserGetState(variables: UserGetStateQueryVariables, config?: SWRConfigInterface<UserGetStateQuery, ClientError>) {
      return useSWR<UserGetStateQuery, ClientError>(genKey<UserGetStateQueryVariables>('UserGetState', variables), () => sdk.userGetState(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;