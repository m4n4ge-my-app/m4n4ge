import DayCard from './listCards/DayCard';
import {
  groupedApplicationsByDate,
  groupedApplicationsByWeek,
  groupedApplicationsByMonth,
} from '../../utils/mockDataGenerator';

interface ListProps {
  viewMode: string;
}

interface Application {
  employerName: string;
  positionName: string;
  location: string;
  platform: string;
  status: string;
  workMode: string;
  note: string;
  isFavourite: boolean;
}

export default function List({ viewMode }: ListProps) {
  let applicationsGroup: Record<string, Application[]>[] = [];
  switch (viewMode) {
    case 'days':
      applicationsGroup = groupedApplicationsByDate;
      break;
    case 'weeks':
      applicationsGroup = groupedApplicationsByWeek;
      break;
    case 'months':
      applicationsGroup = groupedApplicationsByMonth;
      break;
    default:
      applicationsGroup = [];
  }

  return (
    <div>
      {applicationsGroup.map((appGroup, index) => {
        const groupTitle = Object.keys(appGroup)[0];
        const applications = appGroup[groupTitle];

        return (
          <DayCard
            key={index}
            applicationDate={groupTitle}
            applications={applications}
          />
        );
      })}
    </div>
  );
}
