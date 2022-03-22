/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ValidateUserCredantialsInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ValidateUserCredantials
// ====================================================

export interface ValidateUserCredantials_validateUserCredantials {
  __typename: "UserCredantialsValidated";
  valid: boolean;
}

export interface ValidateUserCredantials {
  validateUserCredantials: ValidateUserCredantials_validateUserCredantials;
}

export interface ValidateUserCredantialsVariables {
  input: ValidateUserCredantialsInput;
}
