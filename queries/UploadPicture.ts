import { gql } from '@apollo/client';

export const UPLOAD_PICTURE = gql`
    mutation UploadPicture($input: UploadPictureInput!) {
        uploadPicture(input: $input) {
            id
        }
    }
`;

