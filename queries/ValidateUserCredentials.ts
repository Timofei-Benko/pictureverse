import { gql } from '@apollo/client';

export const VALIDATE_USER_CREDENTIALS = gql`
    mutation ValidateUserCredantials($input: ValidateUserCredantialsInput!) {
        validateUserCredantials(input: $input) {
            valid
        }
    }
`;
