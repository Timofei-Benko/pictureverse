import { gql } from '../__generated__/gql';

export const UPLOAD_PICTURE = gql(`
    mutation UploadPicture($input: UploadPictureInput!) {
        uploadPicture(input: $input) {
            id
        }
    }
`);
