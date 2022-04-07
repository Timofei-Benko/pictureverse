/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser_User {
  __typename: "User";
  email: string | null;
  name: string | null;
}

export interface CreateUser_createUser_EmailRegisteredError {
  __typename: "EmailRegisteredError";
  message: string | null;
}

export type CreateUser_createUser = CreateUser_createUser_User | CreateUser_createUser_EmailRegisteredError;

export interface CreateUser {
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  input: CreateUserInput;
}
