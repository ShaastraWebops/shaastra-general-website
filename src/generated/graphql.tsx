import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddEventInput = {
  description: Scalars['String'];
  eventTimeFrom: Scalars['String'];
  eventTimeTo: Scalars['String'];
  finalistst?: InputMaybe<Scalars['String']>;
  firstplace?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  participation?: InputMaybe<Scalars['String']>;
  pic: Scalars['String'];
  platform: Scalars['String'];
  registrationCloseTime?: InputMaybe<Scalars['String']>;
  registrationOpenTime?: InputMaybe<Scalars['String']>;
  registrationType: RegistraionType;
  registrationfee?: InputMaybe<Scalars['String']>;
  requirements: Scalars['String'];
  secondplace?: InputMaybe<Scalars['String']>;
  teamSize?: InputMaybe<Scalars['Float']>;
  thirdplace?: InputMaybe<Scalars['String']>;
  vertical: Scalars['String'];
};

export type CreateEventFaqInput = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type CreateTeamInput = {
  eventID: Scalars['String'];
  members?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  state: Scalars['String'];
};

export type EditEventFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type EditEventInput = {
  description: Scalars['String'];
  eventTimeFrom: Scalars['String'];
  eventTimeTo: Scalars['String'];
  finalistst?: InputMaybe<Scalars['String']>;
  firstplace?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  participation?: InputMaybe<Scalars['String']>;
  pic: Scalars['String'];
  platform: Scalars['String'];
  registrationCloseTime?: InputMaybe<Scalars['String']>;
  registrationOpenTime?: InputMaybe<Scalars['String']>;
  registrationType: RegistraionType;
  requirements: Scalars['String'];
  secondplace?: InputMaybe<Scalars['String']>;
  teamSize?: InputMaybe<Scalars['Float']>;
  thirdplace?: InputMaybe<Scalars['String']>;
  vertical: Scalars['String'];
};

export type EditProfileInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type Event = {
  description: Scalars['String'];
  eventTimeFrom: Scalars['String'];
  eventTimeTo: Scalars['String'];
  faqs: Array<EventFaq>;
  finalistst?: Maybe<Scalars['String']>;
  firstplace?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRegistered: Scalars['Boolean'];
  name: Scalars['String'];
  participation?: Maybe<Scalars['String']>;
  pic?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  registeredTeam: Array<Team>;
  registeredTeamCount: Scalars['Float'];
  registeredUser: Array<User>;
  registeredUserCount: Scalars['Float'];
  registrationCloseTime?: Maybe<Scalars['String']>;
  registrationOpenTime?: Maybe<Scalars['String']>;
  registrationType: RegistraionType;
  registrationfee?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  secondplace?: Maybe<Scalars['String']>;
  teamSize: Scalars['Float'];
  thirdplace?: Maybe<Scalars['String']>;
  vertical: Scalars['String'];
  yourTeam?: Maybe<Team>;
};

