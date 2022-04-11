import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { DetectAuthorization } from '../components/DetectAuthorization';
import { AppLayout } from '../components/AppLayout';
import { store } from '../redux/store';

import '../styles/globals.css';

export const client = new ApolloClient({
  uri: 'http://localhost:6969/graphql',
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <DetectAuthorization>
          <AppLayout>
              <Component {...pageProps} />
          </AppLayout>
        </DetectAuthorization>
      </Provider>
    </ApolloProvider>
  );
}
