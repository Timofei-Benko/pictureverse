import { gql } from '@apollo/client';

export const LIKE_PICTURE = gql`
    mutation LikePicture($input: LikePictureInput!) {
        likePicture(input: $input) {
            id
        }
    }
`;
