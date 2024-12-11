import ApplicationsOverview from '../widgets/applicationsOverview/ApplicationsOverview';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import PersonalTrend from '../widgets/personalTrend/PersonalTrend';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MotivationBar from '../motivationBar/MotivationBar';
import { useEffect, useRef, useState } from 'react';
import ExpandedView from '../list/ExpandedView';
import {
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import greetingTime from 'greeting-time'; //there is typescript types for this package from the package maintainer, so this error cant be fixed
import { Item } from './utils/MuiItem';
import Grid from '@mui/material/Grid';
import List from '../list/List';

interface Props {
  username: string;
}

const DashboardGrid = ({ username }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const [viewMode, setViewMode] = useState('days');
  const [gridWidth, setGridWidth] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (gridRef.current) {
      setGridWidth(gridRef.current.offsetWidth);
    }
  }, [gridRef?.current?.offsetWidth]);

  return (
    //Main Grid Container
    <Grid
      container
      ref={gridRef}
      spacing={0}
      sx={{
        padding: '25px',
        marginTop: '100px',
        width: isMobile ? '85vw' : '100%',
      }}
      className="row1"
    >
      {/* Sub Grid Container/Row #1 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row1">
        {/* Label */}
        <Typography variant="h6" className="label" gutterBottom>
          {greetingTime(new Date())} {username}
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #2 - Motivation Box & Job Outlook Box */}
      <Grid container item spacing={2.5} className="row2">
        {/* Motivation Box */}
        <Grid item xs={12} sm={12} md={8}>
          <Item className="motivationBox" sx={{ border: 'none' }}>
            <MotivationBar />
          </Item>
        </Grid>
        {/* Job Outlook Box  */}
        <Grid item xs={12} sm={12} md={4}>
          <Item className="jobOutlookBox">Job Market Outlook</Item>
        </Grid>
      </Grid>

      {/* Sub Grid Container/Row #3 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row3">
        {/* Label */}
        <Typography variant="h6" className="label" gutterBottom>
          Stats
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #4 - Status Widgets */}
      <Grid container item spacing={2.5} className="row4">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">
            <ApplicationsOverview />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 2</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">Stats 3</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Item className="stats">
            <PersonalTrend />
          </Item>
        </Grid>
      </Grid>

      {/* Sub Grid Container/Row #5 - Label */}
      <Grid item xs={12} sm={12} md={12} className="row5">
        {/* Label */}
        <Typography variant="h6" className="label" sx={{ marginTop: '15px' }}>
          Applications
        </Typography>
      </Grid>

      {/* Sub Grid Container/Row #6 - Applications List*/}
      <Grid container item spacing={2.5} className="row6">
        {/* Applications List */}
        <Grid item xs={12} sm={12} md={12}>
          <Item className="lists" style={{ padding: '15px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '10px',
              }}
            >
              <ButtonGroup
                color="primary"
                variant="text"
                aria-label="Basic button group"
              >
                <Button
                  onClick={() => setViewMode('days')}
                  size="small"
                  style={{
                    fontWeight: viewMode === 'days' ? 'bold' : 'normal',
                  }}
                >
                  Days
                </Button>
                <Button
                  onClick={() => setViewMode('weeks')}
                  size="small"
                  style={{
                    fontWeight: viewMode === 'weeks' ? 'bold' : 'normal',
                  }}
                >
                  Weeks
                </Button>
                <Button
                  onClick={() => setViewMode('months')}
                  size="small"
                  style={{
                    fontWeight: viewMode === 'months' ? 'bold' : 'normal',
                  }}
                >
                  Months
                </Button>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setExpanded(!expanded);
                    if (expanded) {
                      setViewMode('expanded');
                    } else {
                      setViewMode('days');
                    }
                  }}
                  id="expandCollapseButton"
                >
                  {expanded ? (
                    <OpenInFullIcon sx={{ fontSize: '20px' }} />
                  ) : (
                    <CloseFullscreenIcon sx={{ fontSize: '20px' }} />
                  )}
                </IconButton>
              </ButtonGroup>
            </div>
            <List viewMode={viewMode} gridWidth={gridWidth} />
            {viewMode === 'expanded' && <ExpandedView gridWidth={gridWidth} />}
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
