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
                        Label
                        link
                    }
                    secondaryCta {
                        Label
                        link
                    }
                    infoBanner {
                        link
                        Label
                    }
                }
            }
        }
    }
`;
