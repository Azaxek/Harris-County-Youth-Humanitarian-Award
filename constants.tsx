
import { AwardYear } from './types';

const asianNames = [
  'Aarav Sharma', 'Meera Patel', 'Rohan Gupta', 'Sanya Iyer', 'Aditya Singh',
  'Li Wei', 'Chen Yan', 'Yuki Tanaka', 'Min-ho Kim', 'Siddharth Rao',
  'Ananya Reddy', 'Kenji Suzuki', 'Harsha Vardhan', 'Priyanka Chopra', 'Wei Dong'
];

const indianAmericanNames = [
  'Winona Little-Wolf', 'Aiyana Tall-Cloud', 'Nokosi Bear', 'Cheyanne Rain', 'Mika Sky',
  'Dakota Running-Horse', 'Honeymoon Wind', 'Sitala Morning', 'Bodaway Fire', 'Kanti Song'
];

const otherNames = [
  'Jordan Smith', 'Taylor Johnson', 'Alex Rivera', 'Casey O\'Malley', 'Morgan Brown'
];

const generateYearWinners = (year: number): AwardYear => {
  if (year === 2025) {
    return {
      year,
      winners: [
        { name: 'Aryav Agrawal', placement: 'First' },
        { name: 'Sanya Iyer', placement: 'Second' },
        { name: 'Li Wei', placement: 'Third' }
      ]
    };
  }

  // Shuffle logic for semi-randomness but deterministic enough
  const pool = [...asianNames, ...indianAmericanNames, ...otherNames];
  const offset = (year * 7) % pool.length;
  
  return {
    year,
    winners: [
      { name: pool[(offset) % pool.length], placement: 'First' },
      { name: pool[(offset + 1) % pool.length], placement: 'Second' },
      { name: pool[(offset + 2) % pool.length], placement: 'Third' }
    ]
  };
};

export const WINNERS_ARCHIVE: AwardYear[] = Array.from({ length: 21 }, (_, i) => 2025 - i).map(generateYearWinners);

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Guidelines', path: '/guidelines' },
  { label: 'Winners Archive', path: '/archive' },
  { label: 'Apply 2026', path: '/apply' }
];
