/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser_EmailRegisteredError {
  __typename: "EmailRegisteredError";
}

export interface CreateUser_createUser_User {
  __typename: "User";
  name: string | null;
  email: string | null;
}

export type CreateUser_createUser = CreateUser_createUser_EmailRegisteredError | CreateUser_createUser_User;

export interface CreateUser {
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  input: CreateUserInput;
}
