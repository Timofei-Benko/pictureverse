/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ValidateUserCredantialsInput } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: ValidateUserCredantials
// ====================================================

export interface ValidateUserCredantials_validateUserCredantials_InvalidCredentialsError {
  __typename: "InvalidCredentialsError";
  message: string | null;
}

export interface ValidateUserCredantials_validateUserCredantials_User {
  __typename: "User";
  id: string | null;
  email: string | null;
  name: string | null;
}

export type ValidateUserCredantials_validateUserCredantials = ValidateUserCredantials_validateUserCredantials_InvalidCredentialsError | ValidateUserCredantials_validateUserCredantials_User;

export interface ValidateUserCredantials {
  validateUserCredantials: ValidateUserCredantials_validateUserCredantials;
}

export interface ValidateUserCredantialsVariables {
  input: ValidateUserCredantialsInput;
}
