export interface CockpitHomePage {
    seoTitle: string;
    seoDescription?: string;
    leading: string;
    leadingSub: string;
    infoBannerText: string;
    infoBannerLink: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSeconderyText: string;
    ctaSeconderyLink: string;
    _mby: string;
    _by: string;
}

export interface CockpitDigitalWorkPage {
    seoTitle: string;
    seoDescription?: string;
    leading: string;
    leadingSub: string;
    _mby: string;
    _by: string;
}

export interface CockpitFreelancingPage {
    seoTitle: string;
    seoDescription: string;
    leading: string;
    leadingSub: string;
    ctaLabel: string;
    ctaLink: string;
    sectionOneHeading: string;
    sectionTwoHeading: string;
    _mby: string;
    _by: string;
}

export interface CockpitAboutMeComponent {
    title: string;
    description: string;
    image: CockpitImage;
    certifiedTitle: string;
    certifiedImage: CockpitImage;
    _mby: string;
    _by: string;
}

export interface CockpitImage {
    path: string;
    title: string;
    mime: string;
    description: string;
    tags: string[];
    size: number;
    image: boolean;
    video: boolean;
    audio: boolean;
    archive: boolean;
    document: boolean;
    code: boolean;
    colors: string[];
    width: number;
    height: number;
    created: number;
    modified: number;
    _by: string;
    folder: string;
    _id: string;
}

export interface CockpitFeaturedAppsCollection {
    entries: FeaturedApp[];
}

export interface CockpitSkillsCollection {
    entries: Skill[];
}

export interface CockpitQualitiesCollection {
    entries: Qualities[];
}

export interface Qualities {
    title: string;
    description: string;
    image: CockpitImage;
    _mby: string;
    _by: string;
    _modified: number;
    _created: number;
    _id: string;
}

export interface Skill {
    skillName: string;
    skillValue: string;
    skillDescription: string;
    skillIcon: string;
    _mby: string;
    _by: string;
    _modified: number;
    _created: number;
    _id: string;
}
export interface CockpitFeaturedAppsComponent {
    title: string;
    subTitle: string;
    _mby: string;
    _by: string;
}

export interface FeaturedApp {
    appName: string;
    appDescription: string;
    appCreator: string;
    appStoreLink: string;
    appIcon: CockpitImage;
    _mby: string;
    _by: string;
    _modified: number;
    _created: number;
    _id: number;
}

export interface CockpitSimplePage {
    seoTitle: string;
    seoDescription?: string;
    content: string;
    _mby: string;
    _by: string;
}
