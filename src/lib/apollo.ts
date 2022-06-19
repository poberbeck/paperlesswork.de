import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy:
                typeof window === 'undefined' ? 'no-cache' : 'cache-first',
        },
    },
});

export default client;
