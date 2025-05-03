export interface Frontmatter {
  author: string;
  title: string;
  updated: string;
  created: string;
  keywords: string[];
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
  email: string;
  socials: SocialProps[];
}

export interface SocialProps {
  name: string;
  url: string;
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
  startDate: Date; // start date
  endDate: Date; // end date
  description: string; // optional, description of the work
}

export interface MetaProps {
  title: string;
  description: { home: string; blog: string };
  keywords: { home: string; blog: string };
  image: string;
  type: string;
}

export interface Release {
  url: string;
  html_url: string;
  assets_url: string;
  upload_url: string;
  tarball_url: string;
  zipball_url: string;
  discussion_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: Date;
  published_at: Date;
  author: Author;
  assets: Asset[];
}

export interface Asset {
  url: string;
  browser_download_url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  state: string;
  content_type: string;
  size: number;
  download_count: number;
  created_at: Date;
  updated_at: Date;
  uploader: Author;
}

export interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface SocialLinkProps {
  slug: string,
  name: string,
  url: string
  iconName: string,
}
