import { gql } from '@apollo/client';

export const GET_PICTURES = gql`
    query Pictures {
        pictures {
            id
            base64
            description
            likesCount
            likedBy {
                id
            }
            comments {
                text
                author {
                    name
                }
            }
            uploadDate
        }
    }
`;
