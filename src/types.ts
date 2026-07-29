export type PageId =
  | 'home'
  | 'about'
  | 'beliefs'
  | 'flag'
  | 'organization';

export interface MenuItem {
  id: PageId;
  title: string;
  urlPath: string; // original Weebly path e.g. /26412263712344726088332872044924565.html
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface PurposeItem {
  number: number | string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface BeliefItem {
  numeral: string;
  title: string;
  subtitle: string;
  detail: string;
  icon: string;
}

export interface CommitteeItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface OrganizationGroup {
  region: string;
  description?: string;
  committees?: CommitteeItem[];
}
