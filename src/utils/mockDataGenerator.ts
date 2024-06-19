// Global constants
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

export const workModes = ['On-site', 'Hybrid', 'Remote'];
const notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const startDate = new Date('2023-07-12');
const endDate = new Date();
const uniqueDates: string[] = [];
const applications: Application[] = [];

// Interfaces
export interface Application {
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

// Helper functions
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

function getWeekStart(date: Date): string {
  const day = date.getDay();
  const diff = day > 0 ? day : 0; // find the number of days to last Sunday
  const lastSunday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - diff
  );
  return `Week of ${monthNames[lastSunday.getMonth()]} ${lastSunday.getDate()}, ${lastSunday.getFullYear()}`;
}

function getMonthYear(date: Date): string {
  return `${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
}

// Data generation
for (let i = 0; i < 10; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  uniqueDates.push(date.toISOString().split('T')[0]);
}

while (uniqueDates.length < 50) {
  const randomDate = getRandomDate(startDate, endDate);
  if (!uniqueDates.includes(randomDate)) {
    uniqueDates.push(randomDate);
  }
}

for (let i = 0; i < 55; i++) {
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

  return Object.entries(groupedApplications)
    .map(([date, applications]) => ({
      [date]: applications,
    }))
    .sort((a, b) => {
      const dateA = new Date(Object.keys(a)[0]);
      const dateB = new Date(Object.keys(b)[0]);
      return dateB.getTime() - dateA.getTime();
    });
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
      return dateB.getTime() - dateA.getTime();
    })
    .map(([week, applications]) => ({
      [week]: applications,
    }));
}

function groupByMonth(
  applications: Application[]
): Record<string, Application[]>[] {
  const groupedApplications: Record<string, Application[]> =
    applications.reduce(
      (grouped, application) => {
        const date = new Date(application.applicationDate);
        const monthYear = getMonthYear(date);
        if (!grouped[monthYear]) {
          grouped[monthYear] = [];
        }
        grouped[monthYear].push(application);
        return grouped;
      },
      {} as Record<string, Application[]>
    );

  // Sort applications within each month in descending order
  for (const monthYear in groupedApplications) {
    groupedApplications[monthYear].sort((a, b) => {
      const dateA = new Date(a.applicationDate);
      const dateB = new Date(b.applicationDate);
      return dateB.getTime() - dateA.getTime();
    });
  }

  return Object.entries(groupedApplications)
    .sort(([monthYearA], [monthYearB]) => {
      const [monthA, yearA] = monthYearA.split(', ');
      const [monthB, yearB] = monthYearB.split(', ');
      const dateA = new Date(`${monthA} 1, ${yearA}`);
      const dateB = new Date(`${monthB} 1, ${yearB}`);
      return dateB.getTime() - dateA.getTime();
    })
    .map(([monthYear, applications]) => ({
      [monthYear]: applications,
    }));
}

export function searchApplications(
  applications: Application[],
  term: string
): Application[] {
  return applications
    .filter(
      (application) =>
        application.employerName.toLowerCase().includes(term.toLowerCase()) ||
        application.positionName.toLowerCase().includes(term.toLowerCase()) ||
        application.location.toLowerCase().includes(term.toLowerCase()) ||
        application.platform.toLowerCase().includes(term.toLowerCase()) ||
        application.status.toLowerCase().includes(term.toLowerCase())
    )
    .sort((a, b) => {
      const aValues = [
        a.employerName,
        a.positionName,
        a.location,
        a.platform,
        a.status,
      ]
        .join(' ')
        .toLowerCase();
      const bValues = [
        b.employerName,
        b.positionName,
        b.location,
        b.platform,
        b.status,
      ]
        .join(' ')
        .toLowerCase();

      if (
        aValues.includes(term.toLowerCase()) &&
        bValues.includes(term.toLowerCase())
      ) {
        return (
          bValues.indexOf(term.toLowerCase()) -
          aValues.indexOf(term.toLowerCase())
        );
      }
      return bValues.includes(term.toLowerCase()) ? 1 : -1;
    });
}

// Exports
export const applicationsData = applications;
export const groupedApplicationsByDate = groupByDate(applications);
export const groupedApplicationsByWeek = groupByWeek(applications);
export const groupedApplicationsByMonth = groupByMonth(applications);
