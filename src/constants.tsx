import { SlideType, RoleType } from './appTypes';
import type { SlideData, ComparisonRow, MatchingScenario, TeamRole } from './appTypes';

export const SLIDES: SlideData[] = [
  { id: SlideType.SEATING, title: 'Seating Plan', durationSeconds: 0 },
  { id: SlideType.TITLE, title: 'Traversing ArrayList', durationSeconds: 0 },
  { id: SlideType.INTRO, title: 'Why do we need ArrayList', durationSeconds: 0 },
  { id: SlideType.COMPARISON, title: 'Activity 1: Comparison', durationSeconds: 360 }, // 6 mins
  { id: SlideType.MATCHING, title: 'Activity 2: Choose appropriate data structure', durationSeconds: 180 }, // 3 mins
  { id: SlideType.GROUP_TASK, title: 'Activity 3: Traversals', durationSeconds: 360 }, // 6 mins
  { id: SlideType.EXCEPTIONS, title: 'Common Exceptions', durationSeconds: 0 }, // Teacher explanation
  { id: SlideType.AUTO_DJ, title: 'Activity 4: Programming Challenge', durationSeconds: 480 }, // 8 mins
  { id: SlideType.SUMMARY, title: 'Summary: Traversing ArrayList', durationSeconds: 300 },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'decl',
    feature: 'Declaration',
    arrayAnswer: 'String[] arr = new String[5];',
    arrayListAnswer: 'ArrayList<String> list = new ArrayList<>();',
    options: ['String[] arr = new String[5];', 'ArrayList<String> list = new ArrayList<>();', 'new Array()', 'List[] = {}']
  },
  {
    id: 'len',
    feature: 'Get Length/Size',
    arrayAnswer: 'arr.length',
    arrayListAnswer: 'list.size()',
    options: ['arr.length', 'list.size()', 'arr.size()', 'list.length']
  },
  {
    id: 'access',
    feature: 'Access Element',
    arrayAnswer: 'arr[i]',
    arrayListAnswer: 'list.get(i)',
    options: ['arr[i]', 'list.get(i)', 'arr.get(i)', 'list[i]']
  },
  {
    id: 'modify',
    feature: 'Add/Set Element',
    arrayAnswer: 'arr[i] = "Song";',
    arrayListAnswer: 'list.add("Song");',
    options: ['arr[i] = "Song";', 'list.add("Song");', 'arr.push("Song")', 'list.insert("Song")']
  }
];

export const MATCHING_SCENARIOS: MatchingScenario[] = [
  { id: '1', text: 'Storing pixel data for a 4K monitor', correctType: 'Array' },
  { id: '2', text: 'A real-time list of live stream "likes"', correctType: 'ArrayList' },
  { id: '3', text: 'Music Playlist: Add/Remove songs', correctType: 'ArrayList' },
];

export const ROLES: TeamRole[] = [
  { 
    title: RoleType.DRIVER, 
    icon: 'keyboard', 
    description: 'Controls the keyboard/mouse. Types the final code.',
    color: 'bg-blue-600'
  },
  { 
    title: RoleType.NAVIGATOR, 
    icon: 'map', 
    description: 'Guides the logic. Checks syntax (size() vs length).',
    color: 'bg-green-600'
  },
  { 
    title: RoleType.ANALYST, 
    icon: 'search', 
    description: 'Checks for edge cases (empty lists, nulls).',
    color: 'bg-purple-600'
  },
  { 
    title: RoleType.SPOKESPERSON, 
    icon: 'mega', 
    description: 'Presents the solution to the class.',
    color: 'bg-orange-600'
  }
];