export type EventFaq = {
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type GetEventsOutput = {
  count: Scalars['Float'];
  events: Array<Event>;
};

export type GetUsersFilter = {
  city?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  school?: InputMaybe<Scalars['String']>;
};

export type GetUsersOutput = {
  count: Scalars['Float'];
  users: Array<User>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  addEvent: Scalars['Boolean'];
  createEventFAQ: Scalars['Boolean'];
  createTeamAndRegister: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  deleteEventFAQ: Scalars['Boolean'];
  editEvent: Scalars['Boolean'];
  editEventFAQ: Scalars['Boolean'];
  editProfile?: Maybe<Scalars['Boolean']>;
  getPasswordOTP: Scalars['Boolean'];
  leaveTeam: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  register: Scalars['Boolean'];
  resendVerificationMail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  verifyUser: Scalars['Boolean'];
};


export type MutationAddEventArgs = {
  data: AddEventInput;
};


export type MutationCreateEventFaqArgs = {
  EventID: Scalars['String'];
  data: CreateEventFaqInput;
};


export type MutationCreateTeamAndRegisterArgs = {
  data: CreateTeamInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEventFaqArgs = {
  EventFAQID: Scalars['String'];
};


export type MutationEditEventArgs = {
  data: EditEventInput;
  eventID: Scalars['String'];
};


export type MutationEditEventFaqArgs = {
  EventFAQID: Scalars['String'];
  data: EditEventFaqInput;
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationGetPasswordOtpArgs = {
  email: Scalars['String'];
};


export type MutationLeaveTeamArgs = {
  data: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  EventID: Scalars['String'];
};


export type MutationResendVerificationMailArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationVerifyUserArgs = {
  otp: Scalars['String'];
};

export type Query = {
  getEvent: Event;
  getEvents: GetEventsOutput;
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  me?: Maybe<User>;
};


export type QueryGetEventArgs = {
  EventID: Scalars['String'];
};


export type QueryGetEventsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetUsersArgs = {
  filter?: InputMaybe<GetUsersFilter>;
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};

export enum RegistraionType {
  Individual = 'INDIVIDUAL',
  None = 'NONE',
  Team = 'TEAM'
}

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  otp: Scalars['String'];
};

export type Team = {
  event: Event;
  id: Scalars['ID'];
  members: Array<User>;
  name: Scalars['String'];
};

export type User = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  passwordOTP?: Maybe<Scalars['String']>;
  registeredEvents: Array<Event>;
  role: UserRole;
  shaastraID: Scalars['String'];
  state: Scalars['String'];
  verificationOTP: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type CreateUserMutationVariables = Exact<{
  CreateUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type VerifyUserMutationVariables = Exact<{
  otp: Scalars['String'];
}>;


export type VerifyUserMutation = { verifyUser: boolean };

export type LoginMutationVariables = Exact<{
  LoginInput: LoginInput;
}>;


export type LoginMutation = { login?: { id: string, role: UserRole, isVerified: boolean } | null | undefined };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type ResendVerificationMailMutationVariables = Exact<{
  requestForgotPassInput: RequestForgotPassInput;
}>;


export type ResendVerificationMailMutation = { resendVerificationMail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type RegisterMutationVariables = Exact<{
  EventID: Scalars['String'];
}>;


export type RegisterMutation = { register: boolean };

export type CreateTeamandRegisterMutationVariables = Exact<{
  createTeamAndRegisterData: CreateTeamInput;
}>;


export type CreateTeamandRegisterMutation = { createTeamAndRegister: boolean };

export type GetPasswordOtpMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetPasswordOtpMutation = { getPasswordOTP: boolean };

export type AddEventMutationVariables = Exact<{
  data: AddEventInput;
}>;


export type AddEventMutation = { addEvent: boolean };

export type EditEventMutationVariables = Exact<{
  data: EditEventInput;
  id: Scalars['String'];
}>;


export type EditEventMutation = { editEvent: boolean };

export type EditProfileMutationVariables = Exact<{
  data: EditProfileInput;
}>;


export type EditProfileMutation = { editProfile?: boolean | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, name: string, shaastraID: string, email: string, mobile: string, college: string, department: string, address: string, city: string, state: string, registeredEvents: Array<{ id: string, name: string, pic?: string | null | undefined, eventTimeFrom: string, eventTimeTo: string, registrationType: RegistraionType, yourTeam?: { name: string, members: Array<{ name: string, email: string }> } | null | undefined }> } | null | undefined };

export type GetEventsQueryVariables = Exact<{
  filter: Scalars['String'];
}>;


export type GetEventsQuery = { getEvents: { events: Array<{ id: string, name: string, pic?: string | null | undefined, vertical: string, description: string, requirements?: string | null | undefined, platform?: string | null | undefined, firstplace?: string | null | undefined, secondplace?: string | null | undefined, thirdplace?: string | null | undefined, participation?: string | null | undefined, registrationOpenTime?: string | null | undefined, registrationCloseTime?: string | null | undefined, eventTimeFrom: string, eventTimeTo: string, registrationType: RegistraionType, teamSize: number }> } };

export type GetEventQueryVariables = Exact<{
  EventID: Scalars['String'];
}>;


export type GetEventQuery = { getEvent: { id: string, name: string, vertical: string, description: string, requirements?: string | null | undefined, pic?: string | null | undefined, platform?: string | null | undefined, firstplace?: string | null | undefined, secondplace?: string | null | undefined, thirdplace?: string | null | undefined, participation?: string | null | undefined, registrationOpenTime?: string | null | undefined, registrationCloseTime?: string | null | undefined, eventTimeFrom: string, eventTimeTo: string, registrationType: RegistraionType, teamSize: number } };


export const CreateUserDocument = gql`
    mutation createUser($CreateUserInput: CreateUserInput!) {
  createUser(data: $CreateUserInput)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      CreateUserInput: // value for 'CreateUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($otp: String!) {
  verifyUser(otp: $otp)
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($LoginInput: LoginInput!) {
  login(data: $LoginInput) {
    id
    role
    isVerified
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      LoginInput: // value for 'LoginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutUserDocument = gql`
    mutation logoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const ResendVerificationMailDocument = gql`
    mutation resendVerificationMail($requestForgotPassInput: RequestForgotPassInput!) {
  resendVerificationMail(data: $requestForgotPassInput)
}
    `;
export type ResendVerificationMailMutationFn = ApolloReactCommon.MutationFunction<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;

/**
 * __useResendVerificationMailMutation__
 *
 * To run a mutation, you first call `useResendVerificationMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationMailMutation, { data, loading, error }] = useResendVerificationMailMutation({
 *   variables: {
 *      requestForgotPassInput: // value for 'requestForgotPassInput'
 *   },
 * });
 */
export function useResendVerificationMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>(ResendVerificationMailDocument, options);
      }
export type ResendVerificationMailMutationHookResult = ReturnType<typeof useResendVerificationMailMutation>;
export type ResendVerificationMailMutationResult = ApolloReactCommon.MutationResult<ResendVerificationMailMutation>;
export type ResendVerificationMailMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(data: $resetPasswordInput)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation register($EventID: String!) {
  register(EventID: $EventID)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      EventID: // value for 'EventID'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateTeamandRegisterDocument = gql`
    mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!) {
  createTeamAndRegister(data: $createTeamAndRegisterData)
}
    `;
export type CreateTeamandRegisterMutationFn = ApolloReactCommon.MutationFunction<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;

/**
 * __useCreateTeamandRegisterMutation__
 *
 * To run a mutation, you first call `useCreateTeamandRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamandRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamandRegisterMutation, { data, loading, error }] = useCreateTeamandRegisterMutation({
 *   variables: {
 *      createTeamAndRegisterData: // value for 'createTeamAndRegisterData'
 *   },
 * });
 */
export function useCreateTeamandRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>(CreateTeamandRegisterDocument, options);
      }
