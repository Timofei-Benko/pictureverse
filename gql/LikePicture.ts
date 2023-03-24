import { gql } from '../__generated__/gql';

export const LIKE_PICTURE = gql(`
    mutation LikePicture($input: LikePictureInput!) {
        likePicture(input: $input) {
            id
        }
    }
`);
