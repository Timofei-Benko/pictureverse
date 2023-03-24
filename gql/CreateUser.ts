import { gql } from '../__generated__/gql';

export const CREATE_USER = gql(`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            ... on User {
                email
                name
            }
            ... on EmailRegisteredError {
                message
            }
        }
    }
`);
