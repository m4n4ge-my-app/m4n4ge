import ApplicationsTable from './listTable/ApplicationsTable';
import {
  Application,
  groupByWeek,
  groupByMonth,
} from '../../utils/mockDataGenerator';
import { useEffect, useState } from 'react';
import { getApplications } from '../../services/applications';
import { useAuthToken } from '../../hooks/useAuthToken';
 import { groupByDate } from '../../utils/mockDataGenerator';

interface ListProps {
  viewMode: string;
}

export default function List({ viewMode }: ListProps) {
  const token = useAuthToken();
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    if (token) {
        getApplications(token).then((data) => {
            console.log('data', data);
            setApplications(data);
        })
        .catch((error) => {
            console.log('error fetching user application records: ', error);
        });
    }
}, [token]);

  let applicationsGroup: Record<string, Application[]>[] = [];
  switch (viewMode) {
    case 'days':
      applicationsGroup = groupByDate(applications);
      break;
    case 'weeks':
      applicationsGroup = groupByWeek(applications);
      break;
    case 'months':
      applicationsGroup = groupByMonth(applications);
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
