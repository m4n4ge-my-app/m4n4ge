//external imports
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Fab, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//local imports
import './baselayer.scss';
import coverLetter from './baseLayerImages/coverletter.png';
import description from './baseLayerImages/description.png';
import interview from './baseLayerImages/interview.png';
import settings from './baseLayerImages/settings.png';
import calendar from './baseLayerImages/calendar.png';
import archive from './baseLayerImages/archive.png';
import prfile from './baseLayerImages/profile.png';
import todos from './baseLayerImages/todolist.png';
import resume from './baseLayerImages/resume.png';
import assist from './baseLayerImages/assist.png';
import add from './baseLayerImages/add.png';
import theme from '../../theme';

interface Props {
  type: string;
  children: React.ReactNode;
}

const BaseLayer = ({ type, children }: Props) => {
  const [lightMode, setLightMode] = React.useState(false);

  useEffect(() => {
    // Dynamically set the CSS variable
    switch (type) {
      case 'add':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${add})`
        );
        break;
      case 'resume':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${resume})`
        );
        break;
      case 'coverLetter':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${coverLetter})`
        );
        break;
      case 'jobDescriptions':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${description})`
        );
        break;
      case 'calendar':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${calendar})`
        );
        break;
      case 'todos':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${todos})`
        );
        break;
      case 'assist':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${assist})`
        );
        break;
      case 'interview':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${interview})`
        );
        break;
      case 'archive':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${archive})`
        );
        break;
      case 'profile':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${prfile})`
        );
        break;
      case 'settings':
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${settings})`
        );
        break;
      default:
        document.documentElement.style.setProperty(
          '--background-image-url',
          `url(${resume})`
        );
        break;
    }
  }, [type]);

  return (
    <div className="pageContainer">
      <div className="left">{children}</div>
      <div className="right">
        <div className="iconsGroup">
          <Link to="/add">
            <Tooltip title="Add application record" placement="left">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                sx={{ marginBottom: '10px' }}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Link>
          <Link to="/automated">
            <SmartToyOutlinedIcon
              sx={{ fontSize: '25px', color: theme.palette.primary.main }}
            />
          </Link>
          <Link to="/settings">
            <SettingsOutlinedIcon
              sx={{ fontSize: '25px', color: theme.palette.primary.main }}
            />
          </Link>
          <IconButton
            onClick={() => setLightMode(!lightMode)}
            sx={{ '&:focus': { outline: 'none' } }}
          >
            {lightMode === true ? (
              <LightModeOutlined
                sx={{ fontSize: '25px', color: theme.palette.primary.main }}
              />
            ) : (
              <DarkModeOutlined
                sx={{ fontSize: '25px', color: theme.palette.primary.main }}
              />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default BaseLayer;
