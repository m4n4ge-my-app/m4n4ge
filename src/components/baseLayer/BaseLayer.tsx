import { useEffect } from 'react';
import './baselayer.scss';
import resume from './baseLayerImages/resume.png';
import coverLetter from './baseLayerImages/coverletter.png';
import description from './baseLayerImages/description.png';
import calendar from './baseLayerImages/calendar.png';
import todos from './baseLayerImages/todolist.png';
import assist from './baseLayerImages/assist.png';
import interview from './baseLayerImages/interview.png';
import add from './baseLayerImages/add.png';
import archive from './baseLayerImages/archive.png';
import prfile from './baseLayerImages/profile.png';
import settings from './baseLayerImages/settings.png';

interface Props {
  type: string;
  children: React.ReactNode;
}

const BaseLayer = ({ type, children }: Props) => {
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

  document.documentElement.style.setProperty(
    '--background-image-url',
    `url(${resume})`
  );
  return (
    <div className="pageContainer">
      <div className="left">{children}</div>
      <div className="right"></div>
    </div>
  );
};

export default BaseLayer;
