import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentButtonLink = {
  __typename?: 'ComponentButtonLink';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentButtonLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
};

export type ComponentPartsAboutMe = {
  __typename?: 'ComponentPartsAboutMe';
  biography?: Maybe<Scalars['String']>;
  certificat?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  me?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentPartsAboutMeInput = {
  biography?: InputMaybe<Scalars['String']>;
  certificat?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  me?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPartsApp = {
  __typename?: 'ComponentPartsApp';
  appIcon?: Maybe<UploadFileEntityResponse>;
  appstoreUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentPartsAppFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPartsAppFiltersInput>>>;
  appstoreUrl?: InputMaybe<StringFilterInput>;
  author?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPartsAppFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPartsAppFiltersInput>>>;
};

export type ComponentPartsAppInput = {
  appIcon?: InputMaybe<Scalars['ID']>;
  appstoreUrl?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentPartsFeaturedApps = {
  __typename?: 'ComponentPartsFeaturedApps';
  apps?: Maybe<Array<Maybe<ComponentPartsApp>>>;
  id: Scalars['ID'];
  source?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentPartsFeaturedAppsAppsArgs = {
  filters?: InputMaybe<ComponentPartsAppFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPartsFeaturedAppsInput = {
  apps?: InputMaybe<Array<InputMaybe<ComponentPartsAppInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPartsQuality = {
  __typename?: 'ComponentPartsQuality';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentPartsQualityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPartsQualityFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPartsQualityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPartsQualityFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentPartsQualityInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPartsSkill = {
  __typename?: 'ComponentPartsSkill';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentPartsSkillFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPartsSkillFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPartsSkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPartsSkillFiltersInput>>>;
};

export type ComponentPartsSkillInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentSeoSeoMeta = {
  __typename?: 'ComponentSeoSeoMeta';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ogImage?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeoMetaInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ogImage?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Digitalworkpage = {
  __typename?: 'Digitalworkpage';
  aboutMe?: Maybe<ComponentPartsAboutMe>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featuredApps?: Maybe<ComponentPartsFeaturedApps>;
  laeding?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentSeoSeoMeta>;
  subLeading?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DigitalworkpageEntity = {
  __typename?: 'DigitalworkpageEntity';
  attributes?: Maybe<Digitalworkpage>;
  id?: Maybe<Scalars['ID']>;
};

export type DigitalworkpageEntityResponse = {
  __typename?: 'DigitalworkpageEntityResponse';
  data?: Maybe<DigitalworkpageEntity>;
};

export type DigitalworkpageInput = {
  aboutMe?: InputMaybe<ComponentPartsAboutMeInput>;
  featuredApps?: InputMaybe<ComponentPartsFeaturedAppsInput>;
  laeding?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSeoSeoMetaInput>;
  subLeading?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Freelancingpage = {
  __typename?: 'Freelancingpage';
  createdAt?: Maybe<Scalars['DateTime']>;
  ctaButton?: Maybe<ComponentButtonLink>;
  hero?: Maybe<UploadFileEntityResponse>;
  leading?: Maybe<Scalars['String']>;
  qualities?: Maybe<Array<Maybe<ComponentPartsQuality>>>;
  secondTitle?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentSeoSeoMeta>;
  skills?: Maybe<Array<Maybe<ComponentPartsSkill>>>;
  subLeading?: Maybe<Scalars['String']>;
  thirdTitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FreelancingpageQualitiesArgs = {
  filters?: InputMaybe<ComponentPartsQualityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FreelancingpageSkillsArgs = {
  filters?: InputMaybe<ComponentPartsSkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FreelancingpageEntity = {
  __typename?: 'FreelancingpageEntity';
  attributes?: Maybe<Freelancingpage>;
  id?: Maybe<Scalars['ID']>;
};

export type FreelancingpageEntityResponse = {
  __typename?: 'FreelancingpageEntityResponse';
  data?: Maybe<FreelancingpageEntity>;
};

export type FreelancingpageInput = {
  ctaButton?: InputMaybe<ComponentButtonLinkInput>;
  hero?: InputMaybe<Scalars['ID']>;
  leading?: InputMaybe<Scalars['String']>;
  qualities?: InputMaybe<Array<InputMaybe<ComponentPartsQualityInput>>>;
  secondTitle?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSeoSeoMetaInput>;
  skills?: InputMaybe<Array<InputMaybe<ComponentPartsSkillInput>>>;
  subLeading?: InputMaybe<Scalars['String']>;
  thirdTitle?: InputMaybe<Scalars['String']>;
};

export type GenericMorph = ComponentButtonLink | ComponentPartsAboutMe | ComponentPartsApp | ComponentPartsFeaturedApps | ComponentPartsQuality | ComponentPartsSkill | ComponentSeoSeoMeta | Digitalworkpage | Freelancingpage | Homepage | I18NLocale | Legalpage | Privacypage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']>;
  infoBanner?: Maybe<ComponentButtonLink>;
  leading?: Maybe<Scalars['String']>;
  primaryCta?: Maybe<ComponentButtonLink>;
  secondaryCta?: Maybe<ComponentButtonLink>;
  seo?: Maybe<ComponentSeoSeoMeta>;
  subLeading?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  infoBanner?: InputMaybe<ComponentButtonLinkInput>;
  leading?: InputMaybe<Scalars['String']>;
  primaryCta?: InputMaybe<ComponentButtonLinkInput>;
  secondaryCta?: InputMaybe<ComponentButtonLinkInput>;
  seo?: InputMaybe<ComponentSeoSeoMetaInput>;
  subLeading?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Legalpage = {
  __typename?: 'Legalpage';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSeoSeoMeta>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LegalpageEntity = {
  __typename?: 'LegalpageEntity';
  attributes?: Maybe<Legalpage>;
  id?: Maybe<Scalars['ID']>;
};

export type LegalpageEntityResponse = {
  __typename?: 'LegalpageEntityResponse';
  data?: Maybe<LegalpageEntity>;
};

export type LegalpageInput = {
  content?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSeoSeoMetaInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteDigitalworkpage?: Maybe<DigitalworkpageEntityResponse>;
  deleteFreelancingpage?: Maybe<FreelancingpageEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteLegalpage?: Maybe<LegalpageEntityResponse>;
  deletePrivacypage?: Maybe<PrivacypageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateDigitalworkpage?: Maybe<DigitalworkpageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFreelancingpage?: Maybe<FreelancingpageEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateLegalpage?: Maybe<LegalpageEntityResponse>;
  updatePrivacypage?: Maybe<PrivacypageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateDigitalworkpageArgs = {
  data: DigitalworkpageInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFreelancingpageArgs = {
  data: FreelancingpageInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateLegalpageArgs = {
  data: LegalpageInput;
};


export type MutationUpdatePrivacypageArgs = {
  data: PrivacypageInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Privacypage = {
  __typename?: 'Privacypage';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSeoSeoMeta>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrivacypageEntity = {
  __typename?: 'PrivacypageEntity';
  attributes?: Maybe<Privacypage>;
  id?: Maybe<Scalars['ID']>;
};

export type PrivacypageEntityResponse = {
  __typename?: 'PrivacypageEntityResponse';
  data?: Maybe<PrivacypageEntity>;
};

export type PrivacypageInput = {
  content?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSeoSeoMetaInput>;
};

export type Query = {
  __typename?: 'Query';
  digitalworkpage?: Maybe<DigitalworkpageEntityResponse>;
  freelancingpage?: Maybe<FreelancingpageEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  legalpage?: Maybe<LegalpageEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  privacypage?: Maybe<PrivacypageEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', leading?: string | null | undefined, subLeading?: string | null | undefined, seo?: { __typename?: 'ComponentSeoSeoMeta', title?: string | null | undefined } | null | undefined, primaryCta?: { __typename?: 'ComponentButtonLink', label?: string | null | undefined, link?: string | null | undefined } | null | undefined, secondaryCta?: { __typename?: 'ComponentButtonLink', label?: string | null | undefined, link?: string | null | undefined } | null | undefined, infoBanner?: { __typename?: 'ComponentButtonLink', link?: string | null | undefined, label?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type LegalpageQueryVariables = Exact<{ [key: string]: never; }>;


export type LegalpageQuery = { __typename?: 'Query', legalpage?: { __typename?: 'LegalpageEntityResponse', data?: { __typename?: 'LegalpageEntity', attributes?: { __typename?: 'Legalpage', content?: string | null | undefined, seo?: { __typename?: 'ComponentSeoSeoMeta', title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type PrivacypageQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacypageQuery = { __typename?: 'Query', privacypage?: { __typename?: 'PrivacypageEntityResponse', data?: { __typename?: 'PrivacypageEntity', attributes?: { __typename?: 'Privacypage', content?: string | null | undefined, seo?: { __typename?: 'ComponentSeoSeoMeta', title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DigitalworkpageQueryVariables = Exact<{ [key: string]: never; }>;


export type DigitalworkpageQuery = { __typename?: 'Query', digitalworkpage?: { __typename?: 'DigitalworkpageEntityResponse', data?: { __typename?: 'DigitalworkpageEntity', attributes?: { __typename?: 'Digitalworkpage', laeding?: string | null | undefined, subLeading?: string | null | undefined, seo?: { __typename?: 'ComponentSeoSeoMeta', title?: string | null | undefined } | null | undefined, aboutMe?: { __typename?: 'ComponentPartsAboutMe', title?: string | null | undefined, biography?: string | null | undefined, me?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null | undefined, width?: number | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined, certificat?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null | undefined, width?: number | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined, featuredApps?: { __typename?: 'ComponentPartsFeaturedApps', title?: string | null | undefined, subTitle?: string | null | undefined, source?: string | null | undefined, apps?: Array<{ __typename?: 'ComponentPartsApp', id: string, name?: string | null | undefined, description?: string | null | undefined, author?: string | null | undefined, appstoreUrl?: string | null | undefined, appIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null | undefined, width?: number | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type FreelancingpageQueryVariables = Exact<{ [key: string]: never; }>;


export type FreelancingpageQuery = { __typename?: 'Query', freelancingpage?: { __typename?: 'FreelancingpageEntityResponse', data?: { __typename?: 'FreelancingpageEntity', attributes?: { __typename?: 'Freelancingpage', leading?: string | null | undefined, subLeading?: string | null | undefined, secondTitle?: string | null | undefined, thirdTitle?: string | null | undefined, seo?: { __typename?: 'ComponentSeoSeoMeta', title?: string | null | undefined } | null | undefined, hero?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null | undefined, width?: number | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined, ctaButton?: { __typename?: 'ComponentButtonLink', link?: string | null | undefined, label?: string | null | undefined } | null | undefined, skills?: Array<{ __typename?: 'ComponentPartsSkill', id: string, name?: string | null | undefined, description?: string | null | undefined, icon?: string | null | undefined } | null | undefined> | null | undefined, qualities?: Array<{ __typename?: 'ComponentPartsQuality', title?: string | null | undefined, description?: string | null | undefined, id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null | undefined, width?: number | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined } | null | undefined };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilterInput: BooleanFilterInput;
  ComponentButtonLink: ResolverTypeWrapper<ComponentButtonLink>;
  ComponentButtonLinkInput: ComponentButtonLinkInput;
  ComponentPartsAboutMe: ResolverTypeWrapper<ComponentPartsAboutMe>;
  ComponentPartsAboutMeInput: ComponentPartsAboutMeInput;
  ComponentPartsApp: ResolverTypeWrapper<ComponentPartsApp>;
  ComponentPartsAppFiltersInput: ComponentPartsAppFiltersInput;
  ComponentPartsAppInput: ComponentPartsAppInput;
  ComponentPartsFeaturedApps: ResolverTypeWrapper<ComponentPartsFeaturedApps>;
  ComponentPartsFeaturedAppsInput: ComponentPartsFeaturedAppsInput;
  ComponentPartsQuality: ResolverTypeWrapper<ComponentPartsQuality>;
  ComponentPartsQualityFiltersInput: ComponentPartsQualityFiltersInput;
  ComponentPartsQualityInput: ComponentPartsQualityInput;
  ComponentPartsSkill: ResolverTypeWrapper<ComponentPartsSkill>;
  ComponentPartsSkillFiltersInput: ComponentPartsSkillFiltersInput;
  ComponentPartsSkillInput: ComponentPartsSkillInput;
  ComponentSeoSeoMeta: ResolverTypeWrapper<ComponentSeoSeoMeta>;
  ComponentSeoSeoMetaInput: ComponentSeoSeoMetaInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFilterInput: DateTimeFilterInput;
  Digitalworkpage: ResolverTypeWrapper<Digitalworkpage>;
  DigitalworkpageEntity: ResolverTypeWrapper<DigitalworkpageEntity>;
  DigitalworkpageEntityResponse: ResolverTypeWrapper<DigitalworkpageEntityResponse>;
  DigitalworkpageInput: DigitalworkpageInput;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilterInput: FloatFilterInput;
  Freelancingpage: ResolverTypeWrapper<Freelancingpage>;
  FreelancingpageEntity: ResolverTypeWrapper<FreelancingpageEntity>;
  FreelancingpageEntityResponse: ResolverTypeWrapper<FreelancingpageEntityResponse>;
  FreelancingpageInput: FreelancingpageInput;
  GenericMorph: ResolversTypes['ComponentButtonLink'] | ResolversTypes['ComponentPartsAboutMe'] | ResolversTypes['ComponentPartsApp'] | ResolversTypes['ComponentPartsFeaturedApps'] | ResolversTypes['ComponentPartsQuality'] | ResolversTypes['ComponentPartsSkill'] | ResolversTypes['ComponentSeoSeoMeta'] | ResolversTypes['Digitalworkpage'] | ResolversTypes['Freelancingpage'] | ResolversTypes['Homepage'] | ResolversTypes['I18NLocale'] | ResolversTypes['Legalpage'] | ResolversTypes['Privacypage'] | ResolversTypes['UploadFile'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsUser'];
  Homepage: ResolverTypeWrapper<Homepage>;
  HomepageEntity: ResolverTypeWrapper<HomepageEntity>;
  HomepageEntityResponse: ResolverTypeWrapper<HomepageEntityResponse>;
  HomepageInput: HomepageInput;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
  I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONFilterInput: JsonFilterInput;
  Legalpage: ResolverTypeWrapper<Legalpage>;
  LegalpageEntity: ResolverTypeWrapper<LegalpageEntity>;
  LegalpageEntityResponse: ResolverTypeWrapper<LegalpageEntityResponse>;
  LegalpageInput: LegalpageInput;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  Privacypage: ResolverTypeWrapper<Privacypage>;
  PrivacypageEntity: ResolverTypeWrapper<PrivacypageEntity>;
  PrivacypageEntityResponse: ResolverTypeWrapper<PrivacypageEntityResponse>;
  PrivacypageInput: PrivacypageInput;
  Query: ResolverTypeWrapper<{}>;
  ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilterInput: StringFilterInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
  UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
  UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  BooleanFilterInput: BooleanFilterInput;
  ComponentButtonLink: ComponentButtonLink;
  ComponentButtonLinkInput: ComponentButtonLinkInput;
  ComponentPartsAboutMe: ComponentPartsAboutMe;
  ComponentPartsAboutMeInput: ComponentPartsAboutMeInput;
  ComponentPartsApp: ComponentPartsApp;
  ComponentPartsAppFiltersInput: ComponentPartsAppFiltersInput;
  ComponentPartsAppInput: ComponentPartsAppInput;
  ComponentPartsFeaturedApps: ComponentPartsFeaturedApps;
  ComponentPartsFeaturedAppsInput: ComponentPartsFeaturedAppsInput;
  ComponentPartsQuality: ComponentPartsQuality;
  ComponentPartsQualityFiltersInput: ComponentPartsQualityFiltersInput;
  ComponentPartsQualityInput: ComponentPartsQualityInput;
  ComponentPartsSkill: ComponentPartsSkill;
  ComponentPartsSkillFiltersInput: ComponentPartsSkillFiltersInput;
  ComponentPartsSkillInput: ComponentPartsSkillInput;
  ComponentSeoSeoMeta: ComponentSeoSeoMeta;
  ComponentSeoSeoMetaInput: ComponentSeoSeoMetaInput;
  DateTime: Scalars['DateTime'];
  DateTimeFilterInput: DateTimeFilterInput;
  Digitalworkpage: Digitalworkpage;
  DigitalworkpageEntity: DigitalworkpageEntity;
  DigitalworkpageEntityResponse: DigitalworkpageEntityResponse;
  DigitalworkpageInput: DigitalworkpageInput;
  FileInfoInput: FileInfoInput;
  Float: Scalars['Float'];
  FloatFilterInput: FloatFilterInput;
  Freelancingpage: Freelancingpage;
  FreelancingpageEntity: FreelancingpageEntity;
  FreelancingpageEntityResponse: FreelancingpageEntityResponse;
  FreelancingpageInput: FreelancingpageInput;
  GenericMorph: ResolversParentTypes['ComponentButtonLink'] | ResolversParentTypes['ComponentPartsAboutMe'] | ResolversParentTypes['ComponentPartsApp'] | ResolversParentTypes['ComponentPartsFeaturedApps'] | ResolversParentTypes['ComponentPartsQuality'] | ResolversParentTypes['ComponentPartsSkill'] | ResolversParentTypes['ComponentSeoSeoMeta'] | ResolversParentTypes['Digitalworkpage'] | ResolversParentTypes['Freelancingpage'] | ResolversParentTypes['Homepage'] | ResolversParentTypes['I18NLocale'] | ResolversParentTypes['Legalpage'] | ResolversParentTypes['Privacypage'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsUser'];
  Homepage: Homepage;
  HomepageEntity: HomepageEntity;
  HomepageEntityResponse: HomepageEntityResponse;
  HomepageInput: HomepageInput;
  I18NLocale: I18NLocale;
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars['ID'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int'];
  IntFilterInput: IntFilterInput;
  JSON: Scalars['JSON'];
  JSONFilterInput: JsonFilterInput;
  Legalpage: Legalpage;
  LegalpageEntity: LegalpageEntity;
  LegalpageEntityResponse: LegalpageEntityResponse;
  LegalpageInput: LegalpageInput;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Privacypage: Privacypage;
  PrivacypageEntity: PrivacypageEntity;
  PrivacypageEntityResponse: PrivacypageEntityResponse;
  PrivacypageInput: PrivacypageInput;
  Query: {};
  ResponseCollectionMeta: ResponseCollectionMeta;
  String: Scalars['String'];
  StringFilterInput: StringFilterInput;
  Upload: Scalars['Upload'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
};

export type ComponentButtonLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentButtonLink'] = ResolversParentTypes['ComponentButtonLink']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPartsAboutMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPartsAboutMe'] = ResolversParentTypes['ComponentPartsAboutMe']> = {
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  certificat?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPartsAppResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPartsApp'] = ResolversParentTypes['ComponentPartsApp']> = {
  appIcon?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  appstoreUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPartsFeaturedAppsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPartsFeaturedApps'] = ResolversParentTypes['ComponentPartsFeaturedApps']> = {
  apps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentPartsApp']>>>, ParentType, ContextType, RequireFields<ComponentPartsFeaturedAppsAppsArgs, 'pagination' | 'sort'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPartsQualityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPartsQuality'] = ResolversParentTypes['ComponentPartsQuality']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPartsSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentPartsSkill'] = ResolversParentTypes['ComponentPartsSkill']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoSeoMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoSeoMeta'] = ResolversParentTypes['ComponentSeoSeoMeta']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ogImage?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DigitalworkpageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Digitalworkpage'] = ResolversParentTypes['Digitalworkpage']> = {
  aboutMe?: Resolver<Maybe<ResolversTypes['ComponentPartsAboutMe']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  featuredApps?: Resolver<Maybe<ResolversTypes['ComponentPartsFeaturedApps']>, ParentType, ContextType>;
  laeding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeoSeoMeta']>, ParentType, ContextType>;
  subLeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DigitalworkpageEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['DigitalworkpageEntity'] = ResolversParentTypes['DigitalworkpageEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Digitalworkpage']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DigitalworkpageEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DigitalworkpageEntityResponse'] = ResolversParentTypes['DigitalworkpageEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['DigitalworkpageEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreelancingpageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Freelancingpage'] = ResolversParentTypes['Freelancingpage']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ctaButton?: Resolver<Maybe<ResolversTypes['ComponentButtonLink']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType>;
  leading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qualities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentPartsQuality']>>>, ParentType, ContextType, RequireFields<FreelancingpageQualitiesArgs, 'pagination' | 'sort'>>;
  secondTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeoSeoMeta']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComponentPartsSkill']>>>, ParentType, ContextType, RequireFields<FreelancingpageSkillsArgs, 'pagination' | 'sort'>>;
  subLeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thirdTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreelancingpageEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['FreelancingpageEntity'] = ResolversParentTypes['FreelancingpageEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Freelancingpage']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FreelancingpageEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FreelancingpageEntityResponse'] = ResolversParentTypes['FreelancingpageEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['FreelancingpageEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = {
  __resolveType: TypeResolveFn<'ComponentButtonLink' | 'ComponentPartsAboutMe' | 'ComponentPartsApp' | 'ComponentPartsFeaturedApps' | 'ComponentPartsQuality' | 'ComponentPartsSkill' | 'ComponentSeoSeoMeta' | 'Digitalworkpage' | 'Freelancingpage' | 'Homepage' | 'I18NLocale' | 'Legalpage' | 'Privacypage' | 'UploadFile' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser', ParentType, ContextType>;
};

export type HomepageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Homepage'] = ResolversParentTypes['Homepage']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  infoBanner?: Resolver<Maybe<ResolversTypes['ComponentButtonLink']>, ParentType, ContextType>;
  leading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryCta?: Resolver<Maybe<ResolversTypes['ComponentButtonLink']>, ParentType, ContextType>;
  secondaryCta?: Resolver<Maybe<ResolversTypes['ComponentButtonLink']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeoSeoMeta']>, ParentType, ContextType>;
  subLeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomepageEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomepageEntity'] = ResolversParentTypes['HomepageEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Homepage']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomepageEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomepageEntityResponse'] = ResolversParentTypes['HomepageEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['HomepageEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponse'] = ResolversParentTypes['I18NLocaleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LegalpageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Legalpage'] = ResolversParentTypes['Legalpage']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeoSeoMeta']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegalpageEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegalpageEntity'] = ResolversParentTypes['LegalpageEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Legalpage']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegalpageEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegalpageEntityResponse'] = ResolversParentTypes['LegalpageEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['LegalpageEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  deleteDigitalworkpage?: Resolver<Maybe<ResolversTypes['DigitalworkpageEntityResponse']>, ParentType, ContextType>;
  deleteFreelancingpage?: Resolver<Maybe<ResolversTypes['FreelancingpageEntityResponse']>, ParentType, ContextType>;
  deleteHomepage?: Resolver<Maybe<ResolversTypes['HomepageEntityResponse']>, ParentType, ContextType>;
  deleteLegalpage?: Resolver<Maybe<ResolversTypes['LegalpageEntityResponse']>, ParentType, ContextType>;
  deletePrivacypage?: Resolver<Maybe<ResolversTypes['PrivacypageEntityResponse']>, ParentType, ContextType>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateDigitalworkpage?: Resolver<Maybe<ResolversTypes['DigitalworkpageEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateDigitalworkpageArgs, 'data'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
  updateFreelancingpage?: Resolver<Maybe<ResolversTypes['FreelancingpageEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateFreelancingpageArgs, 'data'>>;
  updateHomepage?: Resolver<Maybe<ResolversTypes['HomepageEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateHomepageArgs, 'data'>>;
  updateLegalpage?: Resolver<Maybe<ResolversTypes['LegalpageEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateLegalpageArgs, 'data'>>;
  updatePrivacypage?: Resolver<Maybe<ResolversTypes['PrivacypageEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdatePrivacypageArgs, 'data'>>;
  updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'data' | 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
  upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivacypageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Privacypage'] = ResolversParentTypes['Privacypage']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeoSeoMeta']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivacypageEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivacypageEntity'] = ResolversParentTypes['PrivacypageEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Privacypage']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivacypageEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivacypageEntityResponse'] = ResolversParentTypes['PrivacypageEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['PrivacypageEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  digitalworkpage?: Resolver<Maybe<ResolversTypes['DigitalworkpageEntityResponse']>, ParentType, ContextType>;
  freelancingpage?: Resolver<Maybe<ResolversTypes['FreelancingpageEntityResponse']>, ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['HomepageEntityResponse']>, ParentType, ContextType>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, RequireFields<QueryI18NLocaleArgs, never>>;
  i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
  legalpage?: Resolver<Maybe<ResolversTypes['LegalpageEntityResponse']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  privacypage?: Resolver<Maybe<ResolversTypes['PrivacypageEntityResponse']>, ParentType, ContextType>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<QueryUploadFileArgs, never>>;
  uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRoleArgs, never>>;
  usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUserArgs, never>>;
  usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
};

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = {
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponse'] = ResolversParentTypes['UploadFileEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponse'] = ResolversParentTypes['UsersPermissionsRoleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ComponentButtonLink?: ComponentButtonLinkResolvers<ContextType>;
  ComponentPartsAboutMe?: ComponentPartsAboutMeResolvers<ContextType>;
  ComponentPartsApp?: ComponentPartsAppResolvers<ContextType>;
  ComponentPartsFeaturedApps?: ComponentPartsFeaturedAppsResolvers<ContextType>;
  ComponentPartsQuality?: ComponentPartsQualityResolvers<ContextType>;
  ComponentPartsSkill?: ComponentPartsSkillResolvers<ContextType>;
  ComponentSeoSeoMeta?: ComponentSeoSeoMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Digitalworkpage?: DigitalworkpageResolvers<ContextType>;
  DigitalworkpageEntity?: DigitalworkpageEntityResolvers<ContextType>;
  DigitalworkpageEntityResponse?: DigitalworkpageEntityResponseResolvers<ContextType>;
  Freelancingpage?: FreelancingpageResolvers<ContextType>;
  FreelancingpageEntity?: FreelancingpageEntityResolvers<ContextType>;
  FreelancingpageEntityResponse?: FreelancingpageEntityResponseResolvers<ContextType>;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  Homepage?: HomepageResolvers<ContextType>;
  HomepageEntity?: HomepageEntityResolvers<ContextType>;
  HomepageEntityResponse?: HomepageEntityResponseResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
  I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Legalpage?: LegalpageResolvers<ContextType>;
  LegalpageEntity?: LegalpageEntityResolvers<ContextType>;
  LegalpageEntityResponse?: LegalpageEntityResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Privacypage?: PrivacypageResolvers<ContextType>;
  PrivacypageEntity?: PrivacypageEntityResolvers<ContextType>;
  PrivacypageEntityResponse?: PrivacypageEntityResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
  UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
  UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
};



export const HomepageDocument = gql`
    query Homepage {
  homepage {
    data {
      attributes {
        leading
        subLeading
        seo {
          title
        }
        primaryCta {
          label
          link
        }
        secondaryCta {
          label
          link
        }
        infoBanner {
          link
          label
        }
      }
    }
  }
}
    `;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const LegalpageDocument = gql`
    query Legalpage {
  legalpage {
    data {
      attributes {
        seo {
          title
        }
        content
      }
    }
  }
}
    `;

/**
 * __useLegalpageQuery__
 *
 * To run a query within a React component, call `useLegalpageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLegalpageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLegalpageQuery({
 *   variables: {
 *   },
 * });
 */
export function useLegalpageQuery(baseOptions?: Apollo.QueryHookOptions<LegalpageQuery, LegalpageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LegalpageQuery, LegalpageQueryVariables>(LegalpageDocument, options);
      }
export function useLegalpageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LegalpageQuery, LegalpageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LegalpageQuery, LegalpageQueryVariables>(LegalpageDocument, options);
        }
export type LegalpageQueryHookResult = ReturnType<typeof useLegalpageQuery>;
export type LegalpageLazyQueryHookResult = ReturnType<typeof useLegalpageLazyQuery>;
export type LegalpageQueryResult = Apollo.QueryResult<LegalpageQuery, LegalpageQueryVariables>;
export const PrivacypageDocument = gql`
    query Privacypage {
  privacypage {
    data {
      attributes {
        seo {
          title
        }
        content
      }
    }
  }
}
    `;

/**
 * __usePrivacypageQuery__
 *
 * To run a query within a React component, call `usePrivacypageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivacypageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivacypageQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrivacypageQuery(baseOptions?: Apollo.QueryHookOptions<PrivacypageQuery, PrivacypageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrivacypageQuery, PrivacypageQueryVariables>(PrivacypageDocument, options);
      }
export function usePrivacypageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrivacypageQuery, PrivacypageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrivacypageQuery, PrivacypageQueryVariables>(PrivacypageDocument, options);
        }
export type PrivacypageQueryHookResult = ReturnType<typeof usePrivacypageQuery>;
export type PrivacypageLazyQueryHookResult = ReturnType<typeof usePrivacypageLazyQuery>;
export type PrivacypageQueryResult = Apollo.QueryResult<PrivacypageQuery, PrivacypageQueryVariables>;
export const DigitalworkpageDocument = gql`
    query Digitalworkpage {
  digitalworkpage {
    data {
      attributes {
        seo {
          title
        }
        laeding
        subLeading
        aboutMe {
          title
          biography
          me {
            data {
              attributes {
                height
                width
                url
              }
            }
          }
          certificat {
            data {
              attributes {
                height
                width
                url
              }
            }
          }
        }
        featuredApps {
          title
          subTitle
          source
          apps {
            id
            name
            description
            author
            appstoreUrl
            appIcon {
              data {
                attributes {
                  height
                  width
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useDigitalworkpageQuery__
 *
 * To run a query within a React component, call `useDigitalworkpageQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigitalworkpageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigitalworkpageQuery({
 *   variables: {
 *   },
 * });
 */
export function useDigitalworkpageQuery(baseOptions?: Apollo.QueryHookOptions<DigitalworkpageQuery, DigitalworkpageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DigitalworkpageQuery, DigitalworkpageQueryVariables>(DigitalworkpageDocument, options);
      }
export function useDigitalworkpageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DigitalworkpageQuery, DigitalworkpageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DigitalworkpageQuery, DigitalworkpageQueryVariables>(DigitalworkpageDocument, options);
        }
export type DigitalworkpageQueryHookResult = ReturnType<typeof useDigitalworkpageQuery>;
export type DigitalworkpageLazyQueryHookResult = ReturnType<typeof useDigitalworkpageLazyQuery>;
export type DigitalworkpageQueryResult = Apollo.QueryResult<DigitalworkpageQuery, DigitalworkpageQueryVariables>;
export const FreelancingpageDocument = gql`
    query Freelancingpage {
  freelancingpage {
    data {
      attributes {
        leading
        subLeading
        seo {
          title
        }
        hero {
          data {
            attributes {
              height
              width
              url
            }
          }
        }
        ctaButton {
          link
          label
        }
        secondTitle
        skills {
          id
          name
          description
          icon
        }
        thirdTitle
        qualities {
          title
          description
          id
          image {
            data {
              attributes {
                height
                width
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFreelancingpageQuery__
 *
 * To run a query within a React component, call `useFreelancingpageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFreelancingpageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFreelancingpageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFreelancingpageQuery(baseOptions?: Apollo.QueryHookOptions<FreelancingpageQuery, FreelancingpageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FreelancingpageQuery, FreelancingpageQueryVariables>(FreelancingpageDocument, options);
      }
export function useFreelancingpageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FreelancingpageQuery, FreelancingpageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FreelancingpageQuery, FreelancingpageQueryVariables>(FreelancingpageDocument, options);
        }
export type FreelancingpageQueryHookResult = ReturnType<typeof useFreelancingpageQuery>;
export type FreelancingpageLazyQueryHookResult = ReturnType<typeof useFreelancingpageLazyQuery>;
export type FreelancingpageQueryResult = Apollo.QueryResult<FreelancingpageQuery, FreelancingpageQueryVariables>;