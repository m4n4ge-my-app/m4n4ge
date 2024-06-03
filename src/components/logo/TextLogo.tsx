import { Typography } from '@mui/material';
import Filter4TwoToneIcon from '@mui/icons-material/Filter4TwoTone';

const TextLogo = () => {
  return (
    <div
      className="logo"
      style={{
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        margin: '6px 0px 0px 35px',
      }}
    >
      <Filter4TwoToneIcon
        fontSize="large"
        sx={{ transform: 'rotate(45deg)', fontSize: 30, color: '#5479F7' }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: '20px', fontWeight: 'bold', color: '#4D4D4D' }}
      >
        M
        <span
          style={{
            color: '#5479F7',
            display: 'inline-block',
            transform: 'rotate(12deg)',
          }}
        >
          4
        </span>
        n
        <span
          style={{
            color: '#5479F7',
            display: 'inline-block',
            transform: 'rotate(10deg)',
          }}
        >
          4
        </span>
        geMy.app
      </Typography>
    </div>
  );
};

export default TextLogo;