export type CreateTeamandRegisterMutationHookResult = ReturnType<typeof useCreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationResult = ApolloReactCommon.MutationResult<CreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;
export const GetPasswordOtpDocument = gql`
    mutation getPasswordOTP($email: String!) {
  getPasswordOTP(email: $email)
}
    `;
export type GetPasswordOtpMutationFn = ApolloReactCommon.MutationFunction<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;

/**
 * __useGetPasswordOtpMutation__
 *
 * To run a mutation, you first call `useGetPasswordOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPasswordOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPasswordOtpMutation, { data, loading, error }] = useGetPasswordOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetPasswordOtpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>(GetPasswordOtpDocument, options);
      }
export type GetPasswordOtpMutationHookResult = ReturnType<typeof useGetPasswordOtpMutation>;
export type GetPasswordOtpMutationResult = ApolloReactCommon.MutationResult<GetPasswordOtpMutation>;
export type GetPasswordOtpMutationOptions = ApolloReactCommon.BaseMutationOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;
export const AddEventDocument = gql`
    mutation addEvent($data: AddEventInput!) {
  addEvent(data: $data)
}
    `;
export type AddEventMutationFn = ApolloReactCommon.MutationFunction<AddEventMutation, AddEventMutationVariables>;

/**
 * __useAddEventMutation__
 *
 * To run a mutation, you first call `useAddEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventMutation, { data, loading, error }] = useAddEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddEventMutation, AddEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AddEventMutation, AddEventMutationVariables>(AddEventDocument, options);
      }
export type AddEventMutationHookResult = ReturnType<typeof useAddEventMutation>;
export type AddEventMutationResult = ApolloReactCommon.MutationResult<AddEventMutation>;
export type AddEventMutationOptions = ApolloReactCommon.BaseMutationOptions<AddEventMutation, AddEventMutationVariables>;
export const EditEventDocument = gql`
    mutation editEvent($data: EditEventInput!, $id: String!) {
  editEvent(data: $data, eventID: $id)
}
    `;
export type EditEventMutationFn = ApolloReactCommon.MutationFunction<EditEventMutation, EditEventMutationVariables>;

/**
 * __useEditEventMutation__
 *
 * To run a mutation, you first call `useEditEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventMutation, { data, loading, error }] = useEditEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditEventMutation, EditEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditEventMutation, EditEventMutationVariables>(EditEventDocument, options);
      }
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>;
export type EditEventMutationResult = ApolloReactCommon.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = ApolloReactCommon.BaseMutationOptions<EditEventMutation, EditEventMutationVariables>;
export const EditProfileDocument = gql`
    mutation editProfile($data: EditProfileInput!) {
  editProfile(data: $data)
}
    `;
export type EditProfileMutationFn = ApolloReactCommon.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = ApolloReactCommon.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    shaastraID
    email
    mobile
    college
    department
    address
    city
    state
    registeredEvents {
      id
      name
      pic
      eventTimeFrom
      eventTimeTo
      registrationType
      yourTeam {
        name
        members {
          name
          email
        }
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const GetEventsDocument = gql`
    query getEvents($filter: String!) {
  getEvents(filter: $filter) {
    events {
      id
      name
      pic
      vertical
      description
      requirements
      platform
      firstplace
      secondplace
      thirdplace
      participation
      registrationOpenTime
      registrationCloseTime
      eventTimeFrom
      eventTimeTo
      registrationType
      teamSize
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = ApolloReactCommon.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export function refetchGetEventsQuery(variables: GetEventsQueryVariables) {
      return { query: GetEventsDocument, variables: variables }
    }
export const GetEventDocument = gql`
    query getEvent($EventID: String!) {
  getEvent(EventID: $EventID) {
    id
    name
    vertical
    description
    requirements
    pic
    platform
    firstplace
    secondplace
    thirdplace
    participation
    registrationOpenTime
    registrationCloseTime
    eventTimeFrom
    eventTimeTo
    registrationType
    teamSize
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      EventID: // value for 'EventID'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = ApolloReactCommon.QueryResult<GetEventQuery, GetEventQueryVariables>;
export function refetchGetEventQuery(variables: GetEventQueryVariables) {
      return { query: GetEventDocument, variables: variables }
    }