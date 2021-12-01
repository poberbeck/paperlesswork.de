import { gql } from '@apollo/client';

export const QUERY_HOMEPAGE = gql`
    query Homepage {
        homepage {
            data {
                attributes {
                    leading
                    subLeading
                    seo {
                        title
                    }
                    primaryCta {
                        label
                        link
                    }
                    secondaryCta {
                        label
                        link
                    }
                    infoBanner {
                        link
                        label
                    }
                }
            }
        }
    }
`;
