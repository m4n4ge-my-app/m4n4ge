//external imports
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//local imports
import {
  setApplications,
  setFocusedApplication,
} from '../../state/application/applicationSlice';
import { getApplications } from '../../services/applications';
import ApplicationsTable from './listTable/ApplicationsTable';
import { groupByDate } from '../../utils/mockDataGenerator';
import { useAuthToken } from '../../hooks/useAuthToken';
import {
  Application,
  groupByWeek,
  groupByMonth,
} from '../../utils/mockDataGenerator';

interface ListProps {
  viewMode: string;
}

export default function List({ viewMode }: ListProps) {
  const [applications, set_Applications] = useState<Application[]>([]);
  const [focusedRow, setFocusedRow] = useState<{
    tableIndex: number;
    rowIndex: number;
  } | null>(null);
  const dispatch = useDispatch();
  const token = useAuthToken();

  const fetchApplicationsData = async () => {
    if (token) {
      try {
        const data = await getApplications(token);
        set_Applications(data);
        dispatch(setApplications(data));
      } catch (error) {
        console.log('error fetching user application records: ', error);
      }

      // Reset focused row/application when view mode changes, otherwise it will persist between different views
      setFocusedRow(null);
      dispatch(setFocusedApplication(null));
    }
  };

  useEffect(() => {
    fetchApplicationsData();
  }, [token, viewMode]);

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
      {applicationsGroup.map((appGroup, tableIndex) => {
        const groupTitle = Object.keys(appGroup)[0];
        const applications = appGroup[groupTitle];

        return (
          <ApplicationsTable
            key={tableIndex}
            viewMode={viewMode}
            applicationDate={groupTitle}
            applications={applications}
            fetchApplicationsData={fetchApplicationsData}
            focusedRow={focusedRow}
            setFocusedRow={(rowIndex) =>
              setFocusedRow({ tableIndex, rowIndex })
            }
            tableIndex={tableIndex}
          />
        );
      })}
    </div>
  );
}
