export enum SlideType {
  SEATING = 'SEATING',
  TITLE = 'TITLE',
  INTRO = 'INTRO',
  COMPARISON = 'COMPARISON',
  MATCHING = 'MATCHING',
  GROUP_TASK = 'GROUP_TASK',
  EXCEPTIONS = 'EXCEPTIONS',
  AUTO_DJ = 'AUTO_DJ',
  SUMMARY = 'SUMMARY',
}

export enum RoleType {
  DRIVER = 'Driver',
  NAVIGATOR = 'Navigator',
  ANALYST = 'Analyst',
  SPOKESPERSON = 'Spokesperson',
}

export interface SlideData {
  id: SlideType;
  title: string;
  durationSeconds: number;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  arrayAnswer: string;
  arrayListAnswer: string;
  options: string[];
}

export interface MatchingScenario {
  id: string;
  text: string;
  correctType: 'Array' | 'ArrayList';
}

export interface TeamRole {
  title: RoleType;
  icon: string;
  description: string;
  color: string;
}