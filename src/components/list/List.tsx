import ApplicationsTable from './listTable/ApplicationsTable';
import {
  groupedApplicationsByDate,
  groupedApplicationsByWeek,
  groupedApplicationsByMonth,
  Application,
} from '../../utils/mockDataGenerator';
import { useEffect } from 'react';
import { getApplications } from '../../services/applications';
import { useAuthToken } from '../../hooks/useAuthToken';

interface ListProps {
  viewMode: string;
}

export default function List({ viewMode }: ListProps) {
  const token = useAuthToken();

  useEffect(() => {
    if (token) {
        getApplications(token).then((data) => {
            console.log('data', data);
        })
        .catch((error) => {
            console.log('error', error);
        });
    }
}, [token]);

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
          <ApplicationsTable
            key={index}
            viewMode={viewMode}
            applicationDate={groupTitle}
            applications={applications}
          />
        );
      })}
    </div>
  );
}
