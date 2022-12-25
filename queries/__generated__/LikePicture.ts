/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LikePictureInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: LikePicture
// ====================================================

export interface LikePicture_likePicture {
  __typename: "Picture";
  id: string;
}

export interface LikePicture {
  likePicture: LikePicture_likePicture;
}

export interface LikePictureVariables {
  input: LikePictureInput;
}
