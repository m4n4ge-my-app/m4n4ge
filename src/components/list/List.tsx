import DayCard from './listCards/DayCard';
import {
  groupedApplicationsByDate,
  groupedApplicationsByWeek,
} from '../../utils/mockDataGenerator';

interface ListProps {
  viewMode: string;
}

export default function List({ viewMode }: ListProps) {
  return (
    <div>
      {(viewMode === 'days'
        ? groupedApplicationsByDate
        : groupedApplicationsByWeek
      ).map((appGroup, index) => {
        const applicationDate = Object.keys(appGroup)[0];
        const applications = appGroup[applicationDate];

        return (
          <DayCard
            key={index}
            applicationDate={applicationDate}
            applications={applications}
          />
        );
      })}
    </div>
  );
}
