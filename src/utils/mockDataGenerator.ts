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

export const workModes = ['On-Site', 'Hybrid', 'Remote'];
const notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const startDate = new Date('2023-07-12');
const endDate = new Date();
const uniqueDates: string[] = [];
const applications: Application[] = [];

// Interfaces
export interface Application {
  isFavorite: boolean;
  employerName: string;
  positionName: string;
  jobLocation: string;
  applicationDate: string;
  jobPlatform: string;
  status: string;
  note: string;
  workModel: string;
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
    isFavorite: Math.random() < 0.5,
    employerName: companies[Math.floor(Math.random() * companies.length)],
    positionName: positions[Math.floor(Math.random() * positions.length)],
    jobLocation: locations[Math.floor(Math.random() * locations.length)],
    applicationDate:
      uniqueDates[Math.floor(Math.random() * uniqueDates.length)], // Select a random date from the uniqueDates array
    jobPlatform: platforms[Math.floor(Math.random() * platforms.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    note: getRandomString(notes),
    workModel: workModes[Math.floor(Math.random() * workModes.length)],
  });
}

export const groupByDate = (
  applications: Application[]
): Record<string, Application[]>[] => {
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

export const groupByWeek = (
  applications: Application[]
): Record<string, Application[]>[] => {
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

export const groupByMonth = (
  applications: Application[]
): Record<string, Application[]>[] => {
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
        application.jobLocation.toLowerCase().includes(term.toLowerCase()) ||
        application.jobPlatform.toLowerCase().includes(term.toLowerCase()) ||
        application.status.toLowerCase().includes(term.toLowerCase())
    )
    .sort((a, b) => {
      const aValues = [
        a.employerName,
        a.positionName,
        a.jobLocation,
        a.jobPlatform,
        a.status,
      ]
        .join(' ')
        .toLowerCase();
      const bValues = [
        b.employerName,
        b.positionName,
        b.jobLocation,
        b.jobPlatform,
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

function getDaysElapsed(earliestDate: string): number {
  const earliest = new Date(earliestDate);
  const now = new Date();

  const differenceInTime = now.getTime() - earliest.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
}

function getEarliestApplicationDate(applications: Application[]): {
  earliestDate: string;
  elapsedDays: number;
} {
  let earliestDate = new Date(applications[0].applicationDate);

  for (let i = 1; i < applications.length; i++) {
    const applicationDate = new Date(applications[i].applicationDate);
    if (applicationDate < earliestDate) {
      earliestDate = applicationDate;
    }
  }

  const earliestDateString = earliestDate.toISOString().split('T')[0];
  const elapsedDays = getDaysElapsed(earliestDateString);

  return { earliestDate: earliestDateString, elapsedDays };
}

export function getApplicationSummary(
  applications: Application[]
): Record<string, number> {
  const summary: Record<string, number> = {
    total: applications.length,
    Applied: 0,
    Engaged: 0,
    Interviewing: 0,
    Rejected: 0,
    Offer: 0,
    Accepted: 0,
  };

  applications.forEach((application) => {
    if (application.status in summary) {
      summary[application.status]++;
    }
  });

  return summary;
}

export function getApplicationTrend(
  applications: Application[]
): { monthYear: string; statusCounts: Record<string, number> }[] {
  const trend: Record<string, Record<string, number>> = {};

  applications.forEach((application) => {
    const monthYear = getMonthYear(new Date(application.applicationDate));

    if (!trend[monthYear]) {
      trend[monthYear] = {
        Applied: 0,
        Engaged: 0,
        Interviewing: 0,
        Rejected: 0,
        Offer: 0,
        Accepted: 0,
      };
    }

    // Ensure the status exists in the trend[monthYear] object
    if (!trend[monthYear][application.status]) {
      trend[monthYear][application.status] = 0;
    }

    trend[monthYear][application.status]++;
  });

  return Object.entries(trend)
    .map(([monthYear, statusCounts]) => ({ monthYear, statusCounts }))
    .sort((a, b) => +new Date(a.monthYear) - +new Date(b.monthYear));
}

// Exports
export const applicationsData = applications;
export const earliestDate = getEarliestApplicationDate(applications);
export const applicationsTrend = getApplicationTrend(applications);
export const applicationSummary = getApplicationSummary(applications);
