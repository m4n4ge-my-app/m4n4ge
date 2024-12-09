import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import React from 'react';

import {
  Document,
  removeDocument,
  updateDocumentWithPresignedUrl,
} from '../../../state/document/documentSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../state/store';

interface DocumentsTableProps {
  data: Document[];
  columns: any;
}

function DocumentsTable({ data, columns }: DocumentsTableProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openRowIndex, setOpenRowIndex] = React.useState<number | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    rowIndex: number
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenRowIndex(rowIndex);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenRowIndex(null);
  };
  const handleDocumentLaunch = async (document: Document) => {
    //note: setFocusedDocument(responsible for rendering the DocumentPreview component) is now abstracted into the function below
    dispatch(updateDocumentWithPresignedUrl(document));
  };
  const handleDocumentDelete = (document: Document) => {
    dispatch(removeDocument(document._id));
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        {columns}
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell align="center">No documents to display</TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <TableCell>{rowIndex + 1}</TableCell>

                <TableCell>{row.name}</TableCell>
                <TableCell>
                  {
                    <>
                      <ListItemButton
                        onClick={(event) => handleClick(event, rowIndex)}
                      >
                        <ListItemText primary={row.applications?.[0]} />
                        {row.applications.length > 1 &&
                        openRowIndex === rowIndex ? (
                          <ExpandLess />
                        ) : row.applications.length > 1 ? (
                          <ExpandMore />
                        ) : null}
                      </ListItemButton>

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={
                          openRowIndex === rowIndex &&
                          row.applications.length > 1
                        }
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {row.applications.map((application, index) => {
                          return (
                            <MenuItem key={index} onClick={handleClose}>
                              {application}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </>
                  }
                </TableCell>
                <TableCell>
                  {row.tags.length > 0 &&
                    row.tags[0]
                      .split(',')
                      .map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          sx={{ marginRight: '5px' }}
                        />
                      ))}
                </TableCell>
                <TableCell align="center" style={{ width: '30%' }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                  >
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<LaunchIcon />}
                      onClick={() => handleDocumentLaunch(row)}
                    ></Button>
                    <Button
                      variant="text"
                      size="small"
                      color="secondary"
                      startIcon={<DeleteOutlineOutlinedIcon />}
                      onClick={() => handleDocumentDelete(row)}
                    ></Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DocumentsTable;
