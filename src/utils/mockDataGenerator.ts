interface Application {
  isFavourite: boolean;
  employerName: string;
  positionName: string;
  location: string;
  applicationDate: string;
  platform: string;
  status: string;
  note: string;
  workMode: string;
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

const companies = [
  'Google',
  'Microsoft',
  'Apple',
  'Amazon',
  'Facebook',
  'Netflix',
  'Tesla',
  'IBM',
];
const positions = [
  'Software Developer',
  'Data Scientist',
  'Product Manager',
  'System Analyst',
  'Web Developer',
  'UX Designer',
  'Database Administrator',
  'Network Engineer',
];
const locations = [
  'London, ON',
  'Toronto, ON',
  'Vancouver, BC',
  'Seattle, WA',
  'San Francisco, CA',
  'New York, NY',
  'Austin, TX',
  'Chicago, IL',
];
const platforms = [
  'CareerBuilder',
  'FlexJobs',
  'WellFound',
  'Glassdoor',
  'SimplyHired',
  'Other',
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
const notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const applications: Application[] = [];

const uniqueDates: string[] = [];
const startDate = new Date('2023-07-12');
const endDate = new Date('2024-08-01');

// Generate sequence of adjacent dates
for (let i = 0; i < 10; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  uniqueDates.push(date.toISOString().split('T')[0]);
}

// Generate random dates
while (uniqueDates.length < 50) {
  const randomDate = getRandomDate(startDate, endDate);
  if (!uniqueDates.includes(randomDate)) {
    uniqueDates.push(randomDate);
  }
}

for (let i = 0; i < 50; i++) {
  applications.push({
    isFavourite: Math.random() < 0.5,
    employerName: companies[Math.floor(Math.random() * companies.length)],
    positionName: positions[Math.floor(Math.random() * positions.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    applicationDate:
      uniqueDates[Math.floor(Math.random() * uniqueDates.length)], // Select a random date from the uniqueDates array
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    note: getRandomString(notes),
    workMode: workModes[Math.floor(Math.random() * workModes.length)],
  });
}

console.log(applications);

function groupByDate(
  applications: Application[]
): Record<string, Application[]>[] {
  const groupedApplications: Record<string, Application[]> =
    applications.reduce(
      (grouped, application) => {
        const date = application.applicationDate;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(application);
        return grouped;
      },
      {} as Record<string, Application[]>
    );

  return Object.entries(groupedApplications).map(([date, applications]) => ({
    [date]: applications,
  }));
}

export const groupedApplicationsByDate = groupByDate(applications);

console.log(groupedApplicationsByDate);

function getWeekStart(date: Date): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getDay();
  const diff = day < 7 ? 7 - day : 0; // find the number of days to next Sunday
  const nextSunday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + diff
  );
  return `Week of ${monthNames[nextSunday.getMonth()]} ${nextSunday.getDate()}, ${nextSunday.getFullYear()}`;
}

function groupByWeek(
  applications: Application[]
): Record<string, Application[]>[] {
  const groupedApplications: Record<string, Application[]> =
    applications.reduce(
      (grouped, application) => {
        const date = new Date(application.applicationDate);
        const week = getWeekStart(date);
        if (!grouped[week]) {
          grouped[week] = [];
        }
        grouped[week].push(application);
        return grouped;
      },
      {} as Record<string, Application[]>
    );

  return Object.entries(groupedApplications)
    .sort(([weekA], [weekB]) => {
      const dateA = new Date(weekA.split(' ').slice(2).join(' '));
      const dateB = new Date(weekB.split(' ').slice(2).join(' '));
      return dateA.getTime() - dateB.getTime();
    })
    .map(([week, applications]) => ({
      [week]: applications,
    }));
}

export const groupedApplicationsByWeek = groupByWeek(applications);

console.log(groupedApplicationsByWeek);
