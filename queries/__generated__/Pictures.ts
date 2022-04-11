/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pictures
// ====================================================

export interface Pictures_pictures_likedBy {
  __typename: "User";
  id: string | null;
}

export interface Pictures_pictures_comments_author {
  __typename: "User";
  name: string | null;
}

export interface Pictures_pictures_comments {
  __typename: "Comment";
  text: string;
  author: Pictures_pictures_comments_author;
}

export interface Pictures_pictures {
  __typename: "Picture";
  id: string;
  base64: string | null;
  description: string | null;
  likesCount: number | null;
  likedBy: (Pictures_pictures_likedBy | null)[] | null;
  comments: (Pictures_pictures_comments | null)[] | null;
  uploadDate: string | null;
}

export interface Pictures {
  pictures: Pictures_pictures[];
}
