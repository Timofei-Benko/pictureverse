import { gql } from '@apollo/client';

export const CREATE_USER = gql`
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
`;
