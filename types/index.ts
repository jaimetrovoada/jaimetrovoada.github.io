export interface Frontmatter {
    author: string;
    title: string;
    date: string;
    updated: string;
    created: string;
    keywords: string[]
    summary: string;
}
export interface AboutMeProps {
    name: string;
    avatar?: string;
    occupation?: string;
    resumeLink?: string;
    introduction: string;
    skills: string[];
    location?: string;
    socials: SocialProps[];
}

export interface SocialProps {
    name: string;
    link: string;
}

export interface ProjectProps {
    title: string;
    // description?: string;
    techStack: string;
    liveLink?: string;
    githubLink: string;
}

export interface WorkProps {
    company: string; // name of the company
    position: string; // position in the company
    period: string; // period of time in the company
    description: string; // optional, description of the work
}

export interface MetaProps {
    title: string;
    description: { home: string, blog: string };
    keywords: { home: string, blog: string },
    image: string;
    type: string;
}