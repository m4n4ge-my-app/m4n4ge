import { setApplications } from '../../state/application/applicationSlice';
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
import { useDispatch } from 'react-redux';

interface ListProps {
  viewMode: string;
}

export default function List({ viewMode }: ListProps) {
  const [applications, set_Applications] = useState<Application[]>([]);
  const dispatch = useDispatch();
  const token = useAuthToken();

  useEffect(() => {
    if (token) {
        getApplications(token).then((data) => {
            set_Applications(data);
            dispatch(setApplications(data));
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
