
import { AwardYear } from './types';

const firstNamePool = [
  'James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth',
  'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen',
  'Charles', 'Lisa', 'Daniel', 'Nancy', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra',
  'Donald', 'Ashley', 'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
  'Kenneth', 'Dorothy', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa', 'Timothy', 'Deborah',
  'Ronald', 'Stephanie', 'Edward', 'Rebecca', 'Jason', 'Sharon', 'Jeffrey', 'Laura', 'Ryan', 'Cynthia',
  'Jacob', 'Kathleen', 'Gary', 'Amy', 'Nicholas', 'Shirley', 'Eric', 'Angela', 'Jonathan', 'Helen',
  'Stephen', 'Anna', 'Larry', 'Brenda', 'Justin', 'Pamela', 'Scott', 'Nicole', 'Brandon', 'Emma',
  'Benjamin', 'Samantha', 'Samuel', 'Katherine', 'Gregory', 'Christine', 'Alexander', 'Debra', 'Frank', 'Rachel',
  'Aarav', 'Meera', 'Rohan', 'Sanya', 'Aditya', 'Li', 'Chen', 'Yuki', 'Min-ho', 'Siddharth', 'Ananya', 'Kenji'
];

const lastNamePool = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
  'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes',
  'Gupta', 'Patel', 'Iyer', 'Tanaka', 'Reddy', 'Suzuki', 'Zhang', 'Kim', 'Vardhan', 'Chopra', 'Wang'
];

// Utility to generate a stable but unique set of names
const getUniqueNames = (count: number): string[] => {
  const names = new Set<string>();
  let seed = 42; // Fixed seed for determinism
  
  while (names.size < count) {
    const firstIdx = (seed * 13) % firstNamePool.length;
    const lastIdx = (seed * 17) % lastNamePool.length;
    const name = `${firstNamePool[firstIdx]} ${lastNamePool[lastIdx]}`;
    // Ensure no repeats and specifically don't use "Aryav Agrawal" here so we can place him manually
    if (name !== "Aryav Agrawal") {
      names.add(name);
    }
    seed = (seed * 19) + 7;
  }
  
  return Array.from(names);
};

const allNames = getUniqueNames(100);

const generateYearWinners = (year: number, index: number): AwardYear => {
  const startIdx = index * 3;
  const winners: any[] = [
    { name: allNames[startIdx], placement: 'First' },
    { name: allNames[startIdx + 1], placement: 'Second' },
    { name: allNames[startIdx + 2], placement: 'Third' }
  ];

  // Restore Aryav Agrawal for the 2025 cycle
  if (year === 2025) {
    winners[0].name = "Aryav Agrawal";
  }

  return {
    year,
    winners,
    summary: "Standard award cycle following program guidelines and committee review."
  };
};

export const WINNERS_ARCHIVE: AwardYear[] = Array.from({ length: 21 }, (_, i) => 2025 - i).map((year, idx) => generateYearWinners(year, idx));

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Guidelines', path: '/guidelines' },
  { label: 'Winners Archive', path: '/archive' },
  { label: 'Apply 2026', path: '/apply' }
];
