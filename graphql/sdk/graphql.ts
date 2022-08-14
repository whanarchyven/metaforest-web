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

export type Answer = {
  __typename?: 'Answer';
  description: Scalars['String'];
  title?: Maybe<Answer>;
};

export enum BunnySlotsEnum {
  Boots = 'boots',
  Hat = 'hat',
  LeftHand = 'leftHand',
  Mask = 'mask',
  RightHand = 'rightHand',
  Suit = 'suit'
}

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

export type EarnLogElement = {
  __typename?: 'EarnLogElement';
  amount?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
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

export type GroupLeader = {
  __typename?: 'GroupLeader';
  bio?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  instagramLink?: Maybe<Scalars['String']>;
  telegramChannelLink?: Maybe<Scalars['String']>;
};

export type Idea_MetaforestGlobalGameSettings = {
  __typename?: 'Idea_MetaforestGlobalGameSettings';
  maxSpeedKmH?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
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

export type ManagerContact = {
  __typename?: 'ManagerContact';
  displayName: Scalars['String'];
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
  EarsAccessories = 'EARS_ACCESSORIES',
  Face = 'FACE',
  HandLeft = 'HAND_LEFT',
  HandRight = 'HAND_RIGHT',
  Hat = 'HAT',
  Necklace = 'NECKLACE',
  Sims = 'SIMS',
  Suit = 'SUIT'
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

export type MetaforestNftInfo = {
  __typename?: 'MetaforestNftInfo';
  baseParams?: Maybe<MetaforestBaseParams>;
  bunnyGens?: Maybe<MetaforestBunnyGens>;
  deployedNftWithTrait?: Maybe<NftWithTrait>;
  idx: Scalars['Int'];
  images?: Maybe<NftImages>;
  itemWornOnBunnyIdx?: Maybe<Scalars['Int']>;
  layers?: Maybe<Array<Scalars['String']>>;
  nftCollection?: Maybe<MetaforestNftCollectionsEnum>;
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

export type MetaforestUserStepsCounter = {
  __typename?: 'MetaforestUserStepsCounter';
  avgSpeed?: Maybe<Scalars['Float']>;
  botChatId?: Maybe<Scalars['Float']>;
  botMessageId?: Maybe<Scalars['Float']>;
  delta?: Maybe<Scalars['Float']>;
  latitudeAvg?: Maybe<Scalars['Float']>;
  latitudeLast10?: Maybe<Array<Maybe<Scalars['Float']>>>;
  locationsAveraged10: Array<Location>;
  locationsLast10: Array<Location>;
  longitudeAvg?: Maybe<Scalars['Float']>;
  longitudeLast10?: Maybe<Array<Maybe<Scalars['Float']>>>;
  rawLocations: Array<Location>;
  secondsElapsed?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrFindUserViaTelegramInitData: Scalars['String'];
  crescoAdminCreateNewPortfolioState: Scalars['String'];
  crescoAdminSendNotification: Scalars['String'];
  crescoAdminSetAdminRoles: Scalars['String'];
  crescoAdminTransactionSetStatus?: Maybe<Scalars['String']>;
  crescoAdminUpsertCustomerProfile: Scalars['String'];
  crescoCustomerTransactionCreate?: Maybe<Scalars['String']>;
  crescoCustomerUpsertMyProfile: Scalars['String'];
  crescoTestInitData?: Maybe<Scalars['String']>;
  metaforestAdminEditConfigSingleParam: Scalars['String'];
  metaforestAdminInitConfig?: Maybe<Scalars['String']>;
  metaforestInitStateForUser: Scalars['String'];
  metaforestPerformAbiFunction: Scalars['String'];
  metaforestPerformMyAbiFunction: Scalars['String'];
  metaforestUserClearPush?: Maybe<Scalars['String']>;
  metaforestUserTakeJob: Scalars['String'];
  upsertEduProduct?: Maybe<Scalars['String']>;
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


export type MutationMetaforestUserTakeJobArgs = {
  jobId: Scalars['String'];
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
  getMe?: Maybe<UserJwtPayload>;
  getUpcomingSevaPremEvents: Array<EduProductEventInstance>;
  huobiGetData?: Maybe<Scalars['String']>;
  metaforestAdminGetConfig: Scalars['JSON'];
  metaforestGetInternalContractAbi?: Maybe<Scalars['JSON']>;
  metaforestUserGetMyState: Scalars['JSON'];
  metaforestUserGetPush: Array<MetaforestPushNotification>;
  metaforestUserGetState: Scalars['JSON'];
  userCreate?: Maybe<Scalars['String']>;
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


export type QueryUserCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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

export type MetaforestAdminEditConfigSingleParamMutationVariables = Exact<{
  path: Scalars['String'];
  valueObject: Scalars['JSON'];
  version: Scalars['String'];
}>;


export type MetaforestAdminEditConfigSingleParamMutation = { __typename?: 'Mutation', metaforestAdminEditConfigSingleParam: string };

export type MetaforestAdminInitConfigMutationVariables = Exact<{
  version: Scalars['String'];
}>;


export type MetaforestAdminInitConfigMutation = { __typename?: 'Mutation', metaforestAdminInitConfig?: string | null };

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

export type MetaforestUserTakeJobMutationVariables = Exact<{
  jobId: Scalars['String'];
}>;


export type MetaforestUserTakeJobMutation = { __typename?: 'Mutation', metaforestUserTakeJob: string };

export type UpsertEduProductMutationVariables = Exact<{ [key: string]: never; }>;


export type UpsertEduProductMutation = { __typename?: 'Mutation', upsertEduProduct?: string | null };

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

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'UserJWTPayload', displayName: string, rolesJWT?: Array<string> | null, userUri: string } | null };

export type GetUpcomingSevaPremEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingSevaPremEventsQuery = { __typename?: 'Query', getUpcomingSevaPremEvents: Array<{ __typename?: 'EduProductEventInstance', _id: string, city?: string | null, dateTimeEnd: any, dateTimeStart: any, priceConditionsText?: string | null, eduProductEvent: { __typename?: 'EduProductEvent', abstract: string, eventDescriptor: string, eventName: string, priceConditionsText?: string | null, reasonsToAttendTitle: string, uvpSubtitle?: string | null, uvpTitle: string, disclaimers?: Array<{ __typename?: 'Disclaimer', description?: string | null, title: string }> | null, faq?: Array<{ __typename?: 'FaqElement', comment?: string | null, answer: { __typename?: 'Answer', description: string, title?: { __typename?: 'Answer', description: string } | null }, question: { __typename?: 'Question', description?: string | null, title: string } }> | null, groupLeaders: Array<{ __typename?: 'GroupLeader', bio?: string | null, displayName: string, instagramLink?: string | null, telegramChannelLink?: string | null }>, portraits: Array<{ __typename?: 'Portrait', description: string, displayName: string, internalName: string }>, priceConditions?: { __typename?: 'PriceConditions', prepayBaseRub?: number | null, priceBaseRub?: number | null } | null, productFeatures: Array<{ __typename?: 'ProductFeature', description: string, rating?: number | null, title: string, portraitsPov?: Array<{ __typename?: 'PortraitPov', rating?: number | null, portrait?: { __typename?: 'Portrait', description: string, displayName: string, internalName: string } | null }> | null }>, reasonsToAttend: Array<{ __typename?: 'ReasonToAttend', description: string, rating?: number | null, title: string, portraitsPov?: Array<{ __typename?: 'PortraitPov', rating?: number | null }> | null }> }, faqInstance?: Array<{ __typename?: 'FaqElement', comment?: string | null, answer: { __typename?: 'Answer', description: string }, question: { __typename?: 'Question', description?: string | null, title: string } }> | null, groupLeaders?: Array<{ __typename?: 'GroupLeader', bio?: string | null, displayName: string, instagramLink?: string | null, telegramChannelLink?: string | null }> | null, placement?: { __typename?: 'EduEventPlacement', isOffline?: boolean | null, isOnline?: boolean | null, faqInstance?: Array<{ __typename?: 'FaqElement', comment?: string | null }> | null, managerContacts: Array<{ __typename?: 'ManagerContact', displayName: string }>, offlineRoom?: { __typename?: 'OfflineRoom', addressShort: string, city: string, howToReach: string } | null, onlineRooms?: Array<{ __typename?: 'OnlineRoom', attendLink: string } | null> | null } | null }> };

export type HuobiGetDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HuobiGetDataQuery = { __typename?: 'Query', huobiGetData?: string | null };

export type MetaforestAdminGetConfigQueryVariables = Exact<{
  version: Scalars['String'];
}>;


export type MetaforestAdminGetConfigQuery = { __typename?: 'Query', metaforestAdminGetConfig: any };

export type MetaforestGetInternalContractAbiQueryVariables = Exact<{
  name?: InputMaybe<MetaforestAbiEnum>;
}>;


export type MetaforestGetInternalContractAbiQuery = { __typename?: 'Query', metaforestGetInternalContractAbi?: any | null };

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

export type UserCreateQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserCreateQuery = { __typename?: 'Query', userCreate?: string | null };


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
export const MetaforestAdminEditConfigSingleParamDocument = gql`
    mutation metaforestAdminEditConfigSingleParam($path: String!, $valueObject: JSON!, $version: String!) {
  metaforestAdminEditConfigSingleParam(
    path: $path
    valueObject: $valueObject
    version: $version
  )
}
    `;
export const MetaforestAdminInitConfigDocument = gql`
    mutation metaforestAdminInitConfig($version: String!) {
  metaforestAdminInitConfig(version: $version)
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
export const MetaforestUserTakeJobDocument = gql`
    mutation metaforestUserTakeJob($jobId: String!) {
  metaforestUserTakeJob(jobId: $jobId)
}
    `;
export const UpsertEduProductDocument = gql`
    mutation upsertEduProduct {
  upsertEduProduct
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
export const UserCreateDocument = gql`
    query userCreate($email: String!, $password: String!) {
  userCreate(email: $email, password: $password)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
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
    metaforestAdminEditConfigSingleParam(variables: MetaforestAdminEditConfigSingleParamMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminEditConfigSingleParamMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminEditConfigSingleParamMutation>(MetaforestAdminEditConfigSingleParamDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminEditConfigSingleParam', 'mutation');
    },
    metaforestAdminInitConfig(variables: MetaforestAdminInitConfigMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminInitConfigMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminInitConfigMutation>(MetaforestAdminInitConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminInitConfig', 'mutation');
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
    metaforestUserTakeJob(variables: MetaforestUserTakeJobMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserTakeJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserTakeJobMutation>(MetaforestUserTakeJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserTakeJob', 'mutation');
    },
    upsertEduProduct(variables?: UpsertEduProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertEduProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertEduProductMutation>(UpsertEduProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertEduProduct', 'mutation');
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
    getMe(variables?: GetMeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMeQuery>(GetMeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMe', 'query');
    },
    getUpcomingSevaPremEvents(variables?: GetUpcomingSevaPremEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUpcomingSevaPremEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUpcomingSevaPremEventsQuery>(GetUpcomingSevaPremEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUpcomingSevaPremEvents', 'query');
    },
    huobiGetData(variables?: HuobiGetDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HuobiGetDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HuobiGetDataQuery>(HuobiGetDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'huobiGetData', 'query');
    },
    metaforestAdminGetConfig(variables: MetaforestAdminGetConfigQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestAdminGetConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestAdminGetConfigQuery>(MetaforestAdminGetConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestAdminGetConfig', 'query');
    },
    metaforestGetInternalContractAbi(variables?: MetaforestGetInternalContractAbiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestGetInternalContractAbiQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestGetInternalContractAbiQuery>(MetaforestGetInternalContractAbiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestGetInternalContractAbi', 'query');
    },
    metaforestUserGetMyState(variables?: MetaforestUserGetMyStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetMyStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetMyStateQuery>(MetaforestUserGetMyStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetMyState', 'query');
    },
    metaforestUserGetPush(variables: MetaforestUserGetPushQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetPushQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetPushQuery>(MetaforestUserGetPushDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetPush', 'query');
    },
    metaforestUserGetState(variables: MetaforestUserGetStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MetaforestUserGetStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaforestUserGetStateQuery>(MetaforestUserGetStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metaforestUserGetState', 'query');
    },
    userCreate(variables: UserCreateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserCreateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserCreateQuery>(UserCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userCreate', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(name: string, object: V = {} as V): SWRKeyInterface => [name, ...Object.keys(object).sort().map(key => object[key])];
  return {
    ...sdk,
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
    useGetMe(variables?: GetMeQueryVariables, config?: SWRConfigInterface<GetMeQuery, ClientError>) {
      return useSWR<GetMeQuery, ClientError>(genKey<GetMeQueryVariables>('GetMe', variables), () => sdk.getMe(variables), config);
    },
    useGetUpcomingSevaPremEvents(variables?: GetUpcomingSevaPremEventsQueryVariables, config?: SWRConfigInterface<GetUpcomingSevaPremEventsQuery, ClientError>) {
      return useSWR<GetUpcomingSevaPremEventsQuery, ClientError>(genKey<GetUpcomingSevaPremEventsQueryVariables>('GetUpcomingSevaPremEvents', variables), () => sdk.getUpcomingSevaPremEvents(variables), config);
    },
    useHuobiGetData(variables?: HuobiGetDataQueryVariables, config?: SWRConfigInterface<HuobiGetDataQuery, ClientError>) {
      return useSWR<HuobiGetDataQuery, ClientError>(genKey<HuobiGetDataQueryVariables>('HuobiGetData', variables), () => sdk.huobiGetData(variables), config);
    },
    useMetaforestAdminGetConfig(variables: MetaforestAdminGetConfigQueryVariables, config?: SWRConfigInterface<MetaforestAdminGetConfigQuery, ClientError>) {
      return useSWR<MetaforestAdminGetConfigQuery, ClientError>(genKey<MetaforestAdminGetConfigQueryVariables>('MetaforestAdminGetConfig', variables), () => sdk.metaforestAdminGetConfig(variables), config);
    },
    useMetaforestGetInternalContractAbi(variables?: MetaforestGetInternalContractAbiQueryVariables, config?: SWRConfigInterface<MetaforestGetInternalContractAbiQuery, ClientError>) {
      return useSWR<MetaforestGetInternalContractAbiQuery, ClientError>(genKey<MetaforestGetInternalContractAbiQueryVariables>('MetaforestGetInternalContractAbi', variables), () => sdk.metaforestGetInternalContractAbi(variables), config);
    },
    useMetaforestUserGetMyState(variables?: MetaforestUserGetMyStateQueryVariables, config?: SWRConfigInterface<MetaforestUserGetMyStateQuery, ClientError>) {
      return useSWR<MetaforestUserGetMyStateQuery, ClientError>(genKey<MetaforestUserGetMyStateQueryVariables>('MetaforestUserGetMyState', variables), () => sdk.metaforestUserGetMyState(variables), config);
    },
    useMetaforestUserGetPush(variables: MetaforestUserGetPushQueryVariables, config?: SWRConfigInterface<MetaforestUserGetPushQuery, ClientError>) {
      return useSWR<MetaforestUserGetPushQuery, ClientError>(genKey<MetaforestUserGetPushQueryVariables>('MetaforestUserGetPush', variables), () => sdk.metaforestUserGetPush(variables), config);
    },
    useMetaforestUserGetState(variables: MetaforestUserGetStateQueryVariables, config?: SWRConfigInterface<MetaforestUserGetStateQuery, ClientError>) {
      return useSWR<MetaforestUserGetStateQuery, ClientError>(genKey<MetaforestUserGetStateQueryVariables>('MetaforestUserGetState', variables), () => sdk.metaforestUserGetState(variables), config);
    },
    useUserCreate(variables: UserCreateQueryVariables, config?: SWRConfigInterface<UserCreateQuery, ClientError>) {
      return useSWR<UserCreateQuery, ClientError>(genKey<UserCreateQueryVariables>('UserCreate', variables), () => sdk.userCreate(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;