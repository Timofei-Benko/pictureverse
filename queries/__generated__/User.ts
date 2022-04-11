/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user {
  __typename: "User";
  name: string | null;
  email: string | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  userId: string;
}
