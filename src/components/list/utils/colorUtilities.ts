import { lighten } from '@mui/system';

export const getColors = (status: string) => {
  switch (status) {
    case 'Applied':
      return { backgroundColor: lighten('#D3D3D3', 0.3), color: 'GrayText' };
    case 'Engaged':
      return { backgroundColor: lighten('#407bff', 0.3), color: 'white' };
    case 'Interviewing':
      return { backgroundColor: lighten('#ffc440', 0.3), color: 'GrayText' };
    case 'Rejected':
      return { backgroundColor: lighten('#ff40da', 0.3), color: 'white' };
    case 'Offer':
      return { backgroundColor: lighten('#40ff64', 0.3), color: 'GrayText' };
    case 'Accepted':
      return { backgroundColor: lighten('#40ff64', 0.3), color: 'GrayText' };
    default:
      return { backgroundColor: '', color: 'GrayText' };
  }
};
