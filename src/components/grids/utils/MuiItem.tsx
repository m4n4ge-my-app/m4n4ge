import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//Note this is not a custom component, but a styled component directly from MUI, extracted herr to reuse in other components
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
