
export interface Winner {
  name: string;
  placement: 'First' | 'Second' | 'Third';
  ethnicity?: string; // Internal use for placeholder generation tracking
}

export interface AwardYear {
  year: number;
  winners: Winner[];
  summary?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
