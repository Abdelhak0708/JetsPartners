export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  department: 'management' | 'sales' | 'operations';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}