import DayCard from './listCards/DayCard';
import { groupedApplicationsByDate } from '../../utils/mockDataGenerator';

export default function DayView() {
  return (
    <div>
      {groupedApplicationsByDate.map((appGroup, index) => {
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
