import { gql } from '../__generated__/gql';

export const VALIDATE_USER_CREDENTIALS = gql(`
    mutation ValidateUserCredantials($input: ValidateUserCredantialsInput!) {
        validateUserCredantials(input: $input) {
            ... on InvalidCredentialsError {
                message
            }
            ... on User {
                id
                email
                name
            }
        }
    }
`);
