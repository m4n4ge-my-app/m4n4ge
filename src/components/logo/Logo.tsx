import Filter4TwoToneIcon from '@mui/icons-material/Filter4TwoTone';
import theme from '../../theme';

const Logo = () => {
  return (
    <Filter4TwoToneIcon
      fontSize="large"
      sx={{
        transform: 'rotate(45deg)',
        fontSize: 30,
        color: theme.palette.primary.main,
        marginLeft: 2,
        cursor: 'pointer',
      }}
    />
  );
};

export default Logo;
