interface Application {
  isFavorite: boolean;
  'Employer Name': string;
  'Position Name': string;
  Location: string;
  'Application Date': string;
  Platform: string;
  Status: string;
  Notes: string;
  'Work Mode': string;
}

function getRandomDate(start: Date, end: Date): string {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .split('T')[0];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(words: string): string {
  return words
    .split(' ')
    .sort(() => 0.5 - Math.random())
    .slice(0, getRandomNumber(1, 10))
    .join(' ');
}

const companies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'];
const positions = [
  'Software Developer',
  'Data Scientist',
  'Product Manager',
  'System Analyst',
  'Web Developer',
];
const locations = [
  'London, ON',
  'Toronto, ON',
  'Vancouver, BC',
  'Seattle, WA',
  'San Francisco, CA',
];
const platforms = [
  'LinkedIn',
  'Indeed',
  'ZipRecruiter',
  'Monster',
  'Dice',
  'Direct Email',
  'Company Website',
];
const statuses = [
  'Applied',
  'Engaged',
  'Interviewing',
  'Rejected',
  'Offer',
  'Accepted',
];
const workModes = ['on-site', 'hybrid', 'remote'];
const notes =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc ex, commodo sit amet facilisis a, malesuada a urna';

export const applications: Application[] = [];

for (let i = 0; i < 50; i++) {
  applications.push({
    isFavorite: Math.random() < 0.5,
    'Employer Name': companies[Math.floor(Math.random() * companies.length)],
    'Position Name': positions[Math.floor(Math.random() * positions.length)],
    Location: locations[Math.floor(Math.random() * locations.length)],
    'Application Date': getRandomDate(
      new Date('2023-07-12'),
      new Date('2024-03-01')
    ),
    Platform: platforms[Math.floor(Math.random() * platforms.length)],
    Status: statuses[Math.floor(Math.random() * statuses.length)],
    Notes: getRandomString(notes),
    'Work Mode': workModes[Math.floor(Math.random() * workModes.length)],
  });
}

console.log(applications);
