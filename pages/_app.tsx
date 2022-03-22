import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/ThemeProvider';
import { AppLayout } from '../components/AppLayout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:6969/graphql',
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
