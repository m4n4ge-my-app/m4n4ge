import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';

const icons = {
  PlaylistAddCheckOutlinedIcon,
  InterpreterModeOutlinedIcon,
  CalendarMonthOutlinedIcon,
  ContactPageOutlinedIcon,
  FilePresentOutlinedIcon,
  DescriptionOutlinedIcon,
  DashboardOutlinedIcon,
  SmartToyOutlinedIcon,
  HistoryOutlinedIcon,
};

const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icons: icons.DashboardOutlinedIcon,
    children: [],
  },
  {
    name: 'I M4n4ge',
    path: '',
    icons: null,
    children: [
      {
        name: 'Resume',
        path: '/resume',
        icons: icons.ContactPageOutlinedIcon,
      },
      {
        name: 'Cover Letters',
        path: '/coverletters',
        icons: icons.FilePresentOutlinedIcon,
      },
      {
        name: 'Job Descriptions',
        path: '/descriptions',
        icons: icons.DescriptionOutlinedIcon,
      },
      {
        name: 'Calendar',
        path: '/calendar',
        icons: icons.CalendarMonthOutlinedIcon,
      },
      {
        name: 'Todos',
        path: '/todos',
        icons: icons.PlaylistAddCheckOutlinedIcon,
      },
    ],
  },
  {
    name: 'Get Assist',
    path: '',
    icons: null,
    children: [
      {
        name: 'Auto Pilot',
        path: '/automated',
        icons: icons.SmartToyOutlinedIcon,
      },
      {
        name: 'Interview Now',
        path: '/interview',
        icons: icons.InterpreterModeOutlinedIcon,
      },
    ],
  },
  {
    name: 'Archives',
    path: '',
    icons: null,
    children: [],
  },
];

export default sidebarItems;
