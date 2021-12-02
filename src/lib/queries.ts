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

export const QUERY_LEGALPAGE = gql`
    query Legalpage {
        legalpage {
            data {
                attributes {
                    seo {
                        title
                    }
                    content
                }
            }
        }
    }
`;

export const QUERY_PRIVACYPAGE = gql`
    query Privacypage {
        privacypage {
            data {
                attributes {
                    seo {
                        title
                    }
                    content
                }
            }
        }
    }
`;

export const QUERY_DIGITALWORKPAGE = gql`
    query Digitalworkpage {
        digitalworkpage {
            data {
                attributes {
                    seo {
                        title
                    }
                    laeding
                    subLeading
                    aboutMe {
                        title
                        biography
                        me {
                            data {
                                attributes {
                                    height
                                    width
                                    url
                                }
                            }
                        }
                        certificat {
                            data {
                                attributes {
                                    height
                                    width
                                    url
                                }
                            }
                        }
                    }
                    featuredApps {
                        title
                        subTitle
                        source
                        apps {
                            id
                            name
                            description
                            author
                            appstoreUrl
                            appIcon {
                                data {
                                    attributes {
                                        height
                                        width
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const QUERY_FREELANCINGPAGE = gql`
    query Freelancingpage {
        freelancingpage {
            data {
                attributes {
                    leading
                    subLeading
                    seo {
                        title
                    }
                    hero {
                        data {
                            attributes {
                                height
                                width
                                url
                            }
                        }
                    }
                    ctaButton {
                        link
                        label
                    }
                    secondTitle
                    skills {
                        id
                        name
                        description
                        icon
                    }
                    thirdTitle
                    qualities {
                        title
                        description
                        id
                        image {
                            data {
                                attributes {
                                    height
                                    width
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
