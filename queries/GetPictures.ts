import { gql } from '@apollo/client';

export const GET_PICTURES = gql`
    query GetPictures {
        pictures {
            id
            base64
            description
            likesCount
            likedBy {
                id
                name
                email
            }
            comments {
                id
                text
                author {
                    id
                    name
                    email
                }
            }
            uploadDate
        }
    }
`;
