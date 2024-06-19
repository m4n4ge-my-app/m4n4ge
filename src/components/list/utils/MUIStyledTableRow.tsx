import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

const MUIStyledTableRow = styled(TableRow)(() => ({
  '&&:hover': {
    backgroundColor: '#fbfcff !important',
  },
}));

export default MUIStyledTableRow;
