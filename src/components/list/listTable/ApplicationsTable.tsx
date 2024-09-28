//external imports
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import TableContainer from '@mui/material/TableContainer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Typography, useTheme } from '@mui/material';
import { Box, Stack, lighten, useMediaQuery } from '@mui/system';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { useNavigate } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import moment from 'moment';

//local imports
import { setFocusedApplication } from '../../../state/application/applicationSlice';
import { Application, workModes } from '../../../utils/applications.util';
import { getColors } from '../utils/designUtilities';
import { useRef } from 'react';
import ConfirmationModal, {
  ConfirmationModalRef,
} from '../../modals/confirmationModal/ConfirmationModal';
import { deleteApplication } from '../../../services/applications';
import { useAuthToken } from '../../../hooks/useAuthToken';
import { show } from '../../../state/feeback/feedbackSlice';
import { AxiosError, AxiosResponse } from 'axios';
import { RootState } from '../../../state/store';

interface DayCardProps {
  viewMode: string;
  applicationDate: string;
  applications: Application[];
  fetchApplicationsData: () => void;
  focusedRow: { tableIndex: number; rowIndex: number } | null;
  setFocusedRow: (rowIndex: number) => void;
  tableIndex: number;
  gridWidth: number;
}

export default function ApplicationsTable({
  viewMode,
  applicationDate,
  applications,
  fetchApplicationsData,
  focusedRow,
  setFocusedRow,
  tableIndex,
  gridWidth,
}: DayCardProps) {
  const focusedApplication = useSelector(
    (state: RootState) => state.applications.focusedApplication
  );
  const modalRef = useRef<ConfirmationModalRef>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useAuthToken();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.setOpen(true);
    }
  };

  const handleEditClick = (id: string) => {
    navigate(`/app/edit/${id}`);
  };

  return (
    <Paper sx={{ maxWidth: gridWidth, marginBottom: '20px' }} className="applications-table">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={isMobile ? 'space-between' : 'initial'}
        padding="10px"
        bgcolor={'#f0f5ff'}
      >
        <Typography
          variant="body1"
          align="left"
          sx={{ marginLeft: 2, fontWeight: 'bold', color: 'GrayText' }}
        >
          {viewMode === 'days'
            ? moment(applicationDate).format('dddd, MMMM D, YYYY')
            : applicationDate}
        </Typography>
        <Box
          sx={{
            width: 'auto',
            marginLeft: 2,
            backgroundColor: lighten('#D3D3D3', 0.3),
            borderRadius: '8px',
            padding: '2px 5px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'GrayText',
          }}
        >
          <Typography className="applications-count">{`${applications.length} ${isMobile? '' : 'applications'}`}</Typography>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#fbfcff' }} id="applications-table-head" >
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                <NumbersOutlinedIcon fontSize="inherit" />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                <VolunteerActivismOutlinedIcon fontSize="small" />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Employer Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Role Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Location
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Platform
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                Work Mode
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: 'bold', color: 'GrayText' }}
              >
                {focusedRow && focusedRow.tableIndex === tableIndex
                  ? ''
                  : 'Notes'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application, rowIndex) => (
              <TableRow
                className="applications-table-row"
                key={rowIndex}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setFocusedRow(rowIndex);
                  dispatch(setFocusedApplication(application));
                }}
              >
                <TableCell align="center" style={{ width: '5%' }}>
                  {rowIndex + 1}
                </TableCell>
                <TableCell align="center" style={{ width: '5%' }}>
                  {application.isFavorite === true ? (
                    <FavoriteIcon
                      style={{ color: '#ff40da' }}
                      fontSize="small"
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  )}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.employerName}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.positionName}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.jobLocation}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.jobPlatform}
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  <Box
                    sx={{
                      width: '100px',
                      marginLeft: 2,
                      ...getColors(application.applicationStatus),
                      borderRadius: '8px',
                      padding: '2px 5px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: getColors(application.applicationStatus).color,
                    }}
                  >
                    <Typography>{application.applicationStatus}</Typography>
                    {application.applicationStatus === 'Accepted' && (
                      <SportsScoreIcon />
                    )}
                  </Box>
                </TableCell>
                <TableCell align="center" style={{ width: '10%' }}>
                  {application.workModel.replace(/"/g, '') === workModes[0] && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <BusinessOutlinedIcon fontSize="small" />
                      {workModes[0]}
                    </Box>
                  )}
                  {application.workModel.replace(/"/g, '') === workModes[1] && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <MapsHomeWorkOutlinedIcon fontSize="small" />
                      {workModes[1]}
                    </Box>
                  )}
                  {application.workModel.replace(/"/g, '') === workModes[2] && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <CottageOutlinedIcon fontSize="small" />
                      {workModes[2]}
                    </Box>
                  )}
                </TableCell>
                {focusedRow &&
                focusedRow.tableIndex === tableIndex &&
                focusedRow.rowIndex === rowIndex ? (
                  <TableCell align="center" style={{ width: '30%' }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <Button
                        variant="text"
                        size="small"
                        startIcon={<ModeEditOutlineOutlinedIcon />}
                        onClick={() => handleEditClick(application._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="text"
                        size="small"
                        color="secondary"
                        startIcon={<DeleteOutlineOutlinedIcon />}
                        onClick={openModal}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                ) : (
                  <TableCell align="center" style={{ width: '30%' }}>
                    {application.note}
                  </TableCell>
                )}
                <ConfirmationModal
                  ref={modalRef}
                  title="Delete Application"
                  message={`Are you sure you want to delete the application for ${focusedApplication?.positionName} at ${focusedApplication?.employerName}?`}
                  confirmAction={async () =>
                    await deleteApplication(token!, application._id!).then(
                      (response: AxiosResponse) => {
                        fetchApplicationsData();
                        if (response.status === 204) {
                          dispatch(
                            show({
                              message: 'Application deleted successfully',
                              severity: 'success',
                            })
                          );
                        }
                        if (response instanceof AxiosError) {
                          dispatch(
                            show({
                              message: response?.response?.data.error,
                              severity: 'error',
                            })
                          );
                        }
                      }
                    )
                  }
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
