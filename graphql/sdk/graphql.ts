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

export type Answer = {
  __typename?: 'Answer';
  description: Scalars['String'];
  title?: Maybe<Answer>;
};

export type Bunny = {
  __typename?: 'Bunny';
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
};

export type BunnyBaseParams = {
  __typename?: 'BunnyBaseParams';
  dex: Scalars['Int'];
  int: Scalars['Int'];
  krm: Scalars['Int'];
  str: Scalars['Int'];
  vit: Scalars['Int'];
};

export type BunnyJob = {
  __typename?: 'BunnyJob';
  carrotsC1?: Maybe<BunnyBaseParams>;
  conditionsGTE?: Maybe<BunnyBaseParams>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  jobEnergyC1?: Maybe<BunnyBaseParams>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum BunnySlotsEnum {
  Boots = 'boots',
  Hat = 'hat',
  LeftHand = 'leftHand',
  Mask = 'mask',
  RightHand = 'rightHand',
  Suit = 'suit'
}

export type CalculatedStats = {
  __typename?: 'CalculatedStats';
  bunny?: Maybe<Bunny>;
};

export type CarrotsEarnLogElement = {
  __typename?: 'CarrotsEarnLogElement';
  amount: Scalars['Int'];
  timestamp: Scalars['String'];
};

export type CrescoAgreement = {
  __typename?: 'CrescoAgreement';
  fileUrl?: Maybe<FileUrl>;
  isPrepared?: Maybe<Scalars['Boolean']>;
  isSignedByClient?: Maybe<Scalars['Boolean']>;
  no?: Maybe<Scalars['String']>;
};

export type CrescoAgreementInput = {
  fileUrl: FileUrlInput;
  isPrepared: Scalars['Boolean'];
  isSignedByClient: Scalars['Boolean'];
  no: Scalars['String'];
};

export type CrescoCustomer = {
  __typename?: 'CrescoCustomer';
  agreement?: Maybe<CrescoAgreement>;
  crescoTokenBalance?: Maybe<Scalars['Float']>;
  deposit?: Maybe<Array<CrescoDeposit>>;
  firstName?: Maybe<Scalars['String']>;
  isPassportVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  passportScanFiles?: Maybe<Array<FileUrl>>;
  userUri?: Maybe<Scalars['String']>;
  walletAddress?: Maybe<Scalars['String']>;
};

export type CrescoCustomerAdminInput = {
  agreement?: InputMaybe<CrescoAgreementInput>;
  deposit?: InputMaybe<Array<CrescoDepositInput>>;
  isPassportVerified?: InputMaybe<Scalars['Boolean']>;
  userUri?: InputMaybe<Scalars['String']>;
};

export type CrescoCustomerCustomerInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  passportScanFiles?: InputMaybe<Array<FileUrlInput>>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type CrescoDeposit = {
  __typename?: 'CrescoDeposit';
  depositNo?: Maybe<Scalars['String']>;
  finishDate?: Maybe<Scalars['Date']>;
  percentRate?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type CrescoDepositInput = {
  depositNo: Scalars['String'];
  finishDate: Scalars['String'];
  percentRate: Scalars['Float'];
  startDate: Scalars['String'];
};

export type CrescoExternalCoinRate = {
  __typename?: 'CrescoExternalCoinRate';
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type CrescoNotification = {
  __typename?: 'CrescoNotification';
  createdAt?: Maybe<Scalars['Date']>;
  cta?: Maybe<Scalars['String']>;
  ctaUrl?: Maybe<Scalars['String']>;
  emotion?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
  title: Scalars['String'];
  userUri: Scalars['String'];
};

export type CrescoNotificationInput = {
  cta?: InputMaybe<Scalars['String']>;
  ctaUrl?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  userUri: Scalars['String'];
};

export type CrescoPortfolioState = {
  __typename?: 'CrescoPortfolioState';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  createdByUserUri?: Maybe<Scalars['String']>;
  currenciesAmountsHashmap?: Maybe<Scalars['JSON']>;
};

export type CrescoReportFile = {
  __typename?: 'CrescoReportFile';
  fileUrl?: Maybe<Scalars['String']>;
};

export type CrescoTransaction = {
  __typename?: 'CrescoTransaction';
  _id?: Maybe<Scalars['ID']>;
  amountCrescoTokens: Scalars['Float'];
  amountUSDT: Scalars['Float'];
  fromWallet: Scalars['String'];
  status?: Maybe<CrescoTransactionStatus>;
  toWallet: Scalars['String'];
  transactionType?: Maybe<CrescoTransactionTypeEnum>;
  userUri?: Maybe<Scalars['String']>;
};

export type CrescoTransactionInput = {
  amountUSDT: Scalars['Float'];
  transactionType?: InputMaybe<CrescoTransactionTypeEnum>;
  userUri?: InputMaybe<Scalars['String']>;
};

export enum CrescoTransactionStatus {
  Approved = 'APPROVED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  RobotApproved = 'ROBOT_APPROVED'
}

export enum CrescoTransactionTypeEnum {
  ClientBuyTokens = 'CLIENT_BUY_TOKENS',
  ClientSellTokens = 'CLIENT_SELL_TOKENS'
}

export enum CrescoUserRoles {
  Admin = 'admin',
  AdminCustomers = 'admin_customers',
  All = 'all',
  Customer = 'customer',
  Dismissed = 'dismissed',
  ServiceToken = 'service_token',
  SuperAdmin = 'super_admin'
}

export type CurrentJobProgress = {
  __typename?: 'CurrentJobProgress';
  carrotsEarned?: Maybe<Scalars['Int']>;
  jobStartTime?: Maybe<Scalars['String']>;
  metersPassed?: Maybe<Scalars['Int']>;
};

export type Disclaimer = {
  __typename?: 'Disclaimer';
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EduEventLead = {
  __typename?: 'EduEventLead';
  comment?: Maybe<Scalars['String']>;
  eduProductEventInstance?: Maybe<EduProductEventInstance>;
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  preferredChannels?: Maybe<Array<Maybe<PreferredChannelEnum>>>;
};

export type EduEventPlacement = {
  __typename?: 'EduEventPlacement';
  faqInstance?: Maybe<Array<FaqElement>>;
  isOffline?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  managerContacts: Array<ManagerContact>;
  offlineRoom?: Maybe<OfflineRoom>;
  onlineRooms?: Maybe<Array<Maybe<OnlineRoom>>>;
};

export type EduProduct = {
  __typename?: 'EduProduct';
  eduProductType?: Maybe<EduProductTypeEnum>;
};

export type EduProductEvent = {
  __typename?: 'EduProductEvent';
  abstract: Scalars['String'];
  disclaimers?: Maybe<Array<Disclaimer>>;
  eventDescriptor: Scalars['String'];
  eventName: Scalars['String'];
  faq?: Maybe<Array<FaqElement>>;
  groupLeaders: Array<GroupLeader>;
  portraits: Array<Portrait>;
  priceConditions?: Maybe<PriceConditions>;
  priceConditionsText?: Maybe<Scalars['String']>;
  productFeatures: Array<ProductFeature>;
  reasonsToAttend: Array<ReasonToAttend>;
  reasonsToAttendTitle: Scalars['String'];
  uvpSubtitle?: Maybe<Scalars['String']>;
  uvpTitle: Scalars['String'];
};

export type EduProductEventInstance = {
  __typename?: 'EduProductEventInstance';
  _id: Scalars['ID'];
  city?: Maybe<Scalars['String']>;
  dateTimeEnd: Scalars['Date'];
  dateTimeStart: Scalars['Date'];
  eduProductEvent: EduProductEvent;
  faqInstance?: Maybe<Array<FaqElement>>;
  groupLeaders?: Maybe<Array<GroupLeader>>;
  placement?: Maybe<EduEventPlacement>;
  priceConditionsText?: Maybe<Scalars['String']>;
};

export enum EduProductTypeEnum {
  Content = 'CONTENT',
  Event = 'EVENT',
  Session = 'SESSION'
}

export type FaqElement = {
  __typename?: 'FaqElement';
  answer: Answer;
  comment?: Maybe<Scalars['String']>;
  question: Question;
};

export enum FieldTypeEnum {
  Dictionary = 'DICTIONARY',
  ExternalObject = 'EXTERNAL_OBJECT',
  FileUrl = 'FILE_URL',
  FileUrls = 'FILE_URLS',
  Markdown = 'MARKDOWN',
  MarkdownLine = 'MARKDOWN_LINE'
}

export type FileUrl = {
  __typename?: 'FileUrl';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileUrlInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type GameFullState_Future = {
  __typename?: 'GameFullState_Future';
  bunnyLevel: Scalars['Int'];
  bunnyRarityInt: Scalars['Int'];
  carrotsBalance: Scalars['Float'];
  carrotsEarnLog?: Maybe<Array<Maybe<CarrotsEarnLogElement>>>;
  currentJob?: Maybe<BunnyJob>;
  currentJobEarnedCarrots: Scalars['Int'];
  currentJobInProgress: Scalars['Boolean'];
  currentJobStepsProgress?: Maybe<CurrentJobProgress>;
  dex: Scalars['Int'];
  freeEnergyPercent: Scalars['Int'];
  int: Scalars['Int'];
  inventory?: Maybe<Scalars['String']>;
  jobEnergy: Scalars['Int'];
  krm: Scalars['Int'];
  lastTimeTick: Scalars['String'];
  maxJobEnergy: Scalars['Int'];
  skillPoints: Scalars['Int'];
  str: Scalars['Int'];
  unopenedLootboxes?: Maybe<Array<Maybe<LootBox>>>;
  userUri: Scalars['String'];
  vit: Scalars['Int'];
};

export type GlobalGameSettings = {
  __typename?: 'GlobalGameSettings';
  maxSpeedKmH?: Maybe<Scalars['Int']>;
};

export type GroupLeader = {
  __typename?: 'GroupLeader';
  bio?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  instagramLink?: Maybe<Scalars['String']>;
  telegramChannelLink?: Maybe<Scalars['String']>;
};

export type InventoryElement = {
  __typename?: 'InventoryElement';
  dex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  int?: Maybe<Scalars['Int']>;
  krm?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rarityInt?: Maybe<Scalars['Int']>;
  slot?: Maybe<InventorySlotEnum>;
  stats?: Maybe<InventoryStats>;
  str?: Maybe<Scalars['Int']>;
  vit?: Maybe<Scalars['Int']>;
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

export type Location = {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  timestamp?: Maybe<Scalars['Date']>;
};

export type LootBox = {
  __typename?: 'LootBox';
  canOpenAfter?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  issuedAt?: Maybe<Scalars['Date']>;
  localId?: Maybe<Scalars['String']>;
  openAfterDate?: Maybe<Scalars['String']>;
  probabilityOfLoot?: Maybe<Scalars['Int']>;
  slugEnum?: Maybe<Scalars['String']>;
};

export type ManagerContact = {
  __typename?: 'ManagerContact';
  displayName: Scalars['String'];
};

export type MessageLocalized = {
  __typename?: 'MessageLocalized';
  en?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
};

export type MetaforestNftInfo = {
  __typename?: 'MetaforestNftInfo';
  bg: Scalars['String'];
  body: Scalars['String'];
  dex: Scalars['Int'];
  ears: Scalars['String'];
  eyes: Scalars['String'];
  idx: Scalars['Int'];
  int: Scalars['Int'];
  layers: Array<Scalars['String']>;
  mouth: Scalars['String'];
  rarity: Scalars['String'];
  scar: Scalars['String'];
  str: Scalars['Int'];
  texture: Scalars['String'];
  uid: Scalars['String'];
  vit: Scalars['Int'];
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
  rawLocations: Array<Location>;
  secondsElapsed?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminEditConfigSingleParam: Scalars['String'];
  adminInitConfig?: Maybe<Scalars['String']>;
  createOrFindUserViaTelegramInitData: Scalars['String'];
  crescoAdminCreateNewPortfolioState: Scalars['String'];
  crescoAdminSendNotification: Scalars['String'];
  crescoAdminSetAdminRoles: Scalars['String'];
  crescoAdminTransactionSetStatus?: Maybe<Scalars['String']>;
  crescoAdminUpsertCustomerProfile: Scalars['String'];
  crescoCustomerTransactionCreate?: Maybe<Scalars['String']>;
  crescoCustomerUpsertMyProfile: Scalars['String'];
  crescoTestInitData?: Maybe<Scalars['String']>;
  initStateForUser: Scalars['String'];
  mfActionFeedRabbit?: Maybe<MfActionResult>;
  mfActionInitState?: Maybe<MfActionResult>;
  mfActionJobProgress?: Maybe<MfActionResult>;
  mfActionLvlUp?: Maybe<MfActionResult>;
  mfActionOpenLootbox?: Maybe<MfActionResult>;
  mfActionSetCurrentJob?: Maybe<MfActionResult>;
  mfActionTimeTick?: Maybe<MfActionResult>;
  performAbiFunction: Scalars['String'];
  performMyAbiFunction: Scalars['String'];
  telegramSaidUserPassedDistance?: Maybe<Scalars['String']>;
  timeTick?: Maybe<Scalars['String']>;
  upsertEduProduct?: Maybe<Scalars['String']>;
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


export type MutationCreateOrFindUserViaTelegramInitDataArgs = {
  telegramInitData: Scalars['String'];
};


export type MutationCrescoAdminCreateNewPortfolioStateArgs = {
  coinBalances: Scalars['JSON'];
};


export type MutationCrescoAdminSendNotificationArgs = {
  input?: InputMaybe<CrescoNotificationInput>;
};


export type MutationCrescoAdminSetAdminRolesArgs = {
  roles: Array<Scalars['String']>;
  userUri: Scalars['String'];
};


export type MutationCrescoAdminTransactionSetStatusArgs = {
  status?: InputMaybe<CrescoTransactionStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
};


export type MutationCrescoAdminUpsertCustomerProfileArgs = {
  input?: InputMaybe<CrescoCustomerAdminInput>;
};


export type MutationCrescoCustomerTransactionCreateArgs = {
  amountCrescoTokens: Scalars['Float'];
  customerWallet: Scalars['String'];
  transactionType: CrescoTransactionTypeEnum;
};


export type MutationCrescoCustomerUpsertMyProfileArgs = {
  input?: InputMaybe<CrescoCustomerCustomerInput>;
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


export type MutationPerformMyAbiFunctionArgs = {
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
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

export type OfflineRoom = {
  __typename?: 'OfflineRoom';
  addressShort: Scalars['String'];
  city: Scalars['String'];
  howToReach: Scalars['String'];
};

export type OnlineRoom = {
  __typename?: 'OnlineRoom';
  attendLink: Scalars['String'];
};

export type Portrait = {
  __typename?: 'Portrait';
  description: Scalars['String'];
  displayName: Scalars['String'];
  internalName: Scalars['String'];
};

export type PortraitPov = {
  __typename?: 'PortraitPov';
  portrait?: Maybe<Portrait>;
  rating?: Maybe<Scalars['Float']>;
};

export enum PreferredChannelEnum {
  PhoneCall = 'PHONE_CALL',
  Telegram = 'TELEGRAM',
  Whatsapp = 'WHATSAPP'
}

export type PriceConditions = {
  __typename?: 'PriceConditions';
  prepayBaseRub?: Maybe<Scalars['Float']>;
  priceBaseRub?: Maybe<Scalars['Float']>;
};

export type ProductFeature = {
  __typename?: 'ProductFeature';
  description: Scalars['String'];
  portraitsPov?: Maybe<Array<PortraitPov>>;
  rating?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  abs?: Maybe<Scalars['String']>;
  adminGetConfig: Scalars['JSON'];
  crescoAdminGetAdminList: Array<User>;
  crescoAdminGetCustomerList: Array<CrescoCustomer>;
  crescoAdminGetCustomerProfile: CrescoCustomer;
  crescoAdminGetLastPortfolioState: CrescoPortfolioState;
  crescoAdminTransactionCheckInEth?: Maybe<Scalars['String']>;
  crescoAdminTransactionList: Array<CrescoTransaction>;
  crescoCustomerGetCalculatedBalance: Scalars['Float'];
  crescoCustomerGetMyProfile: CrescoCustomer;
  crescoCustomerTransactionList: Array<CrescoTransaction>;
  crescoGetDepositInfoByAgreementNumber?: Maybe<Scalars['JSON']>;
  crescoGetExternalCoinsRates: Array<CrescoExternalCoinRate>;
  getInternalContractAbi?: Maybe<Scalars['JSON']>;
  getMe?: Maybe<UserJwtPayload>;
  getUpcomingSevaPremEvents: Array<EduProductEventInstance>;
  huobiGetData?: Maybe<Scalars['String']>;
  mfGetMyUserGameFullState?: Maybe<MfUserGameFullState>;
  mfUserGetGameFullState?: Maybe<MfUserGameFullState>;
  test?: Maybe<Scalars['String']>;
  userCreate?: Maybe<Scalars['String']>;
  userGetMyState: Scalars['JSON'];
  userGetPush: Array<MfPushNotification>;
  userGetState: Scalars['JSON'];
};


export type QueryAdminGetConfigArgs = {
  version: Scalars['String'];
};


export type QueryCrescoAdminGetCustomerListArgs = {
  userUri?: InputMaybe<Scalars['String']>;
};


export type QueryCrescoAdminGetCustomerProfileArgs = {
  userUri?: InputMaybe<Scalars['String']>;
};


export type QueryCrescoAdminTransactionCheckInEthArgs = {
  transactionId?: InputMaybe<Scalars['String']>;
};


export type QueryCrescoAdminTransactionListArgs = {
  status?: InputMaybe<CrescoTransactionStatus>;
};


export type QueryCrescoGetDepositInfoByAgreementNumberArgs = {
  agreementNo: Scalars['String'];
};


export type QueryGetInternalContractAbiArgs = {
  name?: InputMaybe<MfAbiEnum>;
};


export type QueryUserCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryUserGetPushArgs = {
  userUri: Scalars['String'];
};


export type QueryUserGetStateArgs = {
  userUri: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export enum RandomizerEnum {
  UserId = 'USER_ID'
}

export type ReasonToAttend = {
  __typename?: 'ReasonToAttend';
  description: Scalars['String'];
  portraitsPov?: Maybe<Array<PortraitPov>>;
  rating?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type ServiceFunctions = {
  __typename?: 'ServiceFunctions';
  crescoRobotCheckEthScanTransaction?: Maybe<Scalars['String']>;
  crescoUpdateCustomerBalance?: Maybe<Scalars['String']>;
  crescoUpdateRates?: Maybe<Scalars['String']>;
};

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
  rolesJWT?: Maybe<Array<Scalars['String']>>;
  userUri: Scalars['String'];
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

export type CreateOrFindUserViaTelegramInitDataMutationVariables = Exact<{
  telegramInitData: Scalars['String'];
}>;


export type CreateOrFindUserViaTelegramInitDataMutation = { __typename?: 'Mutation', createOrFindUserViaTelegramInitData: string };

export type CrescoAdminCreateNewPortfolioStateMutationVariables = Exact<{
  coinBalances: Scalars['JSON'];
}>;


export type CrescoAdminCreateNewPortfolioStateMutation = { __typename?: 'Mutation', crescoAdminCreateNewPortfolioState: string };

export type CrescoAdminSendNotificationMutationVariables = Exact<{
  input?: InputMaybe<CrescoNotificationInput>;
}>;


export type CrescoAdminSendNotificationMutation = { __typename?: 'Mutation', crescoAdminSendNotification: string };

export type CrescoAdminSetAdminRolesMutationVariables = Exact<{
  roles: Array<Scalars['String']> | Scalars['String'];
  userUri: Scalars['String'];
}>;


export type CrescoAdminSetAdminRolesMutation = { __typename?: 'Mutation', crescoAdminSetAdminRoles: string };

export type CrescoAdminTransactionSetStatusMutationVariables = Exact<{
  status?: InputMaybe<CrescoTransactionStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
}>;


export type CrescoAdminTransactionSetStatusMutation = { __typename?: 'Mutation', crescoAdminTransactionSetStatus?: string | null };

export type CrescoAdminUpsertCustomerProfileMutationVariables = Exact<{
  input?: InputMaybe<CrescoCustomerAdminInput>;
}>;


export type CrescoAdminUpsertCustomerProfileMutation = { __typename?: 'Mutation', crescoAdminUpsertCustomerProfile: string };

export type CrescoCustomerTransactionCreateMutationVariables = Exact<{
  amountCrescoTokens: Scalars['Float'];
  customerWallet: Scalars['String'];
  transactionType: CrescoTransactionTypeEnum;
}>;


export type CrescoCustomerTransactionCreateMutation = { __typename?: 'Mutation', crescoCustomerTransactionCreate?: string | null };

export type CrescoCustomerUpsertMyProfileMutationVariables = Exact<{
  input?: InputMaybe<CrescoCustomerCustomerInput>;
}>;


export type CrescoCustomerUpsertMyProfileMutation = { __typename?: 'Mutation', crescoCustomerUpsertMyProfile: string };

export type CrescoTestInitDataMutationVariables = Exact<{ [key: string]: never; }>;


export type CrescoTestInitDataMutation = { __typename?: 'Mutation', crescoTestInitData?: string | null };

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

export type PerformMyAbiFunctionMutationVariables = Exact<{
  fn?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['JSON']>;
}>;


export type PerformMyAbiFunctionMutation = { __typename?: 'Mutation', performMyAbiFunction: string };

export type TelegramSaidUserPassedDistanceMutationVariables = Exact<{
  meters?: InputMaybe<Scalars['Float']>;
  time?: InputMaybe<Scalars['Float']>;
}>;


export type TelegramSaidUserPassedDistanceMutation = { __typename?: 'Mutation', telegramSaidUserPassedDistance?: string | null };

export type TimeTickMutationVariables = Exact<{ [key: string]: never; }>;


export type TimeTickMutation = { __typename?: 'Mutation', timeTick?: string | null };

export type UpsertEduProductMutationVariables = Exact<{ [key: string]: never; }>;


export type UpsertEduProductMutation = { __typename?: 'Mutation', upsertEduProduct?: string | null };

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

export type CrescoAdminGetAdminListQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoAdminGetAdminListQuery = { __typename?: 'Query', crescoAdminGetAdminList: Array<{ __typename?: 'User', displayName?: string | null, email?: string | null, emails?: Array<string> | null, passwordHash?: string | null, phone?: string | null, phones?: Array<string> | null, roles?: Array<string> | null, rolesJwt?: Array<string> | null, scope?: string | null, telegramId?: string | null, telegramIds?: string | null }> };

export type CrescoAdminGetCustomerListQueryVariables = Exact<{
  userUri?: InputMaybe<Scalars['String']>;
}>;


export type CrescoAdminGetCustomerListQuery = { __typename?: 'Query', crescoAdminGetCustomerList: Array<{ __typename?: 'CrescoCustomer', crescoTokenBalance?: number | null, firstName?: string | null, isPassportVerified?: boolean | null, lastName?: string | null, middleName?: string | null, userUri?: string | null, walletAddress?: string | null, agreement?: { __typename?: 'CrescoAgreement', isPrepared?: boolean | null, isSignedByClient?: boolean | null, no?: string | null, fileUrl?: { __typename?: 'FileUrl', name: string, url: string } | null } | null, deposit?: Array<{ __typename?: 'CrescoDeposit', depositNo?: string | null, finishDate?: any | null, percentRate?: number | null, startDate?: any | null }> | null, passportScanFiles?: Array<{ __typename?: 'FileUrl', name: string, url: string }> | null }> };

export type CrescoAdminGetCustomerProfileQueryVariables = Exact<{
  userUri?: InputMaybe<Scalars['String']>;
}>;


export type CrescoAdminGetCustomerProfileQuery = { __typename?: 'Query', crescoAdminGetCustomerProfile: { __typename?: 'CrescoCustomer', crescoTokenBalance?: number | null, firstName?: string | null, isPassportVerified?: boolean | null, lastName?: string | null, middleName?: string | null, userUri?: string | null, walletAddress?: string | null, agreement?: { __typename?: 'CrescoAgreement', isPrepared?: boolean | null, isSignedByClient?: boolean | null, no?: string | null, fileUrl?: { __typename?: 'FileUrl', name: string, url: string } | null } | null, deposit?: Array<{ __typename?: 'CrescoDeposit', depositNo?: string | null, finishDate?: any | null, percentRate?: number | null, startDate?: any | null }> | null, passportScanFiles?: Array<{ __typename?: 'FileUrl', name: string, url: string }> | null } };

export type CrescoAdminGetLastPortfolioStateQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoAdminGetLastPortfolioStateQuery = { __typename?: 'Query', crescoAdminGetLastPortfolioState: { __typename?: 'CrescoPortfolioState', _id?: string | null, createdAt?: any | null, createdByUserUri?: string | null, currenciesAmountsHashmap?: any | null } };

export type CrescoAdminTransactionCheckInEthQueryVariables = Exact<{
  transactionId?: InputMaybe<Scalars['String']>;
}>;


export type CrescoAdminTransactionCheckInEthQuery = { __typename?: 'Query', crescoAdminTransactionCheckInEth?: string | null };

export type CrescoAdminTransactionListQueryVariables = Exact<{
  status?: InputMaybe<CrescoTransactionStatus>;
}>;


export type CrescoAdminTransactionListQuery = { __typename?: 'Query', crescoAdminTransactionList: Array<{ __typename?: 'CrescoTransaction', _id?: string | null, amountCrescoTokens: number, amountUSDT: number, fromWallet: string, status?: CrescoTransactionStatus | null, toWallet: string, transactionType?: CrescoTransactionTypeEnum | null, userUri?: string | null }> };

export type CrescoCustomerGetCalculatedBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoCustomerGetCalculatedBalanceQuery = { __typename?: 'Query', crescoCustomerGetCalculatedBalance: number };

export type CrescoCustomerGetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoCustomerGetMyProfileQuery = { __typename?: 'Query', crescoCustomerGetMyProfile: { __typename?: 'CrescoCustomer', crescoTokenBalance?: number | null, firstName?: string | null, isPassportVerified?: boolean | null, lastName?: string | null, middleName?: string | null, userUri?: string | null, walletAddress?: string | null, agreement?: { __typename?: 'CrescoAgreement', isPrepared?: boolean | null, isSignedByClient?: boolean | null, no?: string | null, fileUrl?: { __typename?: 'FileUrl', name: string, url: string } | null } | null, deposit?: Array<{ __typename?: 'CrescoDeposit', depositNo?: string | null, finishDate?: any | null, percentRate?: number | null, startDate?: any | null }> | null, passportScanFiles?: Array<{ __typename?: 'FileUrl', name: string, url: string }> | null } };

export type CrescoCustomerTransactionListQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoCustomerTransactionListQuery = { __typename?: 'Query', crescoCustomerTransactionList: Array<{ __typename?: 'CrescoTransaction', _id?: string | null, amountCrescoTokens: number, amountUSDT: number, fromWallet: string, status?: CrescoTransactionStatus | null, toWallet: string, transactionType?: CrescoTransactionTypeEnum | null, userUri?: string | null }> };

export type CrescoGetDepositInfoByAgreementNumberQueryVariables = Exact<{
  agreementNo: Scalars['String'];
}>;


export type CrescoGetDepositInfoByAgreementNumberQuery = { __typename?: 'Query', crescoGetDepositInfoByAgreementNumber?: any | null };

export type CrescoGetExternalCoinsRatesQueryVariables = Exact<{ [key: string]: never; }>;


export type CrescoGetExternalCoinsRatesQuery = { __typename?: 'Query', crescoGetExternalCoinsRates: Array<{ __typename?: 'CrescoExternalCoinRate', displayName?: string | null, name?: string | null, rate?: number | null }> };

export type GetInternalContractAbiQueryVariables = Exact<{
  name?: InputMaybe<MfAbiEnum>;
}>;


export type GetInternalContractAbiQuery = { __typename?: 'Query', getInternalContractAbi?: any | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'UserJWTPayload', displayName: string, rolesJWT?: Array<string> | null, userUri: string } | null };

export type GetUpcomingSevaPremEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingSevaPremEventsQuery = { __typename?: 'Query', getUpcomingSevaPremEvents: Array<{ __typename?: 'EduProductEventInstance', _id: string, city?: string | null, dateTimeEnd: any, dateTimeStart: any, priceConditionsText?: string | null, eduProductEvent: { __typename?: 'EduProductEvent', abstract: string, eventDescriptor: string, eventName: string, priceConditionsText?: string | null, reasonsToAttendTitle: string, uvpSubtitle?: string | null, uvpTitle: string, disclaimers?: Array<{ __typename?: 'Disclaimer', description?: string | null, title: string }> | null, faq?: Array<{ __typename?: 'FaqElement', comment?: string | null, answer: { __typename?: 'Answer', description: string, title?: { __typename?: 'Answer', description: string } | null }, question: { __typename?: 'Question', description?: string | null, title: string } }> | null, groupLeaders: Array<{ __typename?: 'GroupLeader', bio?: string | null, displayName: string, instagramLink?: string | null, telegramChannelLink?: string | null }>, portraits: Array<{ __typename?: 'Portrait', description: string, displayName: string, internalName: string }>, priceConditions?: { __typename?: 'PriceConditions', prepayBaseRub?: number | null, priceBaseRub?: number | null } | null, productFeatures: Array<{ __typename?: 'ProductFeature', description: string, rating?: number | null, title: string, portraitsPov?: Array<{ __typename?: 'PortraitPov', rating?: number | null, portrait?: { __typename?: 'Portrait', description: string, displayName: string, internalName: string } | null }> | null }>, reasonsToAttend: Array<{ __typename?: 'ReasonToAttend', description: string, rating?: number | null, title: string, portraitsPov?: Array<{ __typename?: 'PortraitPov', rating?: number | null }> | null }> }, faqInstance?: Array<{ __typename?: 'FaqElement', comment?: string | null, answer: { __typename?: 'Answer', description: string }, question: { __typename?: 'Question', description?: string | null, title: string } }> | null, groupLeaders?: Array<{ __typename?: 'GroupLeader', bio?: string | null, displayName: string, instagramLink?: string | null, telegramChannelLink?: string | null }> | null, placement?: { __typename?: 'EduEventPlacement', isOffline?: boolean | null, isOnline?: boolean | null, faqInstance?: Array<{ __typename?: 'FaqElement', comment?: string | null }> | null, managerContacts: Array<{ __typename?: 'ManagerContact', displayName: string }>, offlineRoom?: { __typename?: 'OfflineRoom', addressShort: string, city: string, howToReach: string } | null, onlineRooms?: Array<{ __typename?: 'OnlineRoom', attendLink: string } | null> | null } | null }> };

export type HuobiGetDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HuobiGetDataQuery = { __typename?: 'Query', huobiGetData?: string | null };

export type MfGetMyUserGameFullStateQueryVariables = Exact<{ [key: string]: never; }>;


export type MfGetMyUserGameFullStateQuery = { __typename?: 'Query', mfGetMyUserGameFullState?: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null } | null };

export type MfUserGetGameFullStateQueryVariables = Exact<{ [key: string]: never; }>;


export type MfUserGetGameFullStateQuery = { __typename?: 'Query', mfUserGetGameFullState?: { __typename?: 'MfUserGameFullState', payload?: any | null, userUri?: string | null } | null };

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', test?: string | null };

export type UserCreateQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserCreateQuery = { __typename?: 'Query', userCreate?: string | null };

export type UserGetMyStateQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGetMyStateQuery = { __typename?: 'Query', userGetMyState: any };

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
export const CreateOrFindUserViaTelegramInitDataDocument = gql`
    mutation createOrFindUserViaTelegramInitData($telegramInitData: String!) {
  createOrFindUserViaTelegramInitData(telegramInitData: $telegramInitData)
}
    `;
export const CrescoAdminCreateNewPortfolioStateDocument = gql`
    mutation crescoAdminCreateNewPortfolioState($coinBalances: JSON!) {
  crescoAdminCreateNewPortfolioState(coinBalances: $coinBalances)
}
    `;
export const CrescoAdminSendNotificationDocument = gql`
    mutation crescoAdminSendNotification($input: CrescoNotificationInput) {
  crescoAdminSendNotification(input: $input)
}
    `;
export const CrescoAdminSetAdminRolesDocument = gql`
    mutation crescoAdminSetAdminRoles($roles: [String!]!, $userUri: String!) {
  crescoAdminSetAdminRoles(roles: $roles, userUri: $userUri)
}
    `;
export const CrescoAdminTransactionSetStatusDocument = gql`
    mutation crescoAdminTransactionSetStatus($status: CrescoTransactionStatus, $transactionId: String) {
  crescoAdminTransactionSetStatus(status: $status, transactionId: $transactionId)
}
    `;
export const CrescoAdminUpsertCustomerProfileDocument = gql`
    mutation crescoAdminUpsertCustomerProfile($input: CrescoCustomerAdminInput) {
  crescoAdminUpsertCustomerProfile(input: $input)
}
    `;
export const CrescoCustomerTransactionCreateDocument = gql`
    mutation crescoCustomerTransactionCreate($amountCrescoTokens: Float!, $customerWallet: String!, $transactionType: CrescoTransactionTypeEnum!) {
  crescoCustomerTransactionCreate(
    amountCrescoTokens: $amountCrescoTokens
    customerWallet: $customerWallet
    transactionType: $transactionType
  )
}
    `;
export const CrescoCustomerUpsertMyProfileDocument = gql`
    mutation crescoCustomerUpsertMyProfile($input: CrescoCustomerCustomerInput) {
  crescoCustomerUpsertMyProfile(input: $input)
}
    `;
export const CrescoTestInitDataDocument = gql`
    mutation crescoTestInitData {
  crescoTestInitData
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
export const PerformMyAbiFunctionDocument = gql`
    mutation performMyAbiFunction($fn: String, $params: JSON) {
  performMyAbiFunction(fn: $fn, params: $params)
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
export const UpsertEduProductDocument = gql`
    mutation upsertEduProduct {
  upsertEduProduct
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
export const CrescoAdminGetAdminListDocument = gql`
    query crescoAdminGetAdminList {
  crescoAdminGetAdminList {
    displayName
    email
    emails
    passwordHash
    phone
    phones
    roles
    rolesJwt
    scope
    telegramId
    telegramIds
  }
}
    `;
export const CrescoAdminGetCustomerListDocument = gql`
    query crescoAdminGetCustomerList($userUri: String) {
  crescoAdminGetCustomerList(userUri: $userUri) {
    agreement {
      fileUrl {
        name
        url
      }
      isPrepared
      isSignedByClient
      no
    }
    crescoTokenBalance
    deposit {
      depositNo
      finishDate
      percentRate
      startDate
    }
    firstName
    isPassportVerified
    lastName
    middleName
    passportScanFiles {
      name
      url
    }
    userUri
    walletAddress
  }
}
    `;
export const CrescoAdminGetCustomerProfileDocument = gql`
    query crescoAdminGetCustomerProfile($userUri: String) {
  crescoAdminGetCustomerProfile(userUri: $userUri) {
    agreement {
      fileUrl {
        name
        url
      }
      isPrepared
      isSignedByClient
      no
    }
    crescoTokenBalance
    deposit {
      depositNo
      finishDate
      percentRate
      startDate
    }
    firstName
    isPassportVerified
    lastName
    middleName
    passportScanFiles {
      name
      url
    }
    userUri
    walletAddress
  }
}
    `;
export const CrescoAdminGetLastPortfolioStateDocument = gql`
    query crescoAdminGetLastPortfolioState {
  crescoAdminGetLastPortfolioState {
    _id
    createdAt
    createdByUserUri
    currenciesAmountsHashmap
  }
}
    `;
export const CrescoAdminTransactionCheckInEthDocument = gql`
    query crescoAdminTransactionCheckInEth($transactionId: String) {
  crescoAdminTransactionCheckInEth(transactionId: $transactionId)
}
    `;
export const CrescoAdminTransactionListDocument = gql`
    query crescoAdminTransactionList($status: CrescoTransactionStatus) {
  crescoAdminTransactionList(status: $status) {
    _id
    amountCrescoTokens
    amountUSDT
    fromWallet
    status
    toWallet
    transactionType
    userUri
  }
}
    `;
export const CrescoCustomerGetCalculatedBalanceDocument = gql`
    query crescoCustomerGetCalculatedBalance {
  crescoCustomerGetCalculatedBalance
}
    `;
export const CrescoCustomerGetMyProfileDocument = gql`
    query crescoCustomerGetMyProfile {
  crescoCustomerGetMyProfile {
    agreement {
      fileUrl {
        name
        url
      }
      isPrepared
      isSignedByClient
      no
    }
    crescoTokenBalance
    deposit {
      depositNo
      finishDate
      percentRate
      startDate
    }
    firstName
    isPassportVerified
    lastName
    middleName
    passportScanFiles {
      name
      url
    }
    userUri
    walletAddress
  }
}
    `;
export const CrescoCustomerTransactionListDocument = gql`
    query crescoCustomerTransactionList {
  crescoCustomerTransactionList {
    _id
    amountCrescoTokens
    amountUSDT
    fromWallet
    status
    toWallet
    transactionType
    userUri
  }
}
    `;
export const CrescoGetDepositInfoByAgreementNumberDocument = gql`
    query crescoGetDepositInfoByAgreementNumber($agreementNo: String!) {
  crescoGetDepositInfoByAgreementNumber(agreementNo: $agreementNo)
}
    `;
export const CrescoGetExternalCoinsRatesDocument = gql`
    query crescoGetExternalCoinsRates {
  crescoGetExternalCoinsRates {
    displayName
    name
    rate
  }
}
    `;
export const GetInternalContractAbiDocument = gql`
    query getInternalContractAbi($name: MfAbiEnum) {
  getInternalContractAbi(name: $name)
}
    `;
export const GetMeDocument = gql`
    query getMe {
  getMe {
    displayName
    rolesJWT
    userUri
  }
}
    `;
export const GetUpcomingSevaPremEventsDocument = gql`
    query getUpcomingSevaPremEvents {
  getUpcomingSevaPremEvents {
    _id
    city
    dateTimeEnd
    dateTimeStart
    eduProductEvent {
      abstract
      disclaimers {
        description
        title
      }
      eventDescriptor
      eventName
      faq {
        answer {
          description
          title {
            description
          }
        }
        comment
        question {
          description
          title
        }
      }
      groupLeaders {
        bio
        displayName
        instagramLink
        telegramChannelLink
      }
      portraits {
        description
        displayName
        internalName
      }
      priceConditions {
        prepayBaseRub
        priceBaseRub
      }
      priceConditionsText
      productFeatures {
        description
        portraitsPov {
          portrait {
            description
            displayName
            internalName
          }
          rating
        }
        rating
        title
      }
      reasonsToAttend {
        description
        portraitsPov {
          rating
        }
        rating
        title
      }
      reasonsToAttendTitle
      uvpSubtitle
      uvpTitle
    }
    faqInstance {
      answer {
        description
      }
      comment
      question {
        description
        title
      }
    }
    groupLeaders {
      bio
      displayName
      instagramLink
      telegramChannelLink
    }
    placement {
      faqInstance {
        comment
      }
      isOffline
      isOnline
      managerContacts {
        displayName
      }
      offlineRoom {
        addressShort
        city
        howToReach
      }
      onlineRooms {
        attendLink
      }
    }
    priceConditionsText
  }
}
    `;
export const HuobiGetDataDocument = gql`
    query huobiGetData {
  huobiGetData
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
export const UserCreateDocument = gql`
    query userCreate($email: String!, $password: String!) {
  userCreate(email: $email, password: $password)
}
    `;
export const UserGetMyStateDocument = gql`
    query userGetMyState {
  userGetMyState
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
    createOrFindUserViaTelegramInitData(variables: CreateOrFindUserViaTelegramInitDataMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOrFindUserViaTelegramInitDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrFindUserViaTelegramInitDataMutation>(CreateOrFindUserViaTelegramInitDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrFindUserViaTelegramInitData', 'mutation');
    },
    crescoAdminCreateNewPortfolioState(variables: CrescoAdminCreateNewPortfolioStateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminCreateNewPortfolioStateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminCreateNewPortfolioStateMutation>(CrescoAdminCreateNewPortfolioStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminCreateNewPortfolioState', 'mutation');
    },
    crescoAdminSendNotification(variables?: CrescoAdminSendNotificationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminSendNotificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminSendNotificationMutation>(CrescoAdminSendNotificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminSendNotification', 'mutation');
    },
    crescoAdminSetAdminRoles(variables: CrescoAdminSetAdminRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminSetAdminRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminSetAdminRolesMutation>(CrescoAdminSetAdminRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminSetAdminRoles', 'mutation');
    },
    crescoAdminTransactionSetStatus(variables?: CrescoAdminTransactionSetStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminTransactionSetStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminTransactionSetStatusMutation>(CrescoAdminTransactionSetStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminTransactionSetStatus', 'mutation');
    },
    crescoAdminUpsertCustomerProfile(variables?: CrescoAdminUpsertCustomerProfileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminUpsertCustomerProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminUpsertCustomerProfileMutation>(CrescoAdminUpsertCustomerProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminUpsertCustomerProfile', 'mutation');
    },
    crescoCustomerTransactionCreate(variables: CrescoCustomerTransactionCreateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoCustomerTransactionCreateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoCustomerTransactionCreateMutation>(CrescoCustomerTransactionCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoCustomerTransactionCreate', 'mutation');
    },
    crescoCustomerUpsertMyProfile(variables?: CrescoCustomerUpsertMyProfileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoCustomerUpsertMyProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoCustomerUpsertMyProfileMutation>(CrescoCustomerUpsertMyProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoCustomerUpsertMyProfile', 'mutation');
    },
    crescoTestInitData(variables?: CrescoTestInitDataMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoTestInitDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoTestInitDataMutation>(CrescoTestInitDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoTestInitData', 'mutation');
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
    performMyAbiFunction(variables?: PerformMyAbiFunctionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PerformMyAbiFunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PerformMyAbiFunctionMutation>(PerformMyAbiFunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'performMyAbiFunction', 'mutation');
    },
    telegramSaidUserPassedDistance(variables?: TelegramSaidUserPassedDistanceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TelegramSaidUserPassedDistanceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TelegramSaidUserPassedDistanceMutation>(TelegramSaidUserPassedDistanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'telegramSaidUserPassedDistance', 'mutation');
    },
    timeTick(variables?: TimeTickMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TimeTickMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TimeTickMutation>(TimeTickDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'timeTick', 'mutation');
    },
    upsertEduProduct(variables?: UpsertEduProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertEduProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertEduProductMutation>(UpsertEduProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertEduProduct', 'mutation');
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
    crescoAdminGetAdminList(variables?: CrescoAdminGetAdminListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminGetAdminListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminGetAdminListQuery>(CrescoAdminGetAdminListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminGetAdminList', 'query');
    },
    crescoAdminGetCustomerList(variables?: CrescoAdminGetCustomerListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminGetCustomerListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminGetCustomerListQuery>(CrescoAdminGetCustomerListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminGetCustomerList', 'query');
    },
    crescoAdminGetCustomerProfile(variables?: CrescoAdminGetCustomerProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminGetCustomerProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminGetCustomerProfileQuery>(CrescoAdminGetCustomerProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminGetCustomerProfile', 'query');
    },
    crescoAdminGetLastPortfolioState(variables?: CrescoAdminGetLastPortfolioStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminGetLastPortfolioStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminGetLastPortfolioStateQuery>(CrescoAdminGetLastPortfolioStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminGetLastPortfolioState', 'query');
    },
    crescoAdminTransactionCheckInEth(variables?: CrescoAdminTransactionCheckInEthQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminTransactionCheckInEthQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminTransactionCheckInEthQuery>(CrescoAdminTransactionCheckInEthDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminTransactionCheckInEth', 'query');
    },
    crescoAdminTransactionList(variables?: CrescoAdminTransactionListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoAdminTransactionListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoAdminTransactionListQuery>(CrescoAdminTransactionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoAdminTransactionList', 'query');
    },
    crescoCustomerGetCalculatedBalance(variables?: CrescoCustomerGetCalculatedBalanceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoCustomerGetCalculatedBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoCustomerGetCalculatedBalanceQuery>(CrescoCustomerGetCalculatedBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoCustomerGetCalculatedBalance', 'query');
    },
    crescoCustomerGetMyProfile(variables?: CrescoCustomerGetMyProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoCustomerGetMyProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoCustomerGetMyProfileQuery>(CrescoCustomerGetMyProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoCustomerGetMyProfile', 'query');
    },
    crescoCustomerTransactionList(variables?: CrescoCustomerTransactionListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoCustomerTransactionListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoCustomerTransactionListQuery>(CrescoCustomerTransactionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoCustomerTransactionList', 'query');
    },
    crescoGetDepositInfoByAgreementNumber(variables: CrescoGetDepositInfoByAgreementNumberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoGetDepositInfoByAgreementNumberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoGetDepositInfoByAgreementNumberQuery>(CrescoGetDepositInfoByAgreementNumberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoGetDepositInfoByAgreementNumber', 'query');
    },
    crescoGetExternalCoinsRates(variables?: CrescoGetExternalCoinsRatesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CrescoGetExternalCoinsRatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrescoGetExternalCoinsRatesQuery>(CrescoGetExternalCoinsRatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crescoGetExternalCoinsRates', 'query');
    },
    getInternalContractAbi(variables?: GetInternalContractAbiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInternalContractAbiQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInternalContractAbiQuery>(GetInternalContractAbiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getInternalContractAbi', 'query');
    },
    getMe(variables?: GetMeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMe', 'query');
    },
    getUpcomingSevaPremEvents(variables?: GetUpcomingSevaPremEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUpcomingSevaPremEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUpcomingSevaPremEventsQuery>(GetUpcomingSevaPremEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUpcomingSevaPremEvents', 'query');
    },
    huobiGetData(variables?: HuobiGetDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HuobiGetDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HuobiGetDataQuery>(HuobiGetDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'huobiGetData', 'query');
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
    userCreate(variables: UserCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserCreateQuery>(UserCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userCreate', 'query');
    },
    userGetMyState(variables?: UserGetMyStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserGetMyStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserGetMyStateQuery>(UserGetMyStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userGetMyState', 'query');
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
    useCrescoAdminGetAdminList(variables?: CrescoAdminGetAdminListQueryVariables, config?: SWRConfigInterface<CrescoAdminGetAdminListQuery, ClientError>) {
      return useSWR<CrescoAdminGetAdminListQuery, ClientError>(genKey<CrescoAdminGetAdminListQueryVariables>('CrescoAdminGetAdminList', variables), () => sdk.crescoAdminGetAdminList(variables), config);
    },
    useCrescoAdminGetCustomerList(variables?: CrescoAdminGetCustomerListQueryVariables, config?: SWRConfigInterface<CrescoAdminGetCustomerListQuery, ClientError>) {
      return useSWR<CrescoAdminGetCustomerListQuery, ClientError>(genKey<CrescoAdminGetCustomerListQueryVariables>('CrescoAdminGetCustomerList', variables), () => sdk.crescoAdminGetCustomerList(variables), config);
    },
    useCrescoAdminGetCustomerProfile(variables?: CrescoAdminGetCustomerProfileQueryVariables, config?: SWRConfigInterface<CrescoAdminGetCustomerProfileQuery, ClientError>) {
      return useSWR<CrescoAdminGetCustomerProfileQuery, ClientError>(genKey<CrescoAdminGetCustomerProfileQueryVariables>('CrescoAdminGetCustomerProfile', variables), () => sdk.crescoAdminGetCustomerProfile(variables), config);
    },
    useCrescoAdminGetLastPortfolioState(variables?: CrescoAdminGetLastPortfolioStateQueryVariables, config?: SWRConfigInterface<CrescoAdminGetLastPortfolioStateQuery, ClientError>) {
      return useSWR<CrescoAdminGetLastPortfolioStateQuery, ClientError>(genKey<CrescoAdminGetLastPortfolioStateQueryVariables>('CrescoAdminGetLastPortfolioState', variables), () => sdk.crescoAdminGetLastPortfolioState(variables), config);
    },
    useCrescoAdminTransactionCheckInEth(variables?: CrescoAdminTransactionCheckInEthQueryVariables, config?: SWRConfigInterface<CrescoAdminTransactionCheckInEthQuery, ClientError>) {
      return useSWR<CrescoAdminTransactionCheckInEthQuery, ClientError>(genKey<CrescoAdminTransactionCheckInEthQueryVariables>('CrescoAdminTransactionCheckInEth', variables), () => sdk.crescoAdminTransactionCheckInEth(variables), config);
    },
    useCrescoAdminTransactionList(variables?: CrescoAdminTransactionListQueryVariables, config?: SWRConfigInterface<CrescoAdminTransactionListQuery, ClientError>) {
      return useSWR<CrescoAdminTransactionListQuery, ClientError>(genKey<CrescoAdminTransactionListQueryVariables>('CrescoAdminTransactionList', variables), () => sdk.crescoAdminTransactionList(variables), config);
    },
    useCrescoCustomerGetCalculatedBalance(variables?: CrescoCustomerGetCalculatedBalanceQueryVariables, config?: SWRConfigInterface<CrescoCustomerGetCalculatedBalanceQuery, ClientError>) {
      return useSWR<CrescoCustomerGetCalculatedBalanceQuery, ClientError>(genKey<CrescoCustomerGetCalculatedBalanceQueryVariables>('CrescoCustomerGetCalculatedBalance', variables), () => sdk.crescoCustomerGetCalculatedBalance(variables), config);
    },
    useCrescoCustomerGetMyProfile(variables?: CrescoCustomerGetMyProfileQueryVariables, config?: SWRConfigInterface<CrescoCustomerGetMyProfileQuery, ClientError>) {
      return useSWR<CrescoCustomerGetMyProfileQuery, ClientError>(genKey<CrescoCustomerGetMyProfileQueryVariables>('CrescoCustomerGetMyProfile', variables), () => sdk.crescoCustomerGetMyProfile(variables), config);
    },
    useCrescoCustomerTransactionList(variables?: CrescoCustomerTransactionListQueryVariables, config?: SWRConfigInterface<CrescoCustomerTransactionListQuery, ClientError>) {
      return useSWR<CrescoCustomerTransactionListQuery, ClientError>(genKey<CrescoCustomerTransactionListQueryVariables>('CrescoCustomerTransactionList', variables), () => sdk.crescoCustomerTransactionList(variables), config);
    },
    useCrescoGetDepositInfoByAgreementNumber(variables: CrescoGetDepositInfoByAgreementNumberQueryVariables, config?: SWRConfigInterface<CrescoGetDepositInfoByAgreementNumberQuery, ClientError>) {
      return useSWR<CrescoGetDepositInfoByAgreementNumberQuery, ClientError>(genKey<CrescoGetDepositInfoByAgreementNumberQueryVariables>('CrescoGetDepositInfoByAgreementNumber', variables), () => sdk.crescoGetDepositInfoByAgreementNumber(variables), config);
    },
    useCrescoGetExternalCoinsRates(variables?: CrescoGetExternalCoinsRatesQueryVariables, config?: SWRConfigInterface<CrescoGetExternalCoinsRatesQuery, ClientError>) {
      return useSWR<CrescoGetExternalCoinsRatesQuery, ClientError>(genKey<CrescoGetExternalCoinsRatesQueryVariables>('CrescoGetExternalCoinsRates', variables), () => sdk.crescoGetExternalCoinsRates(variables), config);
    },
    useGetInternalContractAbi(variables?: GetInternalContractAbiQueryVariables, config?: SWRConfigInterface<GetInternalContractAbiQuery, ClientError>) {
      return useSWR<GetInternalContractAbiQuery, ClientError>(genKey<GetInternalContractAbiQueryVariables>('GetInternalContractAbi', variables), () => sdk.getInternalContractAbi(variables), config);
    },
    useGetMe(variables?: GetMeQueryVariables, config?: SWRConfigInterface<GetMeQuery, ClientError>) {
      return useSWR<GetMeQuery, ClientError>(genKey<GetMeQueryVariables>('GetMe', variables), () => sdk.getMe(variables), config);
    },
    useGetUpcomingSevaPremEvents(variables?: GetUpcomingSevaPremEventsQueryVariables, config?: SWRConfigInterface<GetUpcomingSevaPremEventsQuery, ClientError>) {
      return useSWR<GetUpcomingSevaPremEventsQuery, ClientError>(genKey<GetUpcomingSevaPremEventsQueryVariables>('GetUpcomingSevaPremEvents', variables), () => sdk.getUpcomingSevaPremEvents(variables), config);
    },
    useHuobiGetData(variables?: HuobiGetDataQueryVariables, config?: SWRConfigInterface<HuobiGetDataQuery, ClientError>) {
      return useSWR<HuobiGetDataQuery, ClientError>(genKey<HuobiGetDataQueryVariables>('HuobiGetData', variables), () => sdk.huobiGetData(variables), config);
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
    useUserCreate(variables: UserCreateQueryVariables, config?: SWRConfigInterface<UserCreateQuery, ClientError>) {
      return useSWR<UserCreateQuery, ClientError>(genKey<UserCreateQueryVariables>('UserCreate', variables), () => sdk.userCreate(variables), config);
    },
    useUserGetMyState(variables?: UserGetMyStateQueryVariables, config?: SWRConfigInterface<UserGetMyStateQuery, ClientError>) {
      return useSWR<UserGetMyStateQuery, ClientError>(genKey<UserGetMyStateQueryVariables>('UserGetMyState', variables), () => sdk.userGetMyState(variables), config);
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