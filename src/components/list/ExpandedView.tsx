import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button, InputAdornment, TextField } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TablePagination from '@mui/material/TablePagination';
import MUIStyledTableRow from './utils/MUIStyledTableRow';
import TableContainer from '@mui/material/TableContainer';
import TableSortLabel from '@mui/material/TableSortLabel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import { visuallyHidden } from '@mui/utils';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import {
  applicationsData as applications,
  Application,
  searchApplications,
} from '../../utils/mockDataGenerator';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof Application>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: boolean | string },
  b: { [key in Key]: boolean | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Application;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'isFavourite',
    numeric: false,
    disablePadding: true,
    label: 'Favourite',
  },
  {
    id: 'employerName',
    numeric: false,
    disablePadding: false,
    label: 'Employer Name',
  },
  {
    id: 'positionName',
    numeric: false,
    disablePadding: false,
    label: 'Role Name',
  },
  {
    id: 'location',
    numeric: false,
    disablePadding: false,
    label: 'Location',
  },
  {
    id: 'applicationDate',
    numeric: false,
    disablePadding: false,
    label: 'Job Application Date',
  },
  {
    id: 'platform',
    numeric: false,
    disablePadding: false,
    label: 'Platform',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'workMode',
    numeric: false,
    disablePadding: false,
    label: 'Work Mode',
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Application
  ) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Application) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{ fontWeight: 'bold', color: 'GrayText' }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { selected, setSelected, setKeyword } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        backgroundColor: '#f0f5ff',
      }}
    >
      {selected > 0 ? (
        <Stack
          direction="row"
          gap="10px"
          justifyContent="flex-end"
          sx={{ width: '100%' }}
          paddingRight="20px"
        >
          <Button
            variant="text"
            size="small"
            startIcon={<ModeEditOutlineOutlinedIcon />}
          >
            Edit
          </Button>
          <Button
            variant="text"
            size="small"
            startIcon={<CloseOutlinedIcon />}
            onClick={() => setSelected([])}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            size="small"
            color="secondary"
            startIcon={<DeleteOutlineOutlinedIcon />}
          >
            Delete
          </Button>
        </Stack>
      ) : (
        <TextField
          sx={{ width: '36%', marginLeft: '10px' }}
          id="input-with-icon-textfield"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(e) => setKeyword(e.target.value)}
        />
      )}
    </Toolbar>
  );
}

const ExpandedView = () => {
  console.log(applications);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Application>('applicationDate');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [searchResult, setSearchResult] = useState<Application[] | null>(null);
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setSearchResult(searchApplications(applications, keyword));
  }, [keyword]);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Application
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    setSelected([selectedIndex]);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - applications.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(applications, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          selected={selected.length}
          setSelected={setSelected}
          setKeyword={setKeyword}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {(searchResult ?? visibleRows).map((row, index) => {
                const isItemSelected = isSelected(index);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <MUIStyledTableRow
                    hover
                    onClick={(event) => handleClick(event, index)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="center" id={labelId}>
                      {row.isFavourite === true ? (
                        <FavoriteIcon
                          style={{ color: '#ff40da' }}
                          fontSize="small"
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon fontSize="small" />
                      )}
                    </TableCell>
                    <TableCell align="center">{row.employerName}</TableCell>
                    <TableCell align="center">{row.positionName}</TableCell>
                    <TableCell align="center">{row.location}</TableCell>
                    <TableCell align="center">{row.applicationDate}</TableCell>
                    <TableCell align="center">{row.platform}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.workMode}</TableCell>
                  </MUIStyledTableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[
            5,
            10,
            25,
            { label: 'All', value: applications.length },
          ]}
          component="div"
          count={applications.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ExpandedView;
