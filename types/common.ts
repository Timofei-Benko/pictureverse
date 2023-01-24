import { ApolloError } from '@apollo/client';
import { GetPictures } from '../queries/__generated__/GetPictures';

export interface IPictures {
    data: GetPictures;
    error:  ApolloError | undefined,
}
