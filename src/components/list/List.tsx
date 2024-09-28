//external imports
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

//local imports
import { getApplications } from '../../services/applications';
import ApplicationsTable from './listTable/ApplicationsTable';
import { groupByDate } from '../../utils/applications.util';
import { useAuthToken } from '../../hooks/useAuthToken';
import {
  setApplications,
  setFocusedApplication,
} from '../../state/application/applicationSlice';
import {
  Application,
  groupByWeek,
  groupByMonth,
} from '../../utils/applications.util';

interface ListProps {
  viewMode: string;
  gridWidth: number;
}

export default function List({ viewMode, gridWidth }: ListProps) {
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

  // Do not render anything if viewMode is 'expanded'
  if (viewMode === 'expanded') {
    return null;
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
            gridWidth={gridWidth}
          />
        );
      })}
      {applicationsGroup.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            border: '1px dashed grey',
            borderRadius: '8px',
            backgroundColor: '#f7f9ff',
            minHeight: '500px',
          }}
        >
          <Typography variant="body1" align="center" gutterBottom>
            You haven't added any applications yet. Please add one to get
            started.
          </Typography>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ marginTop: '10px' }}
            >
              Add Application
            </Button>
          </Link>
        </Box>
      )}
    </div>
  );
}
