import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Favicons from '../components/Favicons';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Favicons />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
