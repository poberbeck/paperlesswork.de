import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
    titleTemplate: 'Paperless Work | %s',
    defaultTitle: 'Paperless Work',
    description:
        'Egal ob im Web, Mobil oder im Print, ein professionelles Auftreten ist wichtig für das Gewinnen von neuen Kunden. Ich helfe Ihnen diese Auftritt zu entwickeln, zu optimieren und umzusetzen.',
    additionalMetaTags: [
        {
            property: 'keywords',
            content: 'EDV, Pascal Oberbeck, Digital, iPad, Sehbehindert, Freelancer, German, Deutsch',
        },
    ],
    defaultOpenGraphImageHeight: 627,
    defaultOpenGraphImageWidth: 1200,
    openGraph: {
        type: 'website',
        locale: 'de',
        url: 'https://paperlesswork.de/',
        site_name: 'Paperless Work',
        images: [{ url: 'https://paperlesswork.de/HomePage_Card.png' }],
    },
    twitter: {
        handle: '@pascaloberbeck',
        cardType: 'summary_large_image',
    },
};

export default SEO;
