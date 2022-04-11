import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
    query User($userId: ID!) {
        user(id: $userId) {
            name
            email
        }
    }
`;
