/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UploadPictureInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UploadPicture
// ====================================================

export interface UploadPicture_uploadPicture {
  __typename: "Picture";
  id: string;
}

export interface UploadPicture {
  uploadPicture: UploadPicture_uploadPicture;
}

export interface UploadPictureVariables {
  input: UploadPictureInput;
}
