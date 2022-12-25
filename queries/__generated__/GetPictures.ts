/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPictures
// ====================================================

export interface GetPictures_pictures_likedBy {
  __typename: "User";
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface GetPictures_pictures_comments_author {
  __typename: "User";
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface GetPictures_pictures_comments {
  __typename: "Comment";
  id: string;
  text: string;
  author: GetPictures_pictures_comments_author;
}

export interface GetPictures_pictures {
  __typename: "Picture";
  id: string;
  base64: string | null;
  description: string | null;
  likesCount: number | null;
  likedBy: (GetPictures_pictures_likedBy | null)[] | null;
  comments: (GetPictures_pictures_comments | null)[] | null;
  uploadDate: string | null;
}

export interface GetPictures {
  pictures: GetPictures_pictures[];
}